import SectionHeading from "./SectionHeading";

const properties = [
  { title: "Land & estate plots", category: "Space to build", image: "/houses_and_land-5bfc3326c9e77c0051812eb3.jpg", description: "Start your building journey with guidance on land verification, documentation and estate planning." },
  { title: "Family homes", category: "Room to grow", image: "/real-estate-companies-in-ghana-mobus-properties.webp", description: "Explore your options for a home designed around everyday comfort and the people who matter." },
  { title: "Modern residences", category: "A fresh perspective", image: "/copper-beech-1-copy.webp", description: "Talk to our team about residential options and engineer-led support for your next project." },
];

export default function Properties() {
  return (
    <section id="properties" className="mx-auto max-w-7xl px-5 pt-20 md:px-8 md:pt-28">
      <SectionHeading eyebrow="Find your place" title="Space for your next chapter." text="Explore property types, then speak with our team about current availability." />
      <ul className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <li key={property.title} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-neutral-50">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={property.image} alt={property.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              <span className="absolute bottom-5 left-5 text-xs font-medium uppercase tracking-widest text-white">{property.category}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-2xl">{property.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{property.description}</p>
              <a href="#contact" className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-5 text-sm font-semibold hover:text-neutral-600">Enquire with our team <span aria-hidden="true">↗</span></a>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-center text-xs text-neutral-500">Illustrative property images. Contact us for available listings, locations and pricing.</p>
    </section>
  );
}
