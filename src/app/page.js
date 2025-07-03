import { ApproachSection } from "@/components/Approach";
import Hero from "@/components/Hero";
import Solution from "@/components/Solution";
import BenefitsSection from "@/components/Benefits";
import ContactUs from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <ApproachSection />
      <Solution />
      <BenefitsSection />
      <ContactUs />
      <Footer />
    </div>
  );
}
