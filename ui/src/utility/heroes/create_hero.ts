import { Transaction } from "@mysten/sui/transactions";

export const createHero = (
  packageId: string,
  name: string,
  imageUrl: string,
  power: string,
) => {
  const tx = new Transaction();

  // Düzeltme: target kısmı backtick (`) içine alındı.
  tx.moveCall({
    target: `${packageId}::arena::create_hero`, 
    arguments: [
      tx.pure.string(name),
      tx.pure.string(imageUrl),
      tx.pure.u64(BigInt(power)),
    ],
  });

  return tx;
};