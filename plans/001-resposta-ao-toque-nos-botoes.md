# 001 — Adicionar resposta ao toque nos botões de WhatsApp e demais botões

- **Status**: TODO
- **Commit**: 4856a64
- **Severity**: MEDIUM
- **Category**: 3. Physicality & origin (press feedback) — também 8. Missed opportunities
- **Estimated scope**: 6 arquivos, 10 linhas de classe + 1 bloco novo em `src/styles.css`
  (+1 arquivo só se o Passo 11, condicional, for necessário)

Todos os caminhos abaixo são relativos à pasta do projeto:
`C:\Users\hecto\Documents\webrapido\Barbearia Cuba Libre`

## Problema

Nenhum botão do site responde ao toque. No celular, onde está a maioria dos
visitantes de uma barbearia de bairro, tocar em "Agendar pelo WhatsApp" não
muda nada na tela até o app do WhatsApp abrir, e isso leva um instante. Sem
resposta visual, a pessoa não sabe se o toque funcionou e toca de novo. Esses
botões são o objetivo do site inteiro, então é o toque que mais importa.

Frequência: poucos toques por visita (faixa "ocasional"), então a resposta ao
toque é adequada.

Hoje os botões só têm efeito de `hover` (mouse por cima), que não existe em tela
de toque. Nenhum deles tem estado `:active` (enquanto o dedo ou o botão do mouse
está pressionado). Código atual, literal:

```ts
// src/routes/index.tsx:36-37 — constante usada por 3 botões (linhas 122, 319 e 394)
const BOTAO_WHATSAPP =
  "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 font-accent text-whatsapp-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-[1.03] hover:bg-whatsapp-dark";
```

```tsx
// src/routes/index.tsx:128 — botão "Ver preços"
                  className="rounded-full border border-on-navy/40 px-7 py-3.5 font-accent text-on-navy transition-colors hover:border-secondary"
```

```tsx
// src/routes/index.tsx:277 — botões dos 3 cartões de serviço (dentro de um .map)
                          className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-whatsapp px-5 py-3 text-sm font-accent text-whatsapp-foreground transition-colors hover:bg-whatsapp-dark"
```

```tsx
// src/components/WhatsAppFloat.tsx:11 — botão flutuante
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-semibold text-whatsapp-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-105 hover:bg-whatsapp-dark focus-visible:scale-105"
```

```tsx
// src/components/Navbar.tsx:53 — "Agendar" no cabeçalho (computador)
              className="inline-flex items-center gap-2 rounded-full border border-on-navy/40 px-4 py-2 text-sm font-semibold text-on-navy transition-colors hover:border-whatsapp hover:bg-whatsapp"
```

```tsx
// src/components/Navbar.tsx:67 — botão ☰ do menu (celular)
          className="rounded-md p-2.5 text-on-navy transition-colors hover:bg-on-navy/10 lg:hidden"
```

```tsx
// src/components/Navbar.tsx:92 — "Agendar pelo WhatsApp" dentro do menu do celular
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3 text-sm font-semibold text-whatsapp-foreground"
```

```tsx
// src/components/Footer.tsx:86 — "Agendar pelo WhatsApp" no rodapé
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-on-navy/40 px-5 py-2.5 text-sm font-semibold text-on-navy transition-colors hover:border-whatsapp hover:bg-whatsapp"
```

```tsx
// src/components/Depoimentos.tsx:107 e :135 — setas anterior/próximo (as duas linhas são idênticas)
          className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition-colors hover:border-secondary hover:text-secondary"
```

Além disso, a curva padrão do Tailwind para a classe `ease-out`
(`cubic-bezier(0, 0, 0.2, 1)`, definida em `node_modules/tailwindcss/theme.css`)
é fraca demais para resposta ao toque. Nenhum arquivo em `src/` usa a classe
`ease-out` hoje (conferido), então dá para trocar essa curva sem efeito colateral.

## Target

1. Uma curva forte, compartilhada, substituindo a padrão do Tailwind:

```css
/* src/styles.css — bloco novo */
@theme static {
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
}
```

2. Em cada botão listado, a classe de transição atual (`transition-colors` ou
   `transition-transform`) é substituída por esta sequência (ou ela é
   acrescentada, se não houver transição):

```
transition-[scale,color,background-color,border-color] duration-160 ease-out
```

e o estado pressionado é acrescentado no fim da lista de `hover:`:

- botões com texto: `active:scale-[0.97]`
- botões só com ícone (☰ e setas dos depoimentos, com ~44px): `active:scale-[0.95]`,
  porque 3% de 44px é pouco mais de 1px e não seria percebido.

CSS que o Tailwind 4.3.3 gera para essas classes (conferido no código do
Tailwind instalado), para referência:

```css
.active\:scale-\[0\.97\]:active { scale: 0.97; }
.duration-160 { transition-duration: 160ms; }
.ease-out { transition-timing-function: var(--ease-out); } /* cubic-bezier(0.23, 1, 0.32, 1) */
.transition-\[scale\,color\,background-color\,border-color\] {
  transition-property: scale, color, background-color, border-color;
}
```

Decisões já tomadas (não mudar):

- **Escala 0.97 / 0.95 e 160ms**: dentro das faixas de resposta ao toque
  (escala 0.95–0.98, duração 100–160ms).
- **Ponto de origem**: o centro (padrão). Correto para um botão que afunda. Não
  definir `transform-origin`.
- **A lista de transição inclui as cores**: os botões com `transition-colors`
  continuam com a troca de cor suave no hover. Nos dois que tinham
  `transition-transform` (`BOTAO_WHATSAPP` e `WhatsAppFloat`), o verde do hover
  passa a mudar suavemente em vez de pular. É um efeito colateral desejado.
- **Hover x active**: o Tailwind 4.3.3 escreve `active:` depois de `hover:` e de
  `focus-visible:` no CSS final, e todos têm a mesma especificidade. Então,
  com o mouse em cima e o botão pressionado, `scale: 0.97` vence
  `hover:scale-[1.03]` / `hover:scale-105`. Não usar `!` (important).
- **Hover em celular**: o `hover:` do Tailwind 4.3.3 já é gerado dentro de
  `@media (hover: hover)`, então os `hover:scale-*` existentes não "grudam" no
  toque. Não mexer neles.
- **Reduzir movimento** (`prefers-reduced-motion`): **sem** regra especial. O
  botão encolhe 3–5% no lugar, sem se deslocar pela tela. Isso é resposta ao
  toque, que ajuda a entender o que aconteceu, e deve ser mantido para quem pede
  menos movimento.

## Repo conventions to follow

- Tailwind 4.3.3 configurado só por CSS (não existe `tailwind.config.js`). Os
  tokens de tema ficam em `src/styles.css`, no bloco `@theme inline` das linhas
  21–77. O bloco novo é **separado** e usa `static` em vez de `inline`: `inline`
  não criaria a variável `--ease-out`, e planos futuros vão usar
  `var(--ease-out)` em CSS puro.
- Comentários em `src/styles.css` são em português e explicam o porquê. Imite
  `src/styles.css:98-99` e `src/styles.css:254-255`.
- Estilos de componente são classes Tailwind direto no `className`, em uma linha
  longa. Não quebre essas strings em várias linhas (Prettier com
  `printWidth: 100` não quebra strings).
- Exemplo de botão que já tem movimento no projeto:
  `src/routes/index.tsx:37` (`transition-transform hover:scale-[1.03]`).

## Steps

Em cada passo, localize o texto "Antes" **exatamente** e troque pelo "Depois".
Só as classes mudam, nada mais na linha.

1. **`src/styles.css`**: inserir o bloco novo entre o fim do `@theme inline`
   (linha 77) e o `:root {` (linha 79).

   Antes (linhas 76–79):
   ```css
     --color-sidebar-ring: var(--sidebar-ring);
   }

   :root {
   ```
   Depois:
   ```css
     --color-sidebar-ring: var(--sidebar-ring);
   }

   /* Curva de movimento: começa rápido e freia no fim. Substitui a curva padrão
      do Tailwind (fraca demais para resposta ao toque) e vale para a classe
      `ease-out`. "static" garante que a variável exista também para quem usar
      var(--ease-out) direto no CSS. */
   @theme static {
     --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
   }

   :root {
   ```

2. **`src/routes/index.tsx:37`** (constante `BOTAO_WHATSAPP`, edite só a
   constante; as linhas 122, 319 e 394 a reutilizam).

   Antes:
   ```ts
     "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 font-accent text-whatsapp-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-[1.03] hover:bg-whatsapp-dark";
   ```
   Depois:
   ```ts
     "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 font-accent text-whatsapp-foreground shadow-[var(--shadow-lift)] transition-[scale,color,background-color,border-color] duration-160 ease-out hover:scale-[1.03] hover:bg-whatsapp-dark active:scale-[0.97]";
   ```

3. **`src/routes/index.tsx:128`** ("Ver preços").

   Antes:
   ```tsx
                     className="rounded-full border border-on-navy/40 px-7 py-3.5 font-accent text-on-navy transition-colors hover:border-secondary"
   ```
   Depois:
   ```tsx
                     className="rounded-full border border-on-navy/40 px-7 py-3.5 font-accent text-on-navy transition-[scale,color,background-color,border-color] duration-160 ease-out hover:border-secondary active:scale-[0.97]"
   ```

4. **`src/routes/index.tsx:277`** (botões dos cartões de serviço).

   Antes:
   ```tsx
                             className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-whatsapp px-5 py-3 text-sm font-accent text-whatsapp-foreground transition-colors hover:bg-whatsapp-dark"
   ```
   Depois:
   ```tsx
                             className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-whatsapp px-5 py-3 text-sm font-accent text-whatsapp-foreground transition-[scale,color,background-color,border-color] duration-160 ease-out hover:bg-whatsapp-dark active:scale-[0.97]"
   ```

5. **`src/components/WhatsAppFloat.tsx:11`**.

   Antes:
   ```tsx
         className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-semibold text-whatsapp-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-105 hover:bg-whatsapp-dark focus-visible:scale-105"
   ```
   Depois:
   ```tsx
         className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-semibold text-whatsapp-foreground shadow-[var(--shadow-lift)] transition-[scale,color,background-color,border-color] duration-160 ease-out hover:scale-105 hover:bg-whatsapp-dark focus-visible:scale-105 active:scale-[0.97]"
   ```

6. **`src/components/Navbar.tsx:53`** ("Agendar" no cabeçalho).

   Antes:
   ```tsx
                 className="inline-flex items-center gap-2 rounded-full border border-on-navy/40 px-4 py-2 text-sm font-semibold text-on-navy transition-colors hover:border-whatsapp hover:bg-whatsapp"
   ```
   Depois:
   ```tsx
                 className="inline-flex items-center gap-2 rounded-full border border-on-navy/40 px-4 py-2 text-sm font-semibold text-on-navy transition-[scale,color,background-color,border-color] duration-160 ease-out hover:border-whatsapp hover:bg-whatsapp active:scale-[0.97]"
   ```

7. **`src/components/Navbar.tsx:67`** (botão ☰, só ícone, então `0.95`).

   Antes:
   ```tsx
             className="rounded-md p-2.5 text-on-navy transition-colors hover:bg-on-navy/10 lg:hidden"
   ```
   Depois:
   ```tsx
             className="rounded-md p-2.5 text-on-navy transition-[scale,color,background-color,border-color] duration-160 ease-out hover:bg-on-navy/10 active:scale-[0.95] lg:hidden"
   ```

8. **`src/components/Navbar.tsx:92`** (botão do menu do celular, sem transição
   hoje; só acrescentar).

   Antes:
   ```tsx
                 className="mt-4 flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3 text-sm font-semibold text-whatsapp-foreground"
   ```
   Depois:
   ```tsx
                 className="mt-4 flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3 text-sm font-semibold text-whatsapp-foreground transition-[scale,color,background-color,border-color] duration-160 ease-out active:scale-[0.97]"
   ```
   Observação: esse link fecha o menu no `onClick` (linha 91), então o botão
   some quando o dedo solta. A resposta aparece enquanto o dedo está
   encostado, e isso é o esperado. **Não** mude o `onClick`.

9. **`src/components/Footer.tsx:86`**.

   Antes:
   ```tsx
               className="mt-6 inline-flex items-center gap-2 rounded-full border border-on-navy/40 px-5 py-2.5 text-sm font-semibold text-on-navy transition-colors hover:border-whatsapp hover:bg-whatsapp"
   ```
   Depois:
   ```tsx
               className="mt-6 inline-flex items-center gap-2 rounded-full border border-on-navy/40 px-5 py-2.5 text-sm font-semibold text-on-navy transition-[scale,color,background-color,border-color] duration-160 ease-out hover:border-whatsapp hover:bg-whatsapp active:scale-[0.97]"
   ```

10. **`src/components/Depoimentos.tsx:107` e `:135`** (setas, só ícone, então
    `0.95`). As duas linhas são idênticas: troque as duas.

    Antes:
    ```tsx
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition-colors hover:border-secondary hover:text-secondary"
    ```
    Depois:
    ```tsx
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition-[scale,color,background-color,border-color] duration-160 ease-out hover:border-secondary hover:text-secondary active:scale-[0.95]"
    ```

11. **Condicional: só se o teste num iPhone falhar** (ver Verification). O
    Safari do iPhone pode não aplicar `:active` ao toque se a página não tiver
    nenhum "ouvinte" de `touchstart`. O React normalmente já registra um, então
    este passo provavelmente não será necessário. Se for, em
    `src/routes/__root.tsx:180-182`:

    Antes:
    ```tsx
            {/* Marca a página antes do primeiro desenho: sem JavaScript, as seções
                com animação de entrada nunca ficam escondidas. */}
            <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
    ```
    Depois:
    ```tsx
            {/* Marca a página antes do primeiro desenho: sem JavaScript, as seções
                com animação de entrada nunca ficam escondidas. O touchstart vazio
                faz o Safari do iPhone aplicar :active (resposta ao toque). */}
            <script
              dangerouslySetInnerHTML={{
                __html:
                  "document.documentElement.classList.add('js');document.addEventListener('touchstart',function(){},{passive:true})",
              }}
            />
    ```

## Boundaries

- Do NOT touch:
  - as bolinhas de página dos depoimentos (`src/components/Depoimentos.tsx:112-129`);
    a mudança de largura já serve de resposta;
  - links de texto: `src/routes/index.tsx:133-149`, `:339-365`, `:400-415`;
    `src/components/Navbar.tsx:40-45` e `:77-83`; lista de contato em
    `src/components/Footer.tsx:37-67`;
  - qualquer arquivo em `src/components/ui/`;
  - a animação de entrada das seções: `src/components/Reveal.tsx`, e em
    `src/styles.css` o `@keyframes fade-up`, `.reveal` e a curva
    `cubic-bezier(0.22, 1, 0.36, 1)` da linha 261 (fica como está);
  - `html { scroll-behavior: smooth; }` em `src/styles.css:193`.
- Do NOT change markup/structure/handlers: só classes, mais o bloco do Passo 1.
  Única exceção: o Passo 11, e só se o teste no iPhone falhar.
- Do NOT add new dependencies. Do NOT use `!important`. Do NOT add a
  `prefers-reduced-motion` override for these buttons (decisão documentada acima).
- Do NOT commit or push unless the user asks. Este projeto é sincronizado com o
  Lovable (`AGENTS.md`): commits enviados aparecem no editor do Lovable. Nunca
  reescreva histórico (force push, rebase, amend).
- If a step doesn't match the code you find (drift since commit 4856a64), STOP
  and report instead of improvising.

## Verification

- **Mechanical** (PowerShell, na pasta do projeto):
  - `cd "C:\Users\hecto\Documents\webrapido\Barbearia Cuba Libre"; npm run lint`:
    rode **antes** e **depois** das mudanças. Não pode aparecer erro novo nos
    arquivos editados.
  - `cd "C:\Users\hecto\Documents\webrapido\Barbearia Cuba Libre"; npx tsc --noEmit`:
    mesmo critério, sem erro novo.
  - `cd "C:\Users\hecto\Documents\webrapido\Barbearia Cuba Libre"; npm run build`:
    precisa terminar sem erro.
  - Busca de conferência: em `src/components/WhatsAppFloat.tsx`,
    `src/components/Footer.tsx` e `src/components/Depoimentos.tsx`, não deve
    sobrar nenhum `transition-colors` nem `transition-transform`. Em
    `src/routes/index.tsx` devem sobrar exatamente 4 `transition-colors` (linhas
    ~145, ~357, ~404, ~411, todas links de texto). Em
    `src/components/Navbar.tsx` deve sobrar exatamente 1 (linha ~42, links de
    texto do menu).
- **Feel check**:
  - Rode `cd "C:\Users\hecto\Documents\webrapido\Barbearia Cuba Libre"; npm run dev`
    e abra o endereço mostrado.
  - No DevTools (F12), selecione o botão verde do topo. Em **Computed** deve
    aparecer `transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1)` e
    `transition-duration: 0.16s`.
  - Computador: segure o clique em "Agendar pelo WhatsApp" do topo, arraste o
    mouse para fora e só então solte, para não abrir o WhatsApp. Enquanto
    segura, o botão fica um pouco menor. Com o mouse em cima ele estava maior
    (1.03) e deve ir **direto** para o menor (0.97), sem pulo nem tremida.
  - DevTools → painel **Animations** → velocidade 10%: o encolher começa rápido
    e freia no fim, sem passar do ponto e voltar. A cor não pisca.
  - Clique várias vezes seguidas nas setas dos depoimentos: o botão nunca fica
    "preso" pequeno, e cada clique responde.
  - **Celular de verdade** (o modo celular do DevTools não reproduz o toque):
    rode `cd "C:\Users\hecto\Documents\webrapido\Barbearia Cuba Libre"; npm run dev -- --host`,
    abra no celular o endereço "Network" que aparecer (celular e computador na
    mesma rede Wi-Fi; o Windows pode pedir permissão no firewall). Encoste o
    dedo em cada botão verde, no ☰ e nas setas: todos afundam de leve enquanto
    o dedo está encostado.
  - **iPhone**: se os botões **não** afundarem ao toque, aplique o Passo 11 e
    teste de novo.
  - Se um retângulo cinza ou azul piscar por cima do botão arredondado ao tocar
    (realce de toque do navegador), **não** corrija neste plano: só relate.
  - DevTools → **Rendering** → "Emulate CSS media feature
    prefers-reduced-motion: reduce": os botões **continuam** afundando ao
    pressionar (decisão deliberada), e as seções continuam aparecendo sem subir
    (comportamento atual, inalterado).
- **Done when**:
  - as 10 linhas dos Passos 2 a 10 (a constante conta uma vez; as duas setas
    contam duas) têm `duration-160`, `ease-out` e `active:scale-[0.97]`
    (ou `0.95` no ☰ e nas setas);
  - `src/styles.css` tem o bloco `@theme static` com
    `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`;
  - lint, typecheck e build sem erro novo;
  - o toque foi conferido num celular de verdade.
