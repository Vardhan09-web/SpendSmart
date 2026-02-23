import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      navigate("/login");
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);
    setFormData({
      name: parsedUser.name,
      email: parsedUser.email,
    });
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // 🔥 Update in backend
      const response = await axios.put(
        `http://localhost:8080/api/users/${user.id}`,
        formData
      );

      const updatedUser = response.data;

      // 🔥 Update localStorage
      localStorage.setItem("user", JSON.stringify(updatedUser));

      // 🔥 Update state
      setUser(updatedUser);

      alert("Profile Updated Successfully ✅");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile ❌");
    }
  };

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen pt-20 px-6 bg-gray-100 dark:bg-[#0b1220]">
      <div className="max-w-lg mx-auto bg-white dark:bg-[#111827] p-6 rounded-xl shadow-md">
        
        <h2 className="text-2xl text-white font-bold mb-6 text-center">
          My Profile
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">

          <div>
            <label className="block text-white text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 dark:bg-[#1e293b] dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-white text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 dark:bg-[#1e293b] dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Update Profile
          </button>

        </form>
      </div>
    </div>
  );
};

export default Profile;