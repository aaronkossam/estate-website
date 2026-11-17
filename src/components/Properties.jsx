import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

const properties = [
  { title: "Land & estate plots", category: "Land", image: "/houses_and_land-5bfc3326c9e77c0051812eb3.jpg", description: "Get help checking land documents, arranging a site visit and planning your build." },
  { title: "Family homes", category: "Homes", image: "/real-estate-companies-in-ghana-mobus-properties.webp", description: "Tell us your preferred location, budget and how much space you need." },
  { title: "Modern residences", category: "Residential", image: "/copper-beech-1-copy.webp", description: "Speak with our team about residential properties and construction support." },
];

export default function Properties() {
  return (
    <section id="properties" className="mx-auto max-w-7xl px-5 pt-14 md:px-8 md:pt-28">
      <SectionHeading eyebrow="Properties" title="Find your place." text="Looking for land or a home? Tell us your location and budget." align="responsive" />
      <ul className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <li key={property.title} className="group flex h-full flex-col overflow-hidden rounded-lg bg-neutral-50">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={property.image} alt={property.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              <span className="absolute bottom-5 left-5 text-xs font-medium uppercase tracking-widest text-white">{property.category}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="property-title">{property.title}</h3>
              <p className="mt-3 flex-1 property-meta">{property.description}</p>
              <a href="#contact" className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-5 text-sm font-semibold hover:text-neutral-600">Enquire with our team <Icon name="arrow" /></a>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-center text-xs text-neutral-500">Illustrative property images. Contact us for available listings, locations and pricing.</p>
    </section>
  );
}
