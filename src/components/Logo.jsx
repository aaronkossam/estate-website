import { brand } from "../data";

export default function Logo({ className = "" }) {
  return (
    <a href="#home" className={`flex items-center gap-3 ${className}`}>
      <span className="leading-none">
        <span className="block type-brand text-lg uppercase">{brand.name}</span>
        <span className="mt-1 block text-[0.65rem] uppercase tracking-[0.2em] text-neutral-500">{brand.tagline}</span>
      </span>
    </a>
  );
}
