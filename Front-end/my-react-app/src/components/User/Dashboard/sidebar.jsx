// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   FiGrid,
//   FiPlusCircle,
//   FiBarChart2,
//   FiLogOut,
//   FiMenu,
//   FiX,
// } from "react-icons/fi";
// import BookIcon from "@mui/icons-material/Book";

// const Sidebar = ({ theme }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const isDark = theme === "dark";

//   const closeSidebar = () => setIsOpen(false);

//   return (
//     <>
//       {/* ================= MOBILE TOP BAR ================= */}
//       <div
//         className={`md:hidden flex justify-between px-4 py-3
//           ${isDark ? "bg-[#0f172a]" : "bg-white border-b"}
//         `}
//       >
//         {/* Title with Book Icon */}
//         <div className="flex items-center gap-2">
//           <BookIcon
//             fontSize="small"
//             className={isDark ? "text-teal-400" : "text-blue-600"}
//           />
//           <h1
//            className={`rounded-xl mb-8 transition-colors duration-300
//   shadow-lg shadow-black/20
//   ${
//     isDark
//       ? "bg-gradient-to-r from-[#1ea8a1] via-[#2494c4] to-[#2563eb]"
//       : "bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#818cf8] text-white"
//   }
// `}
//           >
//             SpendSmart
//           </h1>
//         </div>

//         <button onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? (
//             <FiX size={24} className={isDark ? "text-white" : "text-gray-800"} />
//           ) : (
//             <FiMenu size={24} className={isDark ? "text-white" : "text-gray-800"} />
//           )}
//         </button>
//       </div>

//       {/* ================= MOBILE OVERLAY ================= */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 md:hidden"
//           onClick={closeSidebar}
//         />
//       )}

//       {/* ================= SIDEBAR ================= */}
//       <aside
//         className={`
//           md:static md:h-screen md:w-64
//           md:flex md:flex-col md:justify-between
//           fixed left-0 w-full
//           transform transition-transform duration-300
//           ${isOpen ? "translate-y-0" : "-translate-y-full"}
//           md:translate-y-0
//           ${isDark ? "bg-[#0f172a]" : "bg-white border-r"}
//         `}
//       >
//         {/* Desktop Header with Book Icon */}
//         <div className="hidden md:flex items-center gap-2 px-6 py-5">
//           <BookIcon
//             fontSize="medium"
//             className={isDark ? "text-teal-400" : "text-blue-600"}
//           />
//           <h1
//             className={`text-2xl font-bold ${
//               isDark ? "bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent font-semibold hover:opacity-90 transition" : "bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent font-semibold hover:opacity-90 transition"
//             }`}
//           >
//             SpendSmart
//           </h1>
//         </div>

//         {/* Navigation */}
//         <nav className="px-4 md:px-6 py-4 space-y-1">
//           <NavItem theme={theme} to="/dashboard" icon={<FiGrid />} label="Dashboard" onClick={closeSidebar} />
//           <NavItem theme={theme} to="/add-transaction" icon={<FiPlusCircle />} label="Add Transaction" onClick={closeSidebar} />
//           <NavItem theme={theme} to="/budget/BudgetDashboard" icon={<BookIcon fontSize="small" />} label="Budgets" onClick={closeSidebar} />
//           <NavItem theme={theme} to="/reports" icon={<FiBarChart2 />} label="Reports" onClick={closeSidebar} />
//         </nav>

//         {/* Logout */}
//         <div className="px-6 py-4">
//           <button
//             className={`flex items-center gap-3 transition
//               ${
//                 isDark
//                   ? "text-gray-400 hover:text-red-400"
//                   : "text-gray-600 hover:text-red-500"
//               }
//             `}
//           >
//             <FiLogOut />
//             Logout
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// };

// /* ================= NAV ITEM ================= */
// const NavItem = ({ to, icon, label, onClick, theme }) => {
//   const isDark = theme === "dark";

//   return (
//     <NavLink
//       to={to}
//       onClick={onClick}
//       className={({ isActive }) =>
//         `group relative flex  gap-3 px-4 py-3 rounded-lg
//         transition-all duration-300
//         ${
//           isActive
//             ? isDark
//               ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg"
//               : "bg-blue-100 text-blue-700"
//             : isDark
//             ? "text-gray-400 hover:text-white hover:bg-[#1e293b]"
//             : "text-gray-700 hover:bg-gray-100"
//         }`
//       }
//     >
//       <span className="text-lg group-hover:scale-110 transition-transform">
//         {icon}
//       </span>
//       <span className="text-sm font-medium">{label}</span>
//     </NavLink>
//   );
// };

// export default Sidebar;

import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiPlusCircle,
  FiBarChart2,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import BookIcon from "@mui/icons-material/Book";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // ✅ Proper Tailwind dark mode handling (NO UI CHANGE)
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex min-h-screen bg-[#0f172a] dark:bg-[#020617] text-white transition-colors">

        {/* SIDEBAR */}
        <aside
          className={`fixed top-0 left-0 h-screen bg-[#0a1221] dark:bg-[#020617]
          border-r border-slate-800 dark:border-slate-700 flex flex-col 
          transition-all duration-300 z-50
          ${collapsed ? "w-20" : "w-64"}`}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-6">
            {!collapsed && (
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg flex items-center justify-center">
                  💲
                </div>
                <h1 className="bg-linear-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent font-bold text-lg transition">
                  SpendSmart
                </h1>
              </div>
            )}

            <div className="flex items-center gap-2">
              {/* COLLAPSE BUTTON */}
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="text-white hover:text-gray-500 transition p-1.5 rounded-md bg-slate-900/50"
              >
                {collapsed ? (
                  <FiChevronRight size={19} />
                ) : (
                  <FiChevronLeft size={19} />
                )}
              </button>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="flex-1 px-3 mt-2 flex flex-col gap-2">
            <NavItem
              to="/dashboard"
              icon={<FiGrid />}
              label="Dashboard"
              collapsed={collapsed}
            />
            <NavItem
              to="/add-transaction"
              icon={<FiPlusCircle />}
              label="Add Transaction"
              collapsed={collapsed}
            />
            <NavItem
              to="/budget/BudgetDashboard"
              icon={<BookIcon style={{ fontSize: 20 }} />}
              label="Budgets"
              collapsed={collapsed}
            />
            <NavItem
              to="/reports"
              icon={<FiBarChart2 />}
              label="Reports"
              collapsed={collapsed}
            />
          </nav>

          {/* LOGOUT */}
          <div className="p-4 border-t border-slate-800 dark:border-slate-700 mt-auto">
            <button
              onClick={() => (window.location.href = "/")}
              className={`flex items-center gap-3 text-gray-500 hover:text-red-400 transition w-full px-3 py-2
              ${collapsed ? "justify-center" : ""}`}
            >
              <FiLogOut size={20} />
              {!collapsed && <span className="font-medium">Logout</span>}
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main
          className={`flex-1 transition-all duration-300 min-h-screen flex items-center justify-center
          ${collapsed ? "ml-20" : "ml-64"}`}
        >
          {/* content */}
        </main>
      </div>
    </div>
  );
};

/* ---------- NAV ITEM ---------- */
const NavItem = ({ to, icon, label, collapsed }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
        ${
          isActive
            ? "bg-gradient-to-r from-[#22d3ee] to-[#3b82f6] text-white shadow-md shadow-blue-500/20"
            : "text-gray-400 hover:text-white hover:bg-slate-800/50 dark:hover:bg-slate-700/50"
        }
        ${collapsed ? "justify-center" : ""}`
      }
    >
      <span className="text-xl">{icon}</span>
      {!collapsed && (
        <span className="text-[15px] font-medium whitespace-nowrap">
          {label}
        </span>
      )}
    </NavLink>
  );
};

export default Sidebar;

