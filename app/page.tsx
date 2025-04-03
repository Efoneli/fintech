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
import Recent from "./components/Recent";

const savingsData = [
  { month: "Jan", amount: 500 },
  { month: "Feb", amount: 700 },
  { month: "Mar", amount: 800 },
  { month: "Apr", amount: 1200 },
  { month: "May", amount: 1500 },
];

const investmentData = [
  { name: "Stocks", value: 50 },
  { name: "Bonds", value: 30 },
  { name: "Crypto", value: 20 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function HomePage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Savings Overview Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Savings Overview</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={savingsData}>
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#0088FE"
                strokeWidth={2}
              />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Investment Summary Chart */}
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-2">Investment Summary</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={investmentData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
              >
                {investmentData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <Recent />
    </div>
  );
}
