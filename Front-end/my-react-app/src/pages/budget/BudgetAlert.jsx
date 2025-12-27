import { AlertTriangle } from "lucide-react";

export default function BudgetAlert({ title, description, isDark }) {
  return (
    <div
      className={`flex gap-4 items-start p-4 rounded-2xl border ${
        isDark
          ? "border-red-500/40 bg-red-500/10"
          : "border-red-300 bg-red-50"
      }`}
    >
      <AlertTriangle className="text-red-500 mt-1" />
      <div>
        <h4 className="font-semibold text-red-500">{title}</h4>
        <p className={isDark ? "text-slate-300" : "text-gray-700"}>
          {description}
        </p>
      </div>
    </div>
  );
}
