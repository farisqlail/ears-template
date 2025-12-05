"use client";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useInView } from "@/hooks/useInView";
import clsx from "clsx";

type Stat = { label: string; value: string };

export default function AboutIntroSection({
  hero,
  stats = [
    { label: "Patients Served", value: "10k+" },
    { label: "Satisfaction Rate", value: "97%" },
    { label: "Years Combined Experience", value: "30+" },
  ],
  description =
    "At EarsPlus, we believe that hearing well is essential to living well. We are a dedicated team of certified audiologists and hearing care professionals committed to delivering personalized solutions for every individual’s hearing needs. Combining advanced diagnostic tools with a patient-centered approach, we provide compassionate care in a welcoming, modern environment. From thorough hearing assessments to custom hearing aid fittings and ongoing support, our goal is to empower you to reconnect with the sounds of life.",
}: {
  hero: StaticImageData;
  stats?: Stat[];
  description?: string;
}) {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="space-y-8">
      <div
        className={clsx(
          "relative w-full h-[280px] sm:h-[360px] md:h-[420px] rounded-3xl overflow-hidden shadow-card",
          "transition-all duration-700 ease-out",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <Image src={hero} alt="Our team" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-3 gap-6 text-center">
        {stats.map((s, i) => (
          <div
            key={i}
            className={clsx(
              "space-y-1",
              "transition-all duration-700 ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: `${200 + i * 100}ms` }}
          >
            <div className="text-2xl md:text-3xl font-semibold text-teal-700">{s.value}</div>
            <div className="text-sm text-foreground/70">{s.label}</div>
          </div>
        ))}
      </div>

      <p
        className={clsx(
          "text-foreground/80 mx-auto text-xl",
          "transition-all duration-700 delay-500 ease-out",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {description}
      </p>
    </section>
  );
}
