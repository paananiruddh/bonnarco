import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <Section tone="paper" className="text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-5 font-display text-4xl font-medium text-ink sm:text-5xl">
        That page has wandered off.
      </h1>
      <p className="prose-body mx-auto mt-4 max-w-md text-lg">
        The page you&rsquo;re looking for doesn&rsquo;t exist, or has
        moved.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/">Back to home</Button>
      </div>
    </Section>
  );
}
