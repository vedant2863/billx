import FeatureCard from "../components/FeatureCard";
import Button from "./ui/Button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center text-center px-6 py-12 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)]">
      <div className="container mx-auto">
        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[text-light mb-6">
          BillX
        </h1>

        {/* Hero Description */}
        <p className="text-lg sm:text-xl lg:text-2xl text-text-light max-w-3xl mx-auto mb-10">
          Effortlessly manage your invoices, payments, and reporting with
          InvoicePro. Designed to simplify business workflows and boost
          efficiency.
        </p>

        {/* Features Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          <FeatureCard
            title="Easy Invoicing"
            description="Generate and send invoices in minutes, with a user-friendly interface that anyone can use."
          />
          <FeatureCard
            title="Payment Integration"
            description="Seamlessly accept payments directly from invoices with integrated payment solutions."
          />
          <FeatureCard
            title="Detailed Reporting"
            description="Track your business performance with in-depth, customizable reports for invoicing, payments, and more."
          />
        </div>

        {/* Call to Action Button */}
        <Button
          href="/signup"
          type="button"
          variant="primary"
          className="w-full max-w-xs mx-auto bg-white text-primary px-6 py-3 rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-200 focus:ring-4 focus:ring-primary"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
