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

import { useEffect, useState } from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
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

export default function SavingsPage() {
  const [savingsData, setSavingsData] = useState<SavingsData[]>(dummySavingsData);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Savings Overview</h1>

      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-2">Savings Growth</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={savingsData}>
            <Line type="monotone" dataKey="amount" stroke="#0088FE" strokeWidth={2} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <Recent />
    </div>
  );
}
