import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { FeatureCard } from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bonnar & Co is a business support and advisory umbrella for sole traders, independent contractors and small business operators, built to work discreetly across a range of industries.",
};

const values = [
  {
    title: "Practical first",
    description:
      "We deal in what actually helps — clear advice and real support, not jargon or theory.",
  },
  {
    title: "Discreet by design",
    description:
      "We work across a range of industries and never make a client's business anyone else's. Discretion isn't an add-on here, it's the default.",
  },
  {
    title: "Capable, not corporate",
    description:
      "Small enough to be human, organised enough to be relied on.",
  },
  {
    title: "Human, always",
    description:
      "Behind every enquiry is a person, not just a business — and we treat it that way.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section tone="paper" className="pb-12 sm:pb-16">
        <p className="eyebrow">About Bonnar &amp; Co</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
          An umbrella for the practical and the personal.
        </h1>
        <p className="prose-body mt-6 max-w-2xl text-lg">
          Bonnar &amp; Co is a business support and advisory umbrella for
          people running their own show — built to work quietly in the
          background, across a range of industries.
        </p>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Purpose"
          title="Helping the business run, and the person behind it."
        />
        <div className="prose-body mt-8 max-w-2xl space-y-5">
          <p>
            Bonnar &amp; Co exists to help sole traders, independent
            contractors and small business operators manage the practical
            demands of running a business — the advice, the admin, the
            enquiries, the marketing — and the personal pressures that can
            come with carrying it all alone.
          </p>
          <p>
            That means support that goes beyond the spreadsheet: practical
            planning, day-to-day operations, client communication,
            marketing coordination and, when things get personal rather
            than just professional, lifestyle guidance and help finding
            the right qualified support.
          </p>
        </div>
      </Section>

      <Section tone="paper">
        <SectionHeading eyebrow="How we work" title="What guides the way we operate." />
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {values.map((value, i) => (
            <FeatureCard
              key={value.title}
              index={i + 1}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow text-brass-light">Under the umbrella</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-paper sm:text-4xl">
              What sits under Bonnar &amp; Co
            </h2>
            <p className="mt-4 max-w-md text-paper/70">
              Bonnar &amp; Co owns and operates technology built for
              independent operators, and it&rsquo;s home to operating
              brands built for the people they serve directly.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Link
              href="/technology"
              className="focus-ring group rounded-2xl border border-paper/15 p-7 transition-colors hover:border-paper/40"
            >
              <span className="font-display text-lg font-medium text-paper">
                Technology
              </span>
              <p className="mt-2 text-sm text-paper/65">
                Arcus Communication System, LuxSafe and the Advertising
                Command Centre.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-brass-light">
                View technology ↗
              </span>
            </Link>
            <Link
              href="/brands"
              className="focus-ring group rounded-2xl border border-paper/15 p-7 transition-colors hover:border-paper/40"
            >
              <span className="font-display text-lg font-medium text-paper">
                Our brands
              </span>
              <p className="mt-2 text-sm text-paper/65">
                Arcus and LuxCty — operating brands within Bonnar &amp; Co.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-brass-light">
                Meet our brands ↗
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
