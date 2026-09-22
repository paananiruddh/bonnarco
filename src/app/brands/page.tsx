import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Our Brands",
  description:
    "Arcus and LuxCty are operating brands within Bonnar & Co, each built for the clients and industries they serve directly.",
};

const brands = [
  {
    name: "Arcus",
    url: "https://arcussvcs.com",
    summary: "Scheduling and coordination for contractor teams.",
    paragraphs: [
      "Arcus brings job scheduling, contractor coordination and client communication into a single workspace — built for contractor teams who need to move quickly without losing track of who's doing what, and where.",
      "It's designed for operations clarity: centralised dashboards, coordinated job flow, and fast, consistent communication that helps client response times stay sharp.",
    ],
    points: [
      "Jobs, calls and schedules coordinated in one workspace",
      "Centralised dashboards for clear operational visibility",
      "Fast, consistent client communication, including dedicated numbers",
    ],
  },
  {
    name: "LuxCty",
    url: "https://luxcty.com",
    summary: "Professional management and support for independent operators.",
    paragraphs: [
      "LuxCty is a professional management brand for independent operators — support built around safety, day-to-day coordination and confidential long-term planning, all designed to protect independence rather than replace it.",
      "Its safety operations and check-in protocols share a foundation with Bonnar & Co's own LuxSafe technology; its client communication and scheduling needs draw on the same thinking behind the Arcus Communication System.",
    ],
    points: [
      "Safety operations, including structured check-ins and discreet escalation pathways",
      "Day-to-day coordination — client communication, bookings and scheduling",
      "Confidential guidance on long-term and financial planning",
    ],
  },
];

export default function BrandsPage() {
  return (
    <>
      <Section tone="paper" className="pb-12 sm:pb-16">
        <p className="eyebrow">Our brands</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
          Operating brands within Bonnar &amp; Co.
        </h1>
        <p className="prose-body mt-6 max-w-2xl text-lg">
          Arcus and LuxCty operate under their own names, for the clients
          and industries they serve directly. Both draw on the systems and
          support structure of Bonnar &amp; Co behind the scenes.
        </p>
      </Section>

      <Section tone="paper" className="pt-0 sm:pt-0">
        <div className="space-y-16 border-t border-ink/10 pt-4 sm:space-y-20">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="grid grid-cols-1 gap-8 pt-10 lg:grid-cols-[1fr_1fr] lg:gap-16"
            >
              <div>
                <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                  {brand.name}
                </h2>
                <p className="mt-2 text-sm font-medium text-brass-dark">
                  {brand.summary}
                </p>
                <div className="prose-body mt-4 max-w-xl space-y-4">
                  {brand.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-ring mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
                >
                  Visit {brand.name}
                  <span aria-hidden>↗</span>
                </a>
              </div>
              <ul className="h-fit space-y-3 rounded-2xl border border-ink/10 bg-sand/50 p-7">
                {brand.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-ink-soft">
                    <span aria-hidden className="mt-1 text-brass-dark">
                      —
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
