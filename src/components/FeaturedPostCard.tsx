import Image, { StaticImageData } from "next/image";

type Props = {
  href: string;
  image: StaticImageData;
  date: string;
  title: string;
  excerpt: string;
};

function truncate(text: string, max = 120) {
  return text.length > max ? text.slice(0, max).trim() + "…" : text;
}

export default function FeaturedPostCard({ href, image, date, title, excerpt }: Props) {
  return (
    <a href={href} className="grid sm:grid-cols-[280px_1fr] items-center gap-4 sm:gap-6 rounded-3xl bg-white p-4 transition-shadow">
      <div className="relative h-[160px] sm:h-[180px] md:h-[200px] rounded-2xl overflow-hidden">
        <Image src={image} alt="" fill className="object-cover" />
      </div>
      <div className="space-y-2">
        <div className="text-sm text-foreground/60">{date}</div>
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        <p className="text-sm text-foreground/70">{truncate(excerpt)}</p>
      </div>
    </a>
  );
}
