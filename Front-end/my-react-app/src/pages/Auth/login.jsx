import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Login = () => {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  // Social Redirects
  const redirectGoogle = () => {
    window.location.href = "https://accounts.google.com";
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!form.email || !form.password) {
  //     setError(" Please fill all fields");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:8080/api/users/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(form)
  //     });

  //     if (!response.ok) {
  //       const msg = await response.text();
  //       throw new Error(msg);
  //     }

  //     const data = await response.text();

  //     alert(" " + data);
  //     setError("");

  //     navigate("/dashboard");

  //   } catch (err) {
  //     setError(" " + err.message);
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.email || !form.password) {
    setError("Please fill all fields");
    return;
  }

  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    if (!response.ok) {
      const msg = await response.text();
      throw new Error(msg);
    }

    // ✅ IMPORTANT: Parse JSON
    const user = await response.json();

    // ✅ Store user in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Optional: store only userId
    localStorage.setItem("userId", user.id);

    setError("");

    alert("Login Successful ✅");

    navigate("/dashboard");

  } catch (err) {
    setError(err.message);
  }
};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#020617]"
    >
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white dark:bg-[#0f172a] rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-2xl text-center font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
          Login
        </h2>

        {error && (
          <div className="mt-4 p-2 bg-red-100 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        {/* FORM WRAPPER */}
        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mt-6">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-[#020617] dark:text-white"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-[#020617] dark:text-white"
            />
          </div>

          {/* Login Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full mt-6 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold"
          >
            Login
          </motion.button>
        </form>

        {/* OR */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-white">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Social Login */}
        <div className="flex flex-col gap-3">
          <button onClick={redirectGoogle} className=" hover:bg-white border rounded-lg py-2 text-white hover:text-black transition-colors duration-200">
            <FcGoogle className="inline mr-2" />
            Sign in with Google
          </button>
        </div>

        <p className="text-sm text-center text-white mt-6">
          Don’t have an account?
          <Link to="/register" className="text-blue-500 ml-1">
            Register
          </Link>
        </p>

      </motion.div>
    </motion.div>
  );
};

export default Login;
