import Link from "next/link";
import { Apple, Play } from "lucide-react";
import { Placeholder } from "./Placeholder";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-16 sm:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_60%_at_50%_0%,#f7ecd0_0%,rgba(247,236,208,0)_100%)]"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-brand">
          MAPS THAT MOVE
        </span>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#16140f] sm:text-5xl">
          Create map videos
          <br />
          without the <span className="text-brand">editing headache.</span>
        </h1>

        <p className="mt-5 max-w-xl text-base text-[#16140f]/60 sm:text-lg">
          A clean, powerful desktop app to make animated maps, add your
          story, and export beautiful videos.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="#get-mapwise"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-brand/30 transition hover:bg-brand-dark"
          >
            Get MapWise
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1.5 text-sm font-semibold text-[#16140f] transition hover:text-brand"
          >
            <Play className="h-4 w-4" />
            Watch video
          </Link>
        </div>

        <div className="mt-6 flex items-center gap-2 text-xs text-[#16140f]/50">
          <Apple className="h-3.5 w-3.5" />
          <span>A desktop app for Linux · Coming to Windows &amp; macOS</span>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-5xl px-6">
        <div className="overflow-hidden rounded-2xl border border-black/10 bg-ink shadow-2xl shadow-black/20 ring-1 ring-black/5">
          <div className="aspect-[16/10] w-full">
            <Placeholder label="MapWise app screenshot" tone="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
