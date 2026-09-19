import { Play } from "lucide-react";
import { Placeholder } from "./Placeholder";

const videos = [
  { title: "Europe during WWII", duration: "0:36" },
  { title: "India's Rivers", duration: "0:42" },
  { title: "Countries by Population", duration: "0:31" },
  { title: "US State Expansion", duration: "0:26" },
  { title: "The Silk Road", duration: "0:48" },
  { title: "Rise of the Roman Empire", duration: "0:39" },
  { title: "Amazon Rainforest", duration: "0:33" },
  { title: "Ancient Trade Routes", duration: "0:45" },
  { title: "African Migration", duration: "0:29" },
  { title: "The Ice Age", duration: "0:41" },
  { title: "Pacific Islands", duration: "0:27" },
  { title: "Great Wall of China", duration: "0:37" },
];

const loop = [...videos, ...videos];

export function VideoGallery() {
  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-brand">
          REAL STORIES. REAL MAPS.
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#16140f] sm:text-4xl">
          Videos made with MapWise
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[#16140f]/60">
          Here are some videos created using MapWise.
        </p>
      </div>

      <div
        className="pause-on-hover relative mt-10 w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="animate-marquee flex w-max gap-5">
          {loop.map((video, index) => (
            <div key={`${video.title}-${index}`} className="w-40 flex-none sm:w-48">
              <div className="group relative overflow-hidden rounded-xl">
                <div className="aspect-[9/16] w-full">
                  <Placeholder label={video.title} />
                </div>
                <span className="absolute right-2 bottom-2 rounded bg-black/70 px-1.5 py-0.5 text-xs font-medium text-white">
                  {video.duration}
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#16140f] shadow transition group-hover:scale-105">
                    <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
                  </span>
                </span>
              </div>
              <p className="mt-2 text-left text-sm font-medium text-[#16140f]/80">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
