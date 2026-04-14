import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-foreground">{site.name}</p>
          <p className="text-sm text-muted-foreground">
            {site.headline} &middot; {site.location}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Emily Weir's LinkedIn profile"
            >
              <LinkedInIcon aria-hidden="true" />
              LinkedIn
            </a>
          </Button>
          <Button asChild size="sm">
            <a
              href={site.resumeUrl}
              download
              aria-label="Download Emily Weir's resume"
            >
              <Download aria-hidden="true" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto w-full max-w-5xl px-6 py-4 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
