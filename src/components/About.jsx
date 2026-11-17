import SectionHeading from "./SectionHeading";
import { stats } from "../data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        eyebrow="About Rubble"
        title="A trusted partner for your property journey"
        text="From first search to final signature, one team looks after the whole process."
      />
      <div className="grid gap-5 lg:grid-cols-5">
        <div className="overflow-hidden rounded-xl border border-neutral-200 lg:col-span-3">
          <div className="p-6">
            <h3 className="font-display text-xl">A partner for every property need</h3>
            <p className="mt-2 max-w-md text-sm text-neutral-600">
              Whether you are buying your first home or building a portfolio, we match you with the right place and the right paperwork.
            </p>
          </div>
          <img src="/Green-Park.jpg" alt="Green Park residential development" className="h-64 w-full object-cover md:h-80" loading="lazy" />
        </div>
        <dl className="grid grid-cols-2 gap-5 lg:col-span-2">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col justify-between rounded-xl border border-neutral-200 p-5">
              <img src="/arrow-up-right-svgrepo-com.svg" alt="" className="h-5 w-5 self-end opacity-60" />
              <div className="mt-10">
                <dd className="font-display text-4xl">{s.value}</dd>
                <dt className="mt-1 text-sm text-neutral-600">{s.label}</dt>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
