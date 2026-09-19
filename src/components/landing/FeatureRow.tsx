import { Placeholder } from "./Placeholder";

type FeatureRowProps = {
  eyebrow?: string;
  title: string;
  description: string;
  imageLabel: string;
  reverse?: boolean;
};

export function FeatureRow({
  eyebrow,
  title,
  description,
  imageLabel,
  reverse = false,
}: FeatureRowProps) {
  return (
    <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-10 lg:grid-cols-2 lg:gap-16">
      <div
        className={`flex flex-col ${
          reverse ? "lg:order-2 lg:items-start" : "lg:order-1 lg:items-start"
        } items-center text-center lg:text-left`}
      >
        {eyebrow && (
          <span className="text-xs font-semibold tracking-[0.2em] text-brand">
            {eyebrow}
          </span>
        )}
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#16140f] sm:text-3xl">
          {title}
        </h3>
        <p className="mt-3 max-w-sm text-[#16140f]/60">{description}</p>
      </div>

      <div className={reverse ? "lg:order-1" : "lg:order-2"}>
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-ink shadow-xl shadow-black/10">
          <div className="aspect-[4/3] w-full">
            <Placeholder label={imageLabel} tone="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
