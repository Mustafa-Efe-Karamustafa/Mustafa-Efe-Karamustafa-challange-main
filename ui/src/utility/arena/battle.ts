import { Transaction } from "@mysten/sui/transactions";

export const battle = (packageId: string, heroId: string, arenaId: string) => {
  const tx = new Transaction();
  
  // Move Call ile savaş (battle) başlatma
  tx.moveCall({
    // DÜZELTME: target kısmı backtick (`) içine alındı
    target: `${packageId}::arena::battle`, 
    arguments: [
      tx.object(heroId),  // heroId'yi Sui objesi olarak göndermek için tx.object kullanılır
      tx.object(arenaId), // arenaId'yi Sui objesi olarak göndermek için tx.object kullanılır
    ],
  }); 
  
  return tx;
};