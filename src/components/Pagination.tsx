"use client";
import { useState } from "react";

type Props = {
  totalPages: number;
  initialPage?: number;
};

export default function Pagination({ totalPages, initialPage = 1 }: Props) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 7);
  return (
    <nav className="flex items-center gap-2" aria-label="Pagination">
      <button
        type="button"
        className="h-9 px-3 rounded-md border border-border hover:bg-muted"
        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
      >
        Prev
      </button>
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          className={
            "h-9 w-9 rounded-md border text-sm " +
            (p === currentPage ? "bg-primary text-primary-foreground border-primary" : "border-border hover:bg-muted")
          }
          onClick={() => setCurrentPage(p)}
          aria-current={p === currentPage ? "page" : undefined}
        >
          {p}
        </button>
      ))}
      <button
        type="button"
        className="h-9 px-3 rounded-md border border-border hover:bg-muted"
        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
      >
        Next
      </button>
    </nav>
  );
}
