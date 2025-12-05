"use client";
import { useState } from "react";

type Item = { id: string; title: string; content: string };

export default function Accordion({ items }: { items: Item[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <div className="divide-y divide-border">
      {items.map((it) => {
        const open = openId === it.id;
        return (
          <div key={it.id}>
            <button
              type="button"
              className="w-full flex items-center justify-between py-3 text-left"
              onClick={() => setOpenId(open ? null : it.id)}
              aria-expanded={open}
            >
              <span className="font-medium">{it.title}</span>
              <span className={"transition-transform " + (open ? "rotate-180" : "rotate-0")}>▾</span>
            </button>
            {open ? <div className="pb-3 text-sm text-foreground/80">{it.content}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
