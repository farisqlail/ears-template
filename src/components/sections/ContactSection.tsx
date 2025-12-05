"use client";
import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import clsx from "clsx";

type Props = {
  phone: string;
  email: string;
  address: string;
  lat?: number;
  lng?: number;
};

export default function ContactSection({ phone, email, address, lat = -7.250445, lng = 112.768845 }: Props) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { ref, isInView } = useInView();

  useEffect(() => {
    const ensureLeaflet = async () => {
      if (!document.querySelector('link[data-leaflet]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        link.setAttribute("data-leaflet", "true");
        document.head.appendChild(link);
      }
      if (!(window as any).L) {
        await new Promise<void>((resolve) => {
          const script = document.createElement("script");
          script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
          script.onload = () => resolve();
          document.head.appendChild(script);
        });
      }
    };

    const initMap = async () => {
      await ensureLeaflet();
      const L = (window as any).L;
      const el = mapRef.current;
      if (!el || !L) return;
      
      // Check if map is already initialized
      // @ts-ignore
      if (el._leaflet_id) return;

      const map = L.map(el).setView([lat, lng], 12);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);
      L.marker([lat, lng]).addTo(map);
    };

    initMap();
  }, [lat, lng]);

  return (
    <section ref={ref} className="space-y-6">
      <div className="grid sm:grid-cols-3 gap-4">
        <div
          className={clsx(
            "rounded-2xl border border-border bg-white p-4",
            "transition-all duration-700 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">Phone</div>
          <div className="mt-2 font-medium">{phone}</div>
        </div>
        <div
          className={clsx(
            "rounded-2xl border border-border bg-white p-4",
            "transition-all duration-700 delay-100 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">Email</div>
          <div className="mt-2 font-medium">{email}</div>
        </div>
        <div
          className={clsx(
            "rounded-2xl border border-border bg-white p-4",
            "transition-all duration-700 delay-200 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">Address</div>
          <div className="mt-2 font-medium">{address}</div>
        </div>
      </div>

      <div
        ref={mapRef}
        className={clsx(
          "relative w-full h-[340px] sm:h-[380px] rounded-3xl overflow-hidden shadow-card",
          "transition-all duration-700 delay-300 ease-out",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      />
    </section>
  );
}
