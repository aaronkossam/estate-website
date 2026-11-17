import SectionHeading from "./SectionHeading";

const field =
  "w-full rounded-md border border-neutral-300 bg-white px-3 py-2.5 text-sm placeholder:text-neutral-400 focus:border-black focus:outline-none focus:ring-1 focus:ring-black";

const Field = ({ label, id, children }) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
    {children}
  </div>
);

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to your backend / form service
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading eyebrow="Contact us" title="Tell us what you are looking for" text="An agent will get back to you within one working day." />
      <div className="grid overflow-hidden rounded-2xl border border-neutral-200 lg:grid-cols-5">
        <img src="/contact-center-857x1000.jpg" alt="Rubble support agent" className="hidden h-full w-full object-cover lg:col-span-2 lg:block" loading="lazy" />
        <form onSubmit={onSubmit} className="grid gap-5 p-6 sm:grid-cols-2 md:p-10 lg:col-span-3">
          <Field label="Full name" id="name">
            <input id="name" name="name" type="text" autoComplete="name" placeholder="Kwame Mensah" className={field} required />
          </Field>
          <Field label="Email address" id="email">
            <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={field} required />
          </Field>
          <Field label="Phone number" id="phone">
            <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+233 24 000 0000" className={field} />
          </Field>
          <Field label="Property type" id="type">
            <select id="type" name="type" className={field} defaultValue="">
              <option value="" disabled>Select type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Land</option>
              <option>Commercial</option>
            </select>
          </Field>
          <Field label="Budget range" id="budget">
            <select id="budget" name="budget" className={field} defaultValue="">
              <option value="" disabled>Select budget</option>
              <option>Under $100k</option>
              <option>$100k – $300k</option>
              <option>$300k – $500k</option>
              <option>$500k+</option>
            </select>
          </Field>
          <Field label="Preferred location" id="location">
            <select id="location" name="location" className={field} defaultValue="">
              <option value="" disabled>Select location</option>
              <option>Accra</option>
              <option>Tema</option>
              <option>Kumasi</option>
              <option>Takoradi</option>
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Message" id="message">
              <textarea id="message" name="message" rows={4} placeholder="Tell us a bit about what you need" className={field} />
            </Field>
          </div>
          <button type="submit" className="rounded-md bg-brand py-3 text-sm font-medium text-black transition-colors hover:bg-brand-dark sm:col-span-2">
            Send enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
