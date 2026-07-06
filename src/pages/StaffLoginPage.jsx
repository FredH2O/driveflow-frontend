import { useState } from "react";

function StaffLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      localStorage.setItem("token", data.token);
      localStorage.setItem("staff", email);
      window.location.href = "/dashboard";
    } else {
      console.log("Login failed", data);
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
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-emerald-500 transition"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-emerald-500 transition"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition font-medium tracking-wide"
          >
            Enter Dashboard
          </button>
        </form>
      </div>
    </section>
  );
}

export default StaffLoginPage;
