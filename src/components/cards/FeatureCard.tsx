type Props = {
  image: string;
  title: string;
  description: string;
};

export default function FeatureCard({ image, title, description }: Props) {
  return (
    <div className="rounded-lg overflow-hidden border border-border bg-white shadow-card">
      <img src={image} alt="" className="h-40 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-foreground/70">{description}</p>
      </div>
    </div>
  );
}

