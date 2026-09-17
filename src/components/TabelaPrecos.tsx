import { Almendron } from "@/components/Almendron";
import { EstrelaSolitaria } from "@/components/EstrelaSolitaria";
import azulejoVermelho from "@/assets/padrao-azulejo-cubano-vermelho-barbearia-cuba-libre.jpg";

const precos = [
  { servico: "Corte masculino", valor: "R$ 50" },
  { servico: "Corte infantil", valor: "R$ 50" },
  // PENDENTE: preço da barba ainda não confirmado com os barbeiros.
  { servico: "Barba", valor: "Consulte" },
];

export function TabelaPrecos() {
  return (
    <div
      className="mx-auto w-full max-w-lg rounded-2xl p-3 shadow-[var(--shadow-lift)] sm:p-4"
      style={{
        backgroundImage: `url(${azulejoVermelho})`,
        backgroundSize: "120px 120px",
      }}
    >
      <div className="surface-wood rounded-xl p-2">
        <div className="rounded-lg border border-gold/40 px-4 py-8 sm:px-10 sm:py-10">
          <Almendron className="mx-auto w-36 text-gold sm:w-44" />
          <h3 className="mt-5 text-center text-2xl text-gold text-balance sm:text-3xl">
            Tabela de preços
          </h3>

          <div className="mt-4 flex items-center gap-3 text-secondary" aria-hidden="true">
            <span className="h-px flex-1 bg-gold/40" />
            <EstrelaSolitaria className="w-4" />
            <span className="h-px flex-1 bg-gold/40" />
          </div>

          <dl className="mt-6 space-y-4">
            {precos.map((p) => (
              <div key={p.servico} className="flex items-baseline gap-3">
                <dt className="flex flex-1 items-baseline gap-3 whitespace-nowrap font-accent text-base font-semibold sm:text-lg">
                  {p.servico}
                  <span
                    className="min-w-4 flex-1 translate-y-[-0.3em] border-b border-dotted border-gold/50"
                    aria-hidden="true"
                  />
                </dt>
                <dd
                  className={`whitespace-nowrap font-accent font-bold tabular-nums text-gold ${
                    p.valor.startsWith("R$") ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"
                  }`}
                >
                  {p.valor}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 border-t border-gold/25 pt-5 text-center text-xs uppercase tracking-wide text-on-navy-muted">
            Seg a sex 8h30–20h · Sáb 8h30–18h
          </p>
        </div>
      </div>
    </div>
  );
}
