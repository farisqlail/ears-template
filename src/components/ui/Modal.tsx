type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-foreground/20" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-lg border border-border bg-white shadow-card">
          {title ? (
            <div className="border-b border-border px-4 py-3">
              <h3 className="text-sm font-semibold">{title}</h3>
            </div>
          ) : null}
          <div className="p-4 space-y-4">{children}</div>
          <div className="border-t border-border px-4 py-3 text-right">
            <button type="button" onClick={onClose} className="h-10 px-4 text-sm rounded-md border border-border hover:bg-muted">
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

