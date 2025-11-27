"use client";
import { createContext, useContext } from "react";

export type FAQ = { q: string; a: string };

const faqs: FAQ[] = [
  {
    q: "How do I know if I have hearing loss?",
    a: "Common signs include difficulty understanding conversations, frequently asking others to repeat themselves, or feeling that others are mumbling. A professional hearing test is the most accurate way to know for sure.",
  },
  {
    q: "How often should I get my hearing checked?",
    a: "Adults should consider a screening every few years, or sooner if you notice changes. If you already use hearing aids, routine checkups ensure optimal performance.",
  },
  {
    q: "What types of hearing aids are available?",
    a: "There are behind-the-ear, in-the-ear, and completely-in-canal styles, among others. The best choice depends on your hearing profile, comfort, and lifestyle.",
  },
  {
    q: "Will a hearing aid restore my hearing to normal?",
    a: "Hearing aids amplify and clarify sounds, improving communication and quality of life. While they don’t restore natural hearing, many users experience significant benefits.",
  },
  {
    q: "Is earwax removal necessary for better hearing?",
    a: "Excess earwax can block the ear canal and reduce hearing clarity. Professional removal is safe and helps maintain healthy ears and better hearing.",
  },
];

const FAQContext = createContext<{ faqs: FAQ[] }>({ faqs });

export function FAQProvider({ children }: { children: React.ReactNode }) {
  return <FAQContext.Provider value={{ faqs }}>{children}</FAQContext.Provider>;
}

export function useFAQ() {
  return useContext(FAQContext);
}

