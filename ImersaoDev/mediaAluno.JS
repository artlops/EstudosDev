var nome = "Arthur Lima";
var notaDoPrimeiroBimestre = 9;
var notaDoSegundoBimestre = 7;
var notaDoTerceiroBimestre = 4;
var notaDoQuartoBimestre = 2;

var notaFinal =
  (notaDoPrimeiroBimestre +
    notaDoSegundoBimestre +
    notaDoTerceiroBimestre +
    notaDoQuartoBimestre) /
  4;

//var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo, " + nome);
console.log(notaFinal);
if (notaFinal >= 7) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado");
}
// isso é um comentário

// Revisão
// variáveis, string, console.log, toFixed, operações matemáticas, concatenação

//Desafio 1: Dependendo da nota informar se Aprovado ou Reprovado*
//Desafio 2: Mudar o estilo da página*
//Desafio 3: Escrever na página o que aparece no Console
//Desafio 4: Conversor de Temperatura
//Desafio 4: Conversor de Moeda
//Desafio 5: Colocar todo o código dentro do console.log
