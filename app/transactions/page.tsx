



// "use client";

// import { useEffect, useState } from "react";
// import {
//   LineChart,
//   Line,
//   Tooltip,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   CartesianGrid,
// } from "recharts";

// interface Transaction {
//   id: number;
//   date: string;
//   type: string;
//   amount: number;
//   status: "Completed" | "Pending" | "Failed";
// }

// export default function TransactionsPage() {
//   const [transactions, setTransactions] = useState<Transaction[]>([]); 
//   const [filter, setFilter] = useState<string>("All");

//   // Load transactions from localStorage
//   useEffect(() => {
//     const savedTransactions = localStorage.getItem("transactions");
//     if (savedTransactions) {
//       setTransactions(JSON.parse(savedTransactions));
//     }
//   }, []);

//   const filteredTransactions = transactions.filter(
//     (transaction) => filter === "All" || transaction.type === filter
//   );

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Transactions</h1>

//       {/* Line Chart for Transaction Trends */}
//       <div className="bg-white p-6 rounded-xl shadow-md mb-6">
//         <h2 className="text-lg font-semibold mb-2">Transaction Trends</h2>
//         <ResponsiveContainer width="100%" height={200}>
//           <LineChart data={transactions}>
//             <XAxis dataKey="date" />
//             <YAxis />
//             <CartesianGrid strokeDasharray="3 3" />
//             <Tooltip />
//             <Line type="monotone" dataKey="amount" stroke="#0088FE" strokeWidth={2} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Filter Dropdown */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1">Filter by Type:</label>
//         <select
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//           className="p-2 border rounded-md w-full sm:w-48"
//         >
//           <option value="All">All</option>
//           <option value="Deposit">Deposit</option>
//           <option value="Withdrawal">Withdrawal</option>
//           <option value="Investment">Investment</option>
//         </select>
//       </div>

//       {/* Transactions Table */}
//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-200">
//             <thead>
//               <tr className="bg-gray-100 text-left">
//                 <th className="py-2 px-4 border-b">Date</th>
//                 <th className="py-2 px-4 border-b">Type</th>
//                 <th className="py-2 px-4 border-b">Amount</th>
//                 <th className="py-2 px-4 border-b">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredTransactions.map((transaction) => (
//                 <tr key={transaction.id} className="border-b hover:bg-gray-50">
//                   <td className="py-2 px-4">{transaction.date}</td>
//                   <td className="py-2 px-4">{transaction.type}</td>
//                   <td
//                     className={`py-2 px-4 font-bold ${
//                       transaction.amount > 0 ? "text-green-500" : "text-red-500"
//                     }`}
//                   >
//                     {new Intl.NumberFormat("en-US", {
//                       style: "currency",
//                       currency: "USD",
//                     }).format(transaction.amount)}
//                   </td>
//                   <td className="py-2 px-4">
//                     <span
//                       className={`px-2 py-1 rounded-lg text-white text-sm font-medium ${
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

//         {/* Show message if no transactions found */}
//         {filteredTransactions.length === 0 && (
//           <p className="text-gray-500 text-center mt-4">No transactions found.</p>
//         )}
//       </div>
//     </div>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";

interface Transaction {
  id: number;
  date: string;
  type: string;
  amount: number;
  status: "Completed" | "Pending" | "Failed";
}

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Load transactions from localStorage
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      {/* Line Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-2">Transaction Trends</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={transactions}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#0088FE" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
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
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{transaction.date}</td>
                  <td className="py-2 px-4">{transaction.type}</td>
                  <td className={`py-2 px-4 font-bold ${transaction.amount > 0 ? "text-green-500" : "text-red-500"}`}>
                    {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(transaction.amount)}
                  </td>
                  <td className="py-2 px-4">
                    <span className={`px-2 py-1 rounded-lg text-white text-sm font-medium ${
                      transaction.status === "Completed"
                        ? "bg-green-500"
                        : transaction.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Show message if no transactions found */}
        {transactions.length === 0 && <p className="text-gray-500 text-center mt-4">No transactions found.</p>}
      </div>
    </div>
  );
}
