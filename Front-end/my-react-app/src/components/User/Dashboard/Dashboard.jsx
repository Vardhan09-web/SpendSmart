import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "./sidebar";
import Topbar from "./Topbar";
import StatCard from "./StatCard";
import RecentTransactions from "./RecentTransactions";
import SpendingChart from "./SpendingChart";

import { getUserBalance } from "../../../api/balanceApi";

const Dashboard = () => {

  const navigate = useNavigate();

  const [theme, setTheme] = useState("dark");

  const [user, setUser] = useState(null);

  const [balanceData, setBalanceData] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
  });

  /* ---------------- THEME LOAD ---------------- */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  /* ---------------- CHECK LOGIN ---------------- */

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      navigate("/login");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);

  }, [navigate]);

  /* ---------------- FETCH BALANCE ---------------- */

  useEffect(() => {

    const fetchBalance = async () => {
      if (!user) return;

      try {
        const response = await getUserBalance(user.id);
        setBalanceData(response.data);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();

  }, [user]);

  return (
    <div
      className={`flex min-h-screen pt-16 transition-colors duration-300
        ${isDark ? "bg-[#0b1220] text-white" : "bg-gray-100 text-gray-900"}
      `}
    >
      {/* Sidebar */}
      <Sidebar theme={theme} />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">

        <Topbar theme={theme} setTheme={setTheme} />

        {/* Welcome Banner */}
        <div
          className={`p-8 rounded-xl mb-8 transition-colors duration-300
          shadow-lg shadow-black/20
          ${
            isDark
              ? "bg-gradient-to-r from-[#1ea8a1] via-[#2494c4] to-[#2563eb]"
              : "bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#818cf8] text-white"
          }
        `}
        >
          <h1 className="text-3xl font-bold">
            👋 Welcome back, {user?.name}!
          </h1>
          <p className="opacity-90 mt-2">
            Let’s check your finances today.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <StatCard
            theme={theme}
            title="Total Income"
            amount={`₹${balanceData.totalIncome}`}
            positive
          />

          <StatCard
            theme={theme}
            title="Total Expenses"
            amount={`₹${balanceData.totalExpense}`}
          />

          <StatCard
            theme={theme}
            title="Remaining Balance"
            amount={`₹${balanceData.balance}`}
            positive={balanceData.balance >= 0}
          />

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpendingChart theme={theme} />
          <RecentTransactions theme={theme} />
        </div>

      </main>
    </div>
  );
};

export default Dashboard;