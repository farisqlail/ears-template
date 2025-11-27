"use client";
import { createContext, useContext } from "react";

export type Testimonial = { quote: string; author: string };

const testimonials: Testimonial[] = [
  {
    quote:
      "From the very first visit, I felt at ease. They explained everything clearly and treated me with genuine kindness.",
    author: "John Doe",
  },
  {
    quote:
      "Professional, caring, and thorough. I can finally enjoy conversations again without asking people to repeat themselves.",
    author: "Jane Smith",
  },
  {
    quote:
      "The fitting process was effortless and personalized. My devices feel natural and sound amazing.",
    author: "Mark Johnson",
  },
];

const TestimonialContext = createContext<{ testimonials: Testimonial[] }>({ testimonials });

export function TestimonialProvider({ children }: { children: React.ReactNode }) {
  return <TestimonialContext.Provider value={{ testimonials }}>{children}</TestimonialContext.Provider>;
}

export function useTestimonials() {
  return useContext(TestimonialContext);
}

