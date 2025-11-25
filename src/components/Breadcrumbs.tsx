import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-md text-foreground/70">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.href ? (
              <a href={item.href} className="hover:text-primary">{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
            {i < items.length - 1 ? <ChevronRight className="h-4 w-4 text-primary" aria-hidden /> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
