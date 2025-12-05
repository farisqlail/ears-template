"use client";
import Image from "next/image";
import earImg from "@/assets/images/ear.png";
import { Instagram, Facebook, X, ChevronRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import clsx from "clsx";

export default function EarPromoSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref}>
      <div className="px-6 md:px-[120px] py-12 pt-24">
        <div className="grid md:grid-cols-[1fr,auto,1fr] items-center gap-4 md:gap-6">
          <div
            className={clsx(
              "text-teal-700 text-[84px] md:text-[132px] font-bold tracking-wide leading-none text-center md:text-left",
              "transition-all duration-700 ease-out",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            )}
          >
            HEAR
          </div>
          <div
            className={clsx(
              "relative mx-auto w-[220px] sm:w-[280px] md:w-[340px]",
              "transition-all duration-700 delay-200 ease-out",
              isInView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}
          >
            <Image src={earImg} alt="Hearing device" className="object-contain" priority sizes="(min-width:768px) 340px, 280px" />
          </div>
          <div
            className={clsx(
              "text-center md:text-right",
              "transition-all duration-700 delay-100 ease-out",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            )}
          >
            <div className="text-[84px] md:text-[132px] font-bold tracking-wide leading-none bg-gradient-to-r from-teal-900 to-teal-500 bg-clip-text text-transparent">MORE</div>
            <div className="text-3xl font-medium italic mt-1 bg-gradient-to-r from-teal-900 to-teal-500 bg-clip-text text-transparent">live Fully</div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div
          className={clsx(
            "px-4 sm:px-6 md:px-[120px] py-10 space-y-8",
            "transition-all duration-700 delay-300 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm text-neutral-700">
            <a href="#" className="inline-flex items-center gap-1 hover:text-neutral-600">About Us <ChevronRight className="h-4 w-4" /></a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-neutral-600">FAQ <ChevronRight className="h-4 w-4" /></a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-neutral-600">Contact Us <ChevronRight className="h-4 w-4" /></a>
          </div>
          <p className="max-w-3xl sm:max-w-4xl mx-auto text-center text-base sm:text-xl md:text-2xl bg-gradient-to-r from-black to-neutral-400 bg-clip-text text-transparent">
            Advanced hearing care, all in one place, from assessments and tailored treatments to long‑term support for better hearing.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 text-xs text-neutral-500 pt-10 sm:pt-16">
            <div>© Copyright Ears Plus 2025</div>
            <div className="flex items-center justify-center gap-3">
              <a href="#" aria-label="Instagram" className="inline-grid place-items-center h-9 w-9 rounded-full shadow-lg bg-white text-teal-700">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="inline-grid place-items-center h-9 w-9 rounded-full shadow-lg bg-white text-teal-700">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="X" className="inline-grid place-items-center h-9 w-9 rounded-full shadow-lg bg-white text-teal-700">
                <X className="h-4 w-4" />
              </a>
            </div>
            <div className="flex items-center gap-6 text-neutral-700"><a href="#" className="hover:text-neutral-600">Privacy Policy</a><a href="#" className="hover:text-neutral-600">Term of Service</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
