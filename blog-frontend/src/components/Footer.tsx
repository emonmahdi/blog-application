"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo + Social */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Blog<span className="text-cyan-400">Sphere</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Inspiring content for creative minds and success-driven souls.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: FaFacebookF, label: "Facebook" },
                { Icon: FaTwitter, label: "Twitter" },
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaYoutube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-800 hover:bg-cyan-500 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-5">
              Useful Links
            </h5>
            <ul className="space-y-3">
              {["FAQs", "Support", "Advertise", "Partners", "Careers"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:pl-1 block"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h5 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {["Home", "About", "Write for Us", "Privacy Policy", "Terms"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:pl-1 block"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 4: Newsletter & Categories */}
          <div className="flex flex-col">
            <div className="">
              <h5 className="text-white text-lg font-semibold mb-5">
                Popular Categories
              </h5>
              <ul className="space-y-3">
                {["Motivation", "Productivity", "Self-Growth"].map((cat) => (
                  <li key={cat}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:pl-1 block"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} BlogSphere. All Rights Reserved |
          Designed with ❤️ by BlogSphere Team
        </div>
      </div>
    </footer>
  );
}
