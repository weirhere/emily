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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

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

  return (
    <div className="flex min-h-screen flex-col bg-background">
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

          <div className="mb-10 aspect-video overflow-hidden rounded-xl border border-border bg-muted">
            <Image
              src={study.image}
              alt={`Visual preview of ${study.title}`}
              width={1600}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="font-normal">
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

          <Separator className="my-10" />

          <div className="space-y-10">
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
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
