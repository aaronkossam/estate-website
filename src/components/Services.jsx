import SectionHeading from "./SectionHeading";
import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="border-y border-neutral-200 bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Services" title="Complete property solutions" text="Everything you need to move, in one place." />
        <ul className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <li key={s.title} className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
              <img src={s.image} alt={s.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="font-display text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
