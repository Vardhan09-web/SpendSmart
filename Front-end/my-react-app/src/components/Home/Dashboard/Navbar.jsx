import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1220]/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 text-2xl font-extrabold">
          <span className="text-[#14b8a6] text-3xl">$</span>
          <span className="bg-linear-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent font-bold text-3xl transtion">SpendSmart</span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex gap-10 text-gray-400 font-medium">

          <a href="#home" className="hover:text-[#14b8a6] transition">
            Home
          </a>

          <a href="#features" className="hover:text-[#14b8a6] transition">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-[#14b8a6] transition">
            How It Works
          </a>

        </div>

        {/* Buttons */}
        <div className="flex gap-5 items-center">
          <Link
            to="/login"
            className="text-gray-400 font-medium hover:text-[#14b8a6] transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-[#14b8a6] text-black px-6 py-2 rounded-lg font-semibold 
            hover:bg-emerald-400 transition shadow-md"
          >
            Get Started
          </Link>
        </div>

      </div>
    </nav>
  );
}