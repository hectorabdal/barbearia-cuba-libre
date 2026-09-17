import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/contato";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import logo from "@/assets/logo-barbearia-cuba-libre.png";

const links = [
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#servicos", label: "Serviços" },
  { href: "#precos", label: "Preços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/85">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <a href="#inicio" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt=""
            width={909}
            height={1001}
            className="h-9 w-9 shrink-0 rounded-full bg-on-navy object-contain p-0.5"
          />
          <span className="whitespace-nowrap font-accent font-bold text-base uppercase leading-tight tracking-[0.01em] text-on-navy sm:text-xl sm:tracking-[0.02em]">
            Barbearia Cuba Libre
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-on-navy/85 decoration-secondary decoration-2 underline-offset-8 transition-colors hover:text-on-navy hover:underline"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-on-navy/40 px-4 py-2 text-sm font-semibold text-on-navy transition-colors hover:border-whatsapp hover:bg-whatsapp"
            >
              <WhatsAppIcon size={15} />
              Agendar
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="rounded-md p-2.5 text-on-navy transition-colors hover:bg-on-navy/10 lg:hidden"
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </nav>

      {open && (
        <ul id="menu-mobile" className="border-t border-on-navy/10 bg-navy px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-on-navy/10 py-3 text-sm font-medium text-on-navy/90 hover:text-on-navy"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3 text-sm font-semibold text-whatsapp-foreground"
            >
              <WhatsAppIcon size={16} />
              Agendar pelo WhatsApp
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
