import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

const categories = [
  "Food & Dining",
  "Transportation",
  "Entertainment",
  "Shopping",
  "Rent",
  "Utilities",
];

export default function AddBudgetModal({ onClose, isDark }) {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className={`w-full max-w-md rounded-2xl p-6 ${isDark ? "bg-[#0f1a2e]" : "bg-white"}`}>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Add New Budget</h3>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <label className="text-sm font-semibold">Category</label>
        <button
          onClick={() => setOpen(!open)}
          className="w-full mt-2 flex justify-between items-center px-4 py-3 rounded-xl border"
        >
          <span className={category ? "" : "text-gray-400"}>
            {category || "Select category"}
          </span>
          <ChevronDown />
        </button>

        {open && (
          <div className="mt-2 rounded-xl border">
            {categories.map((c) => (
              <div
                key={c}
                onClick={() => {
                  setCategory(c);
                  setOpen(false);
                }}
                className="px-4 py-3 hover:bg-teal-500/10 cursor-pointer"
              >
                {c}
              </div>
            ))}
          </div>
        )}

        <label className="text-sm font-semibold mt-4 block">Budget Limit ($)</label>
        <input
          type="number"
          placeholder="Enter budget limit"
          className="w-full mt-2 px-4 py-3 rounded-xl border"
        />

        <div className="flex gap-4 mt-6">
          <button onClick={onClose} className="flex-1 py-3 rounded-xl border">
            Cancel
          </button>
          <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 font-semibold text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
