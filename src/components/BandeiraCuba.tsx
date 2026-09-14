type BandeiraCubaProps = {
  className?: string;
};

/**
 * Bandeira cubana desenhada em SVG a partir da geometria oficial
 * (5 listras, triângulo equilátero, estrela de 5 pontas), com o azul
 * e o vermelho harmonizados à paleta da marca.
 */
export function BandeiraCuba({ className }: BandeiraCubaProps) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={className}
      role="img"
      aria-label="Bandeira de Cuba"
    >
      <rect width="200" height="100" fill="var(--cuba-blue)" />
      <rect y="20" width="200" height="20" fill="#fff" />
      <rect y="60" width="200" height="20" fill="#fff" />
      <polygon points="0,0 0,100 86.6,50" fill="var(--secondary)" />
      <polygon
        points="28.87,39 31.34,46.6 39.33,46.6 32.87,51.3 35.34,58.9 28.87,54.2 22.4,58.9 24.87,51.3 18.41,46.6 26.4,46.6"
        fill="#fff"
      />
    </svg>
  );
}
