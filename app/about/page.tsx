import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FacilitiesSection from "@/components/FacilitiesSection";
import TestimonialSection from "@/components/TestimonialSection";
import EarPromoSection from "@/components/EarPromoSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import AboutIntroSection from "@/components/AboutIntroSection";
import heroImg from "@/assets/images/service-1.png";
import missionImg from "@/assets/images/service-2.png";
import teamImg from "@/assets/images/service-3.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary-light py-32">
        <Navbar />
        <div className="space-y-3 text-center">
          <div className="text-primary">
            <SectionHeading title="About Us" align="center" />
          </div>
          <div className="flex justify-center">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-20 space-y-16 px-4 sm:px-6 lg:px-0">
        <AboutIntroSection hero={heroImg} />

        <section className="space-y-10">
          <div className="grid md:grid-cols-[140px_1fr] gap-8 items-start">
            <span className="text-sm font-medium text-primary">Our Vision</span>
            <p className="text-base md:text-lg text-foreground">
              EarsPlus envisions becoming the trusted center for hearing care, delivering a professional, personalized, and calming
              experience that enhances the quality of life for every patient.
            </p>
          </div>

          <div className="relative w-full h-[260px] sm:h-[300px] md:h-[360px] rounded-3xl overflow-hidden shadow-card">
            <Image src={teamImg} alt="Vision" fill className="object-cover" />
          </div>

          <hr className="border-t border-border" />

          <div className="grid md:grid-cols-[140px_1fr] gap-8 items-start">
            <span className="text-sm font-medium text-primary">Our Mission</span>
            <p className="text-base md:text-lg text-foreground">
              We are committed to providing advanced hearing diagnostics and treatment through cutting‑edge technology, a patient‑centered
              approach, and a supportive, elegant environment. Through quality service and education, we aim to raise awareness about the
              importance of hearing health and support individuals at every stage of their journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="relative w-full h-[220px] md:h-[260px] rounded-3xl overflow-hidden shadow-card">
              <Image src={missionImg} alt="Facility" fill className="object-cover" />
            </div>
            <div className="relative w-full h-[220px] md:h-[260px] rounded-3xl overflow-hidden shadow-card">
              <Image src={teamImg} alt="Team" fill className="object-cover" />
            </div>
          </div>
        </section>

        <TestimonialSection />
      </main>

      <Footer />

      <EarPromoSection />
    </div>
  );
}
