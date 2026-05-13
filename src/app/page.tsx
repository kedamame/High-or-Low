'use client';

import { useState, useCallback, useEffect } from 'react';
import {
  useAccount,
  useConnect,
  useSendTransaction,
  useSwitchChain,
  useWaitForTransactionReceipt,
} from 'wagmi';
import { CONTRACT_ADDRESS } from '@/lib/contract';
import { base } from 'wagmi/chains';
import { useFarcasterMiniApp } from '@/lib/farcaster';
import { randomCard, evaluateGuess, isTie, isRedSuit, type Card, type Guess } from '@/lib/game';
import { encodeWithAttribution } from '@/lib/attribution';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://high-or-low-sigma.vercel.app';
const CREAM = '#ede9df';
const INK = '#141410';
const BLUE = '#3558c8';
const RED = '#c82828';
const MUTED = '#c8bfaf';

type Phase = 'idle' | 'playing' | 'revealing' | 'gameover';

const FAN_CARDS = [
  { rank: 'Q', suit: '♥', color: RED, rotate: -14, left: '8%' },
  { rank: 'A', suit: '♠', color: INK, rotate: 0, left: '50%' },
  { rank: '7', suit: '♦', color: RED, rotate: 14, left: '92%' },
] as const;

function CardFan() {
  return (
    <div style={{ position: 'relative', width: 220, height: 176, flexShrink: 0 }}>
      {FAN_CARDS.map((c, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: c.left,
            top: i === 1 ? 0 : 20,
            transform: `translateX(-50%) rotate(${c.rotate}deg)`,
            background: '#fff',
            border: `2px solid ${MUTED}`,
            borderRadius: 10,
            width: 96,
            height: 136,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            padding: '10px 12px',
            zIndex: i === 1 ? 3 : 1,
            boxSizing: 'border-box',
          }}
        >
          <span style={{ fontWeight: 900, fontSize: 18, color: c.color, lineHeight: 1 }}>
            {c.rank}
          </span>
          <span style={{ fontSize: 40, color: c.color, textAlign: 'center', lineHeight: 1 }}>
            {c.suit}
          </span>
          <span
            style={{
              fontWeight: 900,
              fontSize: 18,
              color: c.color,
              alignSelf: 'flex-end',
              transform: 'rotate(180deg)',
              lineHeight: 1,
            }}
          >
            {c.rank}
          </span>
        </div>
      ))}
    </div>
  );
}

interface GameState {
  phase: Phase;
  currentCard: Card | null;
  nextCard: Card | null;
  currentStreak: number;
  bestStreak: number;
  consecutiveLosses: number;
  lastResult: 'win' | 'loss' | null;
  lastGuess: Guess | null;
}

function CardFace({
  card,
  highlighted,
  small,
}: {
  card: Card;
  highlighted?: 'win' | 'loss';
  small?: boolean;
}) {
  const isRed = isRedSuit(card.suit);
  const textColor = isRed ? RED : INK;
  const borderColor =
    highlighted === 'win' ? BLUE : highlighted === 'loss' ? RED : '#d4cfc5';
  const w = small ? 80 : 144;
  const h = small ? 116 : 208;
  const rankSize = small ? 14 : 22;
  const suitSize = small ? 36 : 64;

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 12,
        border: `2px solid ${borderColor}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        padding: small ? 8 : 14,
        width: w,
        height: h,
        userSelect: 'none',
        flexShrink: 0,
      }}
    >
      <span style={{ fontWeight: 900, fontSize: rankSize, color: textColor, lineHeight: 1 }}>
        {card.rank}
      </span>
      <span
        style={{
          fontSize: suitSize,
          color: textColor,
          textAlign: 'center',
          lineHeight: 1,
        }}
      >
        {card.suit}
      </span>
      <span
        style={{
          fontWeight: 900,
          fontSize: rankSize,
          color: textColor,
          lineHeight: 1,
          transform: 'rotate(180deg)',
          alignSelf: 'flex-end',
        }}
      >
        {card.rank}
      </span>
    </div>
  );
}


function Btn({
  onClick,
  disabled,
  variant = 'filled',
  children,
}: {
  onClick: () => void;
  disabled?: boolean;
  variant?: 'filled' | 'outline' | 'ghost' | 'blue';
  children: React.ReactNode;
}) {
  const styles: React.CSSProperties = {
    width: '100%',
    padding: '16px 0',
    fontWeight: 900,
    fontSize: 12,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    border: 'none',
    transition: 'opacity 0.15s',
    fontFamily: 'inherit',
  };

  if (variant === 'filled') {
    styles.background = INK;
    styles.color = CREAM;
  } else if (variant === 'outline') {
    styles.background = 'transparent';
    styles.color = INK;
    styles.border = `2px solid ${INK}`;
  } else if (variant === 'ghost') {
    styles.background = 'transparent';
    styles.color = INK;
    styles.borderBottom = `1px solid ${MUTED}`;
    styles.opacity = 0.5;
  } else if (variant === 'blue') {
    styles.background = BLUE;
    styles.color = '#fff';
  }

  return (
    <button onClick={onClick} disabled={disabled} style={styles}>
      {children}
    </button>
  );
}

export default function Home() {
  useFarcasterMiniApp();
  const { isConnected, chain } = useAccount();
  const { connect, connectors } = useConnect();
  const { switchChainAsync } = useSwitchChain();
  const {
    sendTransaction,
    data: txHash,
    isPending: isSending,
    reset: resetTx,
    error: sendTxError,
  } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  const [game, setGame] = useState<GameState>({
    phase: 'idle',
    currentCard: null,
    nextCard: null,
    currentStreak: 0,
    bestStreak: 0,
    consecutiveLosses: 0,
    lastResult: null,
    lastGuess: null,
  });
  const [recordError, setRecordError] = useState<string | null>(null);
  // Captured at game-over time so Play Again cannot reset it before recording
  const [finalStreak, setFinalStreak] = useState(0);
  const [showWalletPicker, setShowWalletPicker] = useState(false);

  const startGame = useCallback(() => {
    resetTx();
    setRecordError(null);
    setGame({
      phase: 'playing',
      currentCard: randomCard(),
      nextCard: null,
      currentStreak: 0,
      bestStreak: 0,
      consecutiveLosses: 0,
      lastResult: null,
      lastGuess: null,
    });
  }, [resetTx]);

  const makeGuess = useCallback((guess: Guess) => {
    setGame(prev => {
      if (prev.phase !== 'playing' || !prev.currentCard) return prev;
      const next = randomCard();
      const result = evaluateGuess(prev.currentCard, next, guess);
      const newStreak = result === 'win' ? prev.currentStreak + 1 : 0;
      const newBest = Math.max(prev.bestStreak, newStreak);
      const newLosses = result === 'win' ? 0 : prev.consecutiveLosses + 1;
      return {
        ...prev,
        phase: 'revealing',
        nextCard: next,
        currentStreak: newStreak,
        bestStreak: newBest,
        consecutiveLosses: newLosses,
        lastResult: result,
        lastGuess: guess,
      };
    });
  }, []);

  const advance = useCallback(() => {
    setGame(prev => {
      if (prev.phase !== 'revealing') return prev;
      if (prev.consecutiveLosses >= 1) {
        setFinalStreak(prev.bestStreak);
        return { ...prev, phase: 'gameover' };
      }
      return {
        ...prev,
        phase: 'playing',
        currentCard: prev.nextCard,
        nextCard: null,
        lastResult: null,
        lastGuess: null,
      };
    });
  }, []);

  useEffect(() => {
    if (game.phase !== 'revealing') return;
    const t = setTimeout(advance, 1800);
    return () => clearTimeout(t);
  }, [game.phase, advance]);

  const recordScore = useCallback(async () => {
    if (!isConnected) return;
    const ZERO = '0x0000000000000000000000000000000000000000';
    if (CONTRACT_ADDRESS === ZERO) {
      setRecordError('Contract not deployed yet. Update NEXT_PUBLIC_CONTRACT_ADDRESS.');
      return;
    }
    setRecordError(null);
    try {
      if (chain?.id !== base.id) await switchChainAsync({ chainId: base.id });
      const tx = encodeWithAttribution('recordScore', [BigInt(finalStreak)]);
      sendTransaction(tx);
    } catch {
      setRecordError('Transaction cancelled.');
    }
  }, [isConnected, chain, finalStreak, switchChainAsync, sendTransaction]);

  const shareOnFarcaster = useCallback(async () => {
    const text =
      finalStreak > 0
        ? `I scored a streak of ${finalStreak} playing High or Low on Base! Can you beat me?`
        : 'Just played High or Low on Base. Give it a try!';
    const shareUrl = `${APP_URL}/share?streak=${finalStreak}`;
    try {
      const { sdk } = await import('@farcaster/miniapp-sdk');
      await sdk.actions.composeCast({ text, embeds: [shareUrl] });
    } catch {
      const url = `https://warpcast.com/~/compose?text=${encodeURIComponent(text)}&embeds[]=${encodeURIComponent(shareUrl)}`;
      window.open(url, '_blank');
    }
  }, [finalStreak]);

  const { phase, currentCard, nextCard, currentStreak, lastResult } = game;

  // EIP-6963で個別検出されたウォレットがある場合、汎用injectedは非表示
  const hasEip6963 = connectors.some(c => c.type === 'injected' && c.id !== 'injected');
  const displayConnectors = connectors.filter(
    c => !(c.id === 'injected' && hasEip6963),
  );

  // 接続成功時にピッカーを閉じる（connect失敗時はピッカーを維持して再試行可能にする）
  useEffect(() => {
    if (isConnected) setShowWalletPicker(false);
  }, [isConnected]);

  const wasTie =
    phase === 'revealing' && lastResult === 'loss' && currentCard && nextCard && isTie(currentCard, nextCard);
  const resultText =
    lastResult === 'win'
      ? 'WIN +1'
      : wasTie
        ? 'TIE - GAME OVER'
        : 'MISS - GAME OVER';
  const resultColor = lastResult === 'win' ? BLUE : RED;

  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        background: CREAM,
        color: INK,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          borderBottom: `1px solid ${MUTED}`,
        }}
      >
        <span style={{ fontWeight: 900, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          High or Low
        </span>
        {(phase === 'playing' || phase === 'revealing') && (
          <span style={{ fontWeight: 900, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Streak {currentStreak}
          </span>
        )}
      </div>

      {/* Body */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px',
          gap: 40,
        }}
      >
        {/* IDLE */}
        {phase === 'idle' && (
          <>
            <CardFan />
            <div style={{ textAlign: 'center' }}>
              <h1
                style={{
                  fontWeight: 900,
                  fontSize: 'clamp(52px, 15vw, 88px)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.03em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                High
                <br />
                or
                <br />
                Low
              </h1>
              <p
                style={{
                  marginTop: 24,
                  fontSize: 13,
                  opacity: 0.5,
                  lineHeight: 1.8,
                  maxWidth: 260,
                }}
              >
                Guess if the next card is higher or lower.
                <br />
                One miss ends the game.
              </p>
            </div>
            <div style={{ width: '100%', maxWidth: 320 }}>
              <Btn onClick={startGame} variant="filled">
                Start Game
              </Btn>
            </div>
          </>
        )}

        {/* PLAYING */}
        {phase === 'playing' && currentCard && (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  opacity: 0.4,
                  margin: 0,
                }}
              >
                Current Card
              </p>
              <CardFace card={currentCard} />
            </div>

            <div style={{ width: '100%', maxWidth: 320, display: 'flex', gap: 12 }}>
              <Btn onClick={() => makeGuess('higher')} variant="outline">
                ▲ Higher
              </Btn>
              <Btn onClick={() => makeGuess('lower')} variant="filled">
                ▼ Lower
              </Btn>
            </div>

            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  opacity: 0.35,
                  margin: 0,
                }}
              >
                Streak
              </p>
              <p
                style={{
                  fontWeight: 900,
                  fontSize: 80,
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                {currentStreak}
              </p>
            </div>
          </>
        )}

        {/* REVEALING */}
        {phase === 'revealing' && currentCard && nextCard && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <CardFace card={currentCard} small />
              <span style={{ fontSize: 20, opacity: 0.25 }}>→</span>
              <CardFace card={nextCard} highlighted={lastResult ?? undefined} />
            </div>

            <p
              style={{
                fontWeight: 900,
                fontSize: 28,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: resultColor,
                margin: 0,
              }}
            >
              {resultText}
            </p>
          </>
        )}

        {/* GAME OVER */}
        {phase === 'gameover' && (
          <div
            style={{
              width: '100%',
              maxWidth: 320,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {/* Score panel */}
            <div
              style={{
                background: INK,
                color: CREAM,
                padding: '40px 32px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  opacity: 0.45,
                  margin: '0 0 16px',
                }}
              >
                Game Over
              </p>
              <p
                style={{
                  fontWeight: 900,
                  fontSize: 112,
                  lineHeight: 1,
                  margin: '0 0 8px',
                  color: CREAM,
                }}
              >
                {finalStreak}
              </p>
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  opacity: 0.45,
                  margin: 0,
                }}
              >
                Best streak
              </p>
            </div>

            {/* Record */}
            {!isConnected ? (
              showWalletPicker ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {displayConnectors.length === 0 ? (
                    <p style={{ fontSize: 12, textAlign: 'center', opacity: 0.5, margin: 0 }}>
                      No wallets detected
                    </p>
                  ) : displayConnectors.map(connector => (
                    <Btn
                      key={connector.id}
                      onClick={() => connect({ connector })}
                      variant="outline"
                    >
                      {connector.name}
                    </Btn>
                  ))}
                  <Btn onClick={() => setShowWalletPicker(false)} variant="ghost">
                    Cancel
                  </Btn>
                </div>
              ) : (
                <Btn onClick={() => setShowWalletPicker(true)} variant="blue">
                  Connect to Record
                </Btn>
              )
            ) : isConfirmed ? (
              <div
                style={{
                  background: BLUE,
                  color: '#fff',
                  padding: '16px 0',
                  textAlign: 'center',
                  fontWeight: 900,
                  fontSize: 12,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                Recorded on Base
              </div>
            ) : (
              <Btn
                onClick={recordScore}
                disabled={isSending || isConfirming}
                variant="blue"
              >
                {isSending
                  ? 'Confirm in Wallet...'
                  : isConfirming
                    ? 'Recording...'
                    : 'Record on Base'}
              </Btn>
            )}
            {(recordError ?? sendTxError?.message) && (
              <p style={{ fontSize: 11, textAlign: 'center', opacity: 0.5, margin: 0 }}>
                {recordError ?? sendTxError?.message}
              </p>
            )}

            <Btn onClick={shareOnFarcaster} variant="outline">
              Share on Farcaster
            </Btn>

            <Btn onClick={startGame} variant="ghost">
              Play Again
            </Btn>
          </div>
        )}
      </div>
    </main>
  );
}
