import { useCallback, useEffect, useState } from "react";
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
const INTERVALO_MS = 5000;

export function Depoimentos() {
  const [pagina, setPagina] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [ultimaInteracao, setUltimaInteracao] = useState(0);
  const [touchInicio, setTouchInicio] = useState(0);

  const proximaPagina = useCallback(() => {
    setPagina((p) => (p + 1) % TOTAL_PAGINAS);
    setUltimaInteracao(Date.now());
  }, []);

  const paginaAnterior = () => {
    setPagina((p) => (p - 1 + TOTAL_PAGINAS) % TOTAL_PAGINAS);
    setUltimaInteracao(Date.now());
  };

  const navegar = (novaPagina: number) => {
    setPagina(novaPagina);
    setUltimaInteracao(Date.now());
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setPausado(true);
    setTouchInicio(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setPausado(false);
    const touchFim = e.changedTouches[0].clientX;
    const distancia = touchInicio - touchFim;
    const LIMIAR = 50;

    if (Math.abs(distancia) > LIMIAR) {
      if (distancia > 0) proximaPagina();
      else paginaAnterior();
    }
  };

  useEffect(() => {
    if (pausado) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(proximaPagina, INTERVALO_MS);
    return () => clearInterval(id);
  }, [pausado, proximaPagina]);

  const inicio = pagina * POR_PAGINA;
  const visiveis = depoimentos.slice(inicio, inicio + POR_PAGINA);

  return (
    <div
      className="mx-auto max-w-5xl"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onTouchStart={handleTouchStart}
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
            <p className="flex-1 font-accent text-sm leading-relaxed text-foreground">
              “{d.texto}”
            </p>
            <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {d.nome} — cliente Cuba Libre
            </footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Depoimentos anteriores"
          onClick={paginaAnterior}
          className="rounded-full border border-border p-2 text-primary transition-colors hover:border-secondary hover:text-secondary"
        >
          <ChevronLeft size={20} aria-hidden />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: TOTAL_PAGINAS }).map((_, k) => (
            <button
              key={k}
              type="button"
              aria-label={`Ver página ${k + 1} de depoimentos`}
              aria-current={k === pagina}
              onClick={() => navegar(k)}
              className={`h-2.5 rounded-full transition-all ${
                k === pagina ? "w-7 bg-secondary" : "w-2.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Próximos depoimentos"
          onClick={proximaPagina}
          className="rounded-full border border-border p-2 text-primary transition-colors hover:border-secondary hover:text-secondary"
        >
          <ChevronRight size={20} aria-hidden />
        </button>
      </div>
    </div>
  );
}
