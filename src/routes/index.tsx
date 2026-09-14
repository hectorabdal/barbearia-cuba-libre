import { createFileRoute } from "@tanstack/react-router";
import {
  Scissors,
  Baby,
  BadgeCheck,
  HeartHandshake,
  CalendarClock,
  Car,
  Sparkles,
  Award,
  ArrowUpRight,
} from "lucide-react";

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
import {
  WHATSAPP_EXIBICAO,
  WHATSAPP_LINK,
  AVALIACAO_NOTA,
  AVALIACAO_TOTAL,
  MAPS_LINK,
} from "@/lib/contato";

// Vírgula fixa em vez de toLocaleString: o Intl do servidor (Cloudflare) pode
// divergir do navegador e quebrar a hidratação.
const NOTA_EXIBICAO = String(AVALIACAO_NOTA).replace(".", ",");
import logo from "@/assets/logo-barbearia-cuba-libre.png";
import equipe from "@/assets/barbeiros-proprietarios-barbearia-cuba-libre.jpg";
import corte from "@/assets/corte-masculino-degrade-barbearia-cuba-libre-campinas.jpg";
import barba from "@/assets/barba-navalha-barbearia-cuba-libre-campinas.jpg";
import infantil from "@/assets/corte-infantil-com-risco-barbearia-cuba-libre-campinas.jpg";
import azulejoMarinho from "@/assets/padrao-azulejo-cubano-marinho-barbearia-cuba-libre.jpg";
import azulejoVermelho from "@/assets/padrao-azulejo-cubano-vermelho-barbearia-cuba-libre.jpg";

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
    icon: Scissors,
    titulo: "Corte masculino adulto",
    texto:
      "Do clássico ao degradê moderno, feito com técnica atualizada e acabamento caprichado para valorizar o seu rosto e o seu estilo.",
    imagem: corte,
    alt: "Barbeiro da Barbearia Cuba Libre fazendo corte degradê com bandeira cubana ao fundo, em Campinas",
    cta: "Quero esse corte",
  },
  {
    icon: Baby,
    titulo: "Corte infantil",
    texto:
      "Paciência, simpatia e ambiente tranquilo para a criançada. O resultado é um corte bonito e uma experiência leve para pais e filhos.",
    // PENDENTE: esta foto (risco raspado, sem rosto visível) não mostra uma
    // criança — não confirma o texto do card. Trocar por uma foto real de
    // atendimento infantil antes de finalizar o projeto.
    imagem: infantil,
    alt: "Desenho geométrico raspado no cabelo, feito na Barbearia Cuba Libre em Campinas",
    cta: "Agendar para meu filho",
  },
  {
    icon: Sparkles,
    titulo: "Barba e acabamento",
    texto:
      "Desenho, alinhamento e cuidado com a pele. A barba sai simétrica, macia e no formato que combina com o seu visual.",
    imagem: barba,
    alt: "Barbeiro alinhando o contorno da barba com tesoura na Barbearia Cuba Libre, em Campinas",
    cta: "Marcar minha barba",
  },
];

const diferenciais = [
  {
    icon: HeartHandshake,
    titulo: "Atendimento personalizado",
    texto: "Conversamos antes de cortar: entendemos o visual que você quer e explicamos o que funciona.",
  },
  {
    icon: Award,
    titulo: "+10 anos de profissão",
    texto: "Dois barbeiros cubanos com mais de uma década de experiência e formação técnica.",
  },
  {
    icon: BadgeCheck,
    titulo: "Preço combinado, sem letra miúda",
    texto:
      "Cortes a partir de R$50, valor fechado antes da primeira tesourada. Você paga isso mesmo, nem um real a mais.",
  },
  {
    icon: CalendarClock,
    titulo: "Hora marcada ou chegada",
    texto: "Agende pelo WhatsApp ou apareça: atendemos das duas formas, respeitando o seu tempo.",
  },
  {
    icon: Car,
    titulo: "Estacionamento próprio",
    texto: "Vaga para carro no local, no bairro Botafogo, sem estresse para chegar e sair.",
  },
  {
    icon: Sparkles,
    titulo: "Ambiente acolhedor",
    texto: "O calor cubano no atendimento: gente boa, respeito e um espaço onde você se sente em casa.",
  },
];

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <FaixaDivisoria />

        {/* Hero */}
        <section id="inicio" className="surface-navy scroll-mt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div>
              <h1 className="text-4xl leading-[1.05] text-on-navy sm:text-5xl">
                Corte de respeito, tradição cubana
              </h1>
              <p className="mt-4 max-w-md text-lg text-on-navy-muted">
                De Havana para Campinas, com coração. Marque seu horário agora e sinta a
                diferença no primeiro corte.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 font-accent text-whatsapp-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-[1.03] hover:bg-whatsapp-dark"
                >
                  <WhatsAppIcon size={18} />
                  Chamar no WhatsApp agora
                </a>
                <a
                  href="#servicos"
                  className="rounded-full border border-on-navy/40 px-7 py-3.5 font-accent text-on-navy transition-colors hover:border-secondary"
                >
                  Ver serviços
                </a>
              </div>
              <p className="mt-6 text-sm text-on-navy-muted">
                Seg a sex 8h30–20h · Sáb 8h30–18h · Cortes a partir de R$50
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={logo}
                alt="Logo Barbearia Cuba Libre"
                width={1024}
                height={1024}
                className="w-64 drop-shadow-2xl sm:w-80 md:w-[22rem]"
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
          <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
            <Reveal>
              <div className="flex items-center gap-3">
                <BandeiraCuba className="h-8 w-12 shrink-0 rounded shadow-[var(--shadow-card)]" />
                <p className="eyebrow">Sobre nós</p>
              </div>
              <h2 className="mt-3 text-4xl text-primary sm:text-5xl">
                Uma barbearia cubana no coração de Campinas
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
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
              <dl className="surface-navy mt-8 grid grid-cols-3 divide-x divide-on-navy/15 rounded-xl p-4">
                {[
                  ["", "+10", "anos de profissão"],
                  ["Desde", "2020", "na sua vizinhança"],
                  ["", "2", "barbeiros dedicados"],
                ].map(([prefixo, n, l]) => (
                  <div key={l} className="px-2 text-center">
                    <p className="text-[0.65rem] uppercase tracking-wide text-on-navy/50">
                      {prefixo || " "}
                    </p>
                    <dt className="font-accent text-2xl leading-tight">{n}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-wide">{l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={120}>
              <img
                src={equipe}
                alt="Proprietários da Barbearia Cuba Libre no salão, prontos para atender"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
              />
            </Reveal>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="surface-navy scroll-mt-20">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Serviços</p>
              <h2 className="mt-3 text-4xl text-on-navy sm:text-5xl">
                Cuidado masculino do começo ao acabamento
              </h2>
              <p className="mt-4 text-on-navy-muted">
                Preço justo e técnica afiada — você sabe exatamente o que vai receber antes de
                sentar na cadeira.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {servicos.map((s, k) => (
                <Reveal key={s.titulo} delay={k * 110}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1.5">
                    <img
                      src={s.imagem}
                      alt={s.alt}
                      loading="lazy"
                      width={1200}
                      height={675}
                      className="h-48 w-full object-cover"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <s.icon className="text-secondary" size={28} aria-hidden />
                      <h3 className="mt-4 text-xl text-primary">{s.titulo}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {s.texto}
                      </p>
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-accent text-whatsapp-foreground transition-colors hover:bg-whatsapp-dark"
                      >
                        <WhatsAppIcon size={16} />
                        {s.cta}
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="relative overflow-hidden bg-background">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage: `url(${azulejoVermelho})`,
              backgroundSize: "220px 220px",
              backgroundRepeat: "repeat",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">Diferenciais</p>
              <h2 className="mt-3 text-4xl text-primary sm:text-5xl">
                Por que os clientes voltam à Cuba Libre
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {diferenciais.map((d, k) => (
                <Reveal key={d.titulo} delay={k * 80}>
                  <d.icon className="text-secondary" size={32} aria-hidden />
                  <h3 className="mt-4 text-lg text-primary">{d.titulo}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {d.texto}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="scroll-mt-20 bg-muted">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <Reveal className="mb-10 text-center">
              <p className="eyebrow">Depoimentos</p>
              <h2 className="mt-3 text-4xl text-primary sm:text-5xl">
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
          <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 relative z-10">
            <Reveal>
              <div className="mb-5 flex justify-center">
                <BandeiraCuba className="h-6 w-9 rounded-[2px] shadow-[var(--shadow-card)]" />
              </div>
              <h2 className="text-4xl text-on-navy sm:text-5xl">
                Seu corte de respeito está a uma mensagem de distância
              </h2>
              <p className="mt-4 text-on-navy-muted">
                Combinamos o valor antes de começar — cortes a partir de R$50 — e só finalizamos
                quando você estiver satisfeito com o resultado. Sem surpresa, sem pressa.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 font-accent text-whatsapp-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-[1.03] hover:bg-whatsapp-dark"
                >
                  <WhatsAppIcon size={18} />
                  Chamar no WhatsApp {WHATSAPP_EXIBICAO}
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
