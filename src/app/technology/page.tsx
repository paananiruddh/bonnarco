import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Arcus Communication System, LuxSafe and the Advertising Command Centre — the technology Bonnar & Co owns and operates for independent operators.",
};

const products = [
  {
    key: "arcus-communication-system",
    name: "Arcus Communication System",
    summary: "Enquiry handling, client communication and contractor CRM.",
    paragraphs: [
      "A premium SMS and email enquiry system built around one idea: no enquiry should get missed because it arrived on the wrong channel at the wrong time. Messages come in through a single communication workflow instead of being scattered across phones, inboxes and platforms.",
      "Every enquiry is profiled and organised into a dedicated CRM record for the relevant contractor or business, so there's a clear, current picture of who's reached out, about what, and what happened next.",
    ],
    points: [
      "One place for every enquiry, whatever channel it arrived through",
      "Enquiries profiled and organised into a dedicated CRM record",
      "Faster, more consistent responses that build client trust",
    ],
  },
  {
    key: "luxsafe",
    name: "LuxSafe",
    summary: "Check-ins and operational support for safety concerns.",
    paragraphs: [
      "A structured check-in system built around a simple idea: independent work shouldn't mean working without a safety net. Clear protocols and discreet escalation pathways mean support is there when it's genuinely needed, without unnecessary intrusion the rest of the time.",
    ],
    points: [
      "Regular, structured check-ins",
      "Clear, discreet escalation pathways when something's wrong",
      "Operational support built around safety, not paperwork after the fact",
    ],
  },
  {
    key: "advertising-command-centre",
    name: "Advertising Command Centre",
    summary: "Coordination of online advertising and marketing activity.",
    paragraphs: [
      "A central point of control for online advertising and marketing activity, so campaigns, listings and promotions stay coordinated and consistent across the platforms that matter — without needing to log into five different dashboards to keep track of it all.",
    ],
    points: [
      "One view across active campaigns and listings",
      "Consistent messaging across platforms",
      "Coordination handled centrally, not managed solo",
    ],
  },
];

export default function TechnologyPage() {
  return (
    <>
      <Section tone="paper" className="pb-12 sm:pb-16">
        <p className="eyebrow">Technology</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
          Purpose-built systems for independent operators.
        </h1>
        <p className="prose-body mt-6 max-w-2xl text-lg">
          Bonnar &amp; Co owns and operates the technology behind its own
          support model. It's built specifically for independent operators
          and the people who support them — not adapted from something
          generic.
        </p>
        <p className="prose-body mt-4 max-w-2xl text-sm text-stone">
          Note: Arcus Communication System is Bonnar &amp; Co&rsquo;s own
          technology, distinct from Arcus, one of our{" "}
          <Link href="/brands" className="focus-ring font-medium text-brass-dark underline underline-offset-4">
            operating brands
          </Link>
          .
        </p>
      </Section>

      <Section tone="paper" className="pt-0 sm:pt-0">
        <div className="space-y-16 border-t border-ink/10 pt-4 sm:space-y-20">
          {products.map((product) => (
            <div
              key={product.key}
              className="grid grid-cols-1 gap-8 pt-10 lg:grid-cols-[1fr_1fr] lg:gap-16"
            >
              <div>
                <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm font-medium text-brass-dark">
                  {product.summary}
                </p>
                <div className="prose-body mt-4 max-w-xl space-y-4">
                  {product.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <ul className="h-fit space-y-3 rounded-2xl border border-ink/10 bg-sand/50 p-7">
                {product.points.map((point) => (
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

      <Section tone="ink" className="text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-medium text-paper sm:text-4xl">
            Want to see how it would work for you?
          </h2>
          <p className="mt-4 text-paper/70">
            Tell us a bit about how you operate and we&rsquo;ll talk you
            through what fits.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact">Make an enquiry</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
