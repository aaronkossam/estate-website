import { useRef, useState, useEffect } from "react";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { pillars } from "../data";

export default function Services() {
  const track = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const updateEdges = () => {
    const el = track.current;
    if (el) setEdges({ start: el.scrollLeft <= 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
  };
  useEffect(() => {
    const observer = new ResizeObserver(updateEdges);
    observer.observe(track.current);
    updateEdges();
    return () => observer.disconnect();
  }, []);
  const move = (direction) => {
    const el = track.current;
    const card = el.firstElementChild;
    el.scrollBy({ left: direction * (card.getBoundingClientRect().width + 24), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  return (
    <section id="services" className="relative isolate mt-20 overflow-hidden py-20 text-white md:mt-28 md:py-28">
      <img src="/copper-beech-1-copy.webp" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/50 to-black/80" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="What we do"
          title="Our services. Your next chapter."
          text="Integrated services designed to de-risk your building journey — from acquisition to finishing and personal care."
        />
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm text-white/80">Explore our services <span aria-hidden="true">—</span> swipe or use the arrows</p>
          <div className="flex gap-3">
            <button type="button" onClick={() => move(-1)} disabled={edges.start} aria-label="Previous services" aria-controls="services-carousel" className="rounded-full bg-white p-3 text-black transition hover:bg-brand disabled:cursor-not-allowed disabled:opacity-35"><Icon name="left" /></button>
            <button type="button" onClick={() => move(1)} disabled={edges.end} aria-label="Next services" aria-controls="services-carousel" className="rounded-full bg-white p-3 text-black transition hover:bg-brand disabled:cursor-not-allowed disabled:opacity-35"><Icon name="right" /></button>
          </div>
        </div>
        <ul id="services-carousel" ref={track} onScroll={updateEdges} tabIndex={0} aria-label="Our services" className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {pillars.map((p, i) => (
            <li key={p.title} className="flex w-[88%] shrink-0 snap-start flex-col sm:w-[70%] lg:w-[42%] rounded-2xl bg-white/90 p-6 text-neutral-900 shadow-xl backdrop-blur-sm md:p-8">
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
