import Button from "./ui/Button";

export default function CallToAction() {
  return (
    <section className="text-center py-16 bg-primary">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white mb-6 transition-transform transform hover:scale-105">
          Start managing your invoices today!
        </h2>
        {/* Description */}
        <p className="text-lg text-white mb-8">
          Join thousands of businesses that trust InvoicePro to streamline their
          invoicing and reporting.
        </p>
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
