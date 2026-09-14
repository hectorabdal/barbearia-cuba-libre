import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/contato";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#servicos", label: "Serviços" },
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
        <a href="#inicio" className="flex items-center">
          <span className="whitespace-nowrap font-accent font-bold text-base uppercase leading-tight tracking-[0.01em] text-on-navy sm:text-xl sm:tracking-[0.02em]">
            Barbearia Cuba Libre
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-on-navy/85 transition-colors hover:text-secondary focus-visible:text-secondary"
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
              className="rounded-full border border-on-navy/40 px-4 py-2 text-sm font-semibold text-on-navy transition-colors hover:border-whatsapp hover:bg-whatsapp"
            >
              Fale conosco
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="rounded-md p-2 text-on-navy transition-colors hover:bg-on-navy/10 md:hidden"
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </nav>

      {open && (
        <ul id="menu-mobile" className="border-t border-on-navy/10 bg-navy px-4 pb-4 md:hidden">
          {[...links, { href: WHATSAPP_LINK, label: "Fale conosco" }].map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-on-navy/10 py-3 text-sm font-medium text-on-navy/90 hover:text-secondary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
