import { Transaction } from "@mysten/sui/transactions";

export const listHero = (
  packageId: string,
  heroId: string,
  priceInSui: string,
) => {
  const tx = new Transaction();

  // SUI'yi MIST'e çevirme işlemi (Doğru)
  // 1 SUI = 1,000,000,000 MIST
  const priceInMist = BigInt(Math.floor(parseFloat(priceInSui) * 1_000_000_000));
  
  // Move Call ile kahramanı satışa listeleme
  tx.moveCall({
    // DÜZELTME: target kısmı backtick (`) içine alındı
    target: `${packageId}::marketplace::list_hero`, 
    arguments: [
      tx.object(heroId),      // heroId bir obje olduğu için tx.object kullanılır
      tx.pure.u64(priceInMist), // priceInMist bir u64 olduğu için tx.pure.u64 kullanılır
    ],
  });

  return tx;
};