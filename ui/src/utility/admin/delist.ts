import { Transaction } from "@mysten/sui/transactions";

export const delist = (
  packageId: string,
  listHeroId: string,
  adminCapId: string,
) => {
  const tx = new Transaction();

  // Move Call ile bir kahramanın listeden çıkarılması (Yalnızca Yönetici)
  tx.moveCall({
    // DÜZELTME: target kısmı backtick (`) içine alındı
    target: `${packageId}::marketplace::delist`, 
    arguments: [
      tx.object(adminCapId), // Yönetici yetki objesi (AdminCap)
      tx.object(listHeroId), // Listeden çıkarılacak kahramanın listelenmiş objesi
    ],
  });

  return tx;
};