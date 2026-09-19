import { Plus } from "lucide-react";

const TOTAL_SLOTS = 50;

export function AvatarGrid() {
  const slots = Array.from({ length: TOTAL_SLOTS }, (_, index) => index);

  return (
    <div className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-xl shadow-black/5">
      <p className="text-sm font-semibold text-[#16140f]">Launch spots</p>
      <p className="mt-1 text-xs text-[#16140f]/50">
        All {TOTAL_SLOTS} spots open at $4.99/month — be one of the first.
      </p>

      <div className="mt-5 grid flex-1 grid-cols-8 content-center gap-3">
        {slots.map((index) => (
          <div
            key={index}
            title={`Spot ${index + 1} · open`}
            className="flex aspect-square items-center justify-center rounded-full border border-dashed border-black/15 bg-black/[0.02] text-black/20"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={2} />
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs text-[#16140f]/50">
        Your spot could be one of these.
      </p>
    </div>
  );
}
