import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://harsh-portfolio-flpe.onrender.com/api/admin/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      navigate("/admin/dashboard");

    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="bg-white/5 border border-gray-800 rounded-xl p-8 backdrop-blur-md w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center">
          Admin <span className="text-blue-500">Login</span>
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
        >
          Login
        </button>
      </form>
    </section>
  );
}

export default AdminLogin;
