import { Transaction } from "@mysten/sui/transactions";

export const createArena = (packageId: string, heroId: string) => {
  const tx = new Transaction();
  
  // Move Call ile savaş alanı (Arena) oluşturma
  tx.moveCall({
    // DÜZELTME: target kısmı backtick (`) içine alındı
    target: `${packageId}::arena::create_arena`, 
    arguments: [
      tx.object(heroId), // heroId'yi bir Sui objesi olarak göndermek için tx.object kullanılır
    ],
  });
  
  return tx;
};