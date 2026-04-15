export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  publication: string;
  proof: string;
  date: string;
  brief: string;
  role: string;
  goal: string;
  outcomes: string[];
  sourceUrl: string;
  sourceLabel: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "suncoast-grant-press-release",
    title: "Reframing a $35K grant as 50 forensic exams for teens",
    summary:
      "A $35,000 Suncoast grant, framed as 50 forensic exams for teens, and a story about the Crisis Center's role as the county's certified rape crisis center.",
    category: "Press Release",
    publication: "Crisis Center of Tampa Bay",
    proof: "50 forensic exams funded",
    date: "April 2026",
    brief:
      "The Crisis Center of Tampa Bay received a $35,000 grant from the Suncoast Credit Union Foundation to offset the cost of forensic sexual assault exams for clients ages 13 to 17, a service that runs more than $1,700 per exam, with a deficit remaining even after government funding. Leadership wanted to announce the gift in a way that made the real cost of this care concrete for readers, recognized a long-standing funding partner, and reinforced the Crisis Center's role as the county's certified rape crisis center.",
    role: "Communications Lead",
    goal:
      "Draft and distribute a press release that translated the grant into a tangible unit of care, honored Suncoast's continued partnership, and generated earned media coverage across the Tampa Bay market.",
    outcomes: [
      "Framed the $35,000 grant around a concrete unit of care (50 forensic exams for clients ages 13 to 17), so the dollar figure landed as impact rather than abstraction.",
      "Surfaced an under-reported data point (each exam costs over $1,700, with a deficit remaining after government funding) to give readers a clear reason the gift matters.",
      "Secured on-the-record quotes from both Suncoast's Executive Director of Foundations and the Crisis Center's CEO, framing the partnership from both sides.",
      "Anchored the announcement inside the Crisis Center's broader mission so a single-grant story also introduced Corbett Trauma Center, Gateway Contact Center, Success 4 Kids & Families, and TransCare to new readers.",
    ],
    sourceUrl: "/case-studies/suncoast-grant-press-release.pdf",
    sourceLabel: "Read the press release (PDF)",
    image: "/case-studies/suncoast-grant-press-release.png",
  },
  {
    slug: "mental-health-and-hurricanes",
    title: "Turning hurricane season into an entry point for Crisis Center services",
    summary:
      "A web page that turns hurricane-season anxiety into a clear path to 988, 211, and the Crisis Center's HERO Line.",
    category: "Web Copy",
    publication: "Crisis Center of Tampa Bay",
    proof: "988 · 211 · HERO Line routing",
    date: "2025",
    brief:
      "Hurricane season is one of the highest-stress stretches of the year in Tampa Bay, and the Crisis Center wanted a dedicated page that met anxious residents where they were, from pre-storm preparation through post-storm recovery. The page needed to normalize hurricane-related stress, equip readers with practical coping guidance, and route them into the Crisis Center's existing services (988, 211, HERO Line, Corbett Trauma Center) rather than leaving them with generic advice.",
    role: "Copywriter",
    goal:
      "Write a standalone web page that normalized hurricane-related stress, offered phase-specific coping strategies, and turned a timely seasonal topic into a clear entry point for the Crisis Center's services.",
    outcomes: [
      "Authored a full web page mapping mental health guidance to the pre-, during-, and post-hurricane phases most Tampa Bay residents experience.",
      "Connected content directly to existing Crisis Center channels (988, 211, the HERO Line, and the Corbett Trauma Center) so readers left with concrete next steps, not general advice.",
      "Extended the Crisis Center's voice into a timely, SEO-relevant page that surfaces alongside hurricane-preparation searches in the Tampa Bay market.",
      "Added to a broader body of web copy written across crisiscenter.com, continuing to shape how the organization sounds on its own site.",
    ],
    sourceUrl: "https://www.crisiscenter.com/hurricane/",
    sourceLabel: "View the page on crisiscenter.com",
    image: "/case-studies/mental-health-and-hurricanes.png",
  },
  {
    slug: "crisis-center-50th-anniversary-newsletter",
    title: "A 50-year donor newsletter, written and redesigned end-to-end",
    summary:
      "Eight pages written and redesigned end-to-end: 50 years of Crisis Center history anchored in one donor's handwritten note.",
    category: "Print Editorial",
    publication: "Crisis Center of Tampa Bay",
    proof: "84,536 crisis calls · 8 pages",
    date: "2022",
    brief:
      "The Crisis Center of Tampa Bay was marking 50 years of service and needed a donor newsletter that honored that half-century legacy while keeping long-time supporters current on the breadth of today's programs: 988 and 211, TransCare, Sexual Assault Services, and the Corbett Trauma Center. The piece needed to balance a CEO letter, service updates, event recaps, client storytelling, impact data, and donor recognition in a single cohesive mailed issue.",
    role: "Writer & Newsletter Designer",
    goal:
      "Produce the annual donor newsletter end-to-end (writing every story and refreshing the layout) to celebrate the organization's 50-year legacy, communicate the full range of current services, and deepen donor connection to the mission.",
    outcomes: [
      "Wrote all eight pages of content, including a CEO letter on the 50-year legacy, service updates across 988, TransCare, Sexual Assault Services, and the Corbett Trauma Center, event recaps, and a donor spotlight.",
      "Refreshed the newsletter's design system (typography, color, and information hierarchy) to feel modern while staying at home in a printed, mailed package.",
      "Translated internal program data into accessible storytelling, including an 'Our Impact on the Community' spread visualizing 84,536 crisis calls, 10,261 counseling sessions, and 31,845 TransCare transports.",
      "Anchored the issue with a client's handwritten 'My Future Looks Bright' note to ground program metrics in an individual story of healing.",
    ],
    sourceUrl: "/case-studies/crisis-center-50th-anniversary-newsletter.pdf",
    sourceLabel: "View the printed newsletter (PDF)",
    image: "/case-studies/crisis-center-50th-anniversary-newsletter.png",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
