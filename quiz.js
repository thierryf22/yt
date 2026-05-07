let perguntas = [

{
pergunta:"O mito explica o mundo através de:",
respostas:["Ciência","Histórias simbólicas","Matemática"],
correta:1
},

{
pergunta:"A filosofia surgiu principalmente na:",
respostas:["Grécia","Roma","Egito"],
correta:0
},

{
pergunta:"O mito normalmente envolve:",
respostas:["Deuses e seres sobrenaturais","Experimentos científicos","Tecnologia"],
correta:0
},

{
pergunta:"A filosofia busca entender o mundo usando:",
respostas:["Magia","Razão e reflexão","Superstição"],
correta:1
},

{
pergunta:"Qual é um filósofo famoso da Grécia Antiga?",
respostas:["Sócrates","Zeus","Hércules"],
correta:0
},

{
pergunta:"A passagem do mito para o logos representa:",
respostas:["Mudança para explicações racionais","Mais histórias mitológicas","Uso de magia"],
correta:0
},

{
pergunta:"A filosofia ajuda principalmente a:",
respostas:["Pensar criticamente","Controlar o clima","Criar mitos"],
correta:0
},

{
pergunta:"O mito era transmitido principalmente:",
respostas:["Pela tradição oral","Por livros científicos","Por computadores"],
correta:0
}

]

let indice=0
let pontos=0
let respondeu=false



function carregarPergunta(){

respondeu=false

let p=perguntas[indice]

document.getElementById("pergunta").innerText=p.pergunta

let respostasHTML=""

p.respostas.forEach((r,i)=>{

respostasHTML+=`<button onclick="responder(${i})" id="resposta${i}">${r}</button>`

})

document.getElementById("respostas").innerHTML=respostasHTML

document.getElementById("progresso").style.width=((indice/perguntas.length)*100)+"%"

}



function responder(i){

if(respondeu) return

respondeu=true

let correta=perguntas[indice].correta

let botoes=document.querySelectorAll("#respostas button")

botoes.forEach((botao,index)=>{

if(index==correta){

botao.style.background="#8BC34A"

}

if(index==i && i!=correta){

botao.style.background="#e74c3c"

}

})

if(i==correta){

pontos++

}

}



function proximaPergunta(){

indice++

if(indice<perguntas.length){

carregarPergunta()

}else{

mostrarResultado()

}

}



function mostrarResultado(){

document.querySelector(".quiz-container").innerHTML=

`<div style="text-align:right">
<button onclick="voltarMapa()" style="cursor:pointer;font-size:18px">✖</button>
</div>

<h2>Resultado Final</h2>

<p>Você acertou ${pontos} de ${perguntas.length} perguntas.</p>

<button onclick="refazerQuiz()">Refazer Quiz</button>`

}



function refazerQuiz(){

indice=0
pontos=0
carregarPergunta()

}



function voltarMapa(){

document.getElementById("quiz").style.display="none"
document.getElementById("mapa").style.display="block"

}



window.onload = function(){
carregarPergunta()
}