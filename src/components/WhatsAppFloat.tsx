import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_LINK } from "@/lib/contato";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Barbearia Cuba Libre no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-semibold text-whatsapp-foreground shadow-[var(--shadow-lift)] transition-[scale,color,background-color,border-color] duration-160 ease-out hover:scale-105 hover:bg-whatsapp-dark focus-visible:scale-105 active:scale-[0.97]"
    >
      <WhatsAppIcon size={22} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
