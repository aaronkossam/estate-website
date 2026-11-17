import SectionHeading from "./SectionHeading";
import { steps } from "../data";

export default function Process() {
  return (
    <section id="process" className="border-y border-neutral-200 bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="How it works" title="Four steps to your next property" />
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-neutral-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <img src={s.icon} alt="" className="h-7 w-7" />
                <span className="font-display text-sm text-neutral-400">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-10 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
