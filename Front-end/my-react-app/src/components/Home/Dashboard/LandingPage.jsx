import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <main className="pt-20 bg-[#0B1220] text-gray-200">

            {/* HERO SECTION */}
            <section
                id="home"
                className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10"
            >

                {/* Text Section */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Manage your money{" "}
                        <span className="text-[#14b8a6]">the smart way</span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0">
                        SpendSmart helps you track expenses, control budgets, and build financial confidence with real-time insights.
                    </p>

                    <div className="flex justify-center md:justify-start gap-4 mt-6">
                        <button
                            onClick={() => navigate("/login")}
                            className="bg-[#14b8a6] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#2563eb] transition"
                        >
                            Get Started →
                        </button>

                        <button className="border border-gray-700 px-6 py-3 rounded-lg font-semibold text-gray-300 hover:bg-[#111827] transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Preview Card */}
                <div className="flex-1">
                    <div className="bg-[#111827] rounded-2xl shadow-xl p-6 w-full max-w-md mx-auto border border-gray-700">

                        <div className="p-4 rounded-xl bg-linear-to-r from-[#14b8a6] to-[#2563eb] mb-4 text-black">
                            <h3 className="font-semibold">Total Balance</h3>
                            <p className="text-3xl font-bold mt-2">$12,450.00</p>
                            <p className="text-sm font-medium">+12.5% from last month</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-[#0B1220] text-center">
                                <p className="text-gray-400 font-medium">Income</p>
                                <p className="text-[#14b8a6] font-bold text-lg">$5,200</p>
                            </div>

                            <div className="p-4 rounded-xl bg-[#0B1220] text-center">
                                <p className="text-gray-400 font-medium">Expenses</p>
                                <p className="text-red-500 font-bold text-lg">$3,450</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section id="features" className="max-w-7xl mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Powerful Features for Smarter Finance
                </h2>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { title: "Expense Tracking", icon: "💰", text: "Record and monitor every transaction effortlessly." },
                        { title: "Budget Insights", icon: "📊", text: "Set budgets and get real-time spending insights." },
                        { title: "Spending Alerts", icon: "🔔", text: "Instant notifications when you exceed limits." },
                        { title: "Secure Access", icon: "🔒", text: "Keep your financial data safe with robust security." },
                    ].map((feature, i) => (
                        <div key={i} className="bg-[#111827] border border-gray-700 rounded-xl p-6 hover:border-[#14b8a6] transition">
                            <div className="text-4xl">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mt-4 text-[#14b8a6]">{feature.title}</h3>
                            <p className="text-gray-400 mt-2">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section
                id="how-it-works"
                className="bg-[#0F172A] py-20 scroll-mt-24"
            >
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <span className="text-[#14b8a6] bg-[#111827] px-4 py-1 rounded-full font-medium text-sm">
                        Simple Process
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">How It Works</h2>

                    <p className="text-gray-400 mb-12">
                        Get started in just 3 simple steps and take control of your finances today.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">

                        {/* Image */}
                        <div className="bg-[#111827] shadow-xl rounded-2xl p-8 w-full md:w-1/2">
                            <img
                                src="https://preview--spend-smart-ai-57.lovable.app/assets/how-it-works-Czy6mFC7.jpg"
                                alt="Process"
                                className="rounded-xl object-cover"
                            />
                        </div>

                        {/* Steps */}
                        <div className="flex flex-col items-start w-full md:w-1/2 gap-8">
                            {[
                                { step: "01", title: "Login Securely", text: "Create your account with secure authentication." },
                                { step: "02", title: "Track & Analyze", text: "Add expenses and let AI categorize them automatically." },
                                { step: "03", title: "Save Smarter", text: "Get AI-powered insights to optimize your spending." },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="bg-[#111827] text-[#14b8a6] font-bold rounded-full w-12 h-12 flex items-center justify-center border border-gray-700">
                                        {item.step}
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-semibold text-lg">{item.title}</h3>
                                        <p className="text-gray-400">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-linear-to-r from-[#14b8a6] to-[#2563eb] text-black text-center py-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to take control of your finances?
                </h2>
                <p className="text-lg mb-8">
                    Join SpendSmart today and start tracking your money smarter.
                </p>

                <button
                    onClick={() => navigate("/login")}
                    className="bg-[#0B1220] text-white px-8 py-3 rounded-lg font-semibold hover:bg-black transition"
                >
                    Start Managing Now →
                </button>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#0B1220] border-t border-gray-700 py-12 text-gray-400">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-[#14b8a6] text-black p-2 rounded-lg font-bold">$</div>
                            <h2 className="text-xl font-bold text-gray-200">SpendSmart</h2>
                        </div>
                        <p className="text-sm">
                            Your intelligent financial companion for smarter spending decisions.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-gray-200 font-semibold mb-3">Product</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-[#14b8a6] cursor-pointer">Features</li>
                            <li className="hover:text-[#14b8a6] cursor-pointer">Preview</li>
                            <li className="hover:text-[#14b8a6] cursor-pointer">Dashboard</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-gray-200 font-semibold mb-3">Company</h3>
                        <ul className="space-y-2">
                            <li className="hover:text-[#14b8a6] cursor-pointer">About</li>
                            <li className="hover:text-[#14b8a6] cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-[#14b8a6] cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-gray-200 font-semibold mb-3">Connect</h3>
                        <div className="flex gap-4">
                            <div className="flex gap-4 mt-6">
                                <a
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    className="p-2 bg-white shadow-md rounded-lg hover:bg-emerald-100 transition"
                                >
                                    <i className="fa-brands fa-github text-gray-700 text-xl"></i>
                                </a>

                                <a
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    className="p-2 bg-white shadow-md rounded-lg hover:bg-emerald-100 transition"
                                >
                                    <i className="fa-brands fa-linkedin text-gray-700 text-xl"></i>
                                </a>

                                <a
                                    href="https://twitter.com/yourusername"
                                    target="_blank"
                                    className="p-2 bg-white shadow-md rounded-lg hover:bg-emerald-100 transition"
                                >
                                    <i className="fa-brands fa-twitter text-gray-700 text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-500 text-sm mt-10">
                    © {new Date().getFullYear()} SpendSmart. All rights reserved.
                </div>
            </footer>

        </main>
    );
}