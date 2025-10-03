"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCalendarAlt } from "react-icons/fa";

export const HeaderTop = () => {
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const d = new Date();
    setDateStr(
      d.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    );
  }, []);

  return (
    <header className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-4">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <Link href="#" key={i} className="hover:text-cyan-400 text-lg">
              <Icon />
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Blog<span className="text-cyan-400">Sphere</span>
        </Link>

        {/* Date & Login/Register */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 text-sm md:text-base">
            <FaCalendarAlt /> {dateStr}
          </span>
          <div className="flex gap-2">
            <Link
              href="/login"
              className="px-3 py-1 text-sm bg-white/10 rounded hover:bg-white/20"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-3 py-1 text-sm bg-cyan-500 rounded hover:bg-cyan-600 text-white"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
