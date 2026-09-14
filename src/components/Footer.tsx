import { Instagram, Mail, MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo-barbearia-cuba-libre.png";
import {
  EMAIL,
  ENDERECO,
  INSTAGRAM_LINK,
  INSTAGRAM_USER,
  MAPS_LINK,
  WHATSAPP_EXIBICAO,
  WHATSAPP_LINK,
} from "@/lib/contato";

export function Footer() {
  return (
    <footer id="contato" className="surface-navy scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <img
            src={logo}
            alt="Logo Barbearia Cuba Libre"
            loading="lazy"
            width={1024}
            height={1024}
            className="h-20 w-20 rounded-full bg-on-navy p-1"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-navy-muted">
            Corte clássico, degradê moderno, atendimento infantil e barba bem-feita — a tradição
            cubana de Campinas, em cada detalhe.
          </p>
        </div>

        <div>
          <h2 className="text-lg text-on-navy">Contato</h2>
          <ul className="mt-4 space-y-3 text-sm text-on-navy-muted">
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-secondary" aria-hidden />
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-on-navy">
                {WHATSAPP_EXIBICAO}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-secondary" aria-hidden />
              <a href={`mailto:${EMAIL}`} className="break-all hover:text-on-navy">
                {EMAIL}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-secondary" aria-hidden />
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-on-navy">
                {ENDERECO}
              </a>
            </li>
            <li className="flex gap-3">
              <Instagram size={18} className="shrink-0 text-secondary" aria-hidden />
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-on-navy">
                {INSTAGRAM_USER}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg text-on-navy">Horário de funcionamento</h2>
          <ul className="mt-4 space-y-3 text-sm text-on-navy-muted">
            <li className="flex gap-3">
              <Clock size={18} className="shrink-0 text-secondary" aria-hidden />
              <span>Segunda a sexta: 8h30 às 20h</span>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="shrink-0 text-secondary" aria-hidden />
              <span>Sábado: 8h30 às 18h</span>
            </li>
          </ul>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full border border-on-navy/40 px-5 py-2.5 text-sm font-semibold text-on-navy transition-colors hover:border-whatsapp hover:bg-whatsapp"
          >
            Fale conosco
          </a>
        </div>
      </div>

      <div className="border-t border-on-navy/15 py-6 text-center text-xs text-on-navy-muted">
        © {new Date().getFullYear()} Barbearia Cuba Libre — Campinas, SP. Atendimento com hora
        marcada ou por ordem de chegada. Estacionamento para carros.
        <span className="mx-2" aria-hidden>
          ·
        </span>
        <a href="/guia" className="underline transition-colors hover:text-on-navy">
          Ver guia de elementos
        </a>
      </div>
    </footer>
  );
}
