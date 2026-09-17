import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Info, MapPin, Phone } from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Depoimentos } from "@/components/Depoimentos";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { BandeiraCuba } from "@/components/BandeiraCuba";
import { MaleconHavana } from "@/components/MaleconHavana";
import { FaixaDivisoria } from "@/components/FaixaDivisoria";
import { EstrelaSolitaria } from "@/components/EstrelaSolitaria";
import { TabelaPrecos } from "@/components/TabelaPrecos";
import { Tag } from "@/components/Tag";
import {
  AVALIACAO_NOTA,
  AVALIACAO_TOTAL,
  ENDERECO,
  MAPS_LINK,
  TELEFONE_LINK,
  WHATSAPP_EXIBICAO,
  WHATSAPP_LINK,
} from "@/lib/contato";
import logo from "@/assets/logo-barbearia-cuba-libre.png";
import equipe from "@/assets/barbeiros-proprietarios-barbearia-cuba-libre.jpg";
import corte from "@/assets/corte-masculino-degrade-barbearia-cuba-libre-campinas.jpg";
import barba from "@/assets/barba-navalha-barbearia-cuba-libre-campinas.jpg";
import infantil from "@/assets/corte-infantil-com-risco-barbearia-cuba-libre-campinas.jpg";
import azulejoMarinho from "@/assets/padrao-azulejo-cubano-marinho-barbearia-cuba-libre.jpg";

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

const NOTA_EXIBICAO = String(AVALIACAO_NOTA).replace(".", ",");

const BOTAO_WHATSAPP =
  "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 font-accent text-whatsapp-foreground shadow-[var(--shadow-lift)]";

// Espelho do conteúdo da página inicial (src/routes/index.tsx).
const servicos = [
  {
    titulo: "Corte masculino adulto",
    texto:
      "Do clássico ao degradê moderno, feito com técnica atualizada e acabamento caprichado para valorizar o seu rosto e o seu estilo.",
    imagem: corte,
    cta: "Quero esse corte",
  },
  {
    titulo: "Corte infantil",
    texto:
      "Paciência, simpatia e ambiente tranquilo para a criançada. O resultado é um corte bonito e uma experiência leve para pais e filhos.",
    imagem: infantil,
    cta: "Agendar para meu filho",
  },
  {
    titulo: "Barba e acabamento",
    texto:
      "Desenho, alinhamento e cuidado com a pele. A barba sai simétrica, macia e no formato que combina com o seu visual.",
    imagem: barba,
    cta: "Marcar minha barba",
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

function Guia() {
  return (
    <>
      {/* Legenda fixa no topo */}
      <div className="sticky top-0 z-[60] bg-red-600 text-white shadow-lg">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 sm:px-6">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <Info size={18} className="shrink-0" aria-hidden />
            <span>
              Modo guia: cada placa vermelha mostra o nome do elemento — use esse nome ao pedir
              alterações. Passe o mouse sobre a placa para ver a explicação. O botão verde no canto
              inferior direito é o <strong>botão flutuante do WhatsApp</strong>.
            </span>
          </p>
          <a href="/" className="ml-auto flex items-center gap-1.5 text-sm font-bold underline">
            <ArrowLeft size={16} aria-hidden />
            Voltar ao site
          </a>
        </div>
      </div>

      <Tag
        nome="barra de navegação (navbar)"
        descricao="A faixa fixa no topo: logo pequena, nome da barbearia, links do menu e botão Agendar. No celular os links viram o menu de três tracinhos (hambúrguer)."
      >
        <Navbar />
      </Tag>

      <main>
        <div className="pt-6">
          <Tag
            nome="faixa divisória"
            descricao="A faixa fina com 'Tradição cubana em Campinas', a estrela e 'Desde 2020'."
          >
            <FaixaDivisoria />
          </Tag>
        </div>

        {/* Hero */}
        <section className="surface-navy">
          <Tag
            nome='seção "hero" (abertura)'
            descricao="A seção de abertura, a primeira coisa que o visitante vê."
            className="mx-auto max-w-6xl"
          >
            <div className="grid items-center gap-12 px-4 pb-20 pt-14 sm:px-6 md:grid-cols-[1fr_1.1fr] md:py-24">
              <div>
                <Tag nome="título principal (H1)" descricao="O maior título da página — só existe um por página.">
                  <h1 className="text-4xl leading-[1.05] text-balance text-on-navy sm:text-5xl lg:text-6xl">
                    Corte de respeito, tradição cubana
                  </h1>
                </Tag>
                <Tag nome="subtítulo" descricao="A frase de apoio logo abaixo do título." className="mt-6">
                  <p className="max-w-md text-lg text-on-navy-muted">
                    De Havana para Campinas, com coração. Aqui quem corta é quem fundou a casa: Luis
                    e Bryan. Marque seu horário e sinta a diferença no primeiro corte.
                  </p>
                </Tag>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Tag nome="botão principal (CTA)" descricao="O botão verde que abre o WhatsApp.">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={BOTAO_WHATSAPP}>
                      <WhatsAppIcon size={18} />
                      Agendar pelo WhatsApp
                    </a>
                  </Tag>
                  <Tag nome="botão secundário" descricao="O botão de contorno que desce até a tabela de preços.">
                    <a
                      href="#precos"
                      className="inline-block rounded-full border border-on-navy/40 px-7 py-3.5 font-accent text-on-navy"
                    >
                      Ver preços
                    </a>
                  </Tag>
                </div>
                <Tag
                  nome="prova de avaliações"
                  descricao="As estrelas douradas com a nota e o total de avaliações; clicar abre a ficha no Google."
                  className="mt-8 inline-block"
                >
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 py-1"
                  >
                    <span className="flex gap-1 text-gold" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <EstrelaSolitaria key={k} className="w-4" />
                      ))}
                    </span>
                    <span className="font-accent text-lg font-bold leading-none">{NOTA_EXIBICAO}</span>
                    <span className="text-sm text-on-navy-muted underline underline-offset-4">
                      {AVALIACAO_TOTAL} avaliações no Google
                      <ArrowUpRight size={14} className="ml-0.5 inline-block" aria-hidden />
                    </span>
                  </a>
                </Tag>
              </div>

              <div className="relative mx-auto w-full max-w-xl pb-6 md:pb-0">
                <Tag nome="foto dos donos" descricao="A foto grande da abertura, com os dois barbeiros.">
                  <img
                    src={equipe}
                    alt="Luis e Bryan, barbeiros cubanos e donos da Barbearia Cuba Libre, no salão em Campinas"
                    width={1200}
                    height={896}
                    className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
                  />
                </Tag>
                <div className="absolute -bottom-2 left-4 md:-bottom-8 md:-left-8">
                  <Tag nome="selo da logo" descricao="A logo redonda sobreposta ao canto da foto.">
                    <img
                      src={logo}
                      alt=""
                      width={909}
                      height={1001}
                      className="aspect-square w-24 rounded-full bg-on-navy object-contain p-1.5 shadow-[var(--shadow-lift)] sm:w-28"
                    />
                  </Tag>
                </div>
              </div>
            </div>
          </Tag>
        </section>

        {/* Sobre */}
        <section id="sobre" className="relative overflow-hidden bg-background">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.15]"
            style={{ backgroundImage: `url(${azulejoMarinho})`, backgroundSize: "220px 220px" }}
            aria-hidden="true"
          />
          <Tag
            nome='seção "Sobre nós"'
            descricao="A seção que conta a história da barbearia. O fundo estampado é o padrão de azulejo azul."
            className="relative z-10 mx-auto max-w-6xl"
          >
            <div className="grid items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
              <div>
                <Tag nome="bandeira de Cuba" descricao="O emblema da bandeira acima do título." className="inline-block">
                  <BandeiraCuba className="h-8 w-12 rounded shadow-[var(--shadow-card)]" />
                </Tag>
                <Tag nome="título da seção (H2)" descricao="O título que abre cada seção." className="mt-6">
                  <h2 className="text-4xl text-balance text-primary sm:text-5xl">
                    Uma barbearia cubana no coração de Campinas
                  </h2>
                </Tag>
                <Tag
                  nome="faixa de números"
                  descricao="A tarja azul-marinho com +10 anos, desde 2020 e 2 barbeiros."
                  className="mt-8"
                >
                  <dl className="surface-navy grid grid-cols-3 divide-x divide-on-navy/15 rounded-xl p-4">
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
                </Tag>
              </div>

              <Tag
                nome="bloco de texto"
                descricao="Os três parágrafos da história, sobre um fundo branco para facilitar a leitura."
              >
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
              </Tag>
            </div>
          </Tag>
        </section>

        {/* Serviços */}
        <section id="servicos" className="surface-navy">
          <Tag
            nome='seção "Serviços"'
            descricao="A seção com os três serviços: um card grande em destaque e dois menores ao lado."
            className="mx-auto max-w-6xl"
          >
            <div className="px-4 py-20 sm:px-6">
              <div className="max-w-2xl">
                <Tag nome="título da seção (H2)" descricao="O título da seção de serviços.">
                  <h2 className="text-4xl text-balance text-on-navy sm:text-5xl">
                    Cuidado masculino do começo ao acabamento
                  </h2>
                </Tag>
                <Tag nome="texto de apoio" descricao="O parágrafo abaixo do título." className="mt-5">
                  <p className="text-on-navy-muted">
                    Preço justo e técnica afiada — você sabe exatamente o que vai receber antes de
                    sentar na cadeira.
                  </p>
                </Tag>
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:grid-rows-2">
                {servicos.map((s, k) => {
                  const destaque = k === 0;
                  return (
                    <Tag
                      key={s.titulo}
                      nome={destaque ? `card de serviço em destaque ("${s.titulo}")` : `card de serviço ${k + 1} ("${s.titulo}")`}
                      descricao={
                        destaque
                          ? "O card maior, com foto no alto, título, texto e botão."
                          : "Card menor: foto à esquerda e texto à direita (no celular, foto em cima)."
                      }
                      className={destaque ? "lg:row-span-2" : ""}
                    >
                      <article
                        className={`flex h-full flex-col overflow-hidden rounded-2xl bg-card text-card-foreground shadow-[var(--shadow-card)] ${
                          destaque ? "" : "sm:flex-row"
                        }`}
                      >
                        <img
                          src={s.imagem}
                          alt=""
                          loading="lazy"
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
                          <Tag
                            nome="botão do card"
                            descricao="Abre o WhatsApp com uma mensagem própria deste serviço."
                            className="mt-6 self-start"
                          >
                            <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-accent text-whatsapp-foreground">
                              <WhatsAppIcon size={16} />
                              {s.cta}
                            </span>
                          </Tag>
                        </div>
                      </article>
                    </Tag>
                  );
                })}
              </div>
            </div>
          </Tag>
        </section>

        {/* Preços e diferenciais */}
        <section id="precos" className="bg-background">
          <Tag
            nome='seção "Preços"'
            descricao="Os diferenciais à esquerda e a tabela de preços à direita."
            className="mx-auto max-w-6xl"
          >
            <div className="grid items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.05fr]">
              <div>
                <Tag nome="título da seção (H2)" descricao="O título da seção de preços.">
                  <h2 className="text-4xl text-balance text-primary sm:text-5xl">
                    Preço combinado, sem letra miúda
                  </h2>
                </Tag>
                <Tag nome="texto de apoio" descricao="O parágrafo abaixo do título." className="mt-5">
                  <p className="max-w-md text-lg text-muted-foreground">
                    O valor é fechado antes da primeira tesourada. Você paga isso mesmo, nem um real
                    a mais.
                  </p>
                </Tag>
                <ul className="mt-10 space-y-8">
                  {diferenciais.map((d, k) => (
                    <li key={d.titulo}>
                      <Tag
                        nome={`diferencial ${k + 1}`}
                        descricao="Estrela vermelha como marcador, título e texto curto."
                      >
                        <div className="flex gap-4">
                          <EstrelaSolitaria className="mt-0.5 h-5 w-5 shrink-0 self-start text-secondary" />
                          <div>
                            <h3 className="text-lg text-primary">{d.titulo}</h3>
                            <p className="mt-1 max-w-sm text-sm leading-relaxed text-muted-foreground">
                              {d.texto}
                            </p>
                          </div>
                        </div>
                      </Tag>
                    </li>
                  ))}
                </ul>
                <Tag nome="botão principal (CTA)" descricao="O botão verde que abre o WhatsApp." className="mt-10 inline-block">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={BOTAO_WHATSAPP}>
                    <WhatsAppIcon size={18} />
                    Agendar pelo WhatsApp
                  </a>
                </Tag>
              </div>

              <Tag
                nome="tabela de preços"
                descricao="A placa de madeira com moldura de azulejo vermelho. Dentro: o emblema do almendrón (carro clássico de Havana), o título dourado, as linhas de preço com pontilhado e o horário no rodapé da placa."
              >
                <TabelaPrecos />
              </Tag>
            </div>
          </Tag>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="bg-muted">
          <Tag
            nome='seção "Depoimentos"'
            descricao="As avaliações de clientes reais."
            className="mx-auto max-w-6xl"
          >
            <div className="px-4 py-20 sm:px-6">
              <div className="mb-10 text-center">
                <Tag nome="título da seção (H2)" descricao="O título da seção.">
                  <h2 className="text-4xl text-balance text-primary sm:text-5xl">
                    Quem senta na cadeira, recomenda
                  </h2>
                </Tag>
                <Tag
                  nome="nota do Google"
                  descricao="As estrelas vermelhas com a nota e o total de avaliações; clicar abre a ficha no Google."
                  className="mt-6 inline-block"
                >
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
                  >
                    <span className="flex gap-1.5 text-secondary" aria-hidden="true">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <EstrelaSolitaria key={k} className="w-4" />
                      ))}
                    </span>
                    <span className="font-display text-2xl leading-none text-primary">
                      {NOTA_EXIBICAO}
                    </span>
                    <span className="text-sm text-muted-foreground underline underline-offset-4">
                      de 5 · {AVALIACAO_TOTAL} avaliações no Google
                    </span>
                  </a>
                </Tag>
              </div>
              <Tag
                nome="carrossel de depoimentos"
                descricao="Os cartões de depoimento com estrelas; as setas e as bolinhas trocam a página (não troca sozinho)."
              >
                <Depoimentos />
              </Tag>
            </div>
          </Tag>
        </section>

        {/* CTA final */}
        <section className="surface-navy relative overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 opacity-[0.08]" aria-hidden="true">
            <MaleconHavana className="w-full" />
          </div>
          <Tag
            nome='seção "CTA final"'
            descricao="A última chamada para agendar. O desenho apagado ao fundo é o skyline do Malecón de Havana."
            className="relative z-10 mx-auto max-w-3xl"
          >
            <div className="px-4 py-20 text-center sm:px-6">
              <Tag nome="bandeira de Cuba" descricao="O emblema pequeno acima do título." className="mb-6 inline-block">
                <BandeiraCuba className="h-6 w-9 rounded-[2px] shadow-[var(--shadow-card)]" />
              </Tag>
              <Tag nome="título da seção (H2)" descricao="A frase de impacto final.">
                <h2 className="text-4xl text-balance text-on-navy sm:text-5xl">
                  Seu corte de respeito está a uma mensagem de distância
                </h2>
              </Tag>
              <Tag nome="texto de apoio" descricao="O parágrafo abaixo do título." className="mt-5">
                <p className="text-on-navy-muted">
                  Combinamos o valor antes de começar — cortes a partir de R$50 — e só finalizamos
                  quando você estiver satisfeito com o resultado. Sem surpresa, sem pressa.
                </p>
              </Tag>
              <Tag nome="botão principal (CTA)" descricao="O botão verde que abre o WhatsApp." className="mt-8 inline-block">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={BOTAO_WHATSAPP}>
                  <WhatsAppIcon size={18} />
                  Agendar pelo WhatsApp
                </a>
              </Tag>
              <Tag
                nome="endereço e telefone"
                descricao="Links para o mapa e para ligar, logo abaixo do botão."
                className="mt-8"
              >
                <div className="flex flex-col items-center gap-1 text-sm text-on-navy-muted sm:flex-row sm:justify-center sm:gap-6">
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-2 underline underline-offset-4">
                    <MapPin size={16} className="shrink-0 text-secondary" aria-hidden />
                    {ENDERECO}
                  </a>
                  <a href={TELEFONE_LINK} className="inline-flex items-center gap-2 py-2 underline underline-offset-4">
                    <Phone size={16} className="shrink-0 text-secondary" aria-hidden />
                    Prefere ligar? {WHATSAPP_EXIBICAO}
                  </a>
                </div>
              </Tag>
            </div>
          </Tag>
        </section>
      </main>

      <Tag
        nome="rodapé (footer)"
        descricao="A faixa final com a logo, os contatos (WhatsApp, telefone, e-mail, endereço, Instagram), os horários e o botão Agendar."
      >
        <Footer />
      </Tag>

      <WhatsAppFloat />
    </>
  );
}
