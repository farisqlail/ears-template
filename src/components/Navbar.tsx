"use client";
import { useState } from "react";
import Button from "./Button";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-4 md:top-8 z-50 w-full">
      <div className="mx-4 sm:mx-6 md:mx-auto max-w-[360px] sm:max-w-[480px] md:max-w-5xl lg:max-w-6xl xl:max-w-7xl">
        <div className="h-14 md:h-16 rounded-full bg-white border border-border shadow-card px-3 sm:px-4 md:px-6 flex items-center justify-between">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-border text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <nav className="hidden md:flex items-center gap-6 text-sm text-foreground">
            <a href="/" className="hover:text-primary">Home</a>
            <a href="/about" className="hover:text-primary">About Us</a>
            <a href="#" className="hover:text-primary inline-flex items-center gap-1">Pages <ChevronDown className="h-4 w-4"/></a>
            <a href="#" className="hover:text-primary inline-flex items-center gap-1">Blog <ChevronDown className="h-4 w-4"/></a>
          </nav>
          <div className="absolute left-1/2 -translate-x-1/2">
            <span className="font-semibold tracking-wide text-teal-700">EARS</span>
          </div>
          <div className="ml-auto hidden md:block">
            <Button className="rounded-full bg-teal-700 text-white hover:bg-teal-800 px-3 sm:px-4 inline-flex items-center gap-2">
              <span>Contact Us</span>
              <span className="inline-grid place-items-center h-6 w-6 rounded-full bg-white text-teal-700">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Button>
          </div>
        </div>
        {open ? (
          <div className="md:hidden mt-3 rounded-2xl bg-white border border-border shadow-card px-4 py-4 text-foreground">
            <div className="flex flex-col gap-3 text-sm">
              <a href="/" className="hover:text-primary">Home</a>
              <a href="/about" className="hover:text-primary">About Us</a>
              <a href="#" className="hover:text-primary">Pages</a>
              <a href="#" className="hover:text-primary">Blog</a>
              <a href="/contact" className="hover:text-primary">Contact</a>
              <a href="/contact" className="mt-2 rounded-full bg-teal-700 text-white hover:bg-teal-800 w-full inline-flex items-center gap-2 justify-center">
                <span>Contact Us</span>
                <span className="inline-grid place-items-center h-6 w-6 rounded-full bg-white text-teal-700">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
