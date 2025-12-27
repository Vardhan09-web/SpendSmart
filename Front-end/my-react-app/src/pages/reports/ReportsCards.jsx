export default function ReportsCards({ isDark }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard
        title="Top Spending Category"
        value="$1,250"
        subtitle="Food & Dining"
        color="red"
        isDark={isDark}
      />
      <StatCard
        title="Highest Income Source"
        value="$8,240"
        subtitle="Monthly Salary"
        color="green"
        isDark={isDark}
      />
      <StatCard
        title="Savings Rate"
        value="49.5%"
        subtitle="Of total income"
        color="blue"
        isDark={isDark}
      />
    </div>
  );
}

function StatCard({ title, value, subtitle, color, isDark }) {
  const colorMap = {
    red: "text-red-400",
    green: "text-green-400",
    blue: "text-blue-400",
  };

  return (
    <div className={`rounded-2xl p-6 ${isDark ? "bg-[#0f1a2e]" : "bg-white border"}`}>
      <p className="text-slate-400">{title}</p>
      <h2 className={`text-3xl font-bold ${colorMap[color]}`}>
        {value}
      </h2>
      <p className="text-slate-400">{subtitle}</p>
    </div>
  );
}
