function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5;
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Real é R$ " + valor;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterEuro() {
    var valorElementoEU = document.getElementById("valorEU");
    var valorEU = valorElementoEU.value;
    var valorEmDolarNumerico = parseFloat(valorEU);
  
    var valorEmEuro = valorEmDolarNumerico * 1.17;
  
    var elementoValorConvertidoEU = document.getElementById("valorConvertidoEuro");
    var valorConvertidoEuro = "O resultado em Euro é EU$ " + valorEmEuro;
    elementoValorConvertidoEU.innerHTML = valorConvertidoEuro;
  }

  function ConverterBitcoin() {
    var valorElementoBitCoin = document.getElementById("valorBitCoin");
    var valorBitCoin = valorElementoBitCoin.value;
    var valorEmDolarNumerico = parseFloat(valorBitCoin);
  
    var valorEmBitCoin = valorEmDolarNumerico * 47985;
  
    var elementoValorConvertidoBitCoin = document.getElementById("valorConvertidoBitCoin");
    var valorConvertidoBitCoin = "O resultado em BitCoin é $ " + valorEmBitCoin;
    elementoValorConvertidoBitCoin.innerHTML = valorConvertidoBitCoin;
  }
  //adicionar botão converter euro*
  //converter em bitcoin*
  //conversor velocidade da luz X km
  //conversor temperatura fahrenheit celsius
  