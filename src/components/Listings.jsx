import SectionHeading from "./SectionHeading";
import { listings, formatPrice } from "../data";

const Spec = ({ icon, children }) => (
  <li className="flex items-center justify-center gap-1.5 rounded-md border border-neutral-200 py-1.5 text-xs text-neutral-700">
    <img src={icon} alt="" className="h-4 w-4" />
    {children}
  </li>
);

export default function Listings() {
  return (
    <section id="properties" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading eyebrow="Popular properties" title="Explore diverse property listings" />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((p) => (
          <li key={p.name} className="group overflow-hidden rounded-xl border border-neutral-200 transition-shadow hover:shadow-lg">
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={`${p.name}, ${p.location}`}
                className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg">{p.name}</h3>
                <span className="font-medium">{formatPrice(p.price)}</span>
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-neutral-600">
                <img src="/location-pin-svgrepo-com.svg" alt="" className="h-3.5 w-3.5" />
                {p.location}
              </p>
              <ul className="mt-4 grid grid-cols-3 gap-2">
                <Spec icon="/bed-double-svgrepo-com.svg">{p.beds} beds</Spec>
                <Spec icon="/bathroom-2-svgrepo-com.svg">{p.baths} baths</Spec>
                <Spec icon="/measure-svgrepo-com.svg">{p.area.toLocaleString()} sqft</Spec>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
