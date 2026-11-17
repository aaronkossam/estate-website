export default function SectionHeading({ eyebrow, title, text, tone = "light", align = "center" }) {
  const dark = tone === "dark";
  const left = align === "left";
  const responsive = align === "responsive";
  return (
    <div className={`mb-7 min-w-0 max-w-2xl md:mb-12 ${left ? "" : responsive ? "md:mx-auto md:text-center" : "mx-auto text-center"}`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.12em] ${dark ? "text-white/80" : "text-neutral-600"}`}>{eyebrow}</p>
      <h2 className={`mt-3 break-words font-display text-[1.75rem] sm:text-3xl md:text-5xl ${dark ? "text-white" : ""}`}>{title}</h2>
      {text && <p className={`mt-3 max-w-prose text-base leading-relaxed ${dark ? "text-white/75" : "text-neutral-600"}`}>{text}</p>}
    </div>
  );
}
