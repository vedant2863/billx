import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="py-6"
      style={{
        backgroundColor: "var(--color-bg-dark)",
        color: "var(--color-text-light)",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <p>© 2024 InvoicePro. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <Link to="/terms" className="transition" style={{ color: "var(--color-text-light)" }}>
              Terms
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="transition" style={{ color: "var(--color-text-light)" }}>
              Privacy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
