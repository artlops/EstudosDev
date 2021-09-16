var nome = document.getElementById ("Arthur Lima");
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

document.write("Bem vindo, " + nome);
document.write("<br>");
document.write("Sua média Final foi: " + notaFinal);
document.write("<br>");
if (notaFinal >= 7) {
  document.write("Aprovado!");
} else {
  document.write("Reprovado");
}
// isso é um comentário

// Revisão
// variáveis, string, document.write, toFixed, operações matemáticas, concatenação

//Desafio 1: Dependendo da nota informar se Aprovado ou Reprovado*
//Desafio 2: Mudar o estilo da página*
//Desafio 3: Escrever na página o que aparece no Console
//Desafio 4: Conversor de Temperatura
//Desafio 4: Conversor de Moeda
//Desafio 5: Colocar todo o código dentro do document.write
//function pulaLinha() {

//  document.write("<br>");
//}