"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TestimonialImage from "@/assets/images/testimonial-1.png";
import bgTestimonial from "@/assets/images/bg-testimonial.png";
import { MessageSquareQuote } from "lucide-react";
import { useTestimonials } from "@/context/TestimonialContext";
import { useInView } from "@/hooks/useInView";
import clsx from "clsx";

export default function TestimonialSection() {
  const { testimonials } = useTestimonials();
  const [index, setIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const { ref, isInView } = useInView();

  useEffect(() => {
    const to = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(to);
  }, [testimonials.length]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    const child = track.children[index] as HTMLElement | undefined;
    if (child) viewport.scrollTo({ left: child.offsetLeft - (viewport.clientWidth - child.clientWidth) / 2, behavior: "smooth" });
  }, [index]);

  return (
    <section ref={ref} className="relative min-h-[420px] md:min-h-[520px] py-20 md:py-32">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Image src={bgTestimonial} alt="" fill className="object-contain object-center" />
      </div>
      <div 
        className={clsx(
          "relative mx-auto max-w-6xl text-center space-y-6 px-4 sm:px-6",
          "transition-all duration-700 ease-out",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-2 text-xs">
          <span>Testimonial</span>
          <MessageSquareQuote className="h-3.5 w-3.5" />
        </div>
        <div ref={viewportRef} className="no-scrollbar overflow-x-auto snap-x snap-mandatory">
          <div ref={trackRef} className="flex items-stretch gap-0 w-full">
            {testimonials.map((t, i) => (
              <article key={i} className="snap-center shrink-0 w-full space-y-4 px-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </h2>
                <div className="flex items-center justify-center gap-2 pt-4">
                  <div className="relative h-10 w-10 rounded-lg overflow-hidden">
                    <Image src={TestimonialImage} alt={t.author} fill className="object-cover" />
                  </div>
                  <div className="text-sm">{t.author}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${index === i ? "bg-teal-600" : "bg-foreground/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
