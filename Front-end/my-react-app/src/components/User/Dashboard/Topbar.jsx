import { useState } from "react";
import {
  FiBell,
  FiSearch,
  FiSun,
  FiMoon,
  FiUser,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const Topbar = ({ theme, setTheme }) => {
  const isDark = theme === "dark";
  const [open, setOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      className={`w-full fixed top-0 z-40 transition-colors duration-300
        ${isDark ? "bg-[#0b1220] text-white" : "bg-gray-100 text-gray-900"}
      `}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        {/* Search */}
        <div className="relative md:block w-1/2">
          <FiSearch
            className={`absolute left-3 top-3 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          />
          <input
            type="text"
            placeholder="Search transactions..."
            className={`w-full rounded-lg pl-10 py-2 outline-none
              ${
                isDark
                  ? "bg-[#111827] text-white"
                  : "bg-white text-gray-900 border border-gray-300"
              }
            `}
          />
        </div>

        {/* Right Section */}
        <div className="flex fixed top-5 right-0 items-center gap-4 mr-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full
              ${
                isDark
                  ? "bg-[#1e293b] hover:bg-[#334155]"
                  : "bg-gray-200 hover:bg-gray-300"
              }
            `}
          >
            {isDark ? (
              <FiSun className="text-yellow-400" />
            ) : (
              <FiMoon className="text-gray-700" />
            )}
          </button>

          {/* Notification */}
          <FiBell
            className={`text-xl cursor-pointer
              ${isDark ? "hover:text-teal-400" : "hover:text-blue-600"}
            `}
          />

          {/* User */}
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 cursor-pointer select-none"
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="rounded-full w-8 h-8"
            />
            <div className="hidden lg:block">
              <p className="text-sm font-semibold">John Doe</p>
              <p
                className={`text-xs ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                john@example.com
              </p>
            </div>
          </div>

          {/* Dropdown */}
          {open && (
            <div
              className={`absolute right-0 top-14 w-56 rounded-xl shadow-xl border 
                ${
                  isDark
                    ? "bg-[#0f172a] border-slate-700"
                    : "bg-white border-gray-200"
                }
              `}
            >
              <p className="px-4 py-3 font-semibold border-b border-slate-700">
                My Account
              </p>

              <button className="flex items-center gap-3 px-4 py-3 w-full hover:bg-slate-800">
                <FiUser />
                Profile
              </button>

              <button className="flex items-center gap-3 px-4 py-3 w-full hover:bg-slate-800">
                <FiSettings />
                Settings
              </button>

              <button
                onClick={() => (window.location.href = "/")}
                className="flex items-center gap-3 px-4 py-3 w-full text-red-400 hover:bg-slate-800 border-t border-slate-700"
              >
                <FiLogOut />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
