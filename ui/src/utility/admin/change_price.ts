import { Transaction } from "@mysten/sui/transactions";

export const changePrice = (packageId: string, listHeroId: string, newPriceInSui: string, adminCapId: string) => {
  const tx = new Transaction();
  
  // SUI'yi MIST'e çevirme işlemi (Doğru)
  // 1 SUI = 1,000,000,000 MIST
  const newPriceInMist = BigInt(Math.floor(parseFloat(newPriceInSui) * 1_000_000_000));
  
  // Move Call ile kahraman fiyatını değiştirme (Yalnızca Yönetici)
  tx.moveCall({
    // DÜZELTME: target kısmı backtick (`) içine alındı
    target: `${packageId}::marketplace::change_the_price`, 
    arguments: [
      tx.object(adminCapId),      // Yönetici yetki objesi (AdminCap)
      tx.object(listHeroId),      // Fiyatı değişecek listelenmiş obje
      tx.pure.u64(newPriceInMist), // Yeni fiyat (u64 olarak MIST cinsinden)
    ],
  });
  
  return tx;
};