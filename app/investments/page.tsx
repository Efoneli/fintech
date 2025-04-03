

// "use client";

// import { useState, useEffect } from "react";
// import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

// interface Investment {
//   id: number;
//   category: string;
//   amount: number;
// }

// export default function InvestmentsPage() {
//   const [investments, setInvestments] = useState<Investment[]>([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [transactionType, setTransactionType] = useState<
//     "Deposit" | "Withdraw"
//   >("Deposit");
//   const [amount, setAmount] = useState<number>(0);
//   const [category, setCategory] = useState<string>("Stocks");
//   const [transactionHistory, setTransactionHistory] = useState<
//     { type: string; category: string; amount: number }[]
//   >([]);

//   // Load investments from localStorage on mount
//   useEffect(() => {
//     const savedInvestments = localStorage.getItem("investments");
//     const savedHistory = localStorage.getItem("transactionHistory");

//     if (savedInvestments) setInvestments(JSON.parse(savedInvestments));
//     if (savedHistory) setTransactionHistory(JSON.parse(savedHistory));
//   }, []);

//   // Save investments to localStorage whenever they change
//   useEffect(() => {
//     localStorage.setItem("investments", JSON.stringify(investments));
//   }, [investments]);

//   // Save transaction history to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem(
//       "transactionHistory",
//       JSON.stringify(transactionHistory)
//     );
//   }, [transactionHistory]);

//   const totalInvestment = investments.reduce((sum, inv) => sum + inv.amount, 0);

//   // Open Transaction Modal
//   const openModal = (type: "Deposit" | "Withdraw") => {
//     setTransactionType(type);
//     setIsModalOpen(true);
//   };

//   // Handle Deposit/Withdraw
//   const handleTransaction = () => {
//     if (amount <= 0) return;

//     setInvestments((prevInvestments) => {
//       const updatedInvestments = [...prevInvestments];
//       const index = updatedInvestments.findIndex(
//         (inv) => inv.category === category
//       );

//       if (index !== -1) {
//         if (transactionType === "Deposit") {
//           updatedInvestments[index].amount += amount;
//         } else if (transactionType === "Withdraw") {
//           updatedInvestments[index].amount = Math.max(
//             updatedInvestments[index].amount - amount,
//             0
//           );
//         }
//       } else if (transactionType === "Deposit") {
//         updatedInvestments.push({
//           id: prevInvestments.length + 1,
//           category,
//           amount,
//         });
//       }

//       return updatedInvestments;
//     });

//     // Add to transaction history
//     setTransactionHistory((prevHistory) => [
//       { type: transactionType, category, amount },
//       ...prevHistory,
//     ]);

//     setIsModalOpen(false);
//     setAmount(0);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Investments Overview</h1>

//       {/* Portfolio Summary */}
//       <div className="bg-white p-6 rounded-xl shadow-md mb-6">
//         <h2 className="text-lg font-semibold mb-2">Investment Portfolio</h2>
//         <p className="text-3xl font-bold">
//           ${totalInvestment.toLocaleString()}
//         </p>

//         <ResponsiveContainer width="100%" height={120}>
//           <LineChart
//             data={investments.map((inv, i) => ({
//               month: i + 1,
//               amount: inv.amount,
//             }))}
//           >
//             <Line
//               type="monotone"
//               dataKey="amount"
//               stroke="#0088FE"
//               strokeWidth={2}
//             />
//             <Tooltip />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Quick Actions */}
//       <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">
//         <button
//           onClick={() => openModal("Deposit")}
//           className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
//         >
//           Deposit Funds
//         </button>
//         <button
//           onClick={() => openModal("Withdraw")}
//           className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//         >
//           Withdraw Funds
//         </button>
//       </div>

//       {/* Transaction History */}
//       <div className="bg-white p-6 rounded-xl shadow-md mt-6">
//         <h2 className="text-lg font-semibold mb-2">Transaction History</h2>
//         <ul>
//           {transactionHistory.length > 0 ? (
//             transactionHistory.map((transaction, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between p-2 border-b last:border-0"
//               >
//                 <span>
//                   {transaction.type} - {transaction.category}
//                 </span>
//                 <span
//                   className={
//                     transaction.type === "Deposit"
//                       ? "text-green-500"
//                       : "text-red-500"
//                   }
//                 >
//                   {transaction.type === "Deposit" ? "+" : "-"}$
//                   {transaction.amount.toLocaleString()}
//                 </span>
//               </li>
//             ))
//           ) : (
//             <p className="text-gray-500">No transactions yet</p>
//           )}
//         </ul>
//       </div>

//       {/* Transaction Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h2 className="text-xl font-semibold mb-4">
//               {transactionType} Funds
//             </h2>

//             {/* Amount Input */}
//             <label className="block text-sm font-medium mb-1">Amount:</label>
//             <input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(Number(e.target.value))}
//               className="w-full p-2 border rounded-md mb-4"
//               min="1"
//             />

//             <label className="block text-sm font-medium mb-1">
//               Investment Category:
//             </label>
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full p-2 border rounded-md mb-4"
//             >
//               <option value="" disabled>
//                 Select a category
//               </option>
//               <option value="Stocks">Stocks</option>
//               <option value="Real Estate">Real Estate</option>
//               <option value="Crypto">Crypto</option>
//               <option value="Bonds">Bonds</option>
//             </select>

//             {/* Actions */}
//             <div className="flex justify-between">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleTransaction}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//               >
//                 Confirm {transactionType}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }






"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

interface Investment {
  id: number;
  category: string;
  amount: number;
}

interface Transaction {
  id: number;
  date: string;
  type: "Deposit" | "Withdraw";
  amount: number;
  status: "Completed" | "Pending" | "Failed";
  category: string;
}

export default function InvestmentsPage() {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState<"Deposit" | "Withdraw">("Deposit");
  const [amount, setAmount] = useState<number>(0);
  const [category, setCategory] = useState<string>("Stocks");
  const [transactionHistory, setTransactionHistory] = useState<Transaction[]>([]);

 // Load investments and transactions from localStorage on mount
 useEffect(() => {
  const savedInvestments = localStorage.getItem("investments");
  const savedHistory = localStorage.getItem("transactions");

  if (savedInvestments) {
    setInvestments(JSON.parse(savedInvestments));
  }

  if (savedHistory) {
    try {
      const parsedHistory = JSON.parse(savedHistory);
      setTransactionHistory(parsedHistory); // ✅ Fix: Ensure transaction history persists
    } catch (error) {
      console.error("Error loading transactions:", error);
    }
  }
}, []); // ✅ Runs only once when the component mounts



  // Save investments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("investments", JSON.stringify(investments));
  }, [investments]);

  // Save transaction history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactionHistory));
  }, [transactionHistory]);

  const totalInvestment = investments.reduce((sum, inv) => sum + inv.amount, 0);

  // Open Transaction Modal
  const openModal = (type: "Deposit" | "Withdraw") => {
    setTransactionType(type);
    setIsModalOpen(true);
  };

  //handle transation
  const handleTransaction = () => {
    if (amount <= 0) return;
  
    setInvestments((prevInvestments) => {
      const updatedInvestments = [...prevInvestments];
      const index = updatedInvestments.findIndex((inv) => inv.category === category);
  
      if (index !== -1) {
        if (transactionType === "Deposit") {
          updatedInvestments[index].amount += amount;
        } else if (transactionType === "Withdraw") {
          updatedInvestments[index].amount = Math.max(updatedInvestments[index].amount - amount, 0);
        }
      } else if (transactionType === "Deposit") {
        updatedInvestments.push({ id: prevInvestments.length + 1, category, amount });
      }
  
      // ✅ Save investments to localStorage
      localStorage.setItem("investments", JSON.stringify(updatedInvestments));
  
      return updatedInvestments;
    });
  
    const newTransaction: Transaction = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      type: transactionType,
      category,
      amount: transactionType === "Deposit" ? amount : -amount,
      status: "Completed",
    };
  
    setTransactionHistory((prevHistory) => {
      const updatedHistory = [newTransaction, ...prevHistory];
  
      // ✅ Save updated transaction history
      localStorage.setItem("transactions", JSON.stringify(updatedHistory));
  
      return updatedHistory;
    });
  
    setIsModalOpen(false);
    setAmount(0);
  };
  
  

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Investments Overview</h1>

      {/* Portfolio Summary */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-2">Investment Portfolio</h2>
        <p className="text-3xl font-bold">${totalInvestment.toLocaleString()}</p>

        <ResponsiveContainer width="100%" height={120}>
          <LineChart data={investments.map((inv, i) => ({ month: i + 1, amount: inv.amount }))}>
            <Line type="monotone" dataKey="amount" stroke="#0088FE" strokeWidth={2} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4">
        <button onClick={() => openModal("Deposit")} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Deposit Funds
        </button>
        <button onClick={() => openModal("Withdraw")} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Withdraw Funds
        </button>
      </div>

      {/* Transaction History */}
      <div className="bg-white p-6 rounded-xl shadow-md mt-6">
        <h2 className="text-lg font-semibold mb-2">Transaction History</h2>
        <ul>
          {transactionHistory.length > 0 ? (
            transactionHistory.map((transaction) => (
              <li key={transaction.id} className="flex justify-between p-2 border-b last:border-0">
                <span>
                  {transaction.date} - {transaction.type} - {transaction.category}
                </span>
                <span className={transaction.type === "Deposit" ? "text-green-500" : "text-red-500"}>
                  {transaction.type === "Deposit" ? "+" : "-"}${transaction.amount.toLocaleString()}
                </span>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No transactions yet</p>
          )}
        </ul>
      </div>

      {/* Transaction Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">{transactionType} Funds</h2>

            {/* Amount Input */}
            <label className="block text-sm font-medium mb-1">Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full p-2 border rounded-md mb-4"
              min="1"
            />

            <label className="block text-sm font-medium mb-1">Investment Category:</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded-md mb-4">
              <option value="" disabled>
                Select a category
              </option>
              <option value="Stocks">Stocks</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Crypto">Crypto</option>
              <option value="Bonds">Bonds</option>
            </select>

            {/* Actions */}
            <div className="flex justify-between">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
                Cancel
              </button>
              <button onClick={handleTransaction} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Confirm {transactionType}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
