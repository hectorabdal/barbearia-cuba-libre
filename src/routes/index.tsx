import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Depoimentos } from "@/components/Depoimentos";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { BandeiraCuba } from "@/components/BandeiraCuba";
import { MaleconHavana } from "@/components/MaleconHavana";
import { FaixaDivisoria } from "@/components/FaixaDivisoria";
import { EstrelaSolitaria } from "@/components/EstrelaSolitaria";
import { TabelaPrecos } from "@/components/TabelaPrecos";
import {
  WHATSAPP_EXIBICAO,
  WHATSAPP_LINK,
  TELEFONE_LINK,
  ENDERECO,
  AVALIACAO_NOTA,
  AVALIACAO_TOTAL,
  MAPS_LINK,
  whatsappLink,
} from "@/lib/contato";
import logo from "@/assets/logo-barbearia-cuba-libre.png";
import equipe from "@/assets/barbeiros-proprietarios-barbearia-cuba-libre.jpg";
import corte from "@/assets/corte-masculino-degrade-barbearia-cuba-libre-campinas.jpg";
import barba from "@/assets/barba-navalha-barbearia-cuba-libre-campinas.jpg";
import infantil from "@/assets/corte-infantil-com-risco-barbearia-cuba-libre-campinas.jpg";
import azulejoMarinho from "@/assets/padrao-azulejo-cubano-marinho-barbearia-cuba-libre.jpg";

// Vírgula fixa em vez de toLocaleString: o Intl do servidor (Cloudflare) pode
// divergir do navegador e quebrar a hidratação.
const NOTA_EXIBICAO = String(AVALIACAO_NOTA).replace(".", ",");

const BOTAO_WHATSAPP =
  "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 font-accent text-whatsapp-foreground shadow-[var(--shadow-lift)] transition-[scale,color,background-color,border-color] duration-160 ease-out hover:scale-[1.03] hover:bg-whatsapp-dark active:scale-[0.97]";

const titulo = "Barbearia Cuba Libre | Cortes e barba em Campinas";
const descricao =
  "Cortes modernos e clássicos, adultos e infantis, e barba em Campinas. Atendimento acolhedor, hora marcada e estacionamento. Agende pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descricao },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descricao },
    ],
  }),
  component: Home,
});

const servicos = [
  {
    titulo: "Corte masculino adulto",
    texto:
      "Do clássico ao degradê moderno, feito com técnica atualizada e acabamento caprichado para valorizar o seu rosto e o seu estilo.",
    imagem: corte,
    alt: "Barbeiro da Barbearia Cuba Libre fazendo corte degradê com bandeira cubana ao fundo, em Campinas",
    cta: "Quero esse corte",
    mensagem: "Olá! Gostaria de agendar um corte masculino na Barbearia Cuba Libre.",
  },
  {
    titulo: "Corte infantil",
    texto:
      "Paciência, simpatia e ambiente tranquilo para a criançada. O resultado é um corte bonito e uma experiência leve para pais e filhos.",
    // PENDENTE: esta foto (risco raspado, sem rosto visível) não mostra uma
    // criança — não confirma o texto do card. Trocar por uma foto real de
    // atendimento infantil antes de finalizar o projeto.
    imagem: infantil,
    alt: "Desenho geométrico raspado no cabelo, feito na Barbearia Cuba Libre em Campinas",
    cta: "Agendar para meu filho",
    mensagem: "Olá! Gostaria de agendar um corte infantil na Barbearia Cuba Libre.",
  },
  {
    titulo: "Barba e acabamento",
    texto:
      "Desenho, alinhamento e cuidado com a pele. A barba sai simétrica, macia e no formato que combina com o seu visual.",
    imagem: barba,
    alt: "Barbeiro alinhando o contorno da barba com tesoura na Barbearia Cuba Libre, em Campinas",
    cta: "Marcar minha barba",
    mensagem: "Olá! Gostaria de agendar a barba na Barbearia Cuba Libre.",
  },
];

const diferenciais = [
  {
    titulo: "Atendimento personalizado",
    texto: "Conversamos antes de cortar: entendemos o visual que você quer e explicamos o que funciona.",
  },
  {
    titulo: "Hora marcada ou chegada",
    texto: "Agende pelo WhatsApp ou apareça: atendemos das duas formas, respeitando o seu tempo.",
  },
  {
    titulo: "Estacionamento próprio",
    texto: "Vaga para carro no local, no bairro Botafogo, sem estresse para chegar e sair.",
  },
];

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <FaixaDivisoria />

        {/* Hero */}
        <section id="inicio" className="surface-navy scroll-mt-20 overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 md:grid-cols-[1fr_1.1fr] md:py-24">
            <div>
              <h1 className="text-4xl leading-[1.05] text-balance text-on-navy sm:text-5xl lg:text-6xl">
                Corte de respeito, tradição cubana
              </h1>
              <p className="mt-5 max-w-md text-lg text-on-navy-muted">
                De Havana para Campinas, com coração. Aqui quem corta é quem fundou a casa: Luis e
                Bryan. Marque seu horário e sinta a diferença no primeiro corte.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={BOTAO_WHATSAPP}>
                  <WhatsAppIcon size={18} />
                  Agendar pelo WhatsApp
                </a>
                <a
                  href="#precos"
                  className="rounded-full border border-on-navy/40 px-7 py-3.5 font-accent text-on-navy transition-[scale,color,background-color,border-color] duration-160 ease-out hover:border-secondary active:scale-[0.97]"
                >
                  Ver preços
                </a>
              </div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex flex-wrap items-center gap-x-3 gap-y-1 py-1"
              >
                <span className="flex gap-1 text-gold" role="img" aria-label={`Nota ${NOTA_EXIBICAO} de 5`}>
                  {Array.from({ length: 5 }).map((_, k) => (
                    <EstrelaSolitaria key={k} className="w-4" />
                  ))}
                </span>
                <span className="font-accent text-lg font-bold leading-none">{NOTA_EXIBICAO}</span>
                <span className="text-sm text-on-navy-muted underline decoration-on-navy/30 underline-offset-4 transition-colors group-hover:text-on-navy group-hover:decoration-on-navy">
                  {AVALIACAO_TOTAL} avaliações no Google
                  <ArrowUpRight size={14} className="ml-0.5 inline-block -translate-y-px" aria-hidden />
                </span>
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-xl pb-6 md:pb-0">
              <img
                src={equipe}
                alt="Luis e Bryan, barbeiros cubanos e donos da Barbearia Cuba Libre, no salão em Campinas"
                width={1200}
                height={896}
                fetchPriority="high"
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
              />
              <img
                src={logo}
                alt=""
                width={909}
                height={1001}
                className="absolute -bottom-2 left-4 aspect-square w-24 rounded-full bg-on-navy object-contain p-1.5 shadow-[var(--shadow-lift)] sm:w-28 md:-bottom-8 md:-left-8"
              />
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="relative scroll-mt-20 overflow-hidden bg-background">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `url(${azulejoMarinho})`,
              backgroundSize: "220px 220px",
              backgroundRepeat: "repeat",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            <Reveal>
              <BandeiraCuba className="h-8 w-12 rounded shadow-[var(--shadow-card)]" />
              <h2 className="mt-5 text-4xl text-balance text-primary sm:text-5xl">
                Uma barbearia cubana no coração de Campinas
              </h2>
              <dl className="surface-navy mt-8 grid grid-cols-3 divide-x divide-on-navy/15 rounded-xl p-4">
                {[
                  ["", "+10", "anos de profissão"],
                  ["Desde", "2020", "na sua vizinhança"],
                  ["", "2", "barbeiros dedicados"],
                ].map(([prefixo, n, l]) => (
                  <div key={l} className="px-2 text-center">
                    <dt className="font-accent text-2xl leading-tight">
                      <span className="block font-body text-[0.65rem] uppercase tracking-wide text-on-navy/50">
                        {prefixo || " "}
                      </span>
                      {n}
                    </dt>
                    <dd className="mt-1 text-[0.7rem] uppercase leading-snug sm:text-xs sm:tracking-wide">
                      {l}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-4 rounded-2xl bg-background/90 p-6 text-lg leading-relaxed text-muted-foreground sm:p-8">
                <p>
                  Somos profissionais da área há mais de dez anos. Cubanos de origem, escolhemos o
                  Brasil para viver e fundamos a Barbearia Cuba Libre em 2020, no bairro Botafogo.
                </p>
                <p>
                  Somos dois barbeiros que acreditam que um bom corte começa por ouvir o cliente. A
                  partir daí, cuidamos de cada etapa até você sair com o corte que imaginou.
                </p>
                <p>
                  Nossa missão é construir uma relação de confiança e proximidade com cada cliente.
                  Depois de tantos anos no ofício, o que mais nos alegra é ver alguém se olhar no
                  espelho satisfeito — e é isso que as avaliações que recebemos no Google mostram,
                  uma a uma.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="surface-navy scroll-mt-20">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <Reveal className="max-w-2xl">
              <h2 className="text-4xl text-balance text-on-navy sm:text-5xl">
                Cuidado masculino do começo ao acabamento
              </h2>
              <p className="mt-4 text-on-navy-muted">
                Preço justo e técnica afiada — você sabe exatamente o que vai receber antes de
                sentar na cadeira.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:grid-rows-2">
              {servicos.map((s, k) => {
                const destaque = k === 0;
                return (
                  <Reveal key={s.titulo} delay={k * 110} className={destaque ? "lg:row-span-2" : ""}>
                    <article
                      className={`flex h-full flex-col overflow-hidden rounded-2xl bg-card text-card-foreground shadow-[var(--shadow-card)] ${
                        destaque ? "" : "sm:flex-row"
                      }`}
                    >
                      <img
                        src={s.imagem}
                        alt={s.alt}
                        width={1200}
                        height={675}
                        className={
                          destaque
                            ? "h-60 w-full object-cover sm:h-72 lg:h-auto lg:min-h-72 lg:flex-1"
                            : "h-48 w-full object-cover sm:h-auto sm:w-2/5"
                        }
                      />
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className={`text-primary text-balance ${destaque ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                          {s.titulo}
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {s.texto}
                        </p>
                        <a
                          href={whatsappLink(s.mensagem)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-whatsapp px-5 py-3 text-sm font-accent text-whatsapp-foreground transition-[scale,color,background-color,border-color] duration-160 ease-out hover:bg-whatsapp-dark active:scale-[0.97]"
                        >
                          <WhatsAppIcon size={16} />
                          {s.cta}
                        </a>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Preços e diferenciais */}
        <section id="precos" className="scroll-mt-20 bg-background">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.05fr]">
            <Reveal>
              <h2 className="text-4xl text-balance text-primary sm:text-5xl">
                Preço combinado, sem letra miúda
              </h2>
              <p className="mt-4 max-w-md text-lg text-muted-foreground">
                O valor é fechado antes da primeira tesourada. Você paga isso mesmo, nem um real a
                mais.
              </p>
              <ul className="mt-10 space-y-7">
                {diferenciais.map((d) => (
                  <li key={d.titulo} className="flex gap-4">
                    <EstrelaSolitaria className="mt-0.5 h-5 w-5 shrink-0 self-start text-secondary" />
                    <div>
                      <h3 className="text-lg text-primary">{d.titulo}</h3>
                      <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground">
                        {d.texto}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BOTAO_WHATSAPP} mt-10`}
              >
                <WhatsAppIcon size={18} />
                Agendar pelo WhatsApp
              </a>
            </Reveal>

            <Reveal delay={120}>
              <TabelaPrecos />
            </Reveal>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="scroll-mt-20 bg-muted">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <Reveal className="mb-10 text-center">
              <h2 className="text-4xl text-balance text-primary sm:text-5xl">
                Quem senta na cadeira, recomenda
              </h2>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
              >
                <div
                  className="flex gap-1.5 text-secondary"
                  role="img"
                  aria-label={`Nota ${NOTA_EXIBICAO} de 5`}
                >
                  {Array.from({ length: 5 }).map((_, k) => (
                    <EstrelaSolitaria key={k} className="w-4" />
                  ))}
                </div>
                <p className="font-display text-2xl leading-none text-primary">
                  {NOTA_EXIBICAO}
                </p>
                <p className="text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors group-hover:text-primary group-hover:decoration-primary">
                  de 5 · {AVALIACAO_TOTAL} avaliações no Google
                  <ArrowUpRight
                    size={14}
                    className="ml-0.5 inline-block -translate-y-px"
                    aria-hidden
                  />
                </p>
              </a>
            </Reveal>
            <Reveal delay={100}>
              <Depoimentos />
            </Reveal>
          </div>
        </section>

        {/* CTA final */}
        <section className="surface-navy relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 opacity-[0.08]"
            aria-hidden="true"
          >
            <MaleconHavana className="w-full" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
            <Reveal>
              <div className="mb-5 flex justify-center">
                <BandeiraCuba className="h-6 w-9 rounded-[2px] shadow-[var(--shadow-card)]" />
              </div>
              <h2 className="text-4xl text-balance text-on-navy sm:text-5xl">
                Seu corte de respeito está a uma mensagem de distância
              </h2>
              <p className="mt-4 text-on-navy-muted">
                Combinamos o valor antes de começar — cortes a partir de R$50 — e só finalizamos
                quando você estiver satisfeito com o resultado. Sem surpresa, sem pressa.
              </p>
              <div className="mt-8 flex justify-center">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={BOTAO_WHATSAPP}>
                  <WhatsAppIcon size={18} />
                  Agendar pelo WhatsApp
                </a>
              </div>
              <div className="mt-6 flex flex-col items-center gap-1 text-sm text-on-navy-muted sm:flex-row sm:justify-center sm:gap-6">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2 underline decoration-on-navy/30 underline-offset-4 transition-colors hover:text-on-navy"
                >
                  <MapPin size={16} className="shrink-0 text-secondary" aria-hidden />
                  {ENDERECO}
                </a>
                <a
                  href={TELEFONE_LINK}
                  className="inline-flex items-center gap-2 py-2 underline decoration-on-navy/30 underline-offset-4 transition-colors hover:text-on-navy"
                >
                  <Phone size={16} className="shrink-0 text-secondary" aria-hidden />
                  Prefere ligar? {WHATSAPP_EXIBICAO}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
