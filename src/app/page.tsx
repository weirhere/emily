import Image from "next/image";
import { LinkedInIcon } from "@/components/icons";
import { site } from "@/lib/site";

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border border-border bg-muted shadow-sm">
          <Image
            src={site.headshotUrl}
            alt={`Headshot of ${site.name}`}
            fill
            priority
            sizes="128px"
            className="object-cover"
          />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {site.name}
          </h1>
          <p className="text-lg text-muted-foreground">
            New website coming soon
          </p>
        </div>

        <a
          href={site.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${site.name} on LinkedIn`}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <LinkedInIcon className="size-5" />
        </a>
      </div>
    </div>
  );
}
