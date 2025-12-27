import { TrendingUp } from "lucide-react";

export default function BudgetTips({ isDark }) {
  return (
    <div
      className={`mt-10 rounded-2xl p-6 sm:p-8 shadow-xl ${
        isDark
          ? "bg-gradient-to-r from-[#0f1a2e] via-[#12243a] to-[#0f1a2e]"
          : "bg-gradient-to-r from-white via-gray-50 to-white border border-gray-200"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <TrendingUp className="text-teal-400" />
        <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
          Budget Management Tips
        </h3>
      </div>

      {/* Tips */}
      <ul className={`space-y-3 text-sm sm:text-base ${isDark ? "text-slate-300" : "text-gray-700"}`}>
        <li className="flex items-start gap-3">
          <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500" />
          Keep each category under <strong>80%</strong> to maintain healthy spending habits
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500" />
          Review and adjust budgets monthly based on your income and expenses
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500" />
          Set realistic goals that align with your financial priorities
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-2 w-2 h-2 rounded-full bg-emerald-500" />
          Use alerts as early warnings to control overspending before month-end
        </li>
      </ul>
    </div>
  );
}
