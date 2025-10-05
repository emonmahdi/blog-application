"use client";

import AuthForm from "@/components/AuthForm";

const RegisterPage = () => {
  const handleRegister = async (data: { email: string; password: string; name?: string }) => {
    const res = await fetch("http://localhost:4000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Registration failed");
    const result = await res.json();
    console.log("Register success:", result);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4">
      <AuthForm type="register" onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
