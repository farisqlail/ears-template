import Navbar from "./Navbar";
import Breadcrumbs from "./Breadcrumbs";
import SectionHeading from "./SectionHeading";

type Crumb = { label: string; href?: string };

export default function PageHeader({ title, breadcrumbs }: { title: string; breadcrumbs: Crumb[] }) {
  return (
    <div className="bg-primary-light py-32">
      <Navbar />
      <div className="space-y-3 text-center">
        <SectionHeading title={title} align="center" />
        <div className="flex justify-center">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      </div>
    </div>
  );
}
