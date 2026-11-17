import { WhatsappLogo } from "@phosphor-icons/react";
import { contact } from "../data";

export default function WhatsAppChat() {
  if (!contact.whatsapp) return null;
  const message = encodeURIComponent("Hello Karon Estate Enterprice, I would like to enquire about your services.");
  return (
    <a href={`https://wa.me/${contact.whatsapp}?text=${message}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with Karon Estate Enterprice on WhatsApp (opens in a new tab)" className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-50 inline-flex min-h-14 min-w-14 items-center justify-center gap-2 rounded-full bg-[#128c45] p-4 text-white shadow-xl transition hover:bg-[#0d7137] focus-visible:outline-green-800 sm:px-5">
      <WhatsappLogo size={28} weight="fill" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp us</span>
    </a>
  );
}
