function ConverterFarenheit() {
    var valorElemento = document.getElementById("valorc");
    var valorc = valorElemento.value;
    var valorEmCelsius = parseFloat(valorc);

    var valorEmFarenheit = ((valorEmCelsius * 1.8) + 32);

    var elementovalorConvertidoFarenheit = document.getElementById("valorConvertidoFarenheit");
    var valorConvertidoFarenheit = "A temperatura de " + valorEmCelsius + "  Graus Celsius Convertida, equivale a " + valorEmFarenheit + " Graus Farenheit";
    elementovalorConvertidoFarenheit.innerHTML = valorConvertidoFarenheit;
}

function ConverterCelsius() {
    var valorElemento = document.getElementById("valorf");
    var valorf = valorElemento.value;
    var valorEmFarenheit = parseFloat(valorf);

    var valorEmCelsius = ((valorEmFarenheit - 32) / 1.8);

    var elementovalorConvertidoCelsius = document.getElementById("valorConvertidoCelsius");
    var valorConvertidoCelsius = "A temperatura de " + valorEmFarenheit + "  Graus Farenheit Convertida, equivale a " + valorEmCelsius + " Graus Celsius";
    elementovalorConvertidoCelsius.innerHTML = valorConvertidoCelsius;
}