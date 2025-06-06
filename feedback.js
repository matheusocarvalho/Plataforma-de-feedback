function escreve(valor, campoId) {
  document.getElementById(campoId).value = valor;
}

function enviarFeedback() {
  var armazenador = 0;
  var mediaMensagem = "";

  var r1 = document.getElementById('resposta1').value;
  var r2 = document.getElementById('resposta2').value;
  var comentario = document.getElementById('extra').value;

  if(r1 === 'PÉSSIMO') armazenador += 1;
  if(r1 === 'REGULAR') armazenador += 3;
  if(r1 === 'ÓTIMO') armazenador += 5;
  
  if(r2 === 'PÉSSIMO') armazenador += 1;
  if(r2 === 'REGULAR') armazenador += 3;
  if(r2 === 'ÓTIMO') armazenador += 5;

  var media = armazenador / 2;

  if(media < 2.5){
    mediaMensagem = "PÉSSIMO";
  } else if(media < 4.5) {
    mediaMensagem = "REGULAR";
  } else {
    mediaMensagem = "ÓTIMO"
  }

  var mensagem = "Seu feedback:\n\n";
  mensagem += "Usabilidade do AVA:" + r1 + "\n";
  mensagem += "Confiança nas entregas:" + r2 + "\n";
  mensagem += "Comentário extra:" + comentario + "\n\n";
  mensagem += "Média de avaliação:" + mediaMensagem;
  
  alert(mensagem)
}