import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elementor UI Kit — Next + Tailwind",
  description: "Komponen UI terpisah dengan base color Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}

