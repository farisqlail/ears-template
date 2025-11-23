"use client";
import Image from "next/image";
import heroImg from "@/assets/images/hero.png";
import { ArrowUpRight, Instagram, Facebook, X } from "lucide-react";
import ava1 from "@/assets/images/ava-1.png";
import ava2 from "@/assets/images/ava-2.png";
import ava3 from "@/assets/images/ava-3.png";

export default function Hero() {
  return (
    <section className="relative px-3 sm:px-6 py-5">
      <div className="relative h-[520px] sm:h-[560px] md:h-[640px] w-full rounded-3xl overflow-hidden">
        <Image src={heroImg} alt="Clinic" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold drop-shadow">Rediscover the Joy of Sound</h1>
          <p className="mt-3 max-w-2xl text-white/90">
            We provide personalized and professional hearing care, combining the latest technology with a
            human‑centered approach to enhance your quality of life.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 md:px-4 py-2 md:py-2 text-teal-700 shadow-lg hover:bg-white/90"
          >
            <span className="font-semibold">Book Appointment</span>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-teal-600 text-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
        <div className="absolute left-4 sm:left-6 bottom-4 sm:bottom-6 max-w-[90%] sm:max-w-sm text-white">
          <div className="relative inline-flex items-center gap-0 -space-x-3 sm:-space-x-4 rounded-full bg-white/30 px-3 py-2 backdrop-blur-sm">
            <div className="relative z-10 h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden ring-2 ring-teal-200">
              <Image src={ava1} alt="" fill className="object-cover" />
            </div>
            <div className="relative z-20 h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden ring-2 ring-teal-200">
              <Image src={ava2} alt="" fill className="object-cover" />
            </div>
            <div className="relative z-30 h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden ring-2 ring-teal-200">
              <Image src={ava3} alt="" fill className="object-cover" />
            </div>
          </div>
          <p className="mt-3 text-xs sm:text-sm text-white/90">
            We&apos;re committed to delivering exceptional hearing care in a welcoming, supportive, and professional
            environment where your comfort and well‑being come first.
          </p>
        </div>
        <div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 hidden sm:flex flex-col items-end gap-3">
          <a className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-sm text-teal-700 hover:bg-white" href="#">
            <Instagram className="h-4 w-4" /> Instagram
          </a>
          <a className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-sm text-teal-700 hover:bg-white" href="#">
            <Facebook className="h-4 w-4" /> Facebook
          </a>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 text-sm text-teal-700">
            <X className="h-4 w-4" /> X
          </div>
        </div>
      </div>
    </section>
  );
}
