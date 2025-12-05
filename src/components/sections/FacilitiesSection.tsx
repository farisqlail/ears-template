"use client";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import facilities1 from "@/assets/images/facilities-1.png";
import facilities2 from "@/assets/images/facilities-2.png";
import facilities3 from "@/assets/images/facilities-3.png";
import { useInView } from "@/hooks/useInView";
import clsx from "clsx";

export default function FacilitiesSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="space-y-8 bg-neutral-100 px-6 py-12 rounded-3xl border">
      <div
        className={clsx(
          "flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-6",
          "transition-all duration-700 ease-out",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-foreground/80 ">Facilities</span>
        <h2 className="md:ml-auto text-center md:text-left text-2xl font-semibold leading-snug max-w-xl">
          Discover Our Comfortable and Advanced Hearing Care Facilities Designed for Your Needs.
        </h2>
      </div>

      <div className="space-y-6">
        <div
          className={clsx(
            "transition-all duration-700 delay-200 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <FacilityCard
            size="lg"
            label="Sound Booth"
            text="Precision testing in a sound-controlled environment"
            img={facilities1}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div
            className={clsx(
              "transition-all duration-700 delay-300 ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <FacilityCard label="Consultation Room" text="Designed for privacy and patient comfort." img={facilities2} />
          </div>
          <div
            className={clsx(
              "transition-all duration-700 delay-400 ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <FacilityCard label="Fitting Room" text="Personalised fitting space for hearing aids and accessories." img={facilities3} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FacilityCard({ label, text, size = "md", img }: { label: string; text: string; size?: "md" | "lg"; img: StaticImageData }) {
  const height = size === "lg" ? "h-[320px] md:h-[380px]" : "h-[220px] md:h-[260px]";
  return (
    <div className={`relative w-full ${height} rounded-3xl overflow-hidden shadow-card`}>
      <Image src={img} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
      <div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs text-foreground">
        {label}
      </div>
      <div className="absolute bottom-4 left-4 right-4 text-white md:text-2xl shadow-md">
        {text}
      </div>
    </div>
  );
}
