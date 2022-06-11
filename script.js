//variaveis
//dados de entrada
//dados de saida
const respostaElement = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
    "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

//clicar em fazer pergunta
function  fazerPergunta() {
    if (inputPergunta.value == '') {
        alert('Digite sua pergunta')
        return 
    }
    buttonPerguntar.setAttribute('disabled',true)
    
    const pergunta = '<div>' + inputPergunta.value + '</div>'

    //gerar numero aleatório
    const totalRespostas = respostas.length
    const numAleat = Math.floor(Math.random() * totalRespostas)
    console.log(respostas[numAleat])
    respostaElement.innerHTML = pergunta + respostas[numAleat]
    respostaElement.style.opacity = 1;

    //sumir a resposta depois de 3s
    setTimeout(function() {
        respostaElement.style.opacity = 0;
        buttonPerguntar.removeAttribute('disabled')
    }, 3000)
    
}
