import { useState } from "react";
import { Filter } from "lucide-react";

const CATEGORIES = [
  "Food & Dining",
  "Transportation",
  "Shopping",
  "Utilities",
  "Entertainment",
  "Healthcare",
  "Rent & Housing",
];

const MONTHS = [
  "January 2024",
  "February 2024",
  "March 2024",
  "April 2024",
  "May 2024",
  "June 2024",
];

export default function FiltersBar({ isDark, onApply }) {
  const [month, setMonth] = useState("March 2024");
  const [category, setCategory] = useState("Food & Dining");

  return (
    <div
      className={`rounded-2xl p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-5 items-end border
        ${
          isDark
            ? "bg-gradient-to-r from-[#0f1a2e] via-[#12243a] to-[#0f1a2e] border-teal-500/30"
            : "bg-gradient-to-r from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] border-teal-200"
        }`}
    >
      {/* Month */}
      <div>
        <label
          className={`text-sm font-semibold mb-2 block ${
            isDark ? "text-white" : "text-gray-700"
          }`}
        >
          Month
        </label>

        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className={`w-full px-4 py-3 rounded-xl border outline-none transition
            ${
              isDark
                ? "bg-[#0b1628] border-slate-700 text-white focus:border-teal-400"
                : "bg-white border-gray-300 text-gray-900"
            }`}
        >
          {MONTHS.map((m) => (
            <option
              key={m}
              value={m}
              className={isDark ? "bg-[#0b1628] text-white" : ""}
            >
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* Category */}
      <div>
        <label
          className={`text-sm font-semibold mb-2 block ${
            isDark ? "text-white" : "text-gray-700"
          }`}
        >
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={`w-full px-4 py-3 rounded-xl border outline-none transition
            ${
              isDark
                ? "bg-[#0b1628] border-slate-700 text-white focus:border-teal-400"
                : "bg-white border-gray-300 text-gray-900"
            }`}
        >
          {CATEGORIES.map((c) => (
            <option
              key={c}
              value={c}
              className={isDark ? "bg-[#0b1628] text-white" : ""}
            >
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Button */}
      <button
        onClick={() => onApply(month, category)}
        className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl
                   bg-gradient-to-r from-emerald-500 to-blue-500
                   font-semibold text-white hover:opacity-90 transition"
      >
        <Filter size={18} />
        Apply Filter
      </button>
    </div>
  );
}
