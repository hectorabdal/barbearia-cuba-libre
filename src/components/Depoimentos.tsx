import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { EstrelaSolitaria } from "./EstrelaSolitaria";

const depoimentos = [
  {
    nome: "Márcio Damázio",
    texto:
      "Sou cliente há mais de 3 anos, não troco por nada. O atendimento é sempre descontraído e humanizado (...) Parabéns meninos pelo excelente trabalho, vocês são excelentes profissionais.",
  },
  {
    nome: "Renan Viana",
    texto:
      "Sou novo em Campinas e frequentei outras barbearias até encontrar essa. O serviço é minucioso e exclusivo, focado na qualidade. Além de serem caras super gente boa, os barbeiros são mestres no que fazem (...)",
  },
  {
    nome: "Artur L.",
    texto:
      "Resolvi cortar o cabelo hoje e fui muito bem recebido. Pela primeira vez em anos cortaram exatamente do jeito que pedi. Recomendo demais.",
  },
  {
    nome: "Dandara Nogueira",
    texto:
      "Acompanhei meu namorado para fazer corte e barba e fomos muito bem atendidos. Nos ofereceram água e café (...) Simplesmente salvaram nossa viagem, deixaram a autoestima dele no alto. Muito obrigada, vocês são nota 1000.",
  },
  {
    nome: "Yohan Chinea Espino",
    texto:
      "Desde o momento em que você entra, é recebido com atendimento impecável e atencioso. Os barbeiros são verdadeiros artistas, cada corte é feito com precisão e cuidado. O ambiente é muito acolhedor (...)",
  },
  {
    nome: "Guilherme Nazareth",
    texto:
      "Corto com o Cuba há 7 anos! Excelente profissional, gente fina e de alta qualidade. Salão estruturado e recomendo muito!",
  },
  {
    nome: "Benício Januário",
    texto:
      "Ambos os barbeiros são talentosíssimos! Essa barbearia é uma das coisas que mais senti falta quando me mudei de Campinas. Sempre que estou pela cidade, passo lá para cortar.",
  },
  {
    nome: "João Roberto",
    texto:
      "A melhor barbearia que já frequentei e acabei fazendo dois grandes amigos. Muito obrigado ao Luis e ao Bryan. Excelentes profissionais!",
  },
];

const POR_PAGINA = 3;
const TOTAL_PAGINAS = Math.ceil(depoimentos.length / POR_PAGINA);
const LIMIAR_DESLIZE = 50;

export function Depoimentos() {
  const [pagina, setPagina] = useState(0);
  const [touchInicio, setTouchInicio] = useState(0);

  const proximaPagina = () => setPagina((p) => (p + 1) % TOTAL_PAGINAS);
  const paginaAnterior = () => setPagina((p) => (p - 1 + TOTAL_PAGINAS) % TOTAL_PAGINAS);

  const handleTouchEnd = (e: React.TouchEvent) => {
    const distancia = touchInicio - (e.changedTouches[0]?.clientX ?? touchInicio);
    if (Math.abs(distancia) > LIMIAR_DESLIZE) {
      if (distancia > 0) proximaPagina();
      else paginaAnterior();
    }
  };

  const inicio = pagina * POR_PAGINA;
  const visiveis = depoimentos.slice(inicio, inicio + POR_PAGINA);

  return (
    <div
      className="mx-auto max-w-5xl"
      onTouchStart={(e) => setTouchInicio(e.touches[0]?.clientX ?? 0)}
      onTouchEnd={handleTouchEnd}
    >
      <div aria-live="polite" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visiveis.map((d) => (
          <blockquote
            key={d.nome}
            className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]"
          >
            <div
              className="mb-4 flex justify-center gap-1.5 text-secondary"
              role="img"
              aria-label="5 de 5 estrelas"
            >
              {Array.from({ length: 5 }).map((_, k) => (
                <EstrelaSolitaria key={k} className="w-4" />
              ))}
            </div>
            <p className="flex-1 font-accent text-[0.95rem] leading-relaxed text-foreground">
              “{d.texto}”
            </p>
            <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {d.nome} — cliente Cuba Libre
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        <button
          type="button"
          aria-label="Depoimentos anteriores"
          onClick={paginaAnterior}
          className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition-[scale,color,background-color,border-color] duration-160 ease-out hover:border-secondary hover:text-secondary active:scale-[0.95]"
        >
          <ChevronLeft size={20} aria-hidden />
        </button>
        <div className="flex">
          {Array.from({ length: TOTAL_PAGINAS }).map((_, k) => (
            <button
              key={k}
              type="button"
              aria-label={`Ver página ${k + 1} de depoimentos`}
              aria-current={k === pagina}
              onClick={() => setPagina(k)}
              className="group grid h-11 min-w-8 place-items-center"
            >
              <span
                className={`block h-2.5 rounded-full transition-all ${
                  k === pagina
                    ? "w-7 bg-secondary"
                    : "w-2.5 bg-border group-hover:bg-muted-foreground"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label="Próximos depoimentos"
          onClick={proximaPagina}
          className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition-[scale,color,background-color,border-color] duration-160 ease-out hover:border-secondary hover:text-secondary active:scale-[0.95]"
        >
          <ChevronRight size={20} aria-hidden />
        </button>
      </div>
    </div>
  );
}
