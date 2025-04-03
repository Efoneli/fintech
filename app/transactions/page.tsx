"use client";

import { useState } from "react";

interface Transaction {
  id: number;
  date: string;
  type: string;
  amount: string;
  status: "Completed" | "Pending" | "Failed";
}

const dummyTransactions: Transaction[] = [
  { id: 1, date: "2024-08-10", type: "Deposit", amount: "+ $2,000", status: "Completed" },
  { id: 2, date: "2024-08-09", type: "Withdrawal", amount: "- $500", status: "Pending" },
  { id: 3, date: "2024-08-08", type: "Investment", amount: "- $1,500", status: "Completed" },
  { id: 4, date: "2024-08-07", type: "Deposit", amount: "+ $3,000", status: "Completed" },
  { id: 5, date: "2024-08-06", type: "Withdrawal", amount: "- $1,000", status: "Failed" },
];

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>(dummyTransactions);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      {/* Transactions Table */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Date</th>
                <th className="py-2 px-4 border-b text-left">Type</th>
                <th className="py-2 px-4 border-b text-left">Amount</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="py-2 px-4">{transaction.date}</td>
                  <td className="py-2 px-4">{transaction.type}</td>
                  <td className={`py-2 px-4 font-bold ${transaction.amount.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                    {transaction.amount}
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-lg text-white ${
                        transaction.status === "Completed"
                          ? "bg-green-500"
                          : transaction.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
