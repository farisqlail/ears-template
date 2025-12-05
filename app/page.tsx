import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";
import ExploreSection from "@/components/sections/ExploreSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FAQSection from "@/components/sections/FAQSection";
import EarPromoSection from "@/components/sections/EarPromoSection";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto py-12 space-y-16 px-4 sm:px-6 lg:px-0">
        <ExploreSection />

        <FacilitiesSection />

        <TestimonialSection />

        <FAQSection />
      </main>

      <Footer />

      <EarPromoSection />
    </div>
  );
}
