const fotos = [
  { src: "imagens/foto1.jpg", legenda: "A cada toque, te amo mais" },
  { src: "imagens/foto2.jpg", legenda: "Esse sorriso me ganha fácil! Eu sou apaixonado em te ver sorrindo" },
  { src: "imagens/foto3.jpg", legenda: "Saiba que sempre vou te proteger" },
  { src: "imagens/foto4.jpg", legenda: "Inclusive quando tu está dormindo abraçada em mim, roncando e babando haha" },
  { src: "imagens/foto5.jpg", legenda: "Que tu sempre te sinta em casa no meu abraço" },
  { src: "imagens/foto6.jpg", legenda: "Eu te amo, amo nós juntos! Minha preciosa" },
  { src: "imagens/foto7.jpg", legenda: "Até nisso Deus me atendeu, uma curitibana pra dividir o mate comigo" },
  { src: "imagens/foto8.jpg", legenda: "Saiba que eu sou muito feliz ao teu lado!" },
  { src: "imagens/foto9.jpg", legenda: "Feliz dia dos namorados! É o primeiro de longos anos que teremos juntos, minha princesa! Eu te amo muito!" },
];

const caixaInicial = document.getElementById("caixa-inicial");
const btnSim = document.getElementById("btn-sim");
const container = document.getElementById("container");
const fotoEl = document.getElementById("foto");
const legendaEl = document.getElementById("legenda");
const btnProximo = document.getElementById("btn-proximo");
const musica = document.getElementById("musica");

let indiceAtual = 0;

btnSim.addEventListener("click", () => {
  caixaInicial.classList.add("hidden");
  container.classList.remove("hidden");
  mostrarFoto(indiceAtual);
  musica.play().catch(() => {
    // Se o autoplay falhar, música será iniciada só quando o botão for clicado no futuro
  });
});

btnProximo.addEventListener("click", () => {
  indiceAtual++;
  if (indiceAtual >= fotos.length) {
    // Se quiser, pode resetar ou ocultar a parte final
    indiceAtual = 0;
  }
  mostrarFoto(indiceAtual);
});

function mostrarFoto(index) {
  fotoEl.src = fotos[index].src;
  legendaEl.textContent = fotos[index].legenda;
}
