import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-primary py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-white text-2xl font-extrabold">
        BillX
        </Link>
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="text-white hover:text-gray-300 transition"
                activeClassName="text-gray-300"
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
