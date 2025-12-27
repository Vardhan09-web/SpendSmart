const SpendingChart = ({ theme }) => {
  const isDark = theme === "dark";

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
        Spending by Category
      </h2>

      <div
        className={`h-56 flex items-center justify-center
          ${
            isDark ? "text-gray-500" : "text-gray-600"
          }
        `}
      >
        Donut Chart Placeholder
      </div>
    </div>
  );
};

export default SpendingChart;
