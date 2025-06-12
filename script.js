const fotos = [
  { src: "imagens/foto1.jpg", legenda: "Nossas mãos unidas contam a história que o coração está escrevendo." },
  { src: "imagens/foto2.jpg", legenda: "Nesse instante, quando te abraço e vejo teu sorriso, sinto que o universo inteiro cabe só entre nós dois." },
  { src: "imagens/foto3.jpg", legenda: "Te ofereço minha força como proteção e meu amor como refúgio.”" },
  { src: "imagens/foto4.jpg", legenda: "Com todo meu amor, prometo ser tua força e teu refúgio, hoje e sempre.”" },
  { src: "imagens/foto5.jpg", legenda: "Sorrir contigo assim é a prova de que o amor verdadeiro é feito de proteção e alegria." },
  { src: "imagens/foto6.jpg", legenda: "Não há um dia em que eu deixe de agradecer a Deus por te ter na minha vida!" },
  { src: "imagens/foto7.jpg", legenda: "Meu amor por ti é igual chimarrão: forte, quente e viciante." },
  { src: "imagens/foto8.jpg", legenda: "Quando estamos juntos, o mundo fica mais leve e o sorriso mais verdadeiro." },
  { src: "imagens/foto9.jpg", legenda: "A melhor companhia para qualquer momento é você." },
];

const caixaInicial = document.getElementById("caixa-inicial");
const btnSim = document.getElementById("btn-sim");
const container = document.getElementById("container");
const fotoEl = document.getElementById("foto");
const legendaEl = document.getElementById("legenda");
const btnProximo = document.getElementById("btn-proximo");
const musica = document.getElementById("musica");

let indiceAtual = 0;
let ultimaFotoMostrada = false;

btnSim.addEventListener("click", () => {
  caixaInicial.classList.add("hidden");
  container.classList.remove("hidden");
  mostrarFoto(indiceAtual);
  musica.play().catch(() => {});
});

btnProximo.addEventListener("click", () => {
  if (indiceAtual < fotos.length - 1) {
    indiceAtual++;
    mostrarFoto(indiceAtual);
  } else if (!ultimaFotoMostrada) {
    abrirCaixaRespostaFinal();
    ultimaFotoMostrada = true;
  }
});

function mostrarFoto(index) {
  fotoEl.src = fotos[index].src;
  legendaEl.textContent = fotos[index].legenda;
}

// Função para criar a caixa da última pergunta "Espero que tenha gostado... Podemos continuar?"
function abrirCaixaRespostaFinal() {
  container.classList.add("hidden");

  // Cria a div da caixinha
  const caixaResposta = document.createElement("div");
  caixaResposta.id = "caixa-resposta-final";
  caixaResposta.style.cssText = `
    background: #222;
    color: #eee;
    padding: 30px 25px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 0 10px #555;
    max-width: 400px;
    margin: 0 auto;
  `;

  caixaResposta.innerHTML = `
    <p style="font-size: 1.2rem; margin-bottom: 20px;">
      Espero que tenha gostado meu amor :)<br>
      Tem só mais umas coisas que preciso te dizer, podemos continuar?
    </p>
    <button id="btn-sim-final" style="
      cursor: pointer;
      background: #9c27b0;
      color: white;
      border: none;
      padding: 12px 25px;
      border-radius: 6px;
      font-size: 1rem;
      transition: background 0.3s ease;
    ">SIM</button>
  `;

  document.body.appendChild(caixaResposta);

  document.getElementById("btn-sim-final").addEventListener("click", () => {
    caixaResposta.remove();
    mostrarTextoFinal();
  });
}

// Função para mostrar o texto final com fundo preto, borda rosa bebê e corações flutuando
function mostrarTextoFinal() {
  // Cria a div do texto final
  const textoFinal = document.createElement("div");
  textoFinal.id = "texto-final";
  textoFinal.style.cssText = `
    position: fixed;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: #000;
    border: 5px solid #f7c6d1; /* rosa bebê */
    border-radius: 15px;
    color: #f7c6d1;
    font-family: 'Balqis', serif;
    font-size: 1.1rem;
    padding: 20px;
    overflow-y: auto;
    box-sizing: border-box;
    line-height: 1.5;
    z-index: 1000;
  `;

  textoFinal.innerHTML = `
    <p>
      Sou muito feliz por ter tu comigo. Cada dia ao teu lado é uma alegria que enche minha vida de luz. Quando tô contigo, queria congelar o tempo só pra ficar mais um pouco, aproveitando cada sorriso, cada olhar teu.
    </p>
    <p>
      Nossa sintonia é coisa de outro mundo, que não dá pra explicar. O nosso beijo, a nossa química... tudo em ti me completa e me faz apaixonar mais a cada dia. Sou louco pelo teu sorriso que clareia meus dias, pelo teu olhar que me prende, pelo teu corpo que me aquece e pela tua presença que é meu lugar seguro.
    </p>
    <p>
      Já sonho com o nosso futuro: casar, ter nossa casa, nossa família e criar nossos três filhos num lar cheio de amor. Não tenho dúvida nenhuma que tu és o amor da minha vida, a pessoa com quem quero viver todos os dias que ainda vêm.
    </p>
    <p>
      Pode contar comigo pra tudo, sempre. Em mim tu vais ter amor de verdade, abrigo pra se proteger, carinho pra aquecer o coração e um protetor que vai cuidar de ti.
    </p>
    <p>
      Feliz Dia dos Namorados, meu amor. Sou grato por cada instante que passo contigo.
    </p>
  `;

  document.body.appendChild(textoFinal);

  // Função para criar corações flutuando na borda
  criarCoracoesFlutuantes();
}

// Função para criar corações flutuantes próximos à borda da tela
function criarCoracoesFlutuantes() {
  const numCoracoes = 15;
  for (let i = 0; i < numCoracoes; i++) {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao-flutuante");
    // Define posição aleatória na borda (top, bottom, left ou right)
    const posicao = Math.floor(Math.random() * 4);
    const size = 15 + Math.random() * 20; // tamanho entre 15 e 35px
    coracao.style.width = `${size}px`;
    coracao.style.height = `${size}px`;
    coracao.style.position = "fixed";
    coracao.style.zIndex = 1100;
    coracao.style.opacity = 0.8;
    coracao.style.background = "#f7c6d1";
    coracao.style.clipPath = "polygon(50% 0%, 61% 14%, 75% 14%, 84% 26%, 84% 40%, 75% 51%, 50% 80%, 25% 51%, 16% 40%, 16% 26%, 25% 14%, 39% 14%)";

    // Posições nas bordas
    switch(posicao) {
      case 0: // top
        coracao.style.top = `${Math.random() * 30}px`;
        coracao.style.left = `${Math.random() * window.innerWidth}px`;
        break;
      case 1: // bottom
        coracao.style.bottom = `${Math.random() * 30}px`;
        coracao.style.left = `${Math.random() * window.innerWidth}px`;
        break;
      case 2: // left
        coracao.style.left = `${Math.random() * 30}px`;
        coracao.style.top = `${Math.random() * window.innerHeight}px`;
        break;
      case 3: // right
        coracao.style.right = `${Math.random() * 30}px`;
        coracao.style.top = `${Math.random() * window.innerHeight}px`;
        break;
    }

    // Animação de leve subida e opacidade
    coracao.animate([
      { transform: 'translateY(0)', opacity: 0.8 },
      { transform: `translateY(-${20 + Math.random() * 10}px)`, opacity: 0 }
    ], {
      duration: 4000 + Math.random() * 3000,
      iterations: Infinity,
      delay: i * 200
    });

    document.body.appendChild(coracao);
  }
}
