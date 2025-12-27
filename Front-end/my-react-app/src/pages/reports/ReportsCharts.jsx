import { PieChart, TrendingUp } from "lucide-react";

export default function ReportsCharts({ isDark }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Spending by Category */}
      <div className={`rounded-2xl p-6 ${isDark ? "bg-[#0f1a2e]" : "bg-white border"}`}>
        <div className="flex items-center gap-2 mb-4">
          <PieChart />
          <h3 className="text-lg font-semibold">
            Spending by Category
          </h3>
        </div>

        {/* Chart Placeholder */}
        <div className="h-64 flex items-center justify-center text-slate-400">
          Donut Chart Placeholder
        </div>
      </div>

      {/* Income vs Expenses */}
      <div className={`rounded-2xl p-6 ${isDark ? "bg-[#0f1a2e]" : "bg-white border"}`}>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp />
          <h3 className="text-lg font-semibold">
            Income vs Expenses Trend
          </h3>
        </div>

        {/* Chart Placeholder */}
        <div className="h-64 flex items-center justify-center text-slate-400">
          Bar Chart Placeholder
        </div>
      </div>
    </div>
  );
}
