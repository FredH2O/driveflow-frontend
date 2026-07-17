import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function StaffLoginPage() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "http://driveflow-backend.local/wp-json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      },
    );

    const data = await res.json();

    if (data.token) {
      const storage = rememberMe ? localStorage : sessionStorage;

      storage.setItem("token", data.token);
      storage.setItem("staff_email", data.user_email);
      storage.setItem("staff_name", data.user_display_name);
      storage.setItem("staff_nicename", data.user_nicename);

      login();
      navigate("/dashboard");
    } else {
      alert("Login failed", data);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-100 px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-2xl font-semibold tracking-wide mb-6">
          Staff Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-purple-500 transition"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-purple-500 transition"
          />

          <label
            htmlFor=""
            className="flex items-center gap-2 text-sm text-zinc-400 cursor-pointer"
          >
            <input
              className="accent-purple-600"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me on this device
          </label>

          <button
            type="submit"
            className="w-full cursor-pointer py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition font-medium tracking-wide"
          >
            Enter Dashboard
          </button>
        </form>
      </div>
    </section>
  );
}

export default StaffLoginPage;
