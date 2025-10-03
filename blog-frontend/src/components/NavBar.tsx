"use client";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        <Link href="/" className="text-lg font-semibold">
          MyApp
        </Link>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden p-2 border rounded"
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰
        </button>

        {open && (
          <div className="absolute right-4 top-16 w-48 bg-white border shadow-md rounded-md">
            <ul className="flex flex-col p-2 text-sm">
              <li className="py-2">
                <Link href="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link href="/about" onClick={() => setOpen(false)}>
                  About
                </Link>
              </li>
              <li className="py-2">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
