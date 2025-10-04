// import React from "react";
// import "./globals.css";
// import { Navbar } from "@/components/NavBar";
// import { Footer } from "@/components/Footer";

// export const metadata = {
//   title: "Blog Application",
//   description: "We Learn always useful content",
// };

// type Props = {
//   children: React.ReactNode;
// };

// export default function RootLayout({ children }: Props) {
//   return (
//     <html lang="en">
//       <head />
//       <body className="min-h-screen flex flex-col bg-gray-50 text-slate-800">
//         <Navbar />
//         <main className="flex-1 container mx-auto px-4 py-10 max-w-7xl">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import { HeaderTop } from "@/components/HeaderTop";
import "./globals.css";
import { Navbar } from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "BlogSphere",
  description: "Next.js 15 Blog layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Top Gradient Header */}
        <HeaderTop />

        {/* Sticky Bottom Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
