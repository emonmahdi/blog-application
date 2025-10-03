// "use client";
// import Link from "next/link";
// import { useState } from "react";

// export function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full border-b bg-white">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
//         <Link href="/" className="text-lg font-semibold">
//           MyApp
//         </Link>

//         <ul className="hidden md:flex items-center gap-6 text-sm">
//           <li>
//             <Link href="/about" className="hover:underline">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="/blog" className="hover:underline">
//               Blog
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="hover:underline">
//               Contact
//             </Link>
//           </li>
//         </ul>

//         <button
//           className="md:hidden p-2 border rounded"
//           onClick={() => setOpen((prev) => !prev)}
//         >
//           ☰
//         </button>

//         {open && (
//           <div className="absolute right-4 top-16 w-48 bg-white border shadow-md rounded-md">
//             <ul className="flex flex-col p-2 text-sm">
//               <li className="py-2">
//                 <Link href="/" onClick={() => setOpen(false)}>
//                   Home
//                 </Link>
//               </li>
//               <li className="py-2">
//                 <Link href="/about" onClick={() => setOpen(false)}>
//                   About
//                 </Link>
//               </li>
//               <li className="py-2">
//                 <Link href="/contact" onClick={() => setOpen(false)}>
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Technology", href: "/technology" },
    { name: "Design", href: "/design" },
    { name: "Business", href: "/business" },
    { name: "Lifestyle", href: "/lifestyle" },
    { name: "Travel", href: "/travel" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Reviews", href: "/reviews" },
    { name: "All", href: "/all" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-y shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between py-2">
        {/* Hamburger */}
        <button
          className="md:hidden text-xl p-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-cyan-600 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Search */}
        <div className="flex items-center gap-2 border rounded overflow-hidden">
          <input
            type="search"
            placeholder="Search..."
            className="px-2 py-1 text-sm focus:outline-none"
          />
          <button className="bg-cyan-500 px-3 py-1 text-white">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-[#1d3557] text-white z-50 flex flex-col">
          <button
            className="self-end p-4 text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col gap-2 px-4 text-lg">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block py-2 hover:bg-white/20 rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
