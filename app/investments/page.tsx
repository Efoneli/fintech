"use client";

import { useState } from "react";
import { LineChart, Line, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

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
  { id: 1, name: "Growth Fund", amount: "+ $4,000" },
  { id: 2, name: "Real Estate Fund", amount: "+ $5,000" },
  { id: 3, name: "Technology Fund", amount: "+ $3,500" },
  { id: 4, name: "Healthcare Fund", amount: "+ $6,250" },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BE2"];

export default function InvestmentsPage() {
  const [investmentData, setInvestmentData] = useState<InvestmentData[]>(dummyInvestmentData);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Investments Overview</h1>

      {/* Investment Portfolio */}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Line Chart for Investment Growth */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Investment Growth</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={investmentData}>
              <Line type="monotone" dataKey="amount" stroke="#00C49F" strokeWidth={2} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart for Investment Breakdown by Month */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Investment Breakdown</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={investmentData}
                dataKey="amount"
                nameKey="month"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {investmentData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Investments Table */}
      <div className="bg-white p-6 rounded-xl shadow-md mt-6">
        <h2 className="text-lg font-semibold mb-2">Recent Investments</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Investment</th>
                <th className="py-2 px-4 border-b text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentInvestments.map((investment) => (
                <tr key={investment.id} className="border-b">
                  <td className="py-2 px-4">{investment.name}</td>
                  <td className="py-2 px-4 font-bold text-green-500">{investment.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-xl shadow-md mt-6 flex flex-col md:flex-row gap-4">
        <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 flex-1">
          Deposit
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 flex-1">
          Withdraw
        </button>
      </div>
    </div>
  );
}
