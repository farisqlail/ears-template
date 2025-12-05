import { InputHTMLAttributes } from "react";
import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
  error?: string;
};

export default function Input({ label, hint, error, className, ...props }: Props) {
  return (
    <div className="space-y-1">
      {label ? <label className="block text-sm font-medium">{label}</label> : null}
      <input
        className={clsx(
          "w-full h-10 rounded-md border border-border bg-background px-3 text-sm placeholder:text-foreground/60 focus:outline-none focus-visible:focus-ring",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {hint && !error ? <p className="text-xs text-foreground/70">{hint}</p> : null}
      {error ? <p className="text-xs text-red-600">{error}</p> : null}
    </div>
  );
}

