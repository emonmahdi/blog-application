// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";

// interface AuthFormProps {
//   type: "login" | "register";
//   onSubmit: (data: { email: string; password: string; name?: string }) => Promise<void>;
// }

// const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       await onSubmit({ email, password, name });
//       router.push("/"); // redirect after success
//     } catch (err: any) {
//       setError(err.message || "Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-xl p-8"
//     >
//       <h2 className="text-2xl font-bold text-[var(--heading)] text-center mb-6">
//         {type === "login" ? "Welcome Back 👋" : "Create an Account ✍️"}
//       </h2>

//       {error && (
//         <div className="bg-red-100 text-red-600 text-sm rounded-lg p-3 mb-4">
//           {error}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {type === "register" && (
//           <div>
//             <label className="block text-sm font-medium mb-1">Full Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] outline-none"
//               placeholder="John Doe"
//               required
//             />
//           </div>
//         )}

//         <div>
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] outline-none"
//             placeholder="you@example.com"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary)] outline-none"
//             placeholder="********"
//             required
//           />
//         </div>

//         <motion.button
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.98 }}
//           disabled={loading}
//           type="submit"
//           className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition-colors"
//         >
//           {loading ? "Processing..." : type === "login" ? "Login" : "Register"}
//         </motion.button>
//       </form>

//       <p className="text-sm text-center text-gray-500 mt-6">
//         {type === "login" ? (
//           <>
//             Don’t have an account?{" "}
//             <a href="/register" className="text-[var(--primary)] hover:underline">
//               Sign up
//             </a>
//           </>
//         ) : (
//           <>
//             Already have an account?{" "}
//             <a href="/login" className="text-[var(--primary)] hover:underline">
//               Login
//             </a>
//           </>
//         )}
//       </p>
//     </motion.div>
//   );
// };

// export default AuthForm;
// components/AuthForm.tsx
"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

type Props = {
  type: "login" | "register";
  onSubmit: (payload: {
    name?: string;
    email: string;
    password: string;
  }) => Promise<void>;
};

export default function AuthForm({ type, onSubmit }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setMsg(null);
    setLoading(true);
    try {
      const payload: any = { email, password };
      if (type === "register") payload.name = name;
      await onSubmit(payload);
      setMsg("Success");
    } catch (err: any) {
      setMsg(err.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="max-w-md w-full mx-auto bg-white rounded-2xl shadow p-8"
    >
      <h2 className="text-2xl font-bold mb-4">
        {type === "login" ? "Login" : "Register"}
      </h2>
      {msg && <div className="mb-3 text-sm text-red-600">{msg}</div>}
      <form onSubmit={submit} className="space-y-4">
        {type === "register" && (
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border rounded"
            />
          </div>
        )}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="w-full mt-1 px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            className="w-full mt-1 px-4 py-2 border rounded"
          />
        </div>

        <button
          disabled={loading}
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          {loading ? "Processing..." : type === "login" ? "Login" : "Register"}
        </button>
      </form>
    </motion.div>
  );
}
