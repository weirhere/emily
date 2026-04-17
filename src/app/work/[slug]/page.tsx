import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FadeUp, ScrollFadeUp } from "@/components/motion-primitives";
import {
  caseStudies,
  getCaseStudy,
  getOtherCaseStudies,
} from "@/lib/case-studies";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return { title: "Case study not found" };
  }

  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const otherStudies = getOtherCaseStudies(study.slug);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <article className="mx-auto w-full max-w-3xl px-6 py-12 sm:py-16">
          <div className="mb-8">
            <Button asChild variant="ghost" size="sm" className="-ml-3">
              <Link href="/#portfolio">
                <ArrowLeft aria-hidden="true" />
                Back to work
              </Link>
            </Button>
          </div>

          <FadeUp delay={0}>
            <header className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge className="border-teal-200 bg-teal-50 font-normal text-teal-700">
                  {study.category}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {study.publication} &middot; {study.date}
                </span>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {study.title}
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {study.summary}
              </p>
            </header>
          </FadeUp>

          <FadeUp delay={0.08} className="mt-10">
            <div className="aspect-video overflow-hidden rounded-xl border border-border bg-muted">
              <Image
                src={study.image}
                alt={`Visual preview of ${study.title}`}
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </FadeUp>

          <div className="mt-10 space-y-10">
            <ScrollFadeUp>
              <section aria-labelledby="brief-heading">
                <h2
                  id="brief-heading"
                  className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  The Brief
                </h2>
                <p className="mt-3 text-base leading-relaxed text-foreground">
                  {study.brief}
                </p>
              </section>
            </ScrollFadeUp>

            <ScrollFadeUp>
              <div className="grid gap-5 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      My Role
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base font-medium leading-snug text-foreground">
                      {study.role}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      The Goal
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base leading-snug text-foreground">
                      {study.goal}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </ScrollFadeUp>

            <ScrollFadeUp>
              <section aria-labelledby="outcomes-heading">
                <h2
                  id="outcomes-heading"
                  className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Outcomes
                </h2>
                <ul className="mt-4 space-y-3">
                  {study.outcomes.map((outcome, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-base leading-relaxed text-foreground"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-1 size-4 shrink-0 text-primary"
                      />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollFadeUp>

            <ScrollFadeUp>
              <section aria-labelledby="source-heading">
                <h2
                  id="source-heading"
                  className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
                >
                  Source
                </h2>
                <div className="mt-4">
                  <Button asChild variant="outline">
                    <a
                      href={study.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {study.sourceLabel}
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </section>
            </ScrollFadeUp>
          </div>

          {otherStudies.length > 0 && (
            <section className="mt-16">
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                More case studies
              </p>
              <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                {otherStudies.map((other, index) => (
                  <ScrollFadeUp
                    key={other.slug}
                    delay={index * 0.08}
                    className="h-full"
                  >
                    <li className="h-full">
                      <Link
                        href={`/work/${other.slug}`}
                        className="group block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        aria-label={`Read case study: ${other.title}`}
                      >
                        <Card className="h-full overflow-hidden pt-0 transition-shadow duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:shadow-edge-hover">
                          <div className="aspect-video overflow-hidden border-b bg-muted">
                            <Image
                              src={other.image}
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
                                {other.category}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {other.date}
                              </span>
                            </div>
                            <CardTitle className="mt-3 text-xl leading-snug text-foreground">
                              {other.title}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span
                                aria-hidden="true"
                                className="inline-block size-1.5 shrink-0 rounded-full bg-primary"
                              />
                              {other.proof}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {other.summary}
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
          )}
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
