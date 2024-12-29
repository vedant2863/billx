import { Link } from "react-router";

export default function CallToAction() {
  return (
    <section className="text-center py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6 transition-transform transform hover:scale-105">
          Start managing your invoices today!
        </h2>
        <p className="text-lg text-white mb-8">
          Join thousands of businesses that trust InvoicePro to streamline their invoicing and reporting.
        </p>
        <Link
          href="/signup"
          className="cta-button bg-white text-primary px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-110 hover:bg-gray-200"
          aria-label="Get Started with InvoicePro"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
