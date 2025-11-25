import Image from "next/image";
import type { StaticImageData } from "next/image";

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
  return (
    <section className="space-y-8">
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] rounded-3xl overflow-hidden shadow-card">
        <Image src={hero} alt="Our team" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-3 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i} className="space-y-1">
            <div className="text-2xl md:text-3xl font-semibold text-teal-700">{s.value}</div>
            <div className="text-sm text-foreground/70">{s.label}</div>
          </div>
        ))}
      </div>

      <p className="text-foreground/80 mx-auto text-xl">{description}</p>
    </section>
  );
}
