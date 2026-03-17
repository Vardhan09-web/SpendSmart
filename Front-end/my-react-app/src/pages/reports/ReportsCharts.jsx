// import { PieChart as PieIcon, TrendingUp } from "lucide-react";

// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Legend
// } from "recharts";

// const COLORS = [
//   "#10b981",
//   "#3b82f6",
//   "#f59e0b",
//   "#ef4444",
//   "#8b5cf6",
//   "#06b6d4"
// ];

// export default function ReportsCharts({ isDark, expenses = [], balanceData }) {

//   /* ---------- CATEGORY TOTAL ---------- */

//   const categoryTotals = {};

//   expenses.forEach((item) => {

//     if (!categoryTotals[item.category]) {
//       categoryTotals[item.category] = 0;
//     }

//     categoryTotals[item.category] += Number(item.amount || 0);

//   });

//   const pieData = Object.keys(categoryTotals).map((category) => ({
//     name: category,
//     value: categoryTotals[category]
//   }));


//   /* ---------- INCOME VS EXPENSE ---------- */

//   const barData = [
//     {
//       name: "Income",
//       amount: balanceData.totalIncome
//     },
//     {
//       name: "Expenses",
//       amount: balanceData.totalExpense
//     }
//   ];


//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">

//       {/* Donut Chart
//       <div className={`rounded-2xl p-6 ${isDark ? "bg-[#0f1a2e]" : "bg-white border"}`}>

//         <div className="flex items-center gap-2 mb-4">
//           <PieIcon />
//           <h3 className="text-lg font-semibold">
//             Spending by Category
//           </h3>
//         </div>

//         <div className="h-64">

//           <ResponsiveContainer width="100%" height="100%">

//             <PieChart>

//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 nameKey="name"
//                 innerRadius={60}
//                 outerRadius={90}
//               >

//                 {pieData.map((entry, index) => (
//                   <Cell
//                     key={index}
//                     fill={COLORS[index % COLORS.length]}
//                   />
//                 ))}

//               </Pie>

//               <Tooltip />

//             </PieChart>

//           </ResponsiveContainer>

//         </div>

//       </div> */}


//       {/* Bar Graph */}
//       <div className={`rounded-2xl p-6 ${isDark ? "bg-[#0f1a2e]" : "bg-white border"}`}>

//         <div className="flex items-center gap-2 mb-4">
//           <TrendingUp />
//           <h3 className="text-lg font-semibold">
//             Income vs Expenses Trend
//           </h3>
//         </div>

//         <div className="h-72">

//           <ResponsiveContainer width="100%" height="100%">

//             <BarChart data={barData}>

//               <CartesianGrid strokeDasharray="3 3" />

//               <XAxis dataKey="name" />
//               <YAxis />

//               <Tooltip />
//               <Legend />

//               <Bar
//                 dataKey="amount"
//                 fill="#10b981"
//                 barSize={60}
//                 radius={[6,6,0,0]}
//               />

//             </BarChart>

//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { PieChart as PieIcon, TrendingUp } from "lucide-react";

// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Legend
// } from "recharts";

// const COLORS = [
//   "#10b981",
//   "#3b82f6",
//   "#f59e0b",
//   "#ef4444",
//   "#8b5cf6",
//   "#06b6d4"
// ];

// export default function ReportsCharts({
//   isDark,
//   expenses = [],
//   selectedMonth,
//   balanceData
// }) {

//   /* ---------- FILTER EXPENSES BY MONTH ONLY ---------- */

//   const monthFilteredExpenses = expenses.filter((item) => {

//     if (!selectedMonth) return true;

//     const expenseMonth = new Date(item.expenseDate).toLocaleString(
//       "default",
//       { month: "long" }
//     );

//     return expenseMonth === selectedMonth;

//   });


//   /* ---------- CALCULATE CATEGORY TOTALS ---------- */

//   const categoryTotals = {};

//   monthFilteredExpenses.forEach((item) => {

//     if (!categoryTotals[item.category]) {
//       categoryTotals[item.category] = 0;
//     }

//     categoryTotals[item.category] += Number(item.amount || 0);

//   });


//   /* ---------- PREPARE DONUT DATA ---------- */

//   const pieData = Object.keys(categoryTotals).map((category) => ({
//     name: category,
//     value: categoryTotals[category]
//   }));


//   /* ---------- BAR CHART DATA ---------- */

//   const barData = [
//     {
//       name: "Income",
//       amount: balanceData.totalIncome
//     },
//     {
//       name: "Expenses",
//       amount: balanceData.totalExpense
//     }
//   ];


//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//       {/* DONUT CHART */}
//       <div className={`rounded-2xl p-6 ${isDark ? "bg-[#0f1a2e]" : "bg-white border"}`}>

//         <div className="flex items-center gap-2 mb-4">
//           <PieIcon />
//           <h3 className="text-lg font-semibold">
//             Spending by Category
//           </h3>
//         </div>

//         <div className="h-64">

//           {pieData.length === 0 ? (

//             <div className="flex items-center justify-center h-full text-gray-400">
//               No transactions for selected month
//             </div>

//           ) : (

//             <ResponsiveContainer width="100%" height="100%">

//               <PieChart>

//                 <Pie
//                   data={pieData}
//                   dataKey="value"
//                   nameKey="name"
//                   innerRadius={60}
//                   outerRadius={90}
//                 >

//                   {pieData.map((entry, index) => (
//                     <Cell
//                       key={index}
//                       fill={COLORS[index % COLORS.length]}
//                     />
//                   ))}

//                 </Pie>

//                 <Tooltip />

//               </PieChart>

//             </ResponsiveContainer>

//           )}

//         </div>

//       </div>


//       {/* BAR GRAPH */}
//       <div className={`rounded-2xl p-6 ${isDark ? "bg-[#0f1a2e]" : "bg-white border"}`}>

//         <div className="flex items-center gap-2 mb-4">
//           <TrendingUp />
//           <h3 className="text-lg font-semibold">
//             Income vs Expenses Trend
//           </h3>
//         </div>

//         <div className="h-72">

//           <ResponsiveContainer width="100%" height="100%">

//             <BarChart data={barData}>

//               <CartesianGrid strokeDasharray="3 3" />

//               <XAxis dataKey="name" />
//               <YAxis />

//               <Tooltip />
//               <Legend />

//               <Bar
//                 dataKey="amount"
//                 fill="#10b981"
//                 barSize={60}
//                 radius={[6,6,0,0]}
//               />

//             </BarChart>

//           </ResponsiveContainer>

//         </div>

//       </div>

//     </div>
//   );
// }






import { PieChart as PieIcon, TrendingUp, Activity } from "lucide-react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LineChart,
  Line
} from "recharts";

const COLORS = [
  "#10b981",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4"
];

export default function ReportsCharts({
  isDark,
  expenses = [],
  selectedMonth,
  balanceData
}) {

  /* ---------- FILTER EXPENSES BY MONTH ---------- */

  const monthFilteredExpenses = expenses.filter((item) => {

    if (!selectedMonth) return true;

    const expenseMonth = new Date(item.expenseDate).toLocaleString(
      "default",
      { month: "long" }
    );

    return expenseMonth === selectedMonth;

  });

  /* ---------- CALCULATE CATEGORY TOTALS ---------- */

  const categoryTotals = {};

  monthFilteredExpenses.forEach((item) => {

    if (!categoryTotals[item.category]) {
      categoryTotals[item.category] = 0;
    }

    categoryTotals[item.category] += Number(item.amount || 0);

  });

  /* ---------- PIE DATA ---------- */

  const pieData = Object.keys(categoryTotals).map((category) => ({
    name: category,
    value: categoryTotals[category]
  }));

  /* ---------- BAR CHART DATA ---------- */

  const barData = [
    {
      name: "Income",
      amount: balanceData?.totalIncome || 0
    },
    {
      name: "Expenses",
      amount: balanceData?.totalExpense || 0
    }
  ];

  /* ---------- MONTHLY EXPENSE LINE GRAPH ---------- */

  const monthlyTotals = {};

  expenses.forEach((item) => {

    const month = new Date(item.expenseDate).toLocaleString("default", {
      month: "short"
    });

    if (!monthlyTotals[month]) {
      monthlyTotals[month] = 0;
    }

    monthlyTotals[month] += Number(item.amount || 0);

  });

  const lineData = Object.keys(monthlyTotals).map((month) => ({
    month: month,
    amount: monthlyTotals[month]
  }));


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* DONUT CHART */}
      <div className={`rounded-2xl p-6 ${isDark ? "bg-[#0f1a2e]" : "bg-white border"}`}>

        <div className="flex items-center gap-2 mb-4">
          <PieIcon />
          <h3 className="text-lg font-semibold">
            Spending by Category
          </h3>
        </div>

        <div className="h-64">

          {pieData.length === 0 ? (

            <div className="flex items-center justify-center h-full text-gray-400">
              No transactions for selected month
            </div>

          ) : (

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={90}
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

          )}

        </div>

      </div>


      {/* BAR GRAPH */}
      <div className={`rounded-2xl p-6 ${isDark ? "bg-[#0f1a2e]" : "bg-white border"}`}>

        <div className="flex items-center gap-2 mb-4">
          <TrendingUp />
          <h3 className="text-lg font-semibold">
            Income vs Expenses
          </h3>
        </div>

        <div className="h-72">

          <ResponsiveContainer width="100%" height="100%">

            <BarChart data={barData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />
              <YAxis />

              <Tooltip />
              <Legend />

              <Bar
                dataKey="amount"
                fill="#10b981"
                barSize={60}
                radius={[6, 6, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>


      {/* MONTHLY EXPENSE LINE GRAPH */}
      <div className={`rounded-2xl p-6 lg:col-span-2 ${isDark ? "bg-[#0f1a2e]" : "bg-white border"}`}>

        <div className="flex items-center gap-2 mb-4">
          <Activity />
          <h3 className="text-lg font-semibold">
            Monthly Expense Trend
          </h3>
        </div>

        <div className="h-72">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={lineData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />
              <YAxis />

              <Tooltip />
              <Legend />

              <Line
                type="monotone"
                dataKey="amount"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 5 }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}