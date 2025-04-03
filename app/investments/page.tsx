"use client";

import { useState } from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

interface InvestmentData {
  month: string;
  amount: number;
}

const dummyInvestmentData: InvestmentData[] = [
  { month: "Jan", amount: 12000 },
  { month: "Feb", amount: 14000 },
  { month: "Mar", amount: 16000 },
  { month: "Apr", amount: 18000 },
  { month: "May", amount: 18750 },
];

const recentInvestments = [
  { id: 1, name: "Growth Fund", amount: "+ 4,000.00" },
  { id: 2, name: "Real Estate Fund", amount: "+ 5,000.00" },
  { id: 3, name: "Technology Fund", amount: "+ 3,500.00" },
  { id: 4, name: "Healthcare Fund", amount: "+ 6,250.00" },
];

export default function InvestmentsPage() {
  const [investmentData, setInvestmentData] = useState<InvestmentData[]>(dummyInvestmentData);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex">
     

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Investments Overview</h1>

        {/* Investment Portfolio Card */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-2">Investment Portfolio</h2>
          <p className="text-3xl font-bold">$18,750</p>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={investmentData}>
              <Line type="monotone" dataKey="amount" stroke="#0088FE" strokeWidth={2} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Investments and Quick Actions */}
        <div className="grid grid-cols-3 gap-4">
          {/* Recent Investments */}
          <div className="bg-white col-span-2 p-4 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-2">Recent Investments</h2>
            <ul>
              {recentInvestments.map((investment) => (
                <li
                  key={investment.id}
                  className="flex justify-between p-2 border-b last:border-0"
                >
                  <span>{investment.name}</span>
                  <span className="text-green-500">{investment.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-4 rounded-xl shadow-md flex flex-col gap-4">
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              Deposit
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
