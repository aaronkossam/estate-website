import { brand } from "../data";

export default function Logo({ className = "" }) {
  return (
    <a href="#home" className={`flex items-center gap-3 ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-950 font-serif text-2xl font-semibold leading-none text-brand">
        K
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg uppercase tracking-wide">{brand.name}</span>
        <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.2em] text-neutral-500">{brand.tagline}</span>
      </span>
    </a>
  );
}
