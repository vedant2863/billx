import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center text-center px-4 py-12 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)]">
      <div className="container mx-auto">
        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-light)] mb-4">
          BillX
        </h1>
        {/* Hero Description */}
        <p className="text-lg sm:text-xl text-[var(--color-text-light)] mb-6">
          Effortlessly manage your invoices, payments, and reporting with InvoicePro. Designed to simplify business workflows and boost efficiency.
        </p>

        {/* Features Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="text-[var(--color-text-light)]">
            <h3 className="font-semibold text-xl sm:text-2xl">Easy Invoicing</h3>
            <p>Generate and send invoices in minutes, with a user-friendly interface that anyone can use.</p>
          </div>
          <div className="text-[var(--color-text-light)]">
            <h3 className="font-semibold text-xl sm:text-2xl">Payment Integration</h3>
            <p>Seamlessly accept payments directly from invoices with integrated payment solutions.</p>
          </div>
          <div className="text-[var(--color-text-light)]">
            <h3 className="font-semibold text-xl sm:text-2xl">Detailed Reporting</h3>
            <p>Track your business performance with in-depth, customizable reports for invoicing, payments, and more.</p>
          </div>
        </div>

        {/* Call to Action Button */}
        <Link
          to="/signup"
          className="px-8 py-3 rounded-full shadow-lg text-[var(--color-primary)] bg-[var(--color-bg-light)] hover:bg-[var(--color-btn-hover-light)] transition-all transform hover:scale-110 hover:shadow-xl"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
