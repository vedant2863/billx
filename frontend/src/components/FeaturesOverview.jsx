import { useEffect, useState } from "react";

export default function FeaturesOverview() {
  // Feature data array
  const features = [
    {
      title: "Easy Invoicing",
      description: "Generate professional invoices in minutes with our simple tools.",
      icon: "💼", // Example icon
    },
    {
      title: "Payment Integration",
      description: "Accept payments directly from your invoices with our integrated payment solutions.",
      icon: "💳", // Example icon
    },
    {
      title: "Comprehensive Reports",
      description: "Generate detailed reports to track payments, outstanding balances, and more.",
      icon: "📊", // Example icon
    },
    {
      title: "Customizable Templates",
      description: "Create personalized invoice templates that match your brand's look and feel.",
      icon: "📝", // Example icon
    },
    {
      title: "Multi-Currency Support",
      description: "Support for a wide range of currencies to cater to your international customers.",
      icon: "🌍", // Example icon
    },
    {
      title: "Cloud Storage",
      description: "Store all your invoices safely in the cloud and access them from anywhere.",
      icon: "☁️", // Example icon
    },
  ];

  // Animation effect: fade-in when in view
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector("#features");
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      if (sectionTop <= window.innerHeight && sectionTop + sectionHeight > 0) {
        setInView(true);
      } else {
        setInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="features"
      className="py-16 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Features Overview</h2>
        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {features.map((feature, index) => (
            <div key={index} className="text-center transform transition duration-500 hover:scale-105">
              <div className="bg-primary p-6 rounded-lg text-white mb-4 shadow-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
