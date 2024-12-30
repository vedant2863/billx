import CallToAction from "../components/CallToAction";
import FeaturesOverview from "../components/FeaturesOverview";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function RootPage() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <FeaturesOverview />
      <CallToAction />
      <Footer/>
    </>
  );
}
