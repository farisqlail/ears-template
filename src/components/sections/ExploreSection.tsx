"use client";
import Image from "next/image";
import service1 from "@/assets/images/service-1.png";
import service2 from "@/assets/images/service-2.png";
import service3 from "@/assets/images/service-3.png";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ExploreSection() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground/80 hover:bg-muted">
          Let&apos;s Know Us <ArrowRight className="h-4 w-4" />
        </a>
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-balance">
          Explore Care Options – Personalised Hearing
          <br />
          Solutions Designed Around You
        </h2>
      </div>

      <div className="grid md:grid-cols-[1fr,2fr] gap-10 items-center">
        <div className="space-y-4 md:max-w-sm lg:max-w-md">
          <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs text-foreground/80">Our Service</span>
          <h3 className="text-xl font-semibold leading-relaxed text-balance">
            Discover personalised solutions for better hearing from advanced diagnostics to ongoing support,
            delivered by professionals who care.
          </h3>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-teal-700 text-white px-5 py-3 hover:bg-teal-800">
            Learn more
            <span className="inline-grid place-items-center h-6 w-6 rounded-full bg-white text-teal-700">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        <div className="relative ml-4 mr-6 sm:mx-6 md:mx-0 w-full max-w-[305px] sm:max-w-full md:w-[720px] xl:w-[800px]">
          <div className="no-scrollbar overflow-x-auto snap-x snap-mandatory">
            <div className="min-w-max flex items-center gap-4 sm:gap-6 pr-12 sm:pr-24">
              <CardItem label="Hearing Test" text="Accurate assessments for your unique hearing profile" img={service1} />
              <CardItem label="Hearing Aid Fitting" text="Personalised fitting for comfort and clarity" img={service2} />
              <CardItem label="Tinnitus Care" text="Guidance and support tailored to your needs" img={service3} />
            </div>
          </div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-20 bg-gradient-to-l from-white to-white/0" />
        </div>
      </div>
    </section>
  );
}

import type { StaticImageData } from "next/image";

function CardItem({ label, text, img }: { label: string; text: string; img: StaticImageData }) {
  return (
    <div className="relative w[320px] h-[200px] rounded-2xl overflow-hidden shadow-card snap-start shrink-0">
      <Image src={img} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/85 px-3 py-1 text-xs text-foreground">
        {label}
      </div>
      <div className="absolute bottom-3 left-3 right-3 text-white text-sm">
        {text}
      </div>
    </div>
  );
}
