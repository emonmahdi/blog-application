"use client";

import AuthForm from "@/components/AuthForm";

const LoginPage = () => {
  const handleLogin = async (data: { email: string; password: string }) => {
    const res = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Invalid email or password");
    const result = await res.json();
    console.log("Login success:", result);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4">
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
