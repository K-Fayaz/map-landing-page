import { Placeholder } from "./Placeholder";

const features = [
  {
    title: "Start anywhere",
    description:
      "Search for a location and move straight to it. Zoom, pan and explore the world with ease.",
    imageLabel: "Search and navigate the map",
  },
  {
    title: "Camera & timeline",
    description:
      "Move the camera, reveal places and time it all to your audio on a timeline that's easy to use.",
    imageLabel: "Camera and audio timeline",
  },
  {
    title: "Map overlays & flags",
    description:
      "Highlight countries, add flags, use overlays and customize the look to match your story.",
    imageLabel: "Map overlays and flags",
  },
  {
    title: "Export & publish",
    description:
      "Export your finished map animation as MP4 — with audio when you need it.",
    imageLabel: "Export video dialog",
  },
];

export function CloserLook() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-brand">
          A CLOSER LOOK
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#16140f] sm:text-4xl">
          Built for creators who care.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[#16140f]/60">
          Every part of MapWise is built to turn an idea into a finished
          video, fast.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-6 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col rounded-2xl border border-black/10 bg-cream/60 p-6"
          >
            <h3 className="text-lg font-semibold text-[#16140f]">
              {feature.title}
            </h3>
            <p className="mt-1.5 text-sm text-[#16140f]/60">
              {feature.description}
            </p>

            <div className="mt-5 overflow-hidden rounded-xl border border-black/10 bg-ink">
              <div className="aspect-[16/10] w-full">
                <Placeholder label={feature.imageLabel} tone="dark" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
