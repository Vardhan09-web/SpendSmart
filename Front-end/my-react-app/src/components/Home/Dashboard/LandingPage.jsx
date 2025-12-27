export default function LandingPage() {
    return (
        <main className="pt-20 bg-gradient-to-b from-white to-emerald-50 text-gray-800">
            {/* -------------------- Hero Section -------------------- */}
            <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
                {/* Text Section */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Manage your money{" "}
                        <span className="text-emerald-600">the smart way</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                        SpendSmart helps you track expenses, control budgets, and build financial confidence
                        with clear insights and real-time updates.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4 mt-6">
                        <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
                            Get Started →
                        </button>
                        <button className="border border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Preview Card */}
                <div className="flex-1">
                    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md mx-auto border border-gray-100">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-100 to-blue-100 mb-4">
                            <h3 className="text-gray-800 font-semibold">Total Balance</h3>
                            <p className="text-3xl font-bold text-gray-900 mt-2">$12,450.00</p>
                            <p className="text-emerald-600 text-sm font-medium">+12.5% from last month</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-white shadow-sm text-center">
                                <p className="text-gray-600 font-medium">Income</p>
                                <p className="text-emerald-600 font-bold text-lg">$5,200</p>
                            </div>
                            <div className="p-4 rounded-xl bg-white shadow-sm text-center">
                                <p className="text-gray-600 font-medium">Expenses</p>
                                <p className="text-red-500 font-bold text-lg">$3,450</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* -------------------- Features Section -------------------- */}
            <section id="features" className="max-w-7xl mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                    Powerful Features for Smarter Finance
                </h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { title: "Expense Tracking", icon: "💰", text: "Record and monitor every transaction effortlessly." },
                        { title: "Budget Insights", icon: "📊", text: "Set budgets and get real-time spending insights." },
                        { title: "Spending Alerts", icon: "🔔", text: "Instant notifications when you exceed limits." },
                        { title: "Secure Access", icon: "🔒", text: "Keep your financial data safe with robust security." },
                    ].map((feature, i) => (
                        <div key={i} className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
                            <div className="text-4xl">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mt-4 text-emerald-600">{feature.title}</h3>
                            <p className="text-gray-600 mt-2">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* -------------------- How It Works Section -------------------- */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <span className="text-emerald-600 bg-emerald-100 px-4 py-1 rounded-full font-medium text-sm">
                        Simple Process
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                        How It Works
                    </h2>
                    <p className="text-gray-600 mb-12">
                        Get started in just 3 simple steps and take control of your finances today.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        {/* Left Side - Illustration */}
                        <div className="bg-white shadow-xl rounded-2xl p-8 flex justify-center items-center w-full md:w-1/2">
                            <img
                                src="https://preview--spend-smart-ai-57.lovable.app/assets/how-it-works-Czy6mFC7.jpg"
                                alt="Process"
                                className="rounded-xl object-cover"
                            />
                        </div>

                        {/* Right Side - Steps */}
                        <div className="flex flex-col items-start w-full md:w-1/2 gap-8">
                            {[
                                {
                                    step: "01",
                                    title: "Login Securely",
                                    text: "Create your account with secure authentication."
                                },
                                {
                                    step: "02",
                                    title: "Track & Analyze",
                                    text: "Add expenses and let AI categorize them automatically."
                                },
                                {
                                    step: "03",
                                    title: "Save Smarter",
                                    text: "Get AI-powered insights to optimize your spending."
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="bg-emerald-100 text-emerald-700 font-bold rounded-full w-12 h-12 flex items-center justify-center">
                                        {item.step}
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-lg">{item.title}</h3>
                                        <p className="text-gray-600">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* -------------------- Perfect For Everyone Section -------------------- */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                        Perfect For Everyone
                    </h2>
                    <p className="text-gray-600 text-center mb-12">
                        Whether you're a student managing allowances, a family tracking household expenses,
                        or a professional optimizing finances — SpendSmart is made for you.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-10">
                        {/* Left Image */}
                        <div className="flex-1">
                            <img
                                src="https://preview--spend-smart-ai-57.lovable.app/assets/target-users-C48M2cqU.jpg"
                                alt="People using SpendSmart"
                                className="rounded-2xl shadow-lg object-cover"
                            />
                        </div>

                        {/* Right Info */}
                        <div className="flex-1 flex flex-col gap-6">
                            {[
                                {
                                    title: "Students",
                                    text: "Manage limited budgets and track educational expenses.",
                                    icon: "🎓",
                                },
                                {
                                    title: "Families",
                                    text: "Handle household finances and family budgeting needs.",
                                    icon: "👨‍👩‍👧‍👦",
                                },
                                {
                                    title: "Professionals",
                                    text: "Track business expenses and optimize personal finances.",
                                    icon: "💼",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition"
                                >
                                    <div className="text-3xl">{item.icon}</div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                                        <p className="text-gray-600">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* -------------------- Call To Action -------------------- */}
            <section className="bg-emerald-600 text-white text-center py-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to take control of your finances?
                </h2>
                <p className="text-lg text-emerald-100 mb-8">
                    Join SpendSmart today and start tracking your money smarter.
                </p>
                <button className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Start Managing Now →
                </button>
            </section>

            {/* -------------------- Footer Section -------------------- */}
<footer className="bg-gray-50 border-t border-gray-200 py-12">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
    {/* Brand Info */}
    <div>
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-emerald-600 text-white p-2 rounded-lg text-lg font-bold">$</div>
        <h2 className="text-xl font-bold text-gray-800">SpendSmart</h2>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        Your intelligent financial companion for smarter spending decisions.
      </p>
    </div>

    {/* Product Links */}
    <div>
      <h3 className="text-gray-800 font-semibold mb-3">Product</h3>
      <ul className="space-y-2 text-gray-600">
        <li><a href="#" className="hover:text-emerald-600 transition">Features</a></li>
        <li><a href="#" className="hover:text-emerald-600 transition">Preview</a></li>
        <li><a href="#" className="hover:text-emerald-600 transition">Dashboard</a></li>
      </ul>
    </div>

    {/* Company Links */}
    <div>
      <h3 className="text-gray-800 font-semibold mb-3">Company</h3>
      <ul className="space-y-2 text-gray-600">
        <li><a href="#" className="hover:text-emerald-600 transition">About</a></li>
        <li><a href="#" className="hover:text-emerald-600 transition">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-emerald-600 transition">Contact</a></li>
      </ul>
    </div>

    {/* Connect Links */}
    <div>
      <h3 className="text-gray-800 font-semibold mb-3">Connect</h3>
      <div className="flex gap-4">
        <a href="#" className="p-2 bg-white shadow-md rounded-lg hover:bg-emerald-100 transition">
          <i className="fa-brands fa-github text-gray-700 text-xl"></i>
        </a>
        <a href="#" className="p-2 bg-white shadow-md rounded-lg hover:bg-emerald-100 transition">
          <i className="fa-brands fa-linkedin text-gray-700 text-xl"></i>
        </a>
        <a href="#" className="p-2 bg-white shadow-md rounded-lg hover:bg-emerald-100 transition">
          <i className="fa-brands fa-twitter text-gray-700 text-xl"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Bottom */}
  <div className="text-center text-gray-500 text-sm mt-10">
    © {new Date().getFullYear()} SpendSmart. All rights reserved.
  </div>
</footer>

        </main>
    );
}


