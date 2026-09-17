# Planos de animação

Planos gerados pela skill `improve-animations`. Cada plano é autocontido: quem
executa não precisa de nenhuma conversa anterior. Executar um plano por vez.

| # | Plano | Severidade | Status |
| --- | --- | --- | --- |
| 001 | [Resposta ao toque nos botões de WhatsApp e demais botões](001-resposta-ao-toque-nos-botoes.md) | MEDIUM | TODO |

## Ordem recomendada

1. **001**: primeiro, porque cria a curva `--ease-out` em `src/styles.css`, que
   os próximos planos de movimento devem reutilizar.

## Dependências

- Planos futuros que usem `var(--ease-out)` ou a classe `ease-out` dependem do
  Passo 1 do plano 001.

## Candidatos ainda sem plano

Vindos da busca de oportunidades de animação (`find-animation-opportunities`):

- Menu do celular entrando e saindo (`src/components/Navbar.tsx:73`).
- Troca de depoimentos com direção (`src/components/Depoimentos.tsx:78`).
- Selo do logo entrando como carimbo (`src/routes/index.tsx:161`). Antes,
  comprimir `src/assets/logo-barbearia-cuba-libre.png` (915 KB).
