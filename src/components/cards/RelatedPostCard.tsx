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

export default function RelatedPostCard({ href, image, date, title, excerpt }: Props) {
  return (
    <a href={href} className="space-y-3 group">
      <div className="relative w-full h-[200px] sm:h-[220px] rounded-2xl overflow-hidden">
        <Image src={image} alt="" fill className="object-cover group-hover:scale-[1.02] transition-transform" />
      </div>
      <div className="space-y-1">
        <div className="text-sm text-foreground/60">{date}</div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-foreground/70">{truncate(excerpt)}</p>
      </div>
    </a>
  );
}
