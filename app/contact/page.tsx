import PageHeader from "@/components/layout/PageHeader";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import PageLayout from "@/components/layout/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout header={<PageHeader title="Contact Us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} /> }>
      <ContactSection phone="+62 812 234 567" email="maslistd@gmail.com" address="Surabaya ID" />
      <TestimonialSection />
    </PageLayout>
  );
}
