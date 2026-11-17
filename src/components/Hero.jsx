export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-5 pt-6 md:px-8">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src="/real-estate-companies-in-ghana-mobus-properties.webp"
          alt="Modern residential estate"
          className="h-[30rem] w-full object-cover md:h-[38rem] lg:h-[42rem]"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 lg:p-16">
          <h1 className="max-w-3xl font-display text-4xl leading-[1.05] text-white md:text-6xl">
            One roof for your entire
            <span className="block font-serif italic font-semibold">building journey.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/85 md:text-lg">
            Litigation-free land, authentic building materials and engineer-led construction across Ghana.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#services" className="rounded-md bg-brand px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-brand-dark">
              Explore services
            </a>
            <a href="#contact" className="rounded-md border border-white/60 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
