export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <span className="inline-block rounded-full border border-neutral-300 px-3 py-1 text-xs font-medium uppercase tracking-wider text-neutral-600">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-neutral-600">{text}</p>}
    </div>
  );
}
