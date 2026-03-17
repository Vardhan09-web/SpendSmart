// // import { useState } from "react";
// // import { BarChart3 } from "lucide-react";

// // import Sidebar from "../../components/User/Dashboard/sidebar";
// // import Topbar from "../../components/User/Dashboard/Topbar";

// // import FiltersBar from "./FiltersBar";
// // import ReportsCharts from "./ReportsCharts";
// // import ReportsCards from "./ReportsCards";
// // import ReportsToast from "./ReportsToast";

// // export default function ReportsDashboard() {
// //   const [theme, setTheme] = useState("dark");
// //   const [showToast, setShowToast] = useState(false);
// //   const [toastMessage, setToastMessage] = useState("");

// //   const isDark = theme === "dark";

// //   const handleApplyFilter = (month, category) => {
// //     setToastMessage(`Showing data for ${month} - ${category}`);
// //     setShowToast(true);

// //     setTimeout(() => setShowToast(false), 3000);
// //   };

// //   return (
// //     <div
// //       className={`flex min-h-screen pt-16 transition-colors duration-300 ${
// //         isDark ? "bg-[#0b1220] text-white" : "bg-gray-100 text-gray-900"
// //       }`}
// //     >
// //       {/* Sidebar */}
// //       <Sidebar theme={theme} />

// //       {/* Main Content */}
// //       <main className="flex-1 w-full">
// //         <Topbar theme={theme} setTheme={setTheme} />

// //         <div className="p-4 sm:p-6 lg:p-8 space-y-8">
// //           {/* ===== PAGE TITLE WITH ICON ===== */}
// //           <div className="flex items-start gap-4">
// //             <div className="p-3 rounded-xl ">
// //               <BarChart3 size={32} />
// //             </div>

// //             <div>
// //               <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
// //                 Financial Reports & Analytics
// //               </h1>
// //               <p className="text-slate-400">
// //                 Get a clear picture of your monthly income and expenses
// //               </p>
// //             </div>
// //           </div>

// //           {/* ===== FILTER BAR ===== */}
// //           <FiltersBar isDark={isDark} onApply={handleApplyFilter} />

// //           {/* ===== CHARTS SECTION ===== */}
// //           <ReportsCharts isDark={isDark} />

// //           {/* ===== STAT CARDS ===== */}
// //           <ReportsCards isDark={isDark} />
// //         </div>
// //       </main>

// //       {/* ===== TOAST MESSAGE ===== */}
// //       {showToast && <ReportsToast message={toastMessage} />}
// //     </div>
// //   );
// // }


// import { useState, useEffect } from "react";
// import { BarChart3 } from "lucide-react";

// import Sidebar from "../../components/User/Dashboard/sidebar";
// import Topbar from "../../components/User/Dashboard/Topbar";

// import FiltersBar from "./FiltersBar";
// import ReportsCharts from "./ReportsCharts";
// import ReportsCards from "./ReportsCards";
// import ReportsToast from "./ReportsToast";

// import { getUserBalance } from "../../api/balanceApi";
// import axios from "axios";

// export default function ReportsDashboard() {

//   const [theme, setTheme] = useState("dark");

//   const [showToast, setShowToast] = useState(false);
//   const [toastMessage, setToastMessage] = useState("");

//   const [balanceData, setBalanceData] = useState({
//     totalIncome: 0,
//     totalExpense: 0,
//     balance: 0
//   });

//   const [expenses, setExpenses] = useState([]);

//   // Filtered data
//   const [filteredExpenses, setFilteredExpenses] = useState([]);
//   const [showResults, setShowResults] = useState(false);

//   const isDark = theme === "dark";

//   const user = JSON.parse(localStorage.getItem("user"));

//   /* -------- FETCH BALANCE -------- */

//   useEffect(() => {

//     if (!user) return;

//     const fetchBalance = async () => {

//       try {

//         const response = await getUserBalance(user.id);
//         setBalanceData(response.data);

//       } catch (error) {

//         console.error("Balance API error:", error);

//       }

//     };

//     fetchBalance();

//   }, [user]);


//   /* -------- FETCH EXPENDITURES -------- */

//   useEffect(() => {

//     if (!user) return;

//     const fetchExpenses = async () => {

//       try {

//         const response = await axios.get(
//           `http://localhost:8080/api/expenditure/${user.id}`
//         );

//         setExpenses(response.data);

//       } catch (error) {

//         console.error("Expense API error:", error);

//       }

//     };

//     fetchExpenses();

//   }, [user]);


//   /* -------- FILTER FUNCTION -------- */

//   const handleApplyFilter = (month, category) => {

//     const filtered = expenses.filter((item) => {

//       const expenseMonth = new Date(item.expenseDate).toLocaleString(
//         "default",
//         { month: "long" }
//       );

//       const monthMatch = month ? expenseMonth === month : true;
//       const categoryMatch = category ? item.category === category : true;

//       return monthMatch && categoryMatch;

//     });

//     setFilteredExpenses(filtered);
//     setShowResults(true);

//     setToastMessage(
//       `Showing data for ${month || "All Months"} - ${category || "All Categories"}`
//     );

//     setShowToast(true);

//     setTimeout(() => setShowToast(false), 3000);

//   };


//   /* -------- CLOSE FILTERED RESULTS -------- */

//   const handleCloseResults = () => {

//     setShowResults(false);
//     setFilteredExpenses([]);

//   };


//   return (
//     <div
//       className={`flex min-h-screen pt-16 transition-colors duration-300 ${
//         isDark ? "bg-[#0b1220] text-white" : "bg-gray-100 text-gray-900"
//       }`}
//     >

//       {/* Sidebar */}
//       <Sidebar theme={theme} />

//       {/* Main Content */}
//       <main className="flex-1 w-full">

//         <Topbar theme={theme} setTheme={setTheme} />

//         <div className="p-4 sm:p-6 lg:p-8 space-y-8">

//           {/* ===== PAGE TITLE ===== */}
//           <div className="flex items-start gap-4">

//             <div className="p-3 rounded-xl">
//               <BarChart3 size={32} />
//             </div>

//             <div>

//               <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
//                 Financial Reports & Analytics
//               </h1>

//               <p className="text-slate-400">
//                 Get a clear picture of your monthly income and expenses
//               </p>

//             </div>

//           </div>


//           {/* ===== FILTER BAR ===== */}
//           <FiltersBar isDark={isDark} onApply={handleApplyFilter} />

//           {/* ===== FILTERED TRANSACTIONS ===== */}

//           <div
//             className={`p-6 rounded-xl transition-all duration-300
//             ${isDark ? "bg-[#111827]" : "bg-white shadow"}
//             ${showResults ? "min-h-[350px]" : "h-20"}
//             `}
//           >

//             {/* Header with Close Button */}
//             <div className="flex justify-between items-center mb-4">

//               <h2 className="text-xl font-semibold">
//                 Filtered Transactions
//               </h2>

//               {showResults && (
//                 <button
//                   onClick={handleCloseResults}
//                   className={`px-3 py-1 rounded-md text-sm transition
//                   ${
//                     isDark
//                       ? "bg-gray-700 hover:bg-gray-600 text-white"
//                       : "bg-gray-200 hover:bg-gray-300 text-gray-900"
//                   }`}
//                 >
//                   ✕ Close
//                 </button>
//               )}

//             </div>


//             {showResults && (

//               <div className="space-y-3">

//                 {filteredExpenses.length === 0 && (
//                   <p className="text-gray-400">
//                     No transactions found
//                   </p>
//                 )}

//                 {filteredExpenses.map((txn) => (

//                   <div
//                     key={txn.id}
//                     className={`flex justify-between items-center p-3 rounded-lg
//                     ${isDark ? "bg-gray-800/40" : "bg-gray-100"}
//                     `}
//                   >

//                     <div>

//                       <p className="font-medium">{txn.title}</p>

//                       <p className="text-sm text-gray-400">
//                         {txn.category}
//                       </p>

//                     </div>

//                     <p className="font-semibold text-red-400">
//                       ₹{txn.amount}
//                     </p>

//                   </div>

//                 ))}

//               </div>

//             )}

//           </div>

//           {/* ===== CHARTS ===== */}
//           <ReportsCharts
//             isDark={isDark}
//             expenses={expenses}
//             // selectedMonth={selectedMonth}
//             balanceData={balanceData}
//           />


//           {/* ===== STAT CARDS ===== */}
//           <ReportsCards
//             isDark={isDark}
//             balanceData={balanceData}
//           />


          
//         </div>

//       </main>

//       {/* ===== TOAST ===== */}
//       {showToast && <ReportsToast message={toastMessage} />}

//     </div>
//   );
// }









import { useState, useEffect } from "react";
import { BarChart3 } from "lucide-react";

import Sidebar from "../../components/User/Dashboard/sidebar";
import Topbar from "../../components/User/Dashboard/Topbar";

import FiltersBar from "./FiltersBar";
import ReportsCharts from "./ReportsCharts";
import ReportsCards from "./ReportsCards";
import ReportsToast from "./ReportsToast";

import { getUserBalance } from "../../api/balanceApi";
import axios from "axios";

export default function ReportsDashboard() {

  const [theme, setTheme] = useState("dark");

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [balanceData, setBalanceData] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0
  });

  const [expenses, setExpenses] = useState([]);

  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // NEW STATES FOR CHART FILTER
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const isDark = theme === "dark";

  const user = JSON.parse(localStorage.getItem("user"));

  /* -------- FETCH BALANCE -------- */

  useEffect(() => {

    if (!user) return;

    const fetchBalance = async () => {

      try {

        const response = await getUserBalance(user.id);
        setBalanceData(response.data);

      } catch (error) {

        console.error("Balance API error:", error);

      }

    };

    fetchBalance();

  }, [user]);


  /* -------- FETCH EXPENSES -------- */

  useEffect(() => {

    if (!user) return;

    const fetchExpenses = async () => {

      try {

        const response = await axios.get(
          `http://localhost:8080/api/expenditure/${user.id}`
        );

        setExpenses(response.data);

      } catch (error) {

        console.error("Expense API error:", error);

      }

    };

    fetchExpenses();

  }, [user]);


  /* -------- FILTER FUNCTION -------- */

  const handleApplyFilter = (month, category) => {

    // Save selected filters for charts
    setSelectedMonth(month);
    setSelectedCategory(category);

    const filtered = expenses.filter((item) => {

      const expenseMonth = new Date(item.expenseDate).toLocaleString(
        "default",
        { month: "long" }
      );

      const monthMatch = month ? expenseMonth === month : true;
      const categoryMatch = category ? item.category === category : true;

      return monthMatch && categoryMatch;

    });

    setFilteredExpenses(filtered);
    setShowResults(true);

    setToastMessage(
      `Showing data for ${month || "All Months"} - ${category || "All Categories"}`
    );

    setShowToast(true);

    setTimeout(() => setShowToast(false), 3000);

  };


  /* -------- CLOSE FILTERED RESULTS -------- */

  const handleCloseResults = () => {

    setShowResults(false);
    setFilteredExpenses([]);

    setSelectedMonth(null);
    setSelectedCategory(null);

  };


  return (
    <div
      className={`flex min-h-screen pt-16 transition-colors duration-300 ${
        isDark ? "bg-[#0b1220] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >

      {/* Sidebar */}
      <Sidebar theme={theme} />

      {/* Main Content */}
      <main className="flex-1 w-full">

        <Topbar theme={theme} setTheme={setTheme} />

        <div className="p-4 sm:p-6 lg:p-8 space-y-8">

          {/* PAGE TITLE */}
          <div className="flex items-start gap-4">

            <div className="p-3 rounded-xl">
              <BarChart3 size={32} />
            </div>

            <div>

              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Financial Reports & Analytics
              </h1>

              <p className="text-slate-400">
                Get a clear picture of your monthly income and expenses
              </p>

            </div>

          </div>


          {/* FILTER BAR */}
          <FiltersBar isDark={isDark} onApply={handleApplyFilter} />


          {/* FILTERED TRANSACTIONS */}

          <div
            className={`p-6 rounded-xl transition-all duration-300
            ${isDark ? "bg-[#111827]" : "bg-white shadow"}
            ${showResults ? "min-h-[350px]" : "h-20"}
            `}
          >

            <div className="flex justify-between items-center mb-4">

              <h2 className="text-xl font-semibold">
                Filtered Transactions
              </h2>

              {showResults && (
                <button
                  onClick={handleCloseResults}
                  className={`px-3 py-1 rounded-md text-sm transition
                  ${
                    isDark
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                  }`}
                >
                  ✕ Close
                </button>
              )}

            </div>


            {showResults && (

              <div className="space-y-3">

                {filteredExpenses.length === 0 && (
                  <p className="text-gray-400">
                    No transactions found
                  </p>
                )}

                {filteredExpenses.map((txn) => (

                  <div
                    key={txn.id}
                    className={`flex justify-between items-center p-3 rounded-lg
                    ${isDark ? "bg-gray-800/40" : "bg-gray-100"}
                    `}
                  >

                    <div>
                      <p className="font-medium">{txn.title}</p>
                      <p className="text-sm text-gray-400">
                        {txn.category}
                      </p>
                    </div>

                    <p className="font-semibold text-red-400">
                      ₹{txn.amount}
                    </p>

                  </div>

                ))}

              </div>

            )}

          </div>


          {/* CHARTS */}
          <ReportsCharts
            isDark={isDark}
            expenses={expenses}
            selectedMonth={selectedMonth}
            selectedCategory={selectedCategory}
            balanceData={balanceData}
          />


          {/* STAT CARDS */}
          <ReportsCards
            isDark={isDark}
            balanceData={balanceData}
          />

        </div>

      </main>

      {/* TOAST */}
      {showToast && <ReportsToast message={toastMessage} />}

    </div>
  );
}