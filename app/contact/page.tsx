import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";
import EarPromoSection from "@/components/EarPromoSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="Contact Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <main className="max-w-7xl mx-auto py-20 space-y-16 px-4 sm:px-6 lg:px-0">
        <ContactSection phone="+62 812 234 567" email="maslistd@gmail.com" address="Surabaya ID" />
        
        <TestimonialSection />
      </main>

      <Footer />

      <EarPromoSection />
    </div>
  );
}
