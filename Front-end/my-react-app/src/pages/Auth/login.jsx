import { FiMail, FiLock } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {

  const redirectGoogle = () => {
    window.location.href = "https://accounts.google.com";
  };

  const redirectLinkedIn = () => {
    window.location.href = "https://www.linkedin.com/login";
  };

  const redirectGithub = () => {
    window.location.href = "https://github.com/login";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center
      bg-gray-100 dark:bg-[#020617] transition-colors"
    >
      {/* Card Animation */}
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white dark:bg-[#0f172a]
        rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-slate-700"
      >
        <h2 className="text-2xl sm:text-2xl text-center font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
          Login
        </h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1">
          Login to continue
        </p>

        {/* Email */}
        <div className="mt-6">
          <label className="text-sm text-white font-medium">Email</label>
          <div className="relative mt-1">
            <FiMail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full pl-10 py-2 rounded-lg border dark:border-slate-600
              bg-gray-50 dark:bg-[#020617] dark:text-white"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mt-4">
          <label className="text-sm text-white font-medium">Password</label>
          <div className="relative mt-1">
            <FiLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="••••••••"
              className="w-full pl-10 py-2 rounded-lg border dark:border-slate-600
              bg-gray-50 dark:bg-[#020617] dark:text-white"
            />
          </div>
        </div>

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="w-full mt-6 py-2 rounded-lg
          bg-gradient-to-r from-emerald-500 to-blue-500
          text-white font-semibold"
        >
          Login
        </motion.button>

        {/* OR */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300 dark:bg-slate-700" />
          <span className="text-sm text-white">OR</span>
          <div className="flex-1 h-px bg-gray-300 dark:bg-slate-700" />
        </div>

        {/* Social Login */}
        <div className="flex flex-col gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={redirectGoogle}
            className="flex items-center justify-center gap-2 border text-white rounded-lg py-2"
          >
            <FcGoogle />
            Sign in with Google
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={redirectLinkedIn}
            className="flex items-center justify-center gap-2 border text-white rounded-lg py-2"
          >
            <FaLinkedin />
            Sign in with LinkedIn
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={redirectGithub}
            className="flex items-center justify-center gap-2 border text-white rounded-lg py-2"
          >
            <FaGithub />
            Sign in with GitHub
          </motion.button>
        </div>

        {/* Register */}
        <p className="text-sm text-center mt-6 text-gray-500 dark:text-gray-400">
          Don’t have an account?
          <Link
            to="/register"
            className="text-blue-500 font-medium ml-1 hover:underline"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Login;
