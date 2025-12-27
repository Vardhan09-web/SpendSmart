import { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Topbar from "./Topbar";
import StatCard from "./StatCard";
import RecentTransactions from "./RecentTransactions";
import SpendingChart from "./SpendingChart";

const Dashboard = () => {
  const [theme, setTheme] = useState("dark");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  // Save theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

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
        {/* Topbar controls theme */}
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
          <h1 className="text-3xl font-bold">👋 Welcome back, John!</h1>
          <p className="opacity-90 mt-2">Let’s check your finances today.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            theme={theme}
            title="Total Income"
            amount="$8,240"
            change="+8.2%"
            positive
          />
          <StatCard
            theme={theme}
            title="Total Expenses"
            amount="$4,158"
            change="-3.1%"
          />
          <StatCard
            theme={theme}
            title="Remaining Balance"
            amount="$12,426"
            change="+12.5%"
            positive
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
