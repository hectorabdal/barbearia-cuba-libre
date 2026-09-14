type MaleconHavanaProps = {
  className?: string;
};

const W = 2400;
const H = 520;
const BASE = 452; // linha onde as construções se apoiam

const n = (v: number) => Math.round(v * 10) / 10;
const caixa = (x: number, y: number, w: number, h: number) =>
  `M ${n(x)} ${n(y)} h ${n(w)} v ${n(h)} h ${n(-w)} Z`;

/** Prédio colonial de 3 ou 4 andares, com cornija e às vezes um mirante. */
function colonial(x: number, w: number, topo: number, mirante = false) {
  const p = [caixa(x, topo, w, BASE - topo), caixa(x - 4, topo - 7, w + 8, 7)];
  if (mirante) {
    const mw = Math.min(36, w * 0.3);
    p.push(caixa(x + w / 2 - mw / 2, topo - 32, mw, 25));
  }
  return p;
}

/** Torre sineira com telhado piramidal e pináculo. */
function torreSino(x: number, w: number, topo: number) {
  const cx = x + w / 2;
  return [
    caixa(x, topo, w, BASE - topo),
    `M ${x - 3} ${topo} L ${n(cx)} ${topo - 24} L ${x + w + 3} ${topo} Z`,
    caixa(cx - 2, topo - 38, 4, 15),
  ];
}

/** Catedral de San Cristóbal: as duas torres desiguais e a nave recuada. */
function catedral(x: number, topo: number) {
  return [
    caixa(x + 58, topo + 62, 96, BASE - topo - 62),
    `M ${x + 58} ${topo + 62} L ${x + 106} ${topo + 30} L ${x + 154} ${topo + 62} Z`,
    ...torreSino(x, 50, topo),
    ...torreSino(x + 162, 56, topo + 20),
  ];
}

/** Capitolio Nacional: corpo, pórtico, tambor, cúpula e lanterna. */
function capitolio(cx: number, topoCupula: number) {
  const corpo = topoCupula + 172;
  return [
    caixa(cx - 138, corpo, 276, BASE - corpo),
    caixa(cx - 152, corpo + 52, 304, BASE - corpo - 52),
    `M ${cx - 62} ${corpo} L ${cx} ${corpo - 28} L ${cx + 62} ${corpo} Z`,
    caixa(cx - 46, topoCupula + 78, 92, 96),
    `M ${cx - 46} ${topoCupula + 80} A 46 60 0 0 1 ${cx + 46} ${topoCupula + 80} Z`,
    caixa(cx - 10, topoCupula + 6, 20, 20),
    `M ${cx - 10} ${topoCupula + 8} A 10 12 0 0 1 ${cx + 10} ${topoCupula + 8} Z`,
    caixa(cx - 1.5, topoCupula - 12, 3, 14),
  ];
}

/** Edificio FOCSA: o arranha-céu mais alto de Havana, de planta em L. */
function focsa(x: number, topo: number) {
  return [
    caixa(x, topo + 36, 132, BASE - topo - 36),
    caixa(x + 18, topo, 96, 42),
    caixa(x + 60, topo - 26, 8, 28),
    caixa(x + 132, topo + 132, 60, BASE - topo - 132),
  ];
}

/** Hotel Nacional de Cuba: bloco central entre os dois torreões gêmeos. */
function hotelNacional(x: number, topo: number) {
  const p = [
    caixa(x, topo + 48, 216, BASE - topo - 48),
    caixa(x + 80, topo + 26, 56, 26),
  ];
  for (const tx of [x + 12, x + 170]) {
    p.push(caixa(tx, topo + 4, 34, 50));
    p.push(`M ${tx} ${topo + 6} A 17 19 0 0 1 ${tx + 34} ${topo + 6} Z`);
  }
  return p;
}

/** Castillo de los Tres Reyes del Morro: muralha com ameias e o farol. */
function elMorro(x: number, topoMuro: number) {
  const p = [caixa(x, topoMuro, 200, BASE - topoMuro)];
  for (let i = 0; i < 7; i++) {
    p.push(caixa(x + 8 + i * 27, topoMuro - 12, 17, 12));
  }
  p.push(caixa(x + 154, topoMuro + 26, 64, BASE - topoMuro - 26));
  const fx = x + 52;
  p.push(
    `M ${fx - 6} ${topoMuro} L ${fx - 1} ${topoMuro - 96} L ${fx + 37} ${topoMuro - 96} L ${fx + 42} ${topoMuro} Z`,
    caixa(fx - 7, topoMuro - 112, 50, 18),
    caixa(fx + 6, topoMuro - 132, 24, 22),
    `M ${fx + 4} ${topoMuro - 132} L ${fx + 18} ${topoMuro - 150} L ${fx + 32} ${topoMuro - 132} Z`,
  );
  return p;
}

/** Gran Teatro de La Habana: cúpula central entre dois torreões. */
function granTeatro(x: number, topo: number) {
  const p = [caixa(x, topo + 62, 172, BASE - topo - 62)];
  for (const tx of [x - 2, x + 148]) {
    p.push(caixa(tx, topo + 30, 26, 38));
    p.push(`M ${tx + 1} ${topo + 32} A 12 15 0 0 1 ${tx + 25} ${topo + 32} Z`);
  }
  p.push(
    caixa(x + 64, topo + 34, 46, 32),
    `M ${x + 64} ${topo + 36} A 23 28 0 0 1 ${x + 110} ${topo + 36} Z`,
    caixa(x + 85, topo + 2, 4, 34),
  );
  return p;
}

/** Memorial José Martí: o obelisco da Plaza de la Revolución. */
function memorialMarti(cx: number, topo: number) {
  return [
    caixa(cx - 78, BASE - 48, 156, 48),
    `M ${cx - 38} ${BASE - 48} L ${cx - 21} ${topo + 44} L ${cx} ${topo} L ${cx + 21} ${topo + 44} L ${cx + 38} ${BASE - 48} Z`,
  ];
}

/**
 * Fronde de palma. O "arco" desloca a ponta para baixo no eixo vertical, e não
 * perpendicular ao ângulo — é isso que faz a folha pender em vez de irradiar
 * reta, que era o que dava aspecto de moinho.
 */
function folha(
  cx: number,
  cy: number,
  angGraus: number,
  comp: number,
  arco: number,
  espessura: number,
) {
  const r = (angGraus * Math.PI) / 180;
  const p = r + Math.PI / 2;
  const px = cx + Math.cos(r) * comp;
  const py = cy + Math.sin(r) * comp + arco;
  const mx = cx + Math.cos(r) * comp * 0.5;
  const my = cy + Math.sin(r) * comp * 0.5 + arco * 0.3;
  return `M ${n(cx)} ${n(cy)} Q ${n(mx + Math.cos(p) * espessura)} ${n(my + Math.sin(p) * espessura)} ${n(px)} ${n(py)} Q ${n(mx - Math.cos(p) * espessura)} ${n(my - Math.sin(p) * espessura)} ${n(cx)} ${n(cy)} Z`;
}

/** Palma real, a árvore nacional de Cuba: tronco esguio e coroa em chafariz. */
function palmeira(x: number, altura: number, esc = 1) {
  const topo = BASE - altura;
  const p = [
    `M ${n(x - 6 * esc)} ${BASE} L ${n(x - 2.5 * esc)} ${n(topo)} L ${n(x + 2.5 * esc)} ${n(topo)} L ${n(x + 6 * esc)} ${BASE} Z`,
  ];
  const frondes: [number, number, number][] = [
    [-168, 46, 30],
    [-142, 52, 26],
    [-112, 50, 20],
    [-88, 46, 16],
    [-64, 50, 20],
    [-36, 52, 26],
    [-10, 46, 30],
  ];
  for (const [a, comp, arco] of frondes) {
    p.push(folha(x, topo + 2 * esc, a, comp * esc, arco * esc, 6.5 * esc));
  }
  return p;
}

// ---- composição, da margem esquerda à direita ----

// fileira distante: preenche a largura inteira com alturas irregulares.
// A sequência é determinística, então servidor e navegador desenham igual.
const fundo: string[] = [];
{
  let seed = 7;
  const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  let x = -40;
  while (x < W + 40) {
    const w = 56 + Math.round(rnd() * 78);
    const topo = 318 + Math.round(rnd() * 58);
    fundo.push(...colonial(x, w, topo, rnd() > 0.78));
    x += w + 4 + Math.round(rnd() * 13);
  }
}

const marcos: string[] = [
  ...elMorro(150, 368),
  ...colonial(400, 100, 326, true),
  ...catedral(536, 232),
  ...colonial(772, 92, 340),
  ...capitolio(970, 148),
  ...colonial(1150, 94, 332, true),
  ...focsa(1286, 92),
  ...hotelNacional(1530, 248),
  ...colonial(1790, 88, 336),
  ...granTeatro(1912, 202),
  ...colonial(2128, 96, 328, true),
  ...memorialMarti(2318, 124),
];

const frente: string[] = [
  ...palmeira(104, 122, 1.15),
  ...palmeira(508, 100, 0.95),
  ...palmeira(1108, 132, 1.25),
  ...palmeira(1722, 108, 1),
  ...palmeira(2246, 126, 1.18),
  // o Malecón e a faixa de água
  caixa(0, BASE, W, 17),
  caixa(0, BASE + 24, W, 5),
  ...Array.from({ length: 26 }, (_, i) =>
    caixa(30 + i * 92 + (i % 3) * 18, BASE + 40, 46 + (i % 4) * 14, 4),
  ),
];

/**
 * Horizonte de Havana usado como marca d'água. O viewBox é panorâmico (2400x520)
 * para a cidade atravessar o bloco de ponta a ponta. Use com largura de 100% e
 * altura livre, ancorado na base: com altura fixa, o desenho encaixaria pela
 * altura e sobrariam faixas vazias nas laterais.
 */
export function MaleconHavana({ className }: MaleconHavanaProps) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax meet"
      className={className}
      aria-hidden="true"
    >
      {(
        [
          [fundo, 0.42],
          [marcos, 0.7],
          [frente, 0.92],
        ] as [string[], number][]
      ).map(([camada, opacidade], i) => (
        <g key={i} fill="#FFFFFF" opacity={opacidade}>
          {camada.map((d, k) => (
            <path key={k} d={d} />
          ))}
        </g>
      ))}
    </svg>
  );
}
