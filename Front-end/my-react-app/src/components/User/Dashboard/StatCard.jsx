const StatCard = ({ title, amount, change, positive, theme }) => {
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
      <div className="flex justify-between mb-2">
        <p className={isDark ? "text-gray-400" : "text-gray-500"}>
          {title}
        </p>

        <span
          className={
            positive ? "text-green-500" : "text-red-500"
          }
        >
          {change}
        </span>
      </div>

      <h2 className="text-3xl font-bold">{amount}</h2>

      <p
        className={`text-sm ${
          isDark ? "text-gray-500" : "text-gray-400"
        }`}
      >
        vs last month
      </p>
    </div>
  );
};

export default StatCard;
