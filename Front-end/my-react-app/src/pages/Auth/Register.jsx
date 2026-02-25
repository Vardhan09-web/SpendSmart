// import { Link } from "react-router-dom";
// import { FiUser, FiMail, FiPhone, FiLock } from "react-icons/fi";
// import { useState } from "react";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     role: "",
//     password: "",
//     confirmPassword: "",
//     terms: false,
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm({
//       ...form,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validation
//     if (
//       !form.name ||
//       !form.email ||
//       !form.phone ||
//       !form.role ||
//       !form.password ||
//       !form.confirmPassword
//     ) {
//       setError(" Please fill in all required fields.");
//       return;
//     }

//     if (form.password !== form.confirmPassword) {
//       setError(" Passwords do not match.");
//       return;
//     }

//     if (!form.terms) {
//       setError(" Please accept the Terms & Conditions.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         "http://localhost:8080/api/users/register",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             name: form.name,
//             email: form.email,
//             phone: form.phone,
//             role: form.role,
//             password: form.password,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Registration failed");
//       }

//       const data = await response.json();

//       setError("");
//       alert(" Registration successful!");
//       console.log("Saved user:", data);

//       // Optional: reset form
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         role: "",
//         password: "",
//         confirmPassword: "",
//         terms: false,
//       });

//     } catch (err) {
//       setError(" Something went wrong. Try again.");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#020617] transition-colors">
//       <div className="w-full max-w-md bg-white dark:bg-[#0f172a] rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-slate-700">

//         <h2 className="text-2xl text-center font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
//           Create Account
//         </h2>

//         <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1">
//           Register to get started
//         </p>

//         {error && (
//           <div className="mt-4 p-3 rounded-lg bg-red-100 text-red-700 text-sm">
//             {error}
//           </div>
//         )}

//         {/* FORM START */}
//         <form onSubmit={handleSubmit}>

//           {/* Full Name */}
//           <div className="mt-4">
//             <label className="text-sm font-medium dark:text-white">Full Name</label>
//             <div className="relative mt-1">
//               <FiUser className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="John Doe"
//                 className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 dark:bg-[#020617] border border-gray-300 dark:border-slate-600 dark:text-white"
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div className="mt-4">
//             <label className="text-sm font-medium dark:text-white">Email</label>
//             <div className="relative mt-1">
//               <FiMail className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 name="email"
//                 type="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="you@example.com"
//                 className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 dark:bg-[#020617] border border-gray-300 dark:border-slate-600 dark:text-white"
//               />
//             </div>
//           </div>

//           {/* Phone */}
//           <div className="mt-4">
//             <label className="text-sm font-medium dark:text-white">Phone Number</label>
//             <div className="relative mt-1">
//               <FiPhone className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 name="phone"
//                 value={form.phone}
//                 onChange={handleChange}
//                 placeholder="+91 9876543210"
//                 className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 dark:bg-[#020617] border border-gray-300 dark:border-slate-600 dark:text-white"
//               />
//             </div>
//           </div>

//           {/* Role */}
//           <div className="mt-4">
//             <label className="text-sm font-medium dark:text-white">Account Type</label>
//             <select
//               name="role"
//               value={form.role}
//               onChange={handleChange}
//               className="w-full mt-1 px-3 py-2 rounded-lg bg-gray-50 dark:bg-[#020617] border border-gray-300 dark:border-slate-600 dark:text-white"
//             >
//               <option value="" disabled hidden>Select Role</option>
//               <option>User</option>
//               <option>Admin</option>
//             </select>
//           </div>

//           {/* Password */}
//           <div className="mt-4">
//             <label className="text-sm font-medium dark:text-white">Password</label>
//             <div className="relative mt-1">
//               <FiLock className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 name="password"
//                 type="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 dark:bg-[#020617] border border-gray-300 dark:border-slate-600 dark:text-white"
//               />
//             </div>
//           </div>

//           {/* Confirm Password */}
//           <div className="mt-4">
//             <label className="text-sm font-medium dark:text-white">Confirm Password</label>
//             <div className="relative mt-1">
//               <FiLock className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 name="confirmPassword"
//                 type="password"
//                 value={form.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 dark:bg-[#020617] border border-gray-300 dark:border-slate-600 dark:text-white"
//               />
//             </div>
//           </div>

//           {/* Terms */}
//           <div className="flex items-center gap-2 mt-4">
//             <input
//               type="checkbox"
//               name="terms"
//               checked={form.terms}
//               onChange={handleChange}
//             />
//             <span className="text-sm text-gray-600 dark:text-gray-400">
//               I agree to the Terms & Conditions
//             </span>
//           </div>

//           {/* Register Button */}
//           <button
//             type="submit"
//             className="w-full mt-6 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold hover:opacity-90 transition"
//           >
//             Register
//           </button>

//         </form>
//         {/* FORM END */}

//         <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-6">
//           Already have an account?
//           <Link to="/login" className="text-blue-500 hover:underline ml-1">
//             Login
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Register;


// import { Link } from "react-router-dom";
// import { FiUser, FiMail, FiPhone, FiLock } from "react-icons/fi";
// import { useState } from "react";

// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     role: "",
//     password: "",
//     confirmPassword: "",
//     terms: false,
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm({ ...form, [name]: type === "checkbox" ? checked : value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.phone || !form.role || !form.password || !form.confirmPassword) {
//       setError("Please fill all required fields.");
//       return;
//     }

//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       return;
//     }

//     if (!form.terms) {
//       setError("Accept Terms & Conditions.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:8080/api/users/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: form.name,
//           email: form.email,
//           phone: form.phone,
//           role: form.role,
//           password: form.password,
//         }),
//       });

//       if (!response.ok) throw new Error("Failed");

//       alert("Registration Successful!");
//       setForm({
//         name: "",
//         email: "",
//         phone: "",
//         role: "",
//         password: "",
//         confirmPassword: "",
//         terms: false,
//       });
//       setError("");

//     } catch {
//       setError("Something went wrong.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-[#020617] flex items-center justify-center p-4">

//       <div className="bg-white dark:bg-[#0f172a] shadow-2xl rounded-2xl w-full max-w-4xl grid md:grid-cols-2 overflow-hidden">

//         {/* LEFT BRAND PANEL */}
//         <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-emerald-500 to-blue-600 p-10 text-white">
//           <h1 className="text-3xl font-bold">SpendSmart 💰</h1>
//           <p className="mt-4 text-sm opacity-90">
//             Smart expense tracking and budget management platform.
//           </p>

//           <div className="mt-6 text-sm space-y-2">
//             <p>✔ Track Expenses</p>
//             <p>✔ Smart Analytics</p>
//             <p>✔ Budget Planning</p>
//           </div>
//         </div>

//         {/* RIGHT FORM SECTION */}
//         <div className="p-8">

//           {/* Mobile Logo */}
//           <h2 className="md:hidden text-xl font-bold text-center bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
//             SpendSmart
//           </h2>

//           <h3 className="text-2xl font-bold text-center mt-2 text-gray-800 dark:text-white">
//             Create Account
//           </h3>

//           <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1">
//             Register to get started
//           </p>

//           {error && (
//             <div className="mt-4 p-3 bg-red-100 text-red-700 text-sm rounded-lg">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">

//             {/* Full Name */}
//             <div>
//               <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Full Name
//               </label>
//               <div className="relative mt-1">
//                 <FiUser className="absolute left-3 top-3 text-gray-400" />
//                 <input
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   placeholder="John Doe"
//                   className="w-full pl-10 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 
//                   bg-gray-50 dark:bg-[#020617] 
//                   text-gray-900 dark:text-white 
//                   placeholder-gray-400 dark:placeholder-gray-500"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Email
//               </label>
//               <div className="relative mt-1">
//                 <FiMail className="absolute left-3 top-3 text-gray-400" />
//                 <input
//                   name="email"
//                   type="email"
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="you@example.com"
//                   className="w-full pl-10 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 
//                   bg-gray-50 dark:bg-[#020617] 
//                   text-gray-900 dark:text-white 
//                   placeholder-gray-400 dark:placeholder-gray-500"
//                 />
//               </div>
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Phone
//               </label>
//               <div className="relative mt-1">
//                 <FiPhone className="absolute left-3 top-3 text-gray-400" />
//                 <input
//                   name="phone"
//                   value={form.phone}
//                   onChange={handleChange}
//                   placeholder="+91 9876543210"
//                   className="w-full pl-10 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 
//                   bg-gray-50 dark:bg-[#020617] 
//                   text-gray-900 dark:text-white 
//                   placeholder-gray-400 dark:placeholder-gray-500"
//                 />
//               </div>
//             </div>

//             {/* Role */}
//             <div>
//               <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Account Type
//               </label>
//               <select
//                 name="role"
//                 value={form.role}
//                 onChange={handleChange}
//                 className="w-full mt-1 py-2.5 px-3 rounded-lg border border-gray-300 dark:border-slate-600 
//                 bg-gray-50 dark:bg-[#020617] 
//                 text-gray-900 dark:text-white"
//               >
//                 <option value="">Select Role</option>
//                 <option>User</option>
//                 <option>Admin</option>
//               </select>
//             </div>

//             {/* Password */}
//             <div>
//               <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Password
//               </label>
//               <div className="relative mt-1">
//                 <FiLock className="absolute left-3 top-3 text-gray-400" />
//                 <input
//                   name="password"
//                   type="password"
//                   value={form.password}
//                   onChange={handleChange}
//                   className="w-full pl-10 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 
//                   bg-gray-50 dark:bg-[#020617] 
//                   text-gray-900 dark:text-white"
//                 />
//               </div>
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Confirm Password
//               </label>
//               <div className="relative mt-1">
//                 <FiLock className="absolute left-3 top-3 text-gray-400" />
//                 <input
//                   name="confirmPassword"
//                   type="password"
//                   value={form.confirmPassword}
//                   onChange={handleChange}
//                   className="w-full pl-10 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 
//                   bg-gray-50 dark:bg-[#020617] 
//                   text-gray-900 dark:text-white"
//                 />
//               </div>
//             </div>

//             {/* Terms */}
//             <div className="col-span-2 flex items-center gap-2 mt-2">
//               <input
//                 type="checkbox"
//                 name="terms"
//                 checked={form.terms}
//                 onChange={handleChange}
//               />
//               <span className="text-sm text-gray-600 dark:text-gray-400">
//                 I agree to Terms & Conditions
//               </span>
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               className="col-span-2 w-full py-2.5 rounded-lg 
//               bg-gradient-to-r from-emerald-500 to-blue-500 
//               text-white font-semibold 
//               hover:opacity-90 transition"
//             >
//               Register
//             </button>
//           </form>

//           <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-6">
//             Already have an account?
//             <Link to="/login" className="text-emerald-500 hover:underline ml-1">
//               Login
//             </Link>
//           </p>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


import { Link } from "react-router-dom";
import { FiUser, FiMail, FiPhone, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.role || !form.password || !form.confirmPassword) {
      setError("Please fill all required fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!form.terms) {
      setError("Accept Terms & Conditions.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          role: form.role,
          password: form.password,
        }),
      });

      if (!response.ok) throw new Error("Failed");

      alert("Registration Successful!");
      setForm({
        name: "",
        email: "",
        phone: "",
        role: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });
      setError("");
    } catch {
      setError("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#020617] flex items-center justify-center p-4">

      {/* MAIN CARD */}
      <div className="bg-white dark:bg-[#0f172a] shadow-2xl rounded-2xl w-full max-w-5xl grid md:grid-cols-[1fr_1.4fr] overflow-hidden">

        {/* LEFT PANEL (SMALLER NOW) */}
        <div className="hidden md:flex flex-col justify-center bg-linear-to-br from-emerald-500 to-blue-600 p-8 text-white">
          <h1 className="text-3xl font-bold">SpendSmart 💰</h1>
          <p className="mt-4 text-sm opacity-90">
            Smart expense tracking and budget management platform.
          </p>

          <div className="mt-6 text-sm space-y-2">
            <p>✔ Track Expenses</p>
            <p>✔ Smart Analytics</p>
            <p>✔ Budget Planning</p>
          </div>
        </div>

        {/* RIGHT FORM SECTION (WIDER) */}
        <div className="p-10">

          <h2 className="md:hidden text-xl font-bold text-center bg-linear-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
            SpendSmart
          </h2>

          <h3 className="text-2xl font-bold text-center mt-2 text-gray-800 dark:text-white">
            Create Account
          </h3>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-1">
            Register to get started
          </p>

          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 text-sm rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <div className="relative mt-1">
                <FiUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-10 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 
                  bg-gray-50 dark:bg-[#020617] text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <div className="relative mt-1">
                <FiMail className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 
                  bg-gray-50 dark:bg-[#020617] text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone</label>
              <div className="relative mt-1">
                <FiPhone className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="w-full pl-10 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 
                  bg-gray-50 dark:bg-[#020617] text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Account Type</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full mt-1 py-2.5 px-3 rounded-lg border border-gray-300 dark:border-slate-600 
                bg-gray-50 dark:bg-[#020617] text-gray-900 dark:text-white"
              >
                <option value="">Select Role</option>
                <option>User</option>
                <option>Admin</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <div className="relative mt-1">
                <FiLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 
                  bg-gray-50 dark:bg-[#020617] text-gray-900 dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
              <div className="relative mt-1">
                <FiLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 dark:border-slate-600 
                  bg-gray-50 dark:bg-[#020617] text-gray-900 dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="col-span-2 flex items-center gap-2">
              <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                I agree to Terms & Conditions
              </span>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="col-span-2 w-full py-2.5 rounded-lg bg-linear-to-r from-emerald-500 to-blue-500 
              text-white font-semibold hover:opacity-90 transition"
            >
              Register
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-6">
            Already have an account?
            <Link to="/login" className="text-emerald-500 hover:underline ml-1">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;