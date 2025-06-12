function mostrarCartas() {
  document.getElementById('inicio').style.display = 'none';
  document.getElementById('cartas').style.display = 'block';

  const musica = document.getElementById('musica');
  if (musica) {
    musica.volume = 0.5; // volume em 50%
    musica.play().catch((error) => {
      console.log("Erro ao tentar tocar a música:", error);
    });
  }
}




const fotos = [
  'foto1.jpg',
  'foto2.jpg',
  'foto3.jpg',
  'foto4.jpg',
  'foto5.jpg',
  'foto6.jpg',
  'foto7.jpg',
  'foto8.jpg',
  'foto9.jpg'
];

const textos = [
  "A cada toque, te amo mais",
  "Esse sorriso me ganha fácil! Eu sou apaixonado em te ver sorrindo",
  "Saiba que sempre vou te proteger",
  "Inclusive quando tu está dormindo abraçada em mim, roncando e babando haha",
  "Que tu sempre te sinta em casa no meu abraço",
  "Eu te amo, amo nós juntos! Minha preciosa",
  "Até nisso Deus me atendeu, uma curitibana pra dividir o mate comigo",
  "Saiba que eu sou muito feliz ao teu lado!",
  "Feliz dia dos namorados! É o primeiro de longos anos que teremos juntos, minha princesa! Eu te amo muito!"
];

let parteAtual = 0;

function proximaParte() {
  parteAtual++;

  if (parteAtual >= fotos.length) {
    parteAtual = 0; // volta ao início, se quiser parar em último, basta remover essa linha
  }

  document.getElementById('foto').src = 'imagens/' + fotos[parteAtual];
  document.getElementById('textoFoto').innerHTML = `<p>${textos[parteAtual]}</p>`;
}
