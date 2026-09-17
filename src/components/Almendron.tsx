// Silhueta de um "almendrón", os sedãs americanos dos anos 50 que rodam em
// Havana. Janelas, friso e calotas são furos (evenodd), então o fundo aparece
// por eles em qualquer superfície.
export const ALMENDRON_CARROCERIA =
  "M5 61 L4 53 Q5 45 12 43 L19 37 Q22 35.5 25 38.5 L29 40.5 L60 41 Q66 41 70 38 C78 24 88 20 102 20 L128 20 C138 20 144 26 154 38 Q157 41 164 41 L200 42 Q214 42 224 46 Q232 49 232 54 L235 56 L235 60 L231 62 L210 62 A17 17 0 0 0 176 62 L76 62 A17 17 0 0 0 42 62 L8 62 Z " +
  "M74 38 C80 28 88 24 100 24 L104 24 L104 38 Z " +
  "M110 38 L110 24 L126 24 C133 24 139 29 146 38 Z " +
  "M80 49 L172 50 L172 51.4 L80 50.4 Z " +
  "M206 48 L224 49 L224 50.2 L206 49.2 Z " +
  "M225.2 53 a1.8 1.8 0 1 0 3.6 0 a1.8 1.8 0 1 0 -3.6 0 Z " +
  "M7.5 49 a1.5 1.5 0 1 0 3 0 a1.5 1.5 0 1 0 -3 0 Z";

// Pneus de faixa branca: anéis alternados (pneu, faixa, calota, centro).
const roda = (cx: number) =>
  [12, 8.5, 6.5, 2]
    .map((r) => `M${cx - r} 64 a${r} ${r} 0 1 0 ${2 * r} 0 a${r} ${r} 0 1 0 ${-2 * r} 0 Z`)
    .join(" ");

export const ALMENDRON_RODAS = `${roda(59)} ${roda(193)}`;

export function Almendron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 236 78"
      className={className}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path fillRule="evenodd" d={ALMENDRON_CARROCERIA} />
      <path fillRule="evenodd" d={ALMENDRON_RODAS} />
      <path d="M0 76.5 H236" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1" />
    </svg>
  );
}
