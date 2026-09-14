# Página-guia: nomes dos elementos do site

## Objetivo
Criar uma versão do site em que cada elemento aparece com uma etiqueta indicando o seu nome, para que você aprenda como pedir mudanças com precisão (ex.: "mude o botão do hero", "troque a foto do card de serviços").

## O que será feito

### Nova página `/guia`
- Uma cópia da página inicial, acessível pelo endereço `/guia`, sem alterar a página principal (`/`).
- Cada elemento importante recebe uma **etiqueta visível** (uma plaquinha colorida com o nome) posicionada sobre ele, sem quebrar o layout.

### Elementos nomeados (em português claro)
- **Barra de navegação (navbar)**, **logotipo**, **links do menu**, **botão do menu**, **menu mobile**
- **Hero** (seção de abertura), **título principal (H1)**, **subtítulo**, **botão de ação (CTA)**, **botão secundário**, **imagem do hero**
- **Seção "Sobre nós"**, **título da seção**, **parágrafos de texto**, **foto da equipe**, **cartões de estatísticas**
- **Seção de serviços**, **cards de serviço**, **imagem do card**, **ícone**, **botão do card**
- **Seção de diferenciais**, **cards de diferenciais**
- **Carrossel de depoimentos**, **estrelas de avaliação**, **setas de navegação**, **indicadores (bolinhas)**
- **Seção de chamada final (CTA final)**
- **Rodapé (footer)**, **colunas do rodapé**, **informações de contato**, **horário de funcionamento**
- **Botão flutuante do WhatsApp**

### Legenda
- No topo da página-guia, uma pequena legenda explicando como usar: o nome na etiqueta é o termo que você pode usar ao pedir alterações.

### Como acessar
- Link discreto no rodapé ("Ver guia de elementos") apontando para `/guia`, ou você pode simplesmente abrir o endereço `/guia` no navegador.

## Detalhes técnicos
- Novo arquivo de rota `src/routes/guia.tsx` reutilizando os componentes existentes com um componente de etiqueta (`Tag`) posicionado de forma absoluta.
- Sem banco de dados, sem backend — apenas frontend.
- A página principal do site permanece intacta.
