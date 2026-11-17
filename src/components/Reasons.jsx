import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { reasons } from "../data";

export default function Reasons() {
  return (
    <section id="why" className="relative isolate overflow-hidden py-20 text-white md:py-28">
      <img src="/houses_and_land-5bfc3326c9e77c0051812eb3.jpg" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Why choose Karon"
          title="Engineering rigor meets local trust"
          text="In a market crowded with unverified lands and counterfeit materials, we differentiate through verifiable credentials and documented processes."
        />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <li key={r.title} className="flex flex-col rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm text-brand">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white/80">
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
              </div>
              <h3 className="mt-10 font-display text-xl leading-snug">{r.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{r.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
