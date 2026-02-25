import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import {
  Plus,
  ChevronDown,
  ArrowDownLeft,
  ArrowUpRight,
} from "lucide-react";

import Sidebar from "../components/User/Dashboard/sidebar";
import Topbar from "../components/User/Dashboard/Topbar";
import { addIncome, addExpense } from "../api/transactionApi";

/* ---------------- CATEGORY DATA ---------------- */

const CATEGORIES = {
  expense: [
    "Groceries",
    "Dining",
    "Transport",
    "Rent",
    "Utilities",
    "Shopping",
    "Healthcare",
    "Entertainment",
  ],
  income: [
    "Salary",
    "Freelance",
    "Bonus",
    "Investment",
    "Refund",
    "Other",
  ],
};

export default function AddTransaction() {
  const [theme, setTheme] = useState("dark");
  const [transactionType, setTransactionType] = useState("expense");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [openCategory, setOpenCategory] = useState(false);

  const isDark = theme === "dark";

  /* ---------- GSAP REFS ---------- */
  const formRef = useRef(null);
  const floatingRef = useRef(null);

  /* ---------- GSAP ANIMATIONS ---------- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (formRef.current) {
        const fields = formRef.current.querySelectorAll(".form-field");
        gsap.fromTo(
          fields,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
          }
        );
      }

      if (floatingRef.current) {
        const coins = floatingRef.current.querySelectorAll(".floating-coin");
        coins.forEach((coin, i) => {
          gsap.to(coin, {
            y: -20,
            duration: 2 + i * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);


  const handleSubmit = async () => {
  try {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("User not logged in");
      return;
    }

    if (!category || !amount || !date) {
      alert("Please fill all required fields");
      return;
    }

    const data =
      transactionType === "income"
        ? {
            title: category,
            category,
            amount: parseFloat(amount),
            incomeDate: date,
          }
        : {
            title: category,
            category,
            amount: parseFloat(amount),
            expenseDate: date,
          };

    if (transactionType === "income") {
      await addIncome(userId, data);
    } else {
      await addExpense(userId, data);
    }

    alert("Transaction Added Successfully ✅");

    // Reset form
    setCategory("");
    setAmount("");
    setDate("");
    setNotes("");

  } catch (error) {
    console.error(error);
    alert("Something went wrong ❌");
  }
};

  return (
    <div
      className={`flex min-h-screen pt-10 transition-colors duration-300 ${
        isDark ? "bg-[#0b1220] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <Sidebar theme={theme} />

      {/* Main */}
      <main className="flex-1 relative">
        <Topbar theme={theme} setTheme={setTheme} />

        {/* Floating Background */}
        <div
          ref={floatingRef}
          className="absolute inset-0 pointer-events-none opacity-20"
        >
          <div className="floating-coin absolute top-20 left-10 text-5xl">💰</div>
          <div className="floating-coin absolute top-40 right-20 text-4xl">💵</div>
          {/* <div className="floating-coin absolute bottom-32 left-1/4 text-4xl">💳</div> */}
          <div className="floating-coin absolute bottom-20 right-1/3 text-5xl">💸</div>
        </div>

        {/* Page Content */}
        <div className="px-4 py-20 flex justify-center relative z-10">
          <div className="w-full max-w-2xl px-4">
            {/* Page Title */}
            <div className="text-center mb-10">
              <h1 className="text-4xl sm:text-4xl font-bold bg-linear-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                Add Transaction
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-400">
                Record your income or expense with ease
              </p>
            </div>

            {/* FORM CARD */}
            <div
              className={`rounded-2xl p-6 sm:p-8 shadow-2xl transition-colors 
                ${
                  isDark
                    ? "bg-linear-to-b from-[#0f1a2e] to-[#0b1220] text-white"
                    : "bg-white text-gray-900"
                }`}
                
            >
              {/* Section Title */}
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-400 rounded-full" />
                Transaction Details
              </h2>

                                  <button
                type="button"
                onClick={() => {
                  setOpenCategory(false);
                  setShowOCR(true);
                }}
                className="w-full mb-4 py-3 rounded-xl border border-teal-400 text-teal-400 hover:bg-teal-400/10 transition"
              >
                📷 Scan Receipt (OCR)
              </button>

              {/* Transaction Type */}
              <div className="mb-6">
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? "text-slate-300" : " text-gray-700"
                  }`}
                >
                  Transaction Type
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setTransactionType("expense");
                      setCategory("");
                    }}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition
                      ${
                        transactionType === "expense"
                          ? "border-red-500 bg-red-500/10"
                          : isDark
                          ? "border-slate-700"
                          : " border-gray-300"
                      }`}
                  >
                    <ArrowDownLeft className="text-red-500" />
                    Expense
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setTransactionType("income");
                      setCategory("");
                    }}
                    className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition
                      ${
                        transactionType === "income"
                          ? "border-emerald-500 bg-emerald-500/10"
                          : isDark
                          ? " border-slate-700"
                          : "border-gray-300"
                      }`}
                  >
                    <ArrowUpRight className="text-emerald-500" />
                    Income
                  </button>
                </div>
              </div>

              {/* Category */}
              <div className="mb-6 relative">
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? "text-slate-300" : " text-gray-700"
                  }`}
                >
                  Category
                </label>

                <button
                  type="button"
                  onClick={() => setOpenCategory(!openCategory)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition
                    ${
                      isDark
                        ? "bg-gray-100 text-gray-900 border-gray-300"
                        : "bg-[#0b1628] text-white border-slate-700"
                    }`}
                >
                  <span className={category ? "" : "text-gray-400"}>
                    {category || "Select category"}
                  </span>
                  <ChevronDown
                    className={`transition-transform ${
                      openCategory ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openCategory && (
                  <div
                    className={`absolute z-50 mt-2 w-full max-h-60 overflow-y-auto rounded-xl border shadow-lg
                      ${
                        isDark
                          ? "bg-white text-gray-900 border-gray-300"
                          : "bg-[#0b1628] text-white border-slate-700"
                      }`}
                  >
                    {CATEGORIES[transactionType].map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          setCategory(item);
                          setOpenCategory(false);
                        }}
                        className="px-4 py-3 cursor-pointer hover:bg-teal-500/10 transition"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Amount */}
              <div className="mb-6">
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? "text-slate-300" : "text-gray-700"
                  }`}
                > 
                  Amount
                </label>

                <input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition
                    ${
                      isDark
                        ? "bg-gray-100 text-gray-900 border-gray-300 focus:border-teal-500"
                        : "bg-[#0b1628] text-white border-slate-700 focus:border-teal-400"
                    }`}
                />
              </div>

              {/* Date */}
              <div className="mb-6">
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? "text-slate-300" : "text-gray-700"
                  }`}
                >
                  Date
                </label>

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition
                    ${
                      isDark
                        ? "bg-gray-100 text-gray-900 border-gray-300 focus:border-teal-500"
                        : "bg-[#0b1628] text-white border-slate-700 focus:border-teal-400"
                    }`}
                />
              </div>

              {/* Notes */}
              <div className="mb-8">
                <label
                  className={`block text-sm font-semibold mb-2 ${
                    isDark ? "text-slate-300" : "text-gray-700"
                  }`}
                >
                  Notes (Optional)
                </label>

                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add any additional notes..."
                  className={`w-full px-4 py-3 rounded-xl border outline-none resize-none transition
                    ${
                      isDark
                        ? "bg-gray-100 text-gray-900 border-gray-300 focus:border-teal-500"
                        : "bg-[#0b1628] text-white border-slate-700 focus:border-teal-400"
                    }`}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl
                           bg-linear-to-r from-emerald-500 to-blue-500
                           font-semibold text-white hover:opacity-90 transition"
              >
                <Plus />
                Add Transaction
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
