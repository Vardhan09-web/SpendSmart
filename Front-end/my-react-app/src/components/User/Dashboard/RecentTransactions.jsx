const RecentTransactions = ({ theme }) => {
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
        Recent Transactions
      </h2>

      <ul className="space-y-4">
        <li className="flex justify-between">
          <span className={isDark ? "text-gray-300" : "text-gray-700"}>
            Grocery Store
          </span>
          <span className="text-red-500">- $45.00</span>
        </li>

        <li className="flex justify-between">
          <span className={isDark ? "text-gray-300" : "text-gray-700"}>
            Salary Deposit
          </span>
          <span className="text-green-500">+ $3,200.00</span>
        </li>

        <li className="flex justify-between">
          <span className={isDark ? "text-gray-300" : "text-gray-700"}>
            Electric Bill
          </span>
          <span className="text-red-500">- $120.00</span>
        </li>
      </ul>
    </div>
  );
};

export default RecentTransactions;
