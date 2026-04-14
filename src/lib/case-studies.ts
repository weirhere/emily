export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publication: string;
  date: string;
  brief: string;
  role: string;
  goal: string;
  outcomes: string[];
  sourceUrl: string;
  sourceLabel: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "brand-launch-campaign",
    title: "Launching a Direct-to-Consumer Wellness Brand",
    summary:
      "Led go-to-market messaging and earned media strategy for a new wellness brand entering a saturated market.",
    category: "Brand Launch",
    publication: "Fast Company",
    date: "March 2025",
    brief:
      "A pre-launch wellness brand needed to cut through a crowded market and build trust with skeptical consumers ahead of its national retail debut. The founding team had a strong product but no earned media footprint, no clear narrative, and limited runway before launch day.",
    role: "Lead Publicist & Brand Messaging Strategist",
    goal:
      "Craft a distinct founder-led narrative, secure top-tier earned media placements, and drive qualified traffic to the brand's pre-order waitlist in the eight weeks leading up to launch.",
    outcomes: [
      "Secured 14 tier-one placements across lifestyle, business, and wellness press, including a feature in Fast Company.",
      "Grew the pre-order waitlist by 312% month-over-month in the six weeks prior to launch.",
      "Positioned the founder as a category thought leader through three commissioned op-eds and two podcast appearances.",
      "Established messaging guidelines and a press kit that the internal team still uses today.",
    ],
    sourceUrl: "https://www.fastcompany.com",
    sourceLabel: "Read the feature on Fast Company",
  },
  {
    slug: "thought-leadership-op-ed",
    title: "Founder Op-Ed on the Future of Retail",
    summary:
      "Ghostwrote a byline placement that reframed a founder's point of view on experiential retail.",
    category: "Thought Leadership",
    publication: "Business of Fashion",
    date: "November 2024",
    brief:
      "A retail founder wanted to elevate her voice in the conversation around the future of brick-and-mortar but struggled to translate operational insight into a compelling editorial point of view. Previous pitches had been declined by target publications.",
    role: "Ghostwriter & Media Relations Lead",
    goal:
      "Develop a sharp, contrarian thesis and place a byline in a top-tier industry publication that would position the founder as an authority on experiential retail.",
    outcomes: [
      "Byline published in Business of Fashion within four weeks of kickoff.",
      "Piece drove a 47% lift in founder LinkedIn followers in the first two weeks.",
      "Sparked inbound interest from two national conferences and a podcast network.",
      "Became a reference point for subsequent investor conversations.",
    ],
    sourceUrl: "https://www.businessoffashion.com",
    sourceLabel: "Read the op-ed on Business of Fashion",
  },
  {
    slug: "crisis-communications",
    title: "Crisis Response for a Hospitality Group",
    summary:
      "Managed messaging, media relations, and internal comms during a high-profile operational crisis.",
    category: "Crisis Communications",
    publication: "Eater",
    date: "July 2024",
    brief:
      "A growing hospitality group faced an operational incident that was trending across local media and social platforms. Coverage was accelerating, team morale was dropping, and leadership needed a defensible, human response within 24 hours.",
    role: "Communications Lead & Spokesperson Coach",
    goal:
      "Stabilize the narrative, communicate transparently with stakeholders, protect team members, and reestablish trust with guests and the press within a seven-day window.",
    outcomes: [
      "Delivered an on-the-record statement and founder interview within 18 hours of crisis onset.",
      "Reduced negative sentiment in press coverage by 62% week-over-week.",
      "Coached three executives for live media interviews, all of which published verbatim quotes.",
      "Built an internal communications cadence that is now a permanent part of the company's playbook.",
    ],
    sourceUrl: "https://www.eater.com",
    sourceLabel: "Read the coverage on Eater",
  },
  {
    slug: "product-launch-feature",
    title: "Tier-One Product Launch Feature",
    summary:
      "Orchestrated an exclusive product launch feature that became the brand's most-cited press moment.",
    category: "Product Launch",
    publication: "The Verge",
    date: "April 2024",
    brief:
      "A consumer tech startup was preparing to launch its flagship product and wanted to anchor the moment with one definitive story rather than a scattered press push. Competitors in the category had recently underwhelmed with their own launches.",
    role: "Press Strategy Lead",
    goal:
      "Secure an exclusive launch feature with a tier-one tech publication and coordinate a tightly sequenced follow-on press rollout that would sustain coverage through the first 30 days.",
    outcomes: [
      "Landed an exclusive launch feature in The Verge that drove 40% of launch-week site traffic.",
      "Coordinated a 21-outlet follow-on rollout with zero embargo breaks.",
      "Product sold through its first production run in 11 days.",
      "Feature remains the brand's most-cited press moment with investors and partners.",
    ],
    sourceUrl: "https://www.theverge.com",
    sourceLabel: "Read the launch feature on The Verge",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
