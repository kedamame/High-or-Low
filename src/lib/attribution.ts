import { concatHex, encodeFunctionData, type Hex } from 'viem';
import { Attribution } from 'ox/erc8021';
import { ABI, CONTRACT_ADDRESS } from './contract';

const BUILDER_SUFFIX = Attribution.toDataSuffix({
  codes: ['bc_zzpgyapp'],
}) as Hex;

export function encodeWithAttribution(
  functionName: string,
  args: readonly unknown[],
): { to: typeof CONTRACT_ADDRESS; data: Hex } {
  const calldata = encodeFunctionData({
    abi: ABI,
    functionName,
    args,
  } as Parameters<typeof encodeFunctionData>[0]);

  return {
    to: CONTRACT_ADDRESS,
    data: concatHex([calldata, BUILDER_SUFFIX]),
  };
}
