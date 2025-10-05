// "use client";

// import AuthForm from "@/components/AuthForm";

// const RegisterPage = () => {
//   const handleRegister = async (data: { email: string; password: string; name?: string }) => {
//     const res = await fetch("http://localhost:4000/auth/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data),
//     });

//     if (!res.ok) throw new Error("Registration failed");
//     const result = await res.json();
//     console.log("Register success:", result);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[var(--background)] px-4">
//       <AuthForm type="register" onSubmit={handleRegister} />
//     </div>
//   );
// };

// export default RegisterPage;
// app/(auth)/register/page.tsx
"use client";
import AuthForm from "@/components/AuthForm";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/fetcher";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = async (payload: {
    name?: string;
    email: string;
    password: string;
  }) => {
    await apiFetch("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    // optionally auto-login? your backend returns user; but cookies not set on register — your controller returns 201 user only
    // If you want to auto-login after register, you can call /auth/login next.
    await apiFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    });
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] p-4">
      <AuthForm type="register" onSubmit={handleRegister} />
    </div>
  );
}
