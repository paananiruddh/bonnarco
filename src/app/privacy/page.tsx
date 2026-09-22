import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/Section";
import { LegalContent } from "@/components/LegalContent";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} collects, uses and protects personal information.`,
};

const LAST_UPDATED = "22 September 2026";

export default function PrivacyPage() {
  return (
    <Section tone="paper">
      <p className="eyebrow">Privacy Policy</p>
      <h1 className="mt-5 font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-stone">Last updated: {LAST_UPDATED}</p>

      <LegalContent>
        <p>
          {site.legalName} (&ldquo;Bonnar &amp; Co&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;) respects your privacy. This policy explains what
          personal information we collect through this website, how we use
          it, and how you can get in touch about it. It's written with the
          Australian Privacy Principles in mind.
        </p>

        <h2>Information we collect</h2>
        <p>When you make an enquiry through this site, we collect:</p>
        <ul>
          <li>Your name and email address</li>
          <li>Your phone number and business or trading name, if provided</li>
          <li>The area of enquiry you select and the message you send us</li>
        </ul>
        <p>
          Our servers also automatically log standard technical
          information (such as IP address and request timing) for
          security purposes and to prevent abuse of the enquiry form. This
          site does not currently use cookies or third-party analytics.
        </p>

        <h2>How we use it</h2>
        <p>
          We use the information you provide solely to respond to your
          enquiry, keep an internal record of it, and — if you become a
          client — to provide the business support services you&rsquo;ve
          asked about. We don&rsquo;t use it for unrelated marketing
          without your separate consent, and we don&rsquo;t sell it.
        </p>

        <h2>Who we share it with</h2>
        <p>
          We don&rsquo;t share your information with third parties except
          where necessary to operate this service — for example, an email
          delivery provider used to route enquiries to our team — or where
          required by law. Any such provider is only ever given what it
          needs to perform that function.
        </p>

        <h2>How we protect it</h2>
        <p>
          We take reasonable technical and organisational steps to protect
          the personal information we hold from misuse, loss and
          unauthorised access. No online system is completely secure, but
          we work to keep enquiry data limited to what's needed and
          accessible only to the people who need it to respond to you.
        </p>

        <h2>Access and correction</h2>
        <p>
          You can ask what personal information we hold about you, ask us
          to correct it, or ask us to delete it, by getting in touch via
          our{" "}
          <Link
            href="/contact"
            className="font-medium text-brass-dark underline underline-offset-4"
          >
            contact form
          </Link>
          . We'll respond to reasonable requests as promptly as we can.
        </p>
        <p>
          If you're not satisfied with how we've handled your personal
          information, you can also contact the Office of the Australian
          Information Commissioner (OAIC) at{" "}
          <span className="whitespace-nowrap">oaic.gov.au</span>.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this policy from time to time as the site and our
          services evolve. The &ldquo;last updated&rdquo; date above
          reflects the current version.
        </p>
      </LegalContent>
    </Section>
  );
}
