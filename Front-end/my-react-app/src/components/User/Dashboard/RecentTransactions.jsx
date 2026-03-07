import { useEffect, useState } from "react";
import axios from "axios";

const RecentTransactions = ({ theme }) => {
  const isDark = theme === "dark";

  const [transactions, setTransactions] = useState([]);

  const userId = localStorage.getItem("userId");

  const fetchTransactions = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/transactions/recent/${userId}`
      );

      setTransactions(res.data);
    } catch (err) {
      console.error("Error fetching transactions", err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div
      className={`p-6 rounded-xl transition-colors duration-300
        ${
          isDark
            ? "bg-[#111827] text-white"
            : "bg-white text-gray-900 shadow"
        }
      `}
    >
      <h2
        className={`text-xl font-semibold mb-4 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Recent Transactions
      </h2>

      <ul className="space-y-4">

        {transactions.map((tx, index) => (

          <li key={index} className="flex justify-between">

            <span className={isDark ? "text-gray-300" : "text-gray-700"}>
              {tx.title}
            </span>

            <span
              className={
                tx.type === "expense"
                  ? "text-red-500"
                  : "text-green-500"
              }
            >
              {tx.type === "expense" ? "- $" : "+ $"}
              {tx.amount}
            </span>

          </li>

        ))}

      </ul>
    </div>
  );
};

export default RecentTransactions;