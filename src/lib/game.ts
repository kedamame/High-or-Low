export type Suit = '♠' | '♥' | '♦' | '♣';
export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
export type Guess = 'higher' | 'lower';
export type Result = 'win' | 'loss';

export interface Card {
  suit: Suit;
  rank: Rank;
  value: number;
}

const SUITS: Suit[] = ['♠', '♥', '♦', '♣'];
const RANKS: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const VALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export function randomCard(): Card {
  const rankIdx = Math.floor(Math.random() * RANKS.length);
  const suitIdx = Math.floor(Math.random() * SUITS.length);
  return { suit: SUITS[suitIdx], rank: RANKS[rankIdx], value: VALUES[rankIdx] };
}

export function isRedSuit(suit: Suit): boolean {
  return suit === '♥' || suit === '♦';
}

export function isTie(current: Card, next: Card): boolean {
  return next.value === current.value;
}

export function evaluateGuess(current: Card, next: Card, guess: Guess): Result {
  // Equal ranks are neither higher nor lower → loss
  if (isTie(current, next)) return 'loss';
  if (guess === 'higher') return next.value > current.value ? 'win' : 'loss';
  return next.value < current.value ? 'win' : 'loss';
}
