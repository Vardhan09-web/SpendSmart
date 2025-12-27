import { useState } from "react";
import { BarChart3 } from "lucide-react";

import Sidebar from "../../components/User/Dashboard/sidebar";
import Topbar from "../../components/User/Dashboard/Topbar";

import FiltersBar from "./FiltersBar";
import ReportsCharts from "./ReportsCharts";
import ReportsCards from "./ReportsCards";
import ReportsToast from "./ReportsToast";

export default function ReportsDashboard() {
  const [theme, setTheme] = useState("dark");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const isDark = theme === "dark";

  const handleApplyFilter = (month, category) => {
    setToastMessage(`Showing data for ${month} - ${category}`);
    setShowToast(true);

    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div
      className={`flex min-h-screen pt-16 transition-colors duration-300 ${
        isDark ? "bg-[#0b1220] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <Sidebar theme={theme} />

      {/* Main Content */}
      <main className="flex-1 w-full">
        <Topbar theme={theme} setTheme={setTheme} />

        <div className="p-4 sm:p-6 lg:p-8 space-y-8">
          {/* ===== PAGE TITLE WITH ICON ===== */}
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl ">
              <BarChart3 size={32} />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Financial Reports & Analytics
              </h1>
              <p className="text-slate-400">
                Get a clear picture of your monthly income and expenses
              </p>
            </div>
          </div>

          {/* ===== FILTER BAR ===== */}
          <FiltersBar isDark={isDark} onApply={handleApplyFilter} />

          {/* ===== CHARTS SECTION ===== */}
          <ReportsCharts isDark={isDark} />

          {/* ===== STAT CARDS ===== */}
          <ReportsCards isDark={isDark} />
        </div>
      </main>

      {/* ===== TOAST MESSAGE ===== */}
      {showToast && <ReportsToast message={toastMessage} />}
    </div>
  );
}
