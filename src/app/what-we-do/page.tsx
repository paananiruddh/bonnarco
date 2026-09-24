import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { Button } from "@/components/Button";
import { ArcRings } from "@/components/art/ArcRings";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Business advice, administration, client communication, marketing coordination, lifestyle guidance and wellbeing support for independent operators — backed by Bonnar & Co's own technology.",
};

const offerings = [
  {
    title: "Business advice & practical planning",
    body: [
      "Running your own business raises a steady stream of decisions — pricing, structure, when to grow and when to hold steady. We help you think them through properly, with practical, straight-talking advice rather than generic playbooks.",
      "The goal isn't a thick strategy document. It's clarity on the next right step, and someone to sense-check it with.",
    ],
  },
  {
    title: "Administration, scheduling & operational support",
    body: [
      "The parts of the business that have to happen but rarely get anyone's full attention — bookings, scheduling, paperwork, the general upkeep — are handled properly, consistently, in the background.",
      "Less time on admin means more time on the work that actually pays.",
    ],
  },
  {
    title: "Client enquiry & communication management",
    body: [
      "New enquiries are brought into one communication workflow rather than scattered across missed calls, texts and DMs, then profiled and organised into a dedicated record for the relevant contractor or business.",
      "This is where our Arcus Communication System does the heavy lifting — see the Technology page for how it works.",
    ],
  },
  {
    title: "Advertising coordination & marketing support",
    body: [
      "Online advertising and promotions are coordinated centrally, so campaigns and listings stay consistent across the platforms that matter instead of being managed piecemeal.",
      "We handle the coordination; you stay focused on delivering the work those campaigns bring in.",
    ],
  },
  {
    title: "Lifestyle guidance, accountability & personal support",
    body: [
      "Independent work blurs the line between business and life fast. We offer practical, non-judgemental guidance on the personal side of it too — routine, boundaries, accountability — because a business runs better when the person running it is doing okay.",
    ],
  },
  {
    title: "Mental wellbeing support",
    body: [
      "When the pressure of independent work gets personal rather than just professional, we help you find appropriate qualified support — the right service for what you're actually dealing with.",
      "This is guidance and connection, not clinical or emergency care. If you need help right now, Lifeline (13 11 14) is a free, confidential Australian support line available any time, and 000 is for emergencies.",
    ],
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <Section tone="paper" className="relative overflow-hidden pb-12 sm:pb-16">
        <ArcRings tone="paper" className="absolute -right-12 -top-28 hidden h-96 w-96 lg:block" />
        <p className="eyebrow">What we do</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
          Everything it takes to keep independent work running — handled.
        </h1>
        <p className="prose-body mt-6 max-w-2xl text-lg">
          Bonnar &amp; Co combines business advice, operational support and
          purpose-built technology into a single, practical offering —
          across the business, and for the person behind it.
        </p>
      </Section>

      <Section tone="paper" className="pt-0 sm:pt-0">
        <div className="divide-y divide-ink/10 border-t border-ink/10">
          {offerings.map((offering, i) => (
            <div
              key={offering.title}
              className="grid grid-cols-1 gap-4 py-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-12"
            >
              <div className="flex items-start gap-4 lg:block">
                <span className="font-display text-sm text-brass-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl font-medium text-ink lg:mt-2">
                  {offering.title}
                </h2>
              </div>
              <div className="prose-body max-w-2xl space-y-4">
                {offering.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="harbour">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow text-brass-light">Technology</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-paper sm:text-4xl">
              And the systems that make it all easier to manage.
            </h2>
            <p className="mt-4 max-w-xl text-paper/70">
              Arcus Communication System, LuxSafe and the Advertising
              Command Centre — the technology Bonnar &amp; Co owns and
              operates to keep everything above running smoothly.
            </p>
          </div>
          <Button href="/technology" variant="ghost">
            Explore our technology
          </Button>
        </div>
      </Section>
    </>
  );
}
