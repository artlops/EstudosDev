var numeroSecreto = parseInt(Math.random() * 11);
//variavel precisa estar fora da função para que só seja chamado o número uma vez
function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Acertou !";
  } else if (chute < 0 || chute > 10) {
    elementoResultado.innerHTML = "Digite um chute entre 0 e 10";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Errou! Dica: Tente um número menor !";
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "Errou! Dica: Tente um número maior !";
  }
}
