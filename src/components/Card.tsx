type Props = {
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
};

export default function Card({ title, children, footer }: Props) {
  return (
    <div className="rounded-lg border border-border bg-white shadow-card">
      {title ? (
        <div className="border-b border-border px-4 py-3">
          <h3 className="text-sm font-semibold">{title}</h3>
        </div>
      ) : null}
      <div className="p-4 space-y-4">{children}</div>
      {footer ? <div className="border-t border-border px-4 py-3">{footer}</div> : null}
    </div>
  );
}

