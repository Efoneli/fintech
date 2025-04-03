// "use client";

// import { useState } from "react";

// interface Transaction {
//   id: number;
//   date: string;
//   type: string;
//   amount: string;
//   status: "Completed" | "Pending" | "Failed";
// }

// const dummyTransactions: Transaction[] = [
//   { id: 1, date: "2024-08-10", type: "Deposit", amount: "+ $2,000", status: "Completed" },
//   { id: 2, date: "2024-08-09", type: "Withdrawal", amount: "- $500", status: "Pending" },
//   { id: 3, date: "2024-08-08", type: "Investment", amount: "- $1,500", status: "Completed" },
//   { id: 4, date: "2024-08-07", type: "Deposit", amount: "+ $3,000", status: "Completed" },
//   { id: 5, date: "2024-08-06", type: "Withdrawal", amount: "- $1,000", status: "Failed" },
// ];

// export default function TransactionsPage() {
//   const [transactions, setTransactions] = useState<Transaction[]>(dummyTransactions);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Transactions</h1>

//       {/* Transactions Table */}
//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="py-2 px-4 border-b text-left">Date</th>
//                 <th className="py-2 px-4 border-b text-left">Type</th>
//                 <th className="py-2 px-4 border-b text-left">Amount</th>
//                 <th className="py-2 px-4 border-b text-left">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions.map((transaction) => (
//                 <tr key={transaction.id} className="border-b">
//                   <td className="py-2 px-4">{transaction.date}</td>
//                   <td className="py-2 px-4">{transaction.type}</td>
//                   <td className={`py-2 px-4 font-bold ${transaction.amount.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
//                     {transaction.amount}
//                   </td>
//                   <td className="py-2 px-4">
//                     <span
//                       className={`px-2 py-1 rounded-lg text-white ${
//                         transaction.status === "Completed"
//                           ? "bg-green-500"
//                           : transaction.status === "Pending"
//                           ? "bg-yellow-500"
//                           : "bg-red-500"
//                       }`}
//                     >
//                       {transaction.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }



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
  const [filter, setFilter] = useState<string>("All");

  const filteredTransactions = transactions.filter(
    (transaction) => filter === "All" || transaction.type === filter
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      {/* Filter Dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Filter by Type:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-md w-full sm:w-48"
        >
          <option value="All">All</option>
          <option value="Deposit">Deposit</option>
          <option value="Withdrawal">Withdrawal</option>
          <option value="Investment">Investment</option>
        </select>
      </div>

      {/* Transactions Table */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Type</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{transaction.date}</td>
                  <td className="py-2 px-4">{transaction.type}</td>
                  <td
                    className={`py-2 px-4 font-bold ${
                      transaction.amount.startsWith("+") ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {transaction.amount}
                  </td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-2 py-1 rounded-lg text-white text-sm font-medium ${
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

        {/* Show message if no transactions found */}
        {filteredTransactions.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No transactions found.</p>
        )}
      </div>
    </div>
  );
}
