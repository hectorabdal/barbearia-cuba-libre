type EstrelaSolitariaProps = {
  className?: string;
};

/**
 * A Estrela Solitária: a estrela de cinco pontas da bandeira cubana.
 * Usa `currentColor`, então a cor vem da classe de texto (ex.: text-secondary).
 * É sempre decorativa — quem usa em grupo (uma nota de avaliação, por exemplo)
 * põe o rótulo acessível no elemento que envolve as estrelas.
 */
export function EstrelaSolitaria({ className }: EstrelaSolitariaProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <polygon
        fill="currentColor"
        points="100,0 122.45,69.10 195.11,69.10 136.33,111.80 158.78,180.90 100,138.20 41.22,180.90 63.67,111.80 4.89,69.10 77.55,69.10"
      />
    </svg>
  );
}
