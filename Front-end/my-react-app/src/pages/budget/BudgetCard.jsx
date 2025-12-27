export default function BudgetCard({ title, spent, limit, color, warning, isDark }) {
  const percentage = Math.round((spent / limit) * 100);

  const bg = isDark ? "bg-[#0f1a2e]" : "bg-white border border-gray-200";
  const titleText = isDark ? "text-white" : "text-gray-900";
  const subText = isDark ? "text-slate-400" : "text-gray-500";
  const valueText = isDark ? "text-white" : "text-gray-800";

  return (
    <div className={`rounded-2xl p-5 shadow-lg ${bg}`}>
      <h3 className={`text-lg font-semibold ${titleText}`}>{title}</h3>
      <p className={`text-sm ${subText}`}>Budget Limit</p>

      <div className="mt-4">
        <div className={`flex justify-between text-sm mb-1 ${valueText}`}>
          <span>Spent: ${spent}</span>
          <span>of ${limit}</span>
        </div>

        <div className="w-full h-2 rounded bg-gray-200 dark:bg-slate-700">
          <div
            className={`h-2 rounded ${
              color === "red"
                ? "bg-red-500"
                : color === "yellow"
                ? "bg-yellow-400"
                : "bg-green-500"
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="flex justify-between mt-2 text-sm">
          <span className={valueText}>Remaining: ${limit - spent}</span>
          <span className={`font-semibold ${percentage >= 90 ? "text-red-500" : "text-green-600"}`}>
            {percentage}%
          </span>
        </div>
      </div>

      {warning && (
        <div
          className={`mt-4 p-3 rounded-xl text-sm ${
            isDark
              ? "border border-red-500/40 text-red-400"
              : "border border-red-300 text-red-600 bg-red-50"
          }`}
        >
          ⚠️ Approaching limit!
        </div>
      )}
    </div>
  );
}
