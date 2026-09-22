import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { LegalContent } from "@/components/LegalContent";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for the ${site.brandName} website.`,
};

const LAST_UPDATED = "22 September 2026";

export default function TermsPage() {
  return (
    <Section tone="paper">
      <p className="eyebrow">Terms of Use</p>
      <h1 className="mt-5 font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
        Terms of Use
      </h1>
      <p className="mt-4 text-sm text-stone">Last updated: {LAST_UPDATED}</p>

      <LegalContent>
        <p>
          These terms apply to your use of this website, operated by{" "}
          {site.legalName}. By using this site, you agree to them. If you
          don't agree, please don't use the site.
        </p>

        <h2>General information only</h2>
        <p>
          Content on this website is general information about Bonnar
          &amp; Co and its services. It isn't personalised business,
          financial, legal or medical advice, and shouldn't be treated as
          a substitute for it. Any advice we provide directly to you as a
          client is separate from, and not limited by, the general content
          on this site.
        </p>

        <h2>Not a clinical or emergency service</h2>
        <p>
          Where this site refers to lifestyle guidance or wellbeing
          support, that means help finding appropriate qualified services
          — it is not itself a clinical, medical or emergency service. If
          you need urgent help, please contact Lifeline (13 11 14),
          Beyond Blue (1300 22 4636), or 000 in an emergency.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The Bonnar &amp; Co name, logo and other brand assets on this
          site are owned by {site.legalName}. You may not copy, reproduce
          or use them without our written permission, except as necessary
          to view and share this website in the ordinary course of
          browsing it.
        </p>

        <h2>Third-party links</h2>
        <p>
          This site links to third-party sites, including our operating
          brands Arcus (arcussvcs.com) and LuxCty (luxcty.com). Those
          sites are operated independently and governed by their own
          terms. We aren't responsible for their content.
        </p>

        <h2>Enquiries and no guarantee of outcome</h2>
        <p>
          Submitting an enquiry through this site doesn't create a client
          relationship or any guarantee of service, response time or
          outcome. Any engagement is confirmed separately, directly with
          you.
        </p>

        <h2>Liability</h2>
        <p>
          To the extent permitted by law, Bonnar &amp; Co isn't liable for
          any loss arising from your use of this website. Nothing in
          these terms excludes, restricts or modifies any consumer
          guarantee, right or remedy under the Australian Consumer Law
          that cannot lawfully be excluded.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          We may update these terms from time to time. The &ldquo;last
          updated&rdquo; date above reflects the current version.
        </p>

        <h2>Governing law</h2>
        <p>These terms are governed by the laws of Australia.</p>
      </LegalContent>
    </Section>
  );
}
