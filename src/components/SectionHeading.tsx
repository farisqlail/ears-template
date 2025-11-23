type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs">
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <h2 className="mt-3 text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle ? <p className="mt-2 text-foreground/70 max-w-2xl mx-auto">{subtitle}</p> : null}
    </div>
  );
}

