import { Transaction } from "@mysten/sui/transactions";

export const transferAdminCap = (adminCapId: string, to: string) => {
  const tx = new Transaction();
  
  // Yönetici yetkisi objesini (Admin Cap) belirtilen adrese transfer eder.
  tx.transferObjects([tx.object(adminCapId)], to); 
  
  return tx;
};