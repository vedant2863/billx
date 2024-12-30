import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Brand Logo */}
        <Link
          to="/"
          className="text-white text-3xl font-semibold tracking-wide"
        >
          BillX
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 absolute md:relative left-0 w-full md:w-auto bg-primary md:bg-transparent transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {navLinks.map((link) => (
            <li
              key={link.to}
              className="text-center md:text-left flex items-center md:py-0"
            >
              <Link
                to={link.to}
                className="block text-white py-3 md:py-0 hover:text-gray-300 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
