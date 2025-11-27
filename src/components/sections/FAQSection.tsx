"use client";
import { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { useFAQ } from "@/context/FAQContext";

export default function FAQSection() {
  const { faqs } = useFAQ();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-foreground/80">
          Quick & Clear Answers <HelpCircle className="h-3.5 w-3.5" />
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold max-w-6xl">
          Get the information you need to make confident decisions about your hearing health.
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="rounded-2xl border border-neutral-200 bg-neutral-50">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5"
              >
                <span className="text-base font-medium text-foreground">{item.q}</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white border">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4 text-teal-700" />}
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-sm text-foreground/70">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
