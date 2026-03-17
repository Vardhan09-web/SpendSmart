// const SpendingChart = ({ theme }) => {
//   const isDark = theme === "dark";

//   return (
//     <div
//       className={`p-6 rounded-xl transition-colors duration-300
//         ${
//           isDark
//             ? "bg-[#111827] text-white"
//             : "bg-white text-gray-900 shadow"
//         }
//       `}
//     >
//       <h2
//         className={`text-xl font-semibold mb-4 ${
//           isDark ? "text-white" : "text-gray-900"
//         }`}
//       >
//         Spending by Category
//       </h2>

//       <div
//         className={`h-56 flex items-center justify-center
//           ${
//             isDark ? "text-gray-500" : "text-gray-600"
//           }
//         `}
//       >
//         Donut Chart Placeholder
//       </div>
//     </div>
//   );
// };

// export default SpendingChart;


import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const COLORS = [
  "#10b981",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4"
];

const SpendingChart = ({ theme, expenses = [] }) => {
  const isDark = theme === "dark";

  /* ---- CATEGORY TOTALS ---- */

  const categoryTotals = {};

  expenses.forEach((item) => {
    if (!categoryTotals[item.category]) {
      categoryTotals[item.category] = 0;
    }

    categoryTotals[item.category] += Number(item.amount || 0);
  });

  const pieData = Object.keys(categoryTotals).map((category) => ({
    name: category,
    value: categoryTotals[category]
  }));

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
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>

            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              innerRadius={40}
              outerRadius={70}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SpendingChart;