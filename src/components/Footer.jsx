import { brand, contact, footerColumns } from "../data";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-neutral-600">
            A Ghanaian multidisciplinary business: land sales, building materials, construction and estate services, and a modern hair &amp; beauty studio.
          </p>
          {(contact.email || contact.phone) && (
            <p className="mt-4 text-sm text-neutral-600">
              {contact.email && <a href={`mailto:${contact.email}`} className="hover:text-black">{contact.email}</a>}
              {contact.email && contact.phone && <br />}
              {contact.phone && <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-black">{contact.phone}</a>}
            </p>
          )}
        </div>
        {footerColumns.map((c) => (
          <div key={c.title}>
            <h3 className="text-sm font-semibold">{c.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
              {c.links.map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-black">{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-neutral-500 sm:flex-row sm:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {brand.full}. All rights reserved.</p>
          <p>Registered Business Name {brand.registration}</p>
        </div>
      </div>
    </footer>
  );
}
