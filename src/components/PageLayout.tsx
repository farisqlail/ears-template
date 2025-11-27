import clsx from "clsx";
import Footer from "@/components/Footer";
import EarPromoSection from "@/components/sections/EarPromoSection";

type Props = {
  header?: React.ReactNode;
  children?: React.ReactNode;
  mainClassName?: string;
};

export default function PageLayout({ header, children, mainClassName }: Props) {
  return (
    <div className="min-h-screen">
      {header}
      <main className={clsx("max-w-7xl mx-auto py-20 space-y-6 px-4 sm:px-6 lg:px-0", mainClassName)}>
        {children}
      </main>
      <Footer />
      <EarPromoSection />
    </div>
  );
}
