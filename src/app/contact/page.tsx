import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Make an enquiry with Bonnar & Co — business advice, operational support and technology for independent operators.",
};

export default function ContactPage() {
  return (
    <Section tone="paper">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
            Make an enquiry.
          </h1>
          <p className="prose-body mt-6 max-w-md text-lg">
            The quickest way to reach us is the form. Tell us a little
            about what&rsquo;s going on and the right person will get back
            to you.
          </p>
          <p className="prose-body mt-4 max-w-md text-sm text-stone">
            Prefer not to put everything in writing yet? A short note is
            enough to get started — we&rsquo;ll take it from there.
          </p>
        </div>
        <EnquiryForm />
      </div>
    </Section>
  );
}
