export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-extrabold text-emerald-600">
          💲 <span className="text-gray-900">SpendSmart</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-gray-800 font-medium">
          <a href="#features" className="hover:text-emerald-600 transition-colors">
            Features
          </a>
          <a href="#preview" className="hover:text-emerald-600 transition-colors">
            Preview
          </a>
          <a href="#testimonials" className="hover:text-emerald-600 transition-colors">
            Testimonials
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 items-center">
          <button className="text-gray-800 font-medium hover:text-emerald-600 transition-colors">
            Login
          </button>
          <button className="bg-emerald-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
