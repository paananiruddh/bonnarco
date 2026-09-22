import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";
import { FeatureCard } from "@/components/FeatureCard";
import { EntityCard } from "@/components/EntityCard";
import { technologyProducts, operatingBrands } from "@/lib/site-config";

const pillars = [
  {
    title: "Business advice & planning",
    description:
      "Straightforward, practical guidance for the decisions that matter — pricing, structure, growth, and the ones in between.",
  },
  {
    title: "Administration & scheduling",
    description:
      "Day-to-day admin and scheduling handled properly, so nothing falls through the cracks while you're doing the actual work.",
  },
  {
    title: "Enquiry & client communication",
    description:
      "Every enquiry brought into one place, profiled and organised — so new business doesn't get lost in a crowded inbox.",
  },
  {
    title: "Advertising & marketing coordination",
    description:
      "Online advertising and promotions coordinated and kept consistent, without you having to manage five platforms yourself.",
  },
  {
    title: "Lifestyle guidance & accountability",
    description:
      "Practical, non-judgemental support for the personal side of independent work — with a bit of accountability built in.",
  },
  {
    title: "Wellbeing support",
    description:
      "Help finding the right qualified support when the pressure of independent work gets personal, not just professional.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <svg
          className="pointer-events-none absolute -right-24 -top-24 h-[32rem] w-[32rem] text-stone-light/40 sm:-right-16 sm:-top-32"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="199" stroke="currentColor" />
          <circle cx="200" cy="200" r="150" stroke="currentColor" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pt-24 lg:px-10 lg:pb-28 lg:pt-32">
          <p className="eyebrow">
            For sole traders, contractors &amp; small business operators
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Running a business shouldn&rsquo;t mean running it alone.
          </h1>
          <p className="prose-body mt-6 max-w-xl text-lg">
            Bonnar &amp; Co brings business advice, day-to-day admin, client
            communication and purpose-built technology together in one
            place — with a human approach for the personal pressure that
            can come with going it alone.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact">Make an enquiry</Button>
            <Button href="/what-we-do" variant="secondary">
              See what we do
            </Button>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <SectionHeading
          eyebrow="What we do"
          title="Practical support across the business — and the person running it."
          dek="Bonnar & Co exists to take the operational weight off independent operators, without taking away their independence."
        />
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <FeatureCard
              key={pillar.title}
              index={i + 1}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
        <div className="mt-12">
          <Button href="/what-we-do" variant="secondary">
            See everything we do
          </Button>
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading
          eyebrow="Technology"
          title="Purpose-built systems, not spreadsheets and sticky notes."
          dek="Bonnar & Co owns and operates its own technology, built specifically for independent operators and the people who support them."
          tone="light"
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technologyProducts.map((product) => (
            <div
              key={product.key}
              className="rounded-2xl border border-paper/15 p-7"
            >
              <h3 className="font-display text-lg font-medium text-paper">
                {product.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-brass-light">
                {product.summary}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-paper/70">
                {product.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/technology" variant="ghost">
            Explore our technology
          </Button>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Our brands"
          title="Operating brands within Bonnar & Co."
          dek="Some of what we do lives under its own name. Arcus and LuxCty are operating brands within Bonnar & Co, each built for the people they serve."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {operatingBrands.map((brand) => (
            <EntityCard
              key={brand.name}
              title={brand.name}
              summary={brand.summary}
              description={brand.description}
              href={brand.url}
            />
          ))}
        </div>
        <div className="mt-12">
          <Button href="/brands" variant="secondary">
            More about our brands
          </Button>
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="About" title="Built for the people doing the actual work." />
          <p className="prose-body max-w-2xl">
            Bonnar &amp; Co is an umbrella business providing support and
            advice across multiple industries — for sole traders,
            independent contractors and small business operators who are
            managing the practical demands of running things, and the
            personal pressures that can come with it.{" "}
            <Link href="/about" className="focus-ring font-medium text-brass-dark underline underline-offset-4">
              Read more about how we work
            </Link>
            .
          </p>
        </div>
      </Section>

      <Section tone="harbour" className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-medium text-paper sm:text-4xl">
            Tell us what&rsquo;s going on. We&rsquo;ll help you find the
            right kind of support.
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Make an enquiry</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
