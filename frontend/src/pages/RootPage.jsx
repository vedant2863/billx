import CallToAction from "../components/CallToAction";
import FeaturesOverview from "../components/FeaturesOverview";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function RootPage() {
  return (
    <div className="min-h-screen bg-bg-light text-text-light">
      {/* Navbar */}
      <Navbar />

      <HeroSection/>

      {/* Features Overview Section */}
      <FeaturesOverview />

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <Footer/>
    </div>
  );
}
