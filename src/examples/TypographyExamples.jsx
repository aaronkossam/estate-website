// Reference components: sample data only; these are not live property listings.
export function HeroTypography() {
  return <header className="bg-slate-950 p-8 text-white md:p-16">
    <h1 className="type-hero max-w-4xl">Find a place to call home.</h1>
    <p className="type-body mt-5 max-w-xl">Explore homes, compare properties and plan your next move.</p>
  </header>;
}

export function PropertyCardTypography({ property }) {
  return <article className="rounded-2xl bg-white p-6 text-slate-900 shadow-sm">
    <h3 className="property-title">{property.title}</h3>
    <p className="property-meta mt-2">{property.location}</p>
    <p className="property-price mt-4">{property.formattedPrice}</p>
    <ul className="property-specs mt-4 flex flex-wrap gap-4" aria-label="Property specifications">
      <li>{property.bedrooms} beds</li><li>{property.bathrooms} baths</li><li>{property.squareFeet.toLocaleString()} sq ft</li>
    </ul>
  </article>;
}

export function SearchFilterTypography({ onSearch }) {
  return <form onSubmit={onSearch} role="search" aria-label="Search properties" className="map-glass grid gap-4 rounded-2xl p-5 sm:grid-cols-2 lg:grid-cols-4">
    <label className="filter-label">Location<input name="location" className="filter-control mt-2" placeholder="City or neighbourhood" /></label>
    <label className="filter-label">Maximum price<input name="maxPrice" type="number" min="0" step="1000" className="filter-control mt-2" placeholder="Any price" /></label>
    <label className="filter-label">Bedrooms<select name="bedrooms" className="filter-control mt-2"><option value="">Any</option><option value="1">1+</option><option value="2">2+</option><option value="3">3+</option></select></label>
    <button type="submit" className="min-h-11 self-end rounded-lg bg-slate-950 px-5 py-3 font-body text-base font-semibold text-white">Search properties</button>
  </form>;
}
