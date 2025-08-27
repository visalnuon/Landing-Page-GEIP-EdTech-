"use client";
import "../styles/font.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const pages = [
  { name: "កម្មវិធី", path: "/" },
  { name: "អំពីយើង", path: "/about" },
  { name: "ផ្ទាំងមុខ", path: "/feature" },
  { name: "ចំណាត់ថ្នាក់", path: "/champoin" },
  { name: "ថ្មីៗ", path: "/new" },
  { name: "របៀបដោនលូត", path: "/download" },
  { name: "ច្រើនទៀត", path: "/more" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-1">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-black">
          <img src="/logo/geip-logo.png" alt="logo" width={80} height={80} />
          <div className="text-xl font-fam font-semibold leading-tight ">
            កម្មវិធីទូរស័ព្ទដៃស្វ័យសិក្សា
            <div className="text-sm font-normal">GEIP ETECH Education App</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 font-fam">
          {pages.map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`transition-colors ${
                pathname === path
                  ? "text-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md px-4 py-6 z-40"
        >
          <ul className="flex flex-col gap-4 font-fam">
            {pages.map(({ name, path }) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`block py-2 px-2 rounded-md ${
                    pathname === path
                      ? "bg-blue-500 text-white"
                      : "text-gray-800 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)} // Close on click
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
