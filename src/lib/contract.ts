// TODO: Deploy contracts/HighLowLeaderboard.sol to Base Mainnet and update this address
export const CONTRACT_ADDRESS = (
  process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x0000000000000000000000000000000000000000'
) as `0x${string}`;

export const ABI = [
  {
    type: 'function',
    name: 'recordScore',
    inputs: [{ name: 'streak', type: 'uint256' }],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'bestStreak',
    inputs: [{ name: '', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    name: 'ScoreRecorded',
    inputs: [
      { name: 'player', type: 'address', indexed: true },
      { name: 'streak', type: 'uint256', indexed: false },
      { name: 'timestamp', type: 'uint256', indexed: false },
    ],
  },
] as const;
