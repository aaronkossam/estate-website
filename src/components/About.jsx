import SectionHeading from "./SectionHeading";
import { brand, partners } from "../data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading eyebrow="About the enterprise" title="Built on partnership, registered for trust." align="left" />
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-5 leading-relaxed text-neutral-700">
          <p>
            <strong className="font-semibold text-neutral-900">{brand.full.toUpperCase()}</strong> is a Ghanaian
            multidisciplinary business registered on 15th October 2026 as {brand.registration} under the Registration
            of Business Names Act, 1962 (No.151). On paper it is recorded as a Business Name — a common pathway for
            Ghanaian startups — but in operation it functions as a partnership built on complementary expertise,
            shared capital, and mutual accountability.
          </p>
          <p>
            Our ethos is simple: one roof for the entire building journey. We do not merely sell land; we help you
            verify it, document it, estimate your build, supply authentic materials, and supervise execution. And
            because homes are also about living beautifully, we extend our service culture into our modern hair &
            beauty studio.
          </p>
        </div>

        <ul className="space-y-4">
          {partners.map((p, i) => (
            <li key={p.title} className="flex gap-4 rounded-2xl border border-neutral-200 p-5">
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-serif text-xl font-semibold ${
                  i === 0 ? "bg-neutral-950 text-brand" : "bg-brand text-black"
                }`}
              >
                {p.initial}
              </span>
              <div>
                <h3 className="font-display text-lg">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">{p.text}</p>
              </div>
            </li>
          ))}
          <li className="rounded-2xl bg-neutral-50 p-5 text-sm text-neutral-600">
            Registered Business Name <span className="font-medium text-neutral-900">{brand.registration}</span> ·
            Office of the Registrar of Companies, Republic of Ghana
          </li>
        </ul>
      </div>
    </section>
  );
}
