"use client";
import { useState } from "react";
import { HelpCircle, Share2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import clsx from "clsx";

const topics = [
  "Hearing Consultation",
  "Hearing Aid Purchase",
  "Hearing Test / Diagnosis",
  "Device Repair or Service",
  "General Inquiry",
  "Partnership or Collaboration",
];

export default function Footer() {
  const [selected, setSelected] = useState<string[]>([topics[0]]);
  const toggle = (t: string) =>
    setSelected((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]));
  const { ref, isInView } = useInView();

  return (
    <footer ref={ref} className="mt-20">
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, #106263 0%, #128E8F 63%, #106263 100%)",
          }}
        />
        <div className="absolute top-1/2 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/20" />
        <div className="relative grid md:grid-cols-2 gap-12 px-6 md:px-[120px] py-16 text-white">
          <div 
            className={clsx(
              "space-y-6",
              "transition-all duration-700 ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="text-3xl font-semibold leading-tight">
              Let’s Talk About Your Hearing
              <br />
              Health
            </h2>
            <p className="text-white/80 max-w-md">
              Reach out to us via phone, email, or by filling out the form. Our friendly team will respond promptly to help you take the next step toward better hearing.
            </p>
              <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="flex items-center gap-4">
                <span className="inline-grid place-items-center h-10 w-10 sm:h-12 sm:w-12 aspect-square shrink-0 rounded-full bg-white">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </span>
                <div>
                  <div className="text-2xl font-semibold">100+</div>
                  <div className="text-sm text-white/80">General Questions</div>
                </div>
                </div>
                <div className="flex items-center gap-4">
                <span className="inline-grid place-items-center h-10 w-10 sm:h-12 sm:w-12 aspect-square shrink-0 rounded-full bg-white">
                  <Share2 className="h-6 w-6 text-primary" />
                </span>
                <div>
                  <div className="text-2xl font-semibold">10+</div>
                  <div className="text-sm text-white/80">FAQ Categories</div>
                </div>
                </div>
              </div>
          </div>

          <div 
            className={clsx(
              "space-y-6",
              "transition-all duration-700 delay-200 ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <div className="space-y-3">
              <div className="text-sm text-white/80">I need help with:</div>
              <div className="flex flex-wrap gap-3 no-scrollbar overflow-x-auto pr-2">
                {topics.map((t) => {
                  const active = selected.includes(t);
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => toggle(t)}
                      className={
                        "rounded-full px-4 py-2 text-sm border whitespace-nowrap shrink-0 " +
                        (active ? "bg-white text-teal-700 border-transparent" : "bg-[#EFFFFF]/15 text-white border-white/40")
                      }
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-white/80">Your name</label>
                  <input className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/80">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-2" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-white/80">Phone Number</label>
                  <input className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-2" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm text-white/80">Message / Additional Details</label>
                  <textarea rows={3} className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-2" />
                </div>
              </div>
              <button type="submit" className="rounded-full bg-white text-teal-700 px-6 py-3 font-semibold">Submit Your Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
