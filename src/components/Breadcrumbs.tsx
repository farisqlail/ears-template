import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-full overflow-x-auto no-scrollbar">
      <ol className="flex items-center gap-2 text-md text-foreground/70 whitespace-nowrap sm:whitespace-normal">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 min-w-0">
            {item.href ? (
              <a href={item.href} className="block truncate max-w-[70vw] sm:max-w-none hover:text-primary">{item.label}</a>
            ) : (
              <span className="block truncate max-w-[70vw] sm:max-w-none">{item.label}</span>
            )}
            {i < items.length - 1 ? <ChevronRight className="h-4 w-4 text-primary shrink-0" aria-hidden /> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
