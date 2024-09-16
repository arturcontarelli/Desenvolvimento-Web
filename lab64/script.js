const dados = [
  {
      pergunta: "Qual é o maior país do mundo em área territorial?",
      resposta: ["China", "Estados Unidos", "Canadá", "Rússia"],
      correto: 3 
  },
  {
      pergunta: "Quem escreveu 'Dom Quixote'?",
      resposta: ["Gabriel García Márquez", "Miguel de Cervantes", "Pablo Neruda", "Jorge Luis Borges"],
      correto: 1
  },
  {
      pergunta: "Qual é o elemento químico representado pelo símbolo 'O'?",
      resposta: ["Ouro", "Oxigênio", "Ósmio", "Organesson"],
      correto: 1 
  },
  {
      pergunta: "Qual é o planeta mais próximo do Sol?",
      resposta: ["Vênus", "Marte", "Mercúrio", "Terra"],
      correto: 2 
  },
  {
      pergunta: "Em que ano aconteceu a Revolução Francesa?",
      resposta: ["1776", "1789", "1812", "1848"],
      correto: 1 
  }
];


function carregarPergunta(){
    const perguntaContainer = document.getElementById('perguntaContainer')
    dados.forEach((value, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${value.pergunta}</h3>`;
        value.resposta.forEach((respostas, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="pergunta${index}" value="${i}"> ${respostas}
            </label>`;
        });
        perguntaContainer.appendChild(div);
    });
}


function enviarResposta() {
    let score = 0;
    dados.forEach((value, index) => {
        const respostaSelecionada = document.querySelector(`input[name="pergunta${index}"]:checked`);
        if (respostaSelecionada && parseInt(respostaSelecionada.value) === value.correto) {
            score++;
        }
    });
    document.getElementById('resultado').innerHTML = `Voce pontuou ${score} de ${dados.length}`;

  if(score ===  dados.length){
    alert("Parabéns! você acertou todas as perguntas");
  }

}

    
window.onload = carregarPergunta;



