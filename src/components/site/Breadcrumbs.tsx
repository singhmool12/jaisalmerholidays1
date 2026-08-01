import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { Crumb } from "@/lib/seo";

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 pt-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-[var(--muted-foreground)]">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1 min-w-0">
              {i > 0 && <ChevronRight size={13} className="shrink-0 opacity-60" />}
              {last ? (
                <span aria-current="page" className="text-[var(--maroon)] font-semibold truncate">{c.name}</span>
              ) : (
                <Link to={c.path as "/"} className="hover:text-[var(--terracotta)] hover:underline">
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
