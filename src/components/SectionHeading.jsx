export default function SectionHeading({ eyebrow, title, text, tone = "light", align = "center" }) {
  const dark = tone === "dark";
  const left = align === "left";
  return (
    <div className={`mb-10 max-w-2xl md:mb-14 ${left ? "" : "mx-auto text-center"}`}>
      <span
        className={`inline-flex items-center gap-2 py-1 text-xs font-medium uppercase tracking-wider ${
          dark ? "text-white/80" : "text-neutral-600"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className={`mt-4 font-display text-3xl md:text-5xl ${dark ? "text-white" : ""}`}>{title}</h2>
      {text && <p className={`mt-4 ${dark ? "text-white/75" : "text-neutral-600"}`}>{text}</p>}
    </div>
  );
}
