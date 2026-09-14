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
  ArrowLeft,
  Info,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Depoimentos } from "@/components/Depoimentos";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Tag } from "@/components/Tag";
import { WHATSAPP_EXIBICAO, WHATSAPP_LINK } from "@/lib/contato";
import logo from "@/assets/logo-barbearia-cuba-libre.png";
import equipe from "@/assets/barbeiros-proprietarios-barbearia-cuba-libre.jpg";
import corte from "@/assets/corte-masculino-degrade-barbearia-cuba-libre-campinas.jpg";
import barba from "@/assets/barba-navalha-barbearia-cuba-libre-campinas.jpg";
import infantil from "@/assets/corte-infantil-com-risco-barbearia-cuba-libre-campinas.jpg";

export const Route = createFileRoute("/guia")({
  head: () => ({
    meta: [
      { title: "Guia de elementos | Barbearia Cuba Libre" },
      {
        name: "description",
        content:
          "Versão didática do site com o nome de cada elemento, para aprender como pedir alterações.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Guia,
});

const servicos = [
  {
    icon: Scissors,
    titulo: "Corte masculino adulto",
    texto:
      "Do clássico ao degradê moderno, feito com técnica atualizada e acabamento caprichado para valorizar o seu rosto e o seu estilo.",
    imagem: corte,
    alt: "Barbeiro finalizando corte degradê masculino na Barbearia Cuba Libre",
  },
  {
    icon: Baby,
    titulo: "Corte infantil",
    texto:
      "Paciência, simpatia e ambiente tranquilo para a criançada. O resultado é um corte bonito e uma experiência leve para pais e filhos.",
    imagem: infantil,
    alt: "Menino sorrindo durante corte infantil na Barbearia Cuba Libre",
  },
  {
    icon: Sparkles,
    titulo: "Barba e acabamento",
    texto:
      "Desenho, alinhamento e cuidado com a pele. A barba sai simétrica, macia e no formato que combina com o seu visual.",
    imagem: barba,
    alt: "Barbeiro alinhando a barba de cliente com navalha na Barbearia Cuba Libre",
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
    titulo: "Preço claro, sem surpresa",
    texto: "Cortes a partir de R$50, com o valor combinado antes de começar. Você paga pelo que foi acordado.",
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
    texto: "O calor cubano no atendimento: conversa boa, respeito e um espaço onde você se sente em casa.",
  },
];

function Guia() {
  return (
    <>
      {/* Legenda fixa no topo */}
      <div className="sticky top-0 z-[60] bg-red-600 text-white shadow-lg">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 sm:px-6">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <Info size={18} aria-hidden />
            Modo guia: cada placa vermelha mostra o nome do elemento — use esse nome ao pedir
            alterações. O botão redondo no canto inferior direito é o{" "}
            <strong>botão flutuante do WhatsApp</strong>.
          </p>
          <a href="/" className="ml-auto flex items-center gap-1.5 text-sm font-bold underline">
            <ArrowLeft size={16} aria-hidden />
            Voltar ao site
          </a>
        </div>
      </div>

      <Tag
        nome="barra de navegação (navbar)"
        descricao="A faixa fixa no topo com logotipo, links do menu e botão."
      >
        <Navbar />
      </Tag>

      <main>
        {/* Hero */}
        <section id="inicio" className="surface-navy scroll-mt-20">
          <Tag
            nome='seção "hero"'
            descricao="A seção de abertura do site, a primeira coisa que o visitante vê."
            className="mx-auto max-w-6xl"
          >
            <div className="grid items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
              <div>
                <Tag nome="chamada pequena (eyebrow)" descricao="O textinho em caixa alta acima do título.">
                  <p className="eyebrow">Barbearia em Campinas · desde 2020</p>
                </Tag>
                <Tag
                  nome="título principal (H1)"
                  descricao="O título maior da página — só existe um por página."
                  className="mt-3"
                >
                  <h1 className="text-4xl font-extrabold leading-tight text-on-navy sm:text-5xl">
                    Cortes modernos que valorizam sua imagem
                  </h1>
                </Tag>
                <Tag nome="subtítulo" descricao="A frase de apoio logo abaixo do título." className="mt-4">
                  <p className="max-w-md text-lg text-on-navy-muted">
                    Estilo e tradição cubana em Campinas.
                  </p>
                </Tag>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Tag
                    nome="botão de ação (CTA)"
                    descricao="O botão principal, que leva ao WhatsApp."
                  >
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full bg-secondary px-7 py-3.5 font-accent font-bold text-secondary-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-[1.03]"
                    >
                      Agende seu horário agora
                    </a>
                  </Tag>
                  <Tag nome="botão secundário" descricao="O botão de contorno, com ação alternativa.">
                    <a
                      href="#servicos"
                      className="inline-block rounded-full border border-on-navy/40 px-7 py-3.5 font-accent font-semibold text-on-navy transition-colors hover:border-on-navy"
                    >
                      Ver serviços
                    </a>
                  </Tag>
                </div>
                <Tag
                  nome="linha de informações"
                  descricao="O texto pequeno com horários e preço."
                  className="mt-6"
                >
                  <p className="text-sm text-on-navy-muted">
                    Seg a sex 8h30–20h · Sáb 8h30–18h · Cortes a partir de R$50
                  </p>
                </Tag>
              </div>

              <Tag
                nome="imagem do hero"
                descricao="A imagem grande ao lado do título (hoje é o logotipo)."
              >
                <img
                  src={logo}
                  alt="Logo Barbearia Cuba Libre"
                  width={1024}
                  height={1024}
                  className="mx-auto w-64 drop-shadow-2xl sm:w-80 md:w-[22rem]"
                />
              </Tag>
            </div>
          </Tag>
        </section>

        {/* Sobre */}
        <section id="sobre" className="scroll-mt-20 bg-background">
          <Tag
            nome='seção "Sobre nós"'
            descricao="A seção que conta a história da barbearia."
            className="mx-auto max-w-6xl"
          >
            <div className="grid items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
              <Reveal>
                <Tag nome="chamada pequena (eyebrow)" descricao="O rótulo da seção.">
                  <p className="eyebrow">Sobre nós</p>
                </Tag>
                <Tag
                  nome="título da seção (H2)"
                  descricao="O título que abre cada seção."
                  className="mt-3"
                >
                  <h2 className="text-3xl text-primary sm:text-4xl">
                    Uma barbearia cubana no coração de Campinas
                  </h2>
                </Tag>
                <Tag
                  nome="parágrafos de texto"
                  descricao="Os blocos de texto corrido da seção."
                  className="mt-5"
                >
                  <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Somos profissionais da área há mais de dez anos. Cubanos de origem, escolhemos
                      o Brasil para viver e fundamos a Barbearia Cuba Libre em 2020, no bairro
                      Botafogo.
                    </p>
                    <p>
                      Somos dois barbeiros que acreditam que um bom corte começa por ouvir o
                      cliente. Cada atendimento é pensado para valorizar as suas melhores
                      características — seja no corte clássico, no degradê moderno ou no desenho da
                      barba.
                    </p>
                    <p>
                      Nossa missão é promover um atendimento de qualidade para construir uma relação
                      de confiança e proximidade. Nunca comprometemos a qualidade técnica nem a
                      ética profissional por questões comerciais.
                    </p>
                  </div>
                </Tag>
                <Tag
                  nome="cartões de estatísticas"
                  descricao="Os três quadrinhos com números de destaque."
                  className="mt-8"
                >
                  <dl className="grid grid-cols-3 gap-4">
                    {[
                      ["+10", "anos de profissão"],
                      ["2020", "na sua vizinhança"],
                      ["2", "barbeiros dedicados"],
                    ].map(([n, l]) => (
                      <div key={l} className="rounded-xl border border-border bg-card p-4 text-center">
                        <dt className="font-accent text-2xl font-extrabold text-secondary">{n}</dt>
                        <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                          {l}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Tag>
              </Reveal>

              <Reveal delay={120}>
                <Tag nome="foto da equipe" descricao="A foto grande da seção Sobre.">
                  <img
                    src={equipe}
                    alt="Proprietários da Barbearia Cuba Libre no salão, prontos para atender"
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
                  />
                </Tag>
              </Reveal>
            </div>
          </Tag>
        </section>

        {/* Serviços */}
        <section id="servicos" className="scroll-mt-20 bg-muted">
          <Tag
            nome='seção "Serviços"'
            descricao="A seção com os três serviços oferecidos."
            className="mx-auto max-w-6xl"
          >
            <div className="px-4 py-20 sm:px-6">
              <Reveal className="max-w-2xl">
                <Tag nome="chamada pequena (eyebrow)" descricao="O rótulo da seção.">
                  <p className="eyebrow">Serviços</p>
                </Tag>
                <Tag nome="título da seção (H2)" descricao="O título da seção de serviços." className="mt-3">
                  <h2 className="text-3xl text-primary sm:text-4xl">
                    Cuidado masculino do começo ao acabamento
                  </h2>
                </Tag>
                <Tag nome="texto de apoio" descricao="O parágrafo abaixo do título." className="mt-4">
                  <p className="text-muted-foreground">
                    Serviço de qualidade com preço justo e transparente — você sabe exatamente o que
                    vai receber antes de sentar na cadeira.
                  </p>
                </Tag>
              </Reveal>

              <div className="mt-12 grid gap-8 md:grid-cols-3">
                {servicos.map((s, k) => (
                  <Reveal key={s.titulo} delay={k * 110}>
                    <Tag
                      nome={`card de serviço ${k + 1} ("${s.titulo}")`}
                      descricao="Cada cartão com foto, ícone, texto e botão."
                      className="h-full"
                    >
                      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1.5">
                        <div className="relative">
                          <span className="absolute left-3 top-3 z-10 rounded-md bg-red-600 px-2 py-1 font-mono text-[11px] font-bold text-white shadow-lg">
                            imagem do card
                          </span>
                          <img
                            src={s.imagem}
                            alt={s.alt}
                            loading="lazy"
                            width={1280}
                            height={960}
                            className="h-48 w-full object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-6">
                          <div className="flex items-center gap-3">
                            <s.icon className="text-secondary" size={28} aria-hidden />
                            <span className="rounded-md bg-red-600 px-2 py-1 font-mono text-[11px] font-bold text-white">
                              ícone
                            </span>
                          </div>
                          <h3 className="mt-4 text-xl text-primary">{s.titulo}</h3>
                          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                            {s.texto}
                          </p>
                          <div className="relative mt-6">
                            <span className="absolute -top-3 left-3 z-10 rounded-md bg-red-600 px-2 py-1 font-mono text-[11px] font-bold text-white shadow-lg">
                              botão do card
                            </span>
                            <a
                              href={WHATSAPP_LINK}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex w-full justify-center rounded-full bg-secondary px-5 py-3 text-sm font-accent font-bold text-secondary-foreground transition-opacity hover:opacity-90"
                            >
                              Conheça nossos pacotes especiais
                            </a>
                          </div>
                        </div>
                      </article>
                    </Tag>
                  </Reveal>
                ))}
              </div>
            </div>
          </Tag>
        </section>

        {/* Diferenciais */}
        <section className="bg-background">
          <Tag
            nome='seção "Diferenciais"'
            descricao="A grade com os motivos para escolher a barbearia."
            className="mx-auto max-w-6xl"
          >
            <div className="px-4 py-20 sm:px-6">
              <Reveal className="max-w-2xl">
                <Tag nome="chamada pequena (eyebrow)" descricao="O rótulo da seção.">
                  <p className="eyebrow">Diferenciais</p>
                </Tag>
                <Tag nome="título da seção (H2)" descricao="O título da seção." className="mt-3">
                  <h2 className="text-3xl text-primary sm:text-4xl">
                    Por que os clientes voltam à Cuba Libre
                  </h2>
                </Tag>
              </Reveal>
              <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {diferenciais.map((d, k) => (
                  <Reveal key={d.titulo} delay={k * 80}>
                    <Tag
                      nome={`diferencial ${k + 1}`}
                      descricao={`"${d.titulo}" — ícone, título e texto, sem caixa em volta.`}
                    >
                      <d.icon className="text-secondary" size={32} aria-hidden />
                      <h3 className="mt-4 text-lg text-primary">{d.titulo}</h3>
                      <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                        {d.texto}
                      </p>
                    </Tag>
                  </Reveal>
                ))}
              </div>
            </div>
          </Tag>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="scroll-mt-20 bg-muted">
          <Tag
            nome='seção "Depoimentos"'
            descricao="O carrossel com avaliações de clientes (inclui estrelas, setas e bolinhas)."
            className="mx-auto max-w-6xl"
          >
            <div className="px-4 py-20 sm:px-6">
              <Reveal className="mb-10 text-center">
                <Tag nome="chamada pequena (eyebrow)" descricao="O rótulo da seção." className="inline-block">
                  <p className="eyebrow">Depoimentos</p>
                </Tag>
                <Tag nome="título da seção (H2)" descricao="O título da seção." className="mt-3">
                  <h2 className="text-3xl text-primary sm:text-4xl">
                    Quem senta na cadeira, recomenda
                  </h2>
                </Tag>
              </Reveal>
              <Reveal delay={100}>
                <Tag
                  nome="carrossel de depoimentos"
                  descricao="O bloco que troca de depoimento — com estrelas de avaliação, setas de navegação e indicadores (bolinhas)."
                >
                  <Depoimentos />
                </Tag>
              </Reveal>
            </div>
          </Tag>
        </section>

        {/* CTA final */}
        <section className="surface-navy">
          <Tag
            nome='seção "CTA final"'
            descricao="A última chamada para agendamento antes do rodapé."
            className="mx-auto max-w-3xl"
          >
            <div className="px-4 py-20 text-center sm:px-6">
              <Reveal>
                <Tag nome="título da seção (H2)" descricao="A frase de impacto final.">
                  <h2 className="text-3xl text-on-navy sm:text-4xl">
                    O corte que você quer, executado com excelência
                  </h2>
                </Tag>
                <Tag nome="texto de apoio" descricao="O parágrafo abaixo do título." className="mt-4">
                  <p className="text-on-navy-muted">
                    Combinamos o valor antes de começar — cortes a partir de R$50 — e só finalizamos
                    quando você estiver satisfeito com o resultado. Sem surpresa, sem pressa.
                  </p>
                </Tag>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                  <Tag nome="botão de ação (CTA)" descricao="O botão principal.">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full bg-secondary px-7 py-3.5 font-accent font-bold text-secondary-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-[1.03]"
                    >
                      Agende pelo nosso site!
                    </a>
                  </Tag>
                  <Tag nome="botão secundário" descricao="O botão de contorno com o telefone.">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full border border-on-navy/40 px-7 py-3.5 font-accent font-semibold text-on-navy transition-colors hover:border-on-navy"
                    >
                      WhatsApp {WHATSAPP_EXIBICAO}
                    </a>
                  </Tag>
                </div>
              </Reveal>
            </div>
          </Tag>
        </section>
      </main>

      <Tag
        nome="rodapé (footer)"
        descricao="A faixa final com contato, horários e colunas de informação."
      >
        <Footer />
      </Tag>

      <WhatsAppFloat />
    </>
  );
}
