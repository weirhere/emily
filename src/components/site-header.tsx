import Link from "next/link";
import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80"
        >
          {site.name}
        </Link>
        <Button asChild size="sm" variant="outline">
          <a
            href={site.resumeUrl}
            download
            aria-label="Download Emily Weir's resume"
          >
            <Download aria-hidden="true" />
            Resume
          </a>
        </Button>
      </div>
    </header>
  );
}
