import { FeatureRow } from "./FeatureRow";
import { Placeholder } from "./Placeholder";

const rows = [
  {
    eyebrow: "A CLOSER LOOK",
    title: "Start anywhere.",
    description:
      "Search for a location and move straight to it. Zoom, pan and explore the world with ease.",
    imageLabel: "Search and navigate the map",
    reverse: false,
  },
  {
    title: "Bring the map to life.",
    description:
      "Move the camera, reveal places and build your sequence on a timeline that's easy to use.",
    imageLabel: "Camera and timeline sequence",
    reverse: true,
  },
  {
    title: "See your story while you edit.",
    description:
      "Add your audio and build the animation around it. See the waveform and time everything perfectly.",
    imageLabel: "Audio waveform timeline",
    reverse: false,
  },
  {
    title: "Make it yours.",
    description:
      "Highlight countries, add flags, use overlays and customize the look to match your story.",
    imageLabel: "Map overlays and flags",
    reverse: true,
  },
  {
    title: "Come back anytime.",
    description: "Save, rename and resume your projects without rebuilding them.",
    imageLabel: "Saved projects list",
    reverse: false,
  },
];

export function CloserLook() {
  return (
    <section className="bg-white py-10">
      {rows.map((row) => (
        <FeatureRow key={row.title} {...row} />
      ))}

      <div className="mx-auto mt-10 max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-cream px-8 py-14 sm:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_80%_at_20%_50%,#dcd9f7_0%,rgba(220,217,247,0)_100%)]"
          />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold tracking-tight text-[#16140f] sm:text-3xl">
                Ready to publish.
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-[#16140f]/60 lg:mx-0">
                Export your finished map animation as MP4 — with audio when
                you need it.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-black/10 bg-ink shadow-xl shadow-black/10">
              <div className="aspect-[4/3] w-full">
                <Placeholder label="Export video dialog" tone="dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
