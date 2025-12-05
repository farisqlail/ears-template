"use client";
import { useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);
  return (
    <div>
      <div className="flex gap-2 border-b border-border">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActive(t.id)}
            className={
              "h-10 px-3 text-sm -mb-px border-b-2 " +
              (active === t.id ? "border-primary text-primary" : "border-transparent text-foreground/70 hover:text-foreground")
            }
            aria-selected={active === t.id}
            role="tab"
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="pt-3" role="tabpanel">
        {tabs.find((t) => t.id === active)?.content}
      </div>
    </div>
  );
}
