import { Users, MapPin, Music } from "lucide-react";

const steps = [
  { icon: Users, label: "Create" },
  { icon: MapPin, label: "Animate" },
  { icon: Music, label: "Export" },
];

export function BuiltForCreators() {
  return (
    <section id="features" className="bg-cream py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-brand">
          BUILT FOR CREATORS
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#16140f] sm:text-4xl">
          Maps that move.
          <br />
          Stories that make sense.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[#16140f]/60">
          Turn places, data and ideas into engaging map videos — in a
          simple, focused editor.
        </p>

        <div className="mt-12 flex items-center justify-center gap-14 sm:gap-20">
          {steps.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon className="h-6 w-6 text-[#16140f]" strokeWidth={1.75} />
              <span className="text-sm text-[#16140f]/70">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
