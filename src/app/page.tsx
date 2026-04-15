import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { caseStudies } from "@/lib/case-studies";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        <section
          id="about"
          className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-24"
        >
          <div className="grid items-center gap-10 md:grid-cols-[240px_1fr] md:gap-16">
            <div className="mx-auto md:mx-0">
              <div className="relative h-48 w-48 overflow-hidden rounded-full border border-border bg-muted shadow-sm sm:h-56 sm:w-56 md:h-60 md:w-60">
                <Image
                  src={site.headshotUrl}
                  alt={`Headshot of ${site.name}`}
                  fill
                  priority
                  sizes="(min-width: 768px) 240px, 192px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-5 text-center md:text-left">
              <Badge variant="secondary" className="mx-auto md:mx-0">
                {site.location}
              </Badge>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {site.name}
              </h1>
              <p className="text-lg font-medium text-muted-foreground sm:text-xl">
                {site.headline}
              </p>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:mx-0">
                {site.intro}
              </p>
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="mx-auto w-full max-w-5xl px-6 pb-20 sm:pb-28"
        >
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Selected Work
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Writing &amp; Case Studies
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              A selection of campaigns, features, and bylines.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2">
            {caseStudies.map((study) => (
              <li key={study.slug}>
                <Link
                  href={`/work/${study.slug}`}
                  className="group block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={`Read case study: ${study.title}`}
                >
                  <Card className="h-full overflow-hidden pt-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-foreground/30 group-hover:shadow-md">
                    <div className="aspect-video overflow-hidden border-b bg-muted">
                      <Image
                        src={study.image}
                        alt=""
                        width={1600}
                        height={900}
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between gap-3">
                        <Badge variant="outline" className="font-normal">
                          {study.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {study.date}
                        </span>
                      </div>
                      <CardTitle className="mt-3 text-xl leading-snug text-foreground">
                        {study.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {study.publication}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {study.summary}
                      </p>
                      <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                        Read case study
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
