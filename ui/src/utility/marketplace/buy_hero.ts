import { Transaction } from "@mysten/sui/transactions";

export const buyHero = (packageId: string, listHeroId: string, priceInSui: string) => {
  const tx = new Transaction();

  // 1. SUI'yi MIST'e çevirme
  const priceInMist = BigInt(Math.floor(parseFloat(priceInSui) * 1_000_000_000));

  // 2. Ödeme için coin'i bölme (Split Coin)
  // Not: splitCoins içine gönderilen miktarı da tx.pure.u64 ile sarmalamak en garantisidir.
  const [paymentCoin] = tx.splitCoins(tx.gas, [tx.pure.u64(priceInMist)]);

  // 3. Move Call ile satın alma işlemi
  tx.moveCall({
    // DÜZELTME: target kısmı backtick (`) içine alındı
    target: `${packageId}::marketplace::buy_hero`, 
    arguments: [
      tx.object(listHeroId), // listHeroId bir obje olduğu için tx.object kullanılır
      paymentCoin,           // paymentCoin zaten bir obje olduğu için direkt verilir
    ],
  });

  return tx;
};