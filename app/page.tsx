// "use client";

// import {
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   Tooltip,
//   ResponsiveContainer,
//   Cell,
// } from "recharts";
// import Recent from "./components/Recent";

// const savingsData = [
//   { month: "Jan", amount: 500 },
//   { month: "Feb", amount: 700 },
//   { month: "Mar", amount: 800 },
//   { month: "Apr", amount: 1200 },
//   { month: "May", amount: 1500 },
// ];

// const investmentData = [
//   { name: "Stocks", value: 50 },
//   { name: "Bonds", value: 30 },
//   { name: "Crypto", value: 20 },
// ];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

// export default function HomePage() {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Savings Overview Chart */}
//         <div className="bg-white p-4 rounded-xl shadow-md">
//           <h2 className="text-lg font-semibold mb-2">Savings Overview</h2>
//           <ResponsiveContainer width="100%" height={200}>
//             <LineChart data={savingsData}>
//               <Line
//                 type="monotone"
//                 dataKey="amount"
//                 stroke="#0088FE"
//                 strokeWidth={2}
//               />
//               <Tooltip />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Investment Summary Chart */}
//         <div className="bg-white p-4 rounded-xl shadow-md">
//           <h2 className="text-lg font-semibold mb-2">Investment Summary</h2>
//           <ResponsiveContainer width="100%" height={200}>
//             <PieChart>
//               <Pie
//                 data={investmentData}
//                 dataKey="value"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={60}
//               >
//                 {investmentData.map((entry, index) => (
//                   <Cell
//                     key={`cell-${index}`}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       <Recent />
//     </div>
//   );
// }


"use client";

import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useEffect, useState } from "react";

// Define the Transaction type
interface Transaction {
  id: number;
  date: string;
  type: "Deposit" | "Withdraw";
  category: string;
  amount: number;
  status: "Completed" | "Pending" | "Failed";
}

const savingsData = [
  { month: "Jan", amount: 500 },
  { month: "Feb", amount: 700 },
  { month: "Mar", amount: 800 },
  { month: "Apr", amount: 1200 },
  { month: "May", amount: 1500 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BFE"];

export default function HomePage() {
  const [investmentPieData, setInvestmentPieData] = useState([]);
  const [transactionHistory, setTransactionHistory] = useState<Transaction[]>([]);

  useEffect(() => {
    // Load investments from localStorage
    const storedInvestments = localStorage.getItem("investments");
    if (storedInvestments) {
      const parsedInvestments = JSON.parse(storedInvestments);
      const formattedData = parsedInvestments.map((inv: any) => ({
        name: inv.category,
        value: inv.amount,
      }));
      setInvestmentPieData(formattedData);
    }

    // Load transactions from localStorage
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactionHistory(JSON.parse(storedTransactions));
    }
  }, []);

  const addTransaction = () => {
    const newTransaction: Transaction = {
      id: Date.now(),
      date: new Date().toISOString(),
      type: "Deposit",
      category: "Salary",
      amount: 5000,
      status: "Completed", // ✅ Ensuring it matches the expected type
    };

    setTransactionHistory((prevHistory) => [newTransaction, ...prevHistory]);
  };

  const openModal = (type: string) => {
    alert(`${type} modal should open here`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Savings Overview</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={savingsData}>
              <Line type="monotone" dataKey="amount" stroke="#0088FE" strokeWidth={2} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Investment Summary</h2>
          {investmentPieData.length > 0 ? (
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={investmentPieData} dataKey="value" cx="50%" cy="50%" outerRadius={60}>
                  {investmentPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-gray-500 text-center mt-4">No investments yet</p>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4 mt-6">
        <button onClick={() => openModal("Deposit")} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Deposit Funds
        </button>
        <button onClick={() => openModal("Withdraw")} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          Withdraw Funds
        </button>
      </div>

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
    </div>
  );
}
