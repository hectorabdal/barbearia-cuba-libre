import { EstrelaSolitaria } from "./EstrelaSolitaria";

const filete = "linear-gradient(90deg, transparent, rgb(255 255 255 / 0.32))";

/**
 * Faixa que costura o cabeçalho à hero. A frase é texto de verdade, então
 * continua legível no celular e indexável.
 */
export function FaixaDivisoria() {
  return (
    <div className="surface-seam flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 py-3.5 sm:gap-x-4">
      <span
        className="hidden h-px max-w-28 flex-1 sm:block"
        style={{ backgroundImage: filete }}
        aria-hidden="true"
      />

      <p className="font-display whitespace-nowrap text-[0.8rem] uppercase leading-none tracking-[0.06em] text-on-navy sm:text-sm">
        Tradição cubana<span className="hidden sm:inline"> em Campinas</span>
      </p>

      <EstrelaSolitaria className="w-2.5 shrink-0 text-secondary sm:w-3" />

      <p className="font-display whitespace-nowrap text-[0.8rem] uppercase leading-none tracking-[0.06em] text-on-navy sm:text-sm">
        Desde 2020
      </p>

      <span
        className="hidden h-px max-w-28 flex-1 rotate-180 sm:block"
        style={{ backgroundImage: filete }}
        aria-hidden="true"
      />
    </div>
  );
}
