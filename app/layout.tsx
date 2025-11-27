import type { Metadata } from "next";
import "./globals.css";
import { BlogPostsProvider } from "@/context/BlogPostsContext";
import { FAQProvider } from "@/context/FAQContext";
import { TestimonialProvider } from "@/context/TestimonialContext";

export const metadata: Metadata = {
  title: "Elementor UI Kit — Next + Tailwind",
  description: "Komponen UI terpisah dengan base color Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-background text-foreground antialiased">
        <BlogPostsProvider>
          <FAQProvider>
            <TestimonialProvider>{children}</TestimonialProvider>
          </FAQProvider>
        </BlogPostsProvider>
      </body>
    </html>
  );
}
