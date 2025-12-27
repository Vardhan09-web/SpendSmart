import { CheckCircle } from "lucide-react";

export default function ReportsToast({ message }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#0f1a2e] text-white px-6 py-4 rounded-xl shadow-xl flex items-center gap-3 animate-fade-in">
      <CheckCircle className="text-emerald-400" />
      <div>
        <p className="font-semibold">Filters Applied!</p>
        <p className="text-sm text-slate-400">{message}</p>
      </div>
    </div>
  );
}
