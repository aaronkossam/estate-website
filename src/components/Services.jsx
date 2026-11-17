import { useRef, useState, useEffect } from "react";
import Icon from "./Icon";
import { pillars } from "../data";

const images = [
  "/houses_and_land-5bfc3326c9e77c0051812eb3.jpg",
  "/houses-1__FillWzEyMDAsODAwXQ.jpg",
  "/copper-beech-1-copy.webp",
];

export default function Services() {
  const track = useRef(null);
  const [active, setActive] = useState(0);
  const service = pillars[active];
  const updateActive = () => {
    const el = track.current;
    const step = el.firstElementChild.getBoundingClientRect().width + 16;
    setActive(Math.min(pillars.length - 1, Math.max(0, Math.round(el.scrollLeft / step))));
  };
  const goTo = (index) => {
    const el = track.current;
    const step = el.firstElementChild.getBoundingClientRect().width + 16;
    el.scrollTo({ left: step * index, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  useEffect(() => {
    const el = track.current;
    const observer = new ResizeObserver(() => {
      // Preserve the selected service when the layout changes size.
      const index = Number(el.dataset.active || 0);
      el.scrollTo({ left: (el.firstElementChild.getBoundingClientRect().width + 16) * index, behavior: "instant" });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" aria-label="Our services" className="relative isolate mt-20 overflow-hidden py-16 md:mt-28 md:py-24">
      <img src="/copper-beech-1-copy.webp" alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-10" loading="lazy" />
      <div className="absolute inset-0 -z-10 bg-white/85" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] md:gap-12 md:px-8 lg:gap-20">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">What we do</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">What we do.</h2>
          <div className="mt-6" aria-live="polite" aria-atomic="true">
            <div className="flex items-center gap-3"><Icon name={service.icon} className="h-6 w-6 shrink-0" /><h3 className="font-display text-xl">{service.title}</h3></div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">{service.text}</p>
          </div>
          <a href="#contact" className="mt-6 inline-flex items-center gap-5 rounded-md bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700">Learn more <Icon name="arrow" /></a>
          <div className="mt-8 flex items-center gap-4">
            <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous service" aria-controls="services-carousel" className="rounded-full bg-white p-3 shadow-sm disabled:cursor-not-allowed disabled:opacity-30"><Icon name="left" /></button>
            <span className="text-xs tabular-nums text-neutral-500">{String(active + 1).padStart(2, "0")} / {String(pillars.length).padStart(2, "0")}</span>
            <button type="button" onClick={() => goTo(active + 1)} disabled={active === pillars.length - 1} aria-label="Next service" aria-controls="services-carousel" className="rounded-full bg-white p-3 shadow-sm disabled:cursor-not-allowed disabled:opacity-30"><Icon name="right" /></button>
          </div>
        </div>
        <div className="relative min-w-0">
          <ul id="services-carousel" data-active={active} ref={track} onScroll={updateActive} tabIndex={0} aria-label="Service image carousel" className="flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden after:w-[22%] after:shrink-0 after:content-['']">
            {pillars.map((item, index) => (
              <li key={item.title} className="relative w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl">
                <img src={images[index]} alt={item.title} loading="lazy" className={`aspect-[4/5] w-full object-cover transition duration-500 sm:aspect-[4/4.5] ${active === index ? "" : "scale-105 blur-sm opacity-50"}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7"><p className="text-xs uppercase tracking-widest text-white/75">Our services</p><p className="mt-2 font-display text-xl md:text-2xl">{item.title}</p></div>
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => goTo(active === pillars.length - 1 ? 0 : active + 1)} aria-label={active === pillars.length - 1 ? "Back to first service" : "View next service"} aria-controls="services-carousel" className="absolute left-[78%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-4 text-neutral-900 shadow-md transition hover:bg-brand"><Icon name="right" /></button>
          <p className="mt-3 text-xs text-neutral-500">Swipe to explore our services.</p>
        </div>
      </div>
    </section>
  );
}
