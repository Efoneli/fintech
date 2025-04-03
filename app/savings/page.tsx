// "use client";

// import { useEffect, useState } from "react";
// import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
// import Recent from "../components/Recent";

// interface SavingsData {
//   month: string;
//   amount: number;
// }

// export default function SavingsPage() {
//   const [savingsData, setSavingsData] = useState<SavingsData[]>([]);

//   useEffect(() => {
//     // Simulating an API call
//     const fetchSavingsData = async () => {
//       const response = await fetch("https://api.example.com/savings"); // Replace with actual API
//       const data = await response.json();
//       setSavingsData(data);
//     };

//     fetchSavingsData();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-4">Savings Overview</h1>

//       <div className="bg-white p-4 rounded-xl shadow-md mb-6">
//         <h2 className="text-lg font-semibold mb-2">Savings Growth</h2>
//         <ResponsiveContainer width="100%" height={200}>
//           <LineChart data={savingsData}>
//             <Line type="monotone" dataKey="amount" stroke="#0088FE" strokeWidth={2} />
//             <Tooltip />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>

//       <Recent />
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import Recent from "../components/Recent";

interface SavingsData {
  month: string;
  amount: number;
}

const dummySavingsData: SavingsData[] = [
  { month: "Jan", amount: 500 },
  { month: "Feb", amount: 700 },
  { month: "Mar", amount: 800 },
  { month: "Apr", amount: 1200 },
  { month: "May", amount: 1500 },
];

// Define colors for the Pie Chart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BE2"];

export default function SavingsPage() {
  const [savingsData, setSavingsData] = useState<SavingsData[]>(dummySavingsData);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Savings Overview</h1>

      {/* Line Chart for Savings Growth */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-2">Savings Growth</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={savingsData}>
            <Line type="monotone" dataKey="amount" stroke="#0088FE" strokeWidth={2} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart for Savings Breakdown by Month */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-2">Savings Breakdown</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={savingsData}
              dataKey="amount"
              nameKey="month"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {savingsData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Savings History Table */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-2">Savings History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Month</th>
                <th className="py-2 px-4 border-b text-left">Amount Saved</th>
              </tr>
            </thead>
            <tbody>
              {savingsData.map((entry, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{entry.month}</td>
                  <td className="py-2 px-4 font-bold text-green-500">${entry.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Transactions Component */}
      <Recent />
    </div>
  );
}
