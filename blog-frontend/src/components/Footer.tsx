import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t mt-auto">
      <div className="container mx-auto px-4 py-6 max-w-7xl text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
