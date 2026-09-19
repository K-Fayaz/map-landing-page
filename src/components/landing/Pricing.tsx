import Link from "next/link";
import { Check } from "lucide-react";
import { Logo } from "./Logo";
import { AvatarGrid } from "./AvatarGrid";

const tiers = [
  {
    price: "$4.99",
    align: "items-start text-left",
    dotPosition: "left-0",
    dotSize: "h-4 w-4",
    dotStyle: "bg-brand ring-4 ring-brand/20",
    priceStyle: "text-[#16140f]",
    caption: "LAUNCH PRICE · 50 SPOTS ONLY",
    current: true,
  },
  {
    price: "$9.99",
    align: "items-center text-center",
    dotPosition: "left-1/2 -translate-x-1/2",
    dotSize: "h-2.5 w-2.5",
    dotStyle: "bg-[#16140f]/15",
    priceStyle: "text-[#16140f]/40",
    caption: "AFTER 50 CUSTOMERS",
  },
  {
    price: "$19.99",
    extra: "+$10.00",
    align: "items-end text-right",
    dotPosition: "right-0",
    dotSize: "h-2.5 w-2.5",
    dotStyle: "bg-[#16140f]/15",
    priceStyle: "text-[#16140f]/40",
    caption: "AFTER 100 CUSTOMERS",
  },
];

const currentIndex = tiers.findIndex((tier) => tier.current);
const progressWidth = `${(currentIndex / (tiers.length - 1)) * 100}%`;

const perks = [
  "Your $4.99/month rate locked in for life",
  "Unlimited projects",
  "All export options",
  "Audio support",
  "Free updates",
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-brand">
          PRICING
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#16140f] sm:text-4xl">
          One price. <span className="font-serif text-brand italic">Locked in for life.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[#16140f]/60">
          Lock in your monthly rate today — it never goes up. If MapWise
          doesn&apos;t fit how you work, email us within 14 days and
          we&apos;ll refund you.
        </p>

        <div className="mx-auto mt-14 max-w-xl">
          <div className="relative h-[2px] rounded-full bg-[#16140f]/10">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-brand/40"
              style={{ width: progressWidth }}
            />
            {tiers.map((tier) => (
              <span
                key={tier.price}
                className={`absolute top-1/2 -translate-y-1/2 rounded-full ${tier.dotPosition} ${tier.dotSize} ${tier.dotStyle}`}
              />
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2">
            {tiers.map((tier) => (
              <div key={tier.price} className={`flex flex-col ${tier.align}`}>
                <span className="flex items-baseline gap-1.5">
                  <span className={`text-2xl font-bold tracking-tight sm:text-3xl ${tier.priceStyle}`}>
                    {tier.price}
                  </span>
                  {tier.extra && (
                    <span className="text-sm font-semibold text-brand">
                      {tier.extra}
                    </span>
                  )}
                </span>
                <span className="mt-1 text-[11px] font-semibold tracking-[0.1em] text-[#16140f]/40">
                  {tier.caption}
                </span>
                {tier.current && (
                  <span className="mt-3 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold tracking-[0.1em] text-white">
                    YOU ARE HERE
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 text-left lg:grid-cols-[1fr_1.3fr] lg:items-stretch">
          <div className="h-full rounded-2xl border border-black/10 bg-white p-6 shadow-xl shadow-black/5">
            <div className="flex items-center justify-between border-b border-black/5 pb-4">
              <Logo />
              <span className="text-xs text-[#16140f]/40">Desktop app</span>
            </div>

            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-tight text-[#16140f]">
                $4.99
              </span>
              <span className="text-sm text-[#16140f]/50">/ month</span>
            </div>

            <p className="mt-3 text-xs font-medium text-brand">
              Only 50 spots at this launch rate — $9.99/month once
              they&apos;re gone. Your rate stays locked in for life either
              way.
            </p>

            <ul className="mt-5 space-y-2.5">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-start gap-2 text-sm text-[#16140f]/70"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {perk}
                </li>
              ))}
            </ul>

            <Link
              href="#get-mapwise"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-brand/30 transition hover:bg-brand-dark"
            >
              Get MapWise — $4.99/mo
            </Link>

            <p className="mt-3 text-center text-xs text-[#16140f]/40">
              Cancel anytime · Prices in USD
            </p>
          </div>

          <AvatarGrid />
        </div>
      </div>
    </section>
  );
}
