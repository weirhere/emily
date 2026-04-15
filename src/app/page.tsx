import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LinkedInIcon } from "@/components/icons";
import { FadeUp, ScrollFadeUp } from "@/components/motion-primitives";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";
import { caseStudies } from "@/lib/case-studies";
import { site } from "@/lib/site";

/* ─────────────────────────────────────────────────────────
 * HOME PAGE STORYBOARD
 *
 *    0ms   headshot fades in
 *   80ms   Tampa badge
 *  160ms   name
 *  240ms   headline
 *  320ms   intro paragraph
 *  400ms   pull quote (linked proof)
 *  480ms   "See the work" CTA
 *   ————————————————————————————————
 *  on-scroll   each case card reveals, staggered 120ms
 * ─────────────────────────────────────────────────────────
 */

const HERO_STEP = 0.08;
const GRID_STEP = 0.12;

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section
          id="about"
          className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24"
        >
          <div className="grid items-center gap-10 md:grid-cols-[220px_1fr] md:gap-16">
            <FadeUp className="mx-auto md:mx-0" delay={0}>
              <div className="relative h-44 w-44 overflow-hidden rounded-full border border-border bg-muted shadow-sm sm:h-52 sm:w-52 md:h-56 md:w-56">
                <Image
                  src={site.headshotUrl}
                  alt={`Headshot of ${site.name}`}
                  fill
                  priority
                  sizes="(min-width: 768px) 224px, 176px"
                  className="object-cover"
                />
              </div>
            </FadeUp>

            <div className="space-y-5 text-center md:text-left">
              <FadeUp delay={HERO_STEP * 1} className="space-y-1">
                <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {site.name}
                </h1>
                <p className="text-base font-medium text-muted-foreground sm:text-lg">
                  {site.headline}
                </p>
                <p className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  <MapPin aria-hidden="true" className="size-3.5" />
                  {site.location}
                </p>
              </FadeUp>

              <FadeUp delay={HERO_STEP * 2}>
                <p className="mx-auto max-w-2xl text-left text-base leading-relaxed text-muted-foreground md:mx-0">
                  {site.intro}
                </p>
              </FadeUp>

              <FadeUp delay={HERO_STEP * 3}>
                <Link
                  href="/work/crisis-center-50th-anniversary-newsletter"
                  className="group block max-w-2xl border-l-2 border-primary pl-4 text-left"
                >
                  <p className="text-base leading-snug text-foreground sm:text-lg">
                    A newsletter that holds 84,536 crisis calls and one donor&rsquo;s handwritten note.
                  </p>
                  <p className="mt-1.5 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-primary">
                    See how
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </p>
                </Link>
              </FadeUp>

              <FadeUp delay={HERO_STEP * 4} className="pt-1">
                <div className="flex justify-center md:justify-start">
                  <Button asChild size="lg">
                    <SmoothScrollLink href="#portfolio">
                      See the work
                      <ArrowDown aria-hidden="true" />
                    </SmoothScrollLink>
                  </Button>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="mx-auto w-full max-w-6xl px-6 pb-20 sm:pb-28"
        >
          <ScrollFadeUp>
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
                Three recent projects across press, web, and print.
              </p>
            </div>
          </ScrollFadeUp>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <ScrollFadeUp
                key={study.slug}
                delay={index * GRID_STEP}
                className="h-full"
              >
                <li className="h-full">
                  <Link
                    href={`/work/${study.slug}`}
                    className="group block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={`Read case study: ${study.title}`}
                  >
                    <Card className="h-full overflow-hidden pt-0 transition-shadow duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:shadow-edge-hover">
                      <div className="aspect-video overflow-hidden border-b bg-muted">
                        <Image
                          src={study.image}
                          alt=""
                          width={1600}
                          height={900}
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="h-full w-full object-cover transition-transform duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.02]"
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
                        <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span
                            aria-hidden="true"
                            className="inline-block size-1.5 shrink-0 rounded-full bg-primary"
                          />
                          {study.proof}
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
                            className="size-4 transition-all duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </li>
              </ScrollFadeUp>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="mx-auto w-full max-w-6xl px-6 pb-20 sm:pb-28"
        >
          <ScrollFadeUp>
            <div className="rounded-2xl bg-muted/40 px-8 py-12 text-center shadow-edge sm:px-12 sm:py-16">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Want to work together?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
                Open to marketing and PR roles: nonprofit, agency, or in-house brand.
              </p>
              <div className="mt-7 flex justify-center">
                <Button asChild size="lg">
                  <a
                    href={site.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInIcon aria-hidden="true" />
                    Get in touch on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </ScrollFadeUp>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
