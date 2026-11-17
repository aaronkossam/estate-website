import Icon from "./Icon";
import { useEffect, useState } from "react";
import { navLinks } from "../data";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-8 text-sm lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-neutral-600 transition-colors hover:text-black">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden rounded-md bg-brand px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-brand-dark lg:block">
          Get in touch
        </a>

        <button className="-mr-2 p-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
          <Icon name="menu" className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-72 max-w-[85%] flex-col bg-white p-6 shadow-xl">
            <button className="-mr-2 mb-6 self-end p-2" onClick={() => setOpen(false)} aria-label="Close menu">
              <Icon name="close" className="h-6 w-6" />
            </button>
            <ul className="space-y-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-3 text-lg hover:bg-neutral-100">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setOpen(false)} className="mt-auto rounded-md bg-brand py-3 text-center font-medium text-black">
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
