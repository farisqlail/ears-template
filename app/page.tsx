import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ExploreSection from "@/components/ExploreSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import EarPromoSection from "@/components/EarPromoSection";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto py-12 space-y-16 px-4 sm:px-6 lg:px-0">
        <ExploreSection />

        <FacilitiesSection />

        {/* Blog moved to dedicated page /blog */}

        <TestimonialSection />

        <FAQSection />
      </main>

      <Footer />

      <EarPromoSection />
    </div>
  );
}
