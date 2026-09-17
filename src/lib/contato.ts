export const WHATSAPP_NUMERO = "5519981221852";
export const WHATSAPP_EXIBICAO = "(19) 98122-1852";
export const whatsappLink = (mensagem: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
export const WHATSAPP_LINK = whatsappLink(
  "Olá! Gostaria de agendar um horário na Barbearia Cuba Libre.",
);
export const TELEFONE_LINK = `tel:+${WHATSAPP_NUMERO}`;
export const EMAIL = "barbeariacubalibre@yahoo.com.br";
export const ENDERECO = "Rua Professor Luiz Rosa, 204-B, Campinas – SP";
export const INSTAGRAM_USER = "@cubalivre_barbearia";
export const INSTAGRAM_LINK = "https://instagram.com/cubalivre_barbearia";
// Confirmado no painel oficial do Google Business em 13/09/2026: 4,9 de nota
// com 165 avaliações. A nota exibida na página tem que ser idêntica à dos
// dados estruturados, por isso as duas leem daqui — atualizar os dois valores
// juntos se o perfil do Google mudar.
export const AVALIACAO_NOTA = 4.9;
export const AVALIACAO_TOTAL = 165;

// Link curto oficial da ficha verificada no Google (Perfil da Empresa),
// confirmado por redirecionamento real de servidor — aponta direto para
// "Barbearia Cuba Libre" pelo identificador único do negócio, não por busca
// de texto. Evita duplicar o endereço em outro formato e não depende dele
// estar digitado certo em nenhum outro lugar do código.
export const MAPS_LINK = "https://maps.app.goo.gl/d1JFpUGCainZiVNk7";
