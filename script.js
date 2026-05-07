function abrirMapa(){
  const inicio = document.getElementById("inicio");
  const mapa = document.getElementById("mapa");

  if(inicio) inicio.style.display = "none";
  if(mapa) mapa.style.display = "block";
}


/* FUNÇÃO PARA ESCREVER TEXTO DIGITANDO */
function escreverTexto(elemento, texto){
  if(!elemento || !texto) return;

  elemento.innerHTML = "";
  let i = 0;
  let velocidade = 15;

  function digitar(){
    if(i < texto.length){
      elemento.innerHTML += texto.charAt(i);
      i++;
      setTimeout(digitar, velocidade);
    }
  }

  digitar();
}


function abrirModal(tipo){

  const conteudo = document.getElementById("conteudo");
  const modal = document.getElementById("modal");

  const dados = {

"Origem do Mito": `Os mitos surgiram nas civilizações antigas como uma forma de explicar o mundo e os acontecimentos da vida. Naquela época, as pessoas ainda não tinham conhecimento científico para entender fenômenos naturais, como tempestades, terremotos ou a origem do universo. Por isso, criavam histórias envolvendo deuses, heróis e seres sobrenaturais. Essas histórias eram passadas de geração em geração e faziam parte da cultura e da religião dos povos.`,

"Origem da Filosofia": `A filosofia surgiu na Grécia Antiga, por volta do século VI a.C. Nesse período, alguns pensadores começaram a questionar as explicações mitológicas e buscar respostas baseadas na razão e na observação. Em vez de aceitar histórias sobre deuses para explicar o mundo, eles passaram a refletir e analisar os fenômenos de forma mais lógica e racional.`,

"O que é Mito": `O mito é uma narrativa tradicional que tenta explicar a origem do mundo, da natureza e da vida humana. Normalmente envolve deuses, heróis e acontecimentos sobrenaturais. Para os povos antigos, os mitos não eram apenas histórias, mas formas de explicar a realidade e transmitir valores culturais, crenças e ensinamentos importantes para a sociedade.`,

"O que é Filosofia": `A filosofia é o estudo que busca compreender o mundo, a existência humana e o conhecimento através da razão e da reflexão. Os filósofos fazem perguntas sobre a vida, a verdade, a justiça e o sentido da existência. Em vez de aceitar respostas prontas, a filosofia incentiva o pensamento crítico, o questionamento e a busca por argumentos lógicos.`,

"Diferença entre os dois": `A principal diferença entre mito e filosofia está na forma de explicar o mundo. O mito usa histórias simbólicas e a participação de deuses e forças sobrenaturais para explicar os acontecimentos. Já a filosofia procura compreender a realidade através da razão, da lógica e da reflexão crítica. Enquanto o mito é baseado em crenças e tradições, a filosofia busca explicações mais racionais e questionadoras.`,

"Principais Filósofos": `Alguns dos primeiros filósofos tiveram um papel importante no desenvolvimento da filosofia e na busca por explicações racionais sobre o mundo. Tales de Mileto acreditava que a água era o princípio de todas as coisas. Heráclito defendia que tudo no mundo está em constante mudança. Sócrates ensinava através de perguntas e diálogos, incentivando as pessoas a refletirem. Platão desenvolveu ideias importantes sobre conhecimento e realidade. Aristóteles estudou diversas áreas, como lógica, ética, política e ciência.`,

"Mito → Logos": `A passagem do mito para o logos representa a mudança na forma de pensar sobre o mundo. Antes, os fenômenos eram explicados por mitos e histórias sobre deuses. Com o surgimento da filosofia, os pensadores começaram a buscar explicações baseadas na razão, na observação e na reflexão. Esse processo marcou o início de uma nova maneira de compreender a realidade.`,

"Importância da Filosofia": `A filosofia é importante porque ajuda as pessoas a desenvolverem o pensamento crítico e a capacidade de questionar e refletir sobre diferentes temas da vida. Ela contribuiu para o desenvolvimento da ciência, da política, da ética e de muitas áreas do conhecimento. Além disso, a filosofia incentiva o diálogo, a reflexão e a busca por compreender melhor o mundo e a sociedade.`,

"Fotos Filosofia": `
<h2>Filósofos Importantes</h2>
<div class="galeria">
<img src="./imagens/socrates.png">
<img src="./imagens/platao.png">
<img src="./imagens/aristoteles.png">
</div>
`,

"Fotos Mitologia": `
<h2>Personagens da Mitologia</h2>
<div class="galeria">
<img src="./imagens/zeus.png">
<img src="./imagens/poseidon.png">
<img src="./imagens/olimpo.png">
<img src="./imagens/medusa.png">
</div>
`
  };

  if(!dados[tipo]){
    conteudo.innerHTML = "<p>Conteúdo não encontrado.</p>";
  } else if(tipo.includes("Fotos")){
    conteudo.innerHTML = dados[tipo];
  } else {
    escreverTexto(conteudo, dados[tipo]);
  }

  if(modal) modal.style.display = "flex";
}


function fecharModal(){
  const modal = document.getElementById("modal");
  if(modal) modal.style.display = "none";
}


/* QUIZ */
function abrirQuiz(){
  const mapa = document.getElementById("mapa");
  const quiz = document.getElementById("quiz");

  if(mapa) mapa.style.display = "none";
  if(quiz) quiz.style.display = "flex";
}


/* VÍDEO */
function abrirVideo(){
  const video = document.getElementById("modalVideo");
  if(video) video.style.display = "flex";
}

function fecharVideo(){
  const video = document.getElementById("modalVideo");
  if(video) video.style.display = "none";
}