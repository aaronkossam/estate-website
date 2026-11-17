import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { pillars } from "../data";

export default function Services() {
  return (
    <section id="services" className="relative isolate mt-20 overflow-hidden py-20 text-white md:mt-28 md:py-28">
      <img src="/copper-beech-1-copy.webp" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/90 via-black/65 to-black/90" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="What we do"
          title="Four pillars. One standard."
          text="Integrated services designed to de-risk your building journey — from acquisition to finishing and personal care."
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <li key={p.title} className="flex flex-col rounded-2xl bg-white p-6 text-neutral-900 shadow-xl md:p-8">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-black">
                  <Icon name={p.icon} className="h-5 w-5" />
                </span>
                <div className="flex items-center gap-2">
                  {p.badge && (
                    <span className="rounded-full bg-brand px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-black">
                      {p.badge}
                    </span>
                  )}
                  <span className="font-display text-sm text-neutral-400">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>
              <h3 className="mt-8 font-display text-2xl leading-snug">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-500">{p.subtitle}</p>
              <p className="mt-4 leading-relaxed text-neutral-700">{p.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-700">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
