let campoFantasia;
let campoAventura;
let campoSuspense;
let campoTerror;
let campoComedia;
let botaoNovoFilme;
let areaRecomendacao;

function setup() {
  noCanvas();
  
  // ... seus outros elementos ...
  
  areaRecomendacao = createDiv("👋 Escolha um gênero acima e clique no botão.");
  areaRecomendacao.id("recomendacao");
  areaRecomendacao.style("text-align", "center");
  areaRecomendacao.style("font-size", "1.2em");
  areaRecomendacao.style("font-weight", "600");
  areaRecomendacao.parent(document.body);
}

function gerarFilme() {
  // ... seu código para pegar seleção ...
  
  if (gostosSelecionados.length === 0) {
    areaRecomendacao.html("⚠️ Selecione um gênero para receber uma recomendação.");
    return;
  }
  
  const filme = geraRecomendacao(gostosSelecionados);
  
  areaRecomendacao.html(`
    <div style="text-align:center;">
      <h2>${filme.titulo}</h2>
      <iframe 
        width="320" height="180" 
        src="${filme.videoURL}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  `);
}


function gerarFilme() {
  let gostosSelecionados = [];

  if (campoFantasia.checked()) gostosSelecionados.push("fantasia");
  if (campoAventura.checked()) gostosSelecionados.push("aventura");
  if (campoSuspense.checked()) gostosSelecionados.push("suspense");
  if (campoTerror.checked()) gostosSelecionados.push("terror");
  if (campoComedia.checked()) gostosSelecionados.push("comedia");

  if (gostosSelecionados.length === 0) {
    areaRecomendacao.html("⚠️ Selecione um gênero para receber uma recomendação.");
    return;
  }

  const filme = geraRecomendacao(gostosSelecionados);
  areaRecomendacao.html("🎬 Recomendação: " + filme);
}

function geraRecomendacao(gostos) {
  let filmesDisponiveis = [];

  for (let gosto of gostos) {
    filmesDisponiveis = filmesDisponiveis.concat(listaDeFilmes[gosto] || []);
  }

  if (filmesDisponiveis.length === 0) {
    return "😔 Nenhum filme disponível para sua seleção.";
  }

  return filmeAleatorio(filmesDisponiveis);
}

function filmeAleatorio(lista) {
  return lista[floor(random(lista.length))];
}

function desmarcarExceto(selecionado) {
  let campos = [campoFantasia, campoAventura, campoSuspense, campoTerror, campoComedia];
  for (let campo of campos) {
    if (campo !== selecionado) {
      campo.checked(false);
    }
  }
}

const listaDeFilmes = {
  fantasia: [
    { titulo: "⚡ Harry Potter e a Pedra Filosofal", videoURL: "https://www.youtube.com/embed/D-vL95A1Es8?si=8iiCn2XlItJk7Awp" },
    { titulo: "🍫 A Fantástica Fábrica de Chocolate", videoURL: "https://www.youtube.com/embed/54-8OFlQ8Ng" },
    { titulo: "🐉 A Viagem de Chihiro", videoURL: "https://www.youtube.com/embed/ByXuk9QqQkk" },
    { titulo: "🧙‍♂️ O Castelo Animado", videoURL: "https://www.youtube.com/embed/iwROgK94zcM" },
    { titulo: "🐅 As Aventuras de Pi", videoURL: "https://www.youtube.com/embed/4OiMOHRDs14" }
  ],
  aventura: [
    { titulo: "🕷️ Homem-Aranha: No Aranhaverso", videoURL: "https://www.youtube.com/embed/g4Hbz2jLxvQ" },
    { titulo: "🐉 Como Treinar o Seu Dragão", videoURL: "https://www.youtube.com/embed/naXE14nlhLk" },
    { titulo: "🔮 Doutor Estranho", videoURL: "https://www.youtube.com/embed/HSzx-zryEgM" },
    { titulo: "🏹 Jogos Vorazes", videoURL: "https://www.youtube.com/embed/4S9a5V9ODuY" },
    { titulo: "🚀 Perdido em Marte", videoURL: "https://www.youtube.com/embed/ej3ioOneTy8" }
  ],
  suspense: [
    { titulo: "🕵 Seven: Os Sete Crimes Capitais", videoURL: "https://www.youtube.com/embed/znmZoVkCjpI" },
    { titulo: "🔐 O Jogo da Imitação", videoURL: "https://www.youtube.com/embed/S5CjKEFb-sM" },
    { titulo: "🧠 Ilha do Medo", videoURL: "https://www.youtube.com/embed/5iaYLCiq5RM" },
    { titulo: "📹 Círculo de Fogo", videoURL: "https://www.youtube.com/embed/FPsXp4-4JHk" },
    { titulo: "👁️ O Homem Invisível", videoURL: "https://www.youtube.com/embed/dSBszuL3oOo" }
  ],
  terror: [
    { titulo: "👻 Invocação do Mal", videoURL: "https://www.youtube.com/embed/k10ETZ41q5o" },
    { titulo: "😨 Hereditário", videoURL: "https://www.youtube.com/embed/BlZeHXz_uOw" },
    { titulo: "🧟 Madrugada dos Mortos", videoURL: "https://www.youtube.com/embed/I9NQbK4Arck" },
    { titulo: "🩸 It: A Coisa", videoURL: "https://www.youtube.com/embed/xKJmEC5ieOk" },
    { titulo: "🔪 O Massacre da Serra Elétrica", videoURL: "https://www.youtube.com/embed/tGqXRf4zG3E" }
  ],
  comedia: [
    { titulo: "😂 As Branquelas", videoURL: "https://www.youtube.com/embed/TTFCkXgk4tI" },
    { titulo: "🎤 Escola de Rock", videoURL: "https://www.youtube.com/embed/3PsUJFEBC74" },
    { titulo: "👶 O Pequenino", videoURL: "https://www.youtube.com/embed/aQ-Hu8Yi-Vw" },
    { titulo: "🐼 Kung Fu Panda", videoURL: "https://www.youtube.com/embed/5Z01kW5xvel" },
    { titulo: "🍔 Tá Chovendo Hambúrguer", videoURL: "https://www.youtube.com/embed/l2C2gRgOuw4" }
  ]
};

function gerarFilme() {
  let gostosSelecionados = [];

  if (campoFantasia.checked()) gostosSelecionados.push("fantasia");
  if (campoAventura.checked()) gostosSelecionados.push("aventura");
  if (campoSuspense.checked()) gostosSelecionados.push("suspense");
  if (campoTerror.checked()) gostosSelecionados.push("terror");
  if (campoComedia.checked()) gostosSelecionados.push("comedia");

  if (gostosSelecionados.length === 0) {
    areaRecomendacao.html("⚠️ Selecione um gênero para receber uma recomendação.");
    return;
  }

  const filme = geraRecomendacao(gostosSelecionados);
  // Exibir título e vídeo embutido
  areaRecomendacao.html(`
    <div style="text-align:center;">
      <h2>${filme.titulo}</h2>
      <iframe 
        width="320" height="180" 
        src="${filme.videoURL}" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  `);
}

function geraRecomendacao(gostos) {
  let filmesDisponiveis = [];

  for (let gosto of gostos) {
    filmesDisponiveis = filmesDisponiveis.concat(listaDeFilmes[gosto] || []);
  }

  if (filmesDisponiveis.length === 0) {
    return { titulo: "😔 Nenhum filme disponível para sua seleção.", videoURL: "" };
  }

  return filmeAleatorio(filmesDisponiveis);
}

function filmeAleatorio(lista) {
  return lista[floor(random(lista.length))];
}
