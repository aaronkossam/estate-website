import { footerColumns } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#home" className="font-display text-2xl">Rubble</a>
          <p className="mt-3 max-w-sm text-sm text-neutral-600">
            Buy, sell and rent property across Ghana with a team that stays with you until the keys are in your hand.
          </p>
          <p className="mt-4 text-sm text-neutral-600">
            <a href="mailto:rubble@gmail.com" className="hover:text-black">rubble@gmail.com</a>
            <br />
            <a href="tel:+18146371529" className="hover:text-black">+1 814 637 1529</a>
          </p>
        </div>
        {footerColumns.map((c) => (
          <div key={c.title}>
            <h3 className="text-sm font-semibold">{c.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
              {c.links.map((l) => (
                <li key={l}><a href="#" className="hover:text-black">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-neutral-500 sm:flex-row sm:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Rubble. All rights reserved.</p>
          <p>Privacy Policy · Terms of Use</p>
        </div>
      </div>
    </footer>
  );
}
