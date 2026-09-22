export function FeatureCard({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className="border-t border-ink/10 pt-6">
      <span className="font-display text-sm text-brass-dark">
        {String(index).padStart(2, "0")}
      </span>
      <h3 className="mt-3 font-display text-xl font-medium text-ink">
        {title}
      </h3>
      <p className="mt-2 text-[0.975rem] leading-relaxed text-stone">
        {description}
      </p>
    </div>
  );
}
