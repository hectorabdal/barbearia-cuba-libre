# Regra de nomes de imagens e texto alternativo

Objetivo: toda foto do site passa a seguir um padrão simples, pensado para aparecer melhor no Google.

## A regra

Nome do arquivo:
- só letras minúsculas, sem acento, palavras separadas por hífen
- fórmula: `o-que-e` + `detalhe` + `barbearia-cuba-libre`
- exemplos: `corte-degrade-masculino-barbearia-cuba-libre.jpg`, `barba-aparada-navalha-barbearia-cuba-libre.jpg`, `corte-infantil-barbearia-cuba-libre.jpg`
- fotos comuns em `.jpg`; logo e imagens com fundo transparente em `.png`

Texto alternativo (o texto que descreve a foto para o Google e para quem usa leitor de tela):
- uma frase curta e real do que aparece na foto (até ~125 caracteres)
- inclui o serviço e, quando fizer sentido, a barbearia
- sem repetir "foto de" nem empilhar palavras-chave
- exemplo: "Cliente com corte degradê finalizado na Barbearia Cuba Libre"

## O que eu faço quando você mandar novas fotos

1. Renomeio o arquivo seguindo a fórmula acima (você pode sempre pedir outro nome).
2. Escrevo o texto alternativo descrevendo o que está na foto.
3. Substituo a imagem no lugar certo do site.

## Aplicação neste projeto

- Renomear as fotos atuais para os nomes no padrão (`equipe.jpg`, `corte.jpg`, `barba.jpg`, `infantil.jpg`, `logo-cuba-libre.png`) e atualizar onde elas são usadas.
- Revisar os textos alternativos existentes para seguirem a regra.
- Guardar a regra na memória do projeto, para eu aplicar automaticamente daqui em diante sem você precisar repetir.

## Detalhes técnicos

- Arquivos em `src/assets/`, importados em `src/routes/index.tsx`, `src/components/Navbar.tsx` e `src/components/Footer.tsx`.
- Memória salva em `mem://design/imagens-seo` e referenciada em `mem://index.md`.
