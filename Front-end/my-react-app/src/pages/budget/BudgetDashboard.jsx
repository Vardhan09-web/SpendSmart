import { useState } from "react";
import { Plus } from "lucide-react";

import BudgetCard from "./BudgetCard";
import BudgetAlert from "./BudgetAlert";
import AddBudgetModal from "./AddBudgetModal";
import BudgetTips from "./BudgetTips";

import Sidebar from "../../components/User/Dashboard/sidebar";
import Topbar from "../../components/User/Dashboard/Topbar";

export default function BudgetDashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [theme, setTheme] = useState("dark");

  const isDark = theme === "dark";

  return (
    <div
      className={`flex min-h-screen pt-16 transition-colors ${
        isDark ? "bg-[#0b1220] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <Sidebar theme={theme} />

      {/* Main */}
      <main className="flex-1 w-full">
        <Topbar theme={theme} setTheme={setTheme} />

        <div className="p-4 sm:p-6 lg:p-8 space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent hover:opacity-90 transition pb-2">
                Monthly Budget Overview
              </h1>
              <p className="text-slate-400">
                Track and manage your spending limits
              </p>
            </div>

            <button
              onClick={() => setOpenModal(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 font-semibold"
            >
              <Plus size={18} />
              Add / Edit Budget
            </button>
          </div>

          {/* Alerts */}
          <div className="space-y-4">
            <BudgetAlert
              title="Transportation Budget Alert"
              description="You've used 90% of your budget. $225 spent of $250"
              isDark={isDark}
            />
            <BudgetAlert
              title="Entertainment Budget Alert"
              description="You've used 93% of your budget. $140 spent of $150"
              isDark={isDark}
            />
            <BudgetAlert
              title="Shopping Budget Alert"
              description="You've used 95% of your budget. $380 spent of $400"
              isDark={isDark}
            />
          </div>

          {/* Budget Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BudgetCard title="Food & Dining" spent={450} limit={600} color="yellow" isDark={isDark} />
            <BudgetCard title="Transportation" spent={225} limit={250} color="red" warning isDark={isDark} />
            <BudgetCard title="Entertainment" spent={140} limit={150} color="red" warning isDark={isDark} />
            <BudgetCard title="Shopping" spent={380} limit={400} color="red" warning isDark={isDark} />
            <BudgetCard title="Utilities & Bills" spent={120} limit={200} color="green" isDark={isDark} />
            <BudgetCard title="Rent & Housing" spent={800} limit={1200} color="green" isDark={isDark} />
          </div>

          {/* ✅ Budget Management Tips (CORRECT LOCATION) */}
          <BudgetTips isDark={isDark} />
        </div>
      </main>

      {/* Modal */}
      {openModal && (
        <AddBudgetModal
          onClose={() => setOpenModal(false)}
          isDark={isDark}
        />
      )}
    </div>
  );
}
