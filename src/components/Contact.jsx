import { useRef, useState } from "react";
import { contact } from "../data";
import Icon from "./Icon";
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
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const sending = useRef(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending.current) return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    sending.current = true;
    setStatus({ state: "sending", message: "Sending your enquiry…" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) throw new Error(result.error || "We could not send your enquiry. Please try again or email us directly.");
      setStatus({ state: "success", message: "Your enquiry has been sent. Thank you for getting in touch." });
      form.reset();
    } catch (error) {
      setStatus({ state: "error", message: error.name === "TimeoutError" ? "Sending timed out. Please try again or email us directly." : error.message });
    } finally {
      sending.current = false;
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading eyebrow="Contact us" title="Tell us what you are looking for" text="Share a few details and we will get back to you." />
      <div className="grid overflow-hidden rounded-2xl border border-neutral-200 lg:grid-cols-5">
        <img src="/contact-center-857x1000.jpg" alt="Customer support representative wearing a headset" className="hidden h-full w-full object-cover lg:col-span-2 lg:block" loading="lazy" />
        <form onSubmit={onSubmit} aria-busy={status.state === "sending"} className="grid gap-5 p-6 sm:grid-cols-2 md:p-10 lg:col-span-3">
          <Field label="Full name" id="name">
            <input id="name" name="name" maxLength={120} type="text" autoComplete="name" placeholder="Kwame Mensah" className={field} required />
          </Field>
          <Field label="Email address" id="email">
            <input id="email" name="email" maxLength={254} type="email" autoComplete="email" placeholder="you@example.com" className={field} required />
          </Field>
          <Field label="Phone number" id="phone">
            <input id="phone" name="phone" maxLength={50} type="tel" autoComplete="tel" placeholder="+233 24 000 0000" className={field} />
          </Field>
          <Field label="Service" id="service">
            <select id="service" name="service" className={field} defaultValue="">
              <option value="" disabled>Select a service</option>
              <option>Land purchase</option>
              <option>Building materials</option>
              <option>Construction &amp; estate services</option>
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Site or preferred location" id="location">
              <input id="location" name="location" maxLength={200} type="text" placeholder="e.g. Accra, Kumasi" className={field} />
            </Field>
          </div>
          <div className="sm:col-span-2">
            <Field label="Message" id="message">
              <textarea id="message" name="message" required maxLength={5000} rows={4} placeholder="Tell us a bit about what you need" className={field} />
            </Field>
          </div>
          <p className="text-sm text-neutral-600 sm:col-span-2">Email us at <a className="underline underline-offset-4" href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
          <div className="hidden" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
          <p role="status" aria-live="polite" className={`text-sm sm:col-span-2 ${status.state === "error" ? "text-red-700" : "text-neutral-700"}`}>{status.message}</p>
          <button type="submit" disabled={status.state === "sending"} className="rounded-md bg-brand py-3 text-sm font-medium text-black transition-colors hover:bg-brand-dark disabled:cursor-wait disabled:opacity-60 sm:col-span-2">
            <span className="inline-flex items-center gap-2"><Icon name="email" /> {status.state === "sending" ? "Sending…" : "Send mail"}</span>
          </button>
        </form>
      </div>
    </section>
  );
}
