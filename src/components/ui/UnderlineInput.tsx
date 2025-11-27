import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export function UnderlineInput({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={"w-full bg-transparent border-b border-border focus:border-teal-700 outline-none py-2 text-sm placeholder:text-foreground/60 " + (className ?? "")}
      {...props}
    />
  );
}

export function UnderlineTextarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={"w-full bg-transparent border-b border-border focus:border-teal-700 outline-none py-2 text-sm placeholder:text-foreground/60 " + (className ?? "")}
      {...props}
    />
  );
}

