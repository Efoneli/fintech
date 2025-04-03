import { FaPlus, FaMoneyBillWave, FaExchangeAlt } from "react-icons/fa";

export default function Recent() {
  const recentTransactions = [
    { id: 1, type: "Deposit", amount: "$1,000", date: "2024-08-10" },
    { id: 2, type: "Withdrawal", amount: "$200", date: "2024-08-09" },
    { id: 3, type: "Investment", amount: "$500", date: "2024-08-08" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Recent Transactions */}
      <div className="bg-white col-span-3 p-4 rounded-xl shadow-md mt-6">
        <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
        <ul>
          {recentTransactions.map((txn) => (
            <li
              key={txn.id}
              className="flex justify-between p-2 border-b last:border-0"
            >
              <span>{txn.type}</span>
              <span>{txn.amount}</span>
              <span className="text-gray-500">{txn.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 flex flex-col gap-4 col-span-1 border border-gray-300 p-4 rounded-2xl">
        <h2 className="text-lg font-semibold mb-2">Quick access</h2>
        <button className="flex items-center justify-center gap-2 px-2 py-6 bg-gray-200 rounded-lg shadow hover:bg-gray-300">
          <FaPlus /> Deposit
        </button>
        <button className="flex items-center justify-center gap-2 px-2 py-6 bg-gray-200 rounded-lg shadow hover:bg-gray-300">
          <FaMoneyBillWave /> Withdraw
        </button>
        <button className="flex items-center justify-center gap-2 px-2 py-6 bg-gray-200 rounded-lg shadow hover:bg-gray-300">
          <FaExchangeAlt /> Transfer
        </button>
      </div>
    </div>
  );
}
