let campoNumero = document.getElementById("numero");
let respostaSequenciaFibonacci = document.getElementById("resposta");

function calculaSequenciaFibonacci() {
    respostaSequenciaFibonacci.style.display = "initial";
    let numero = campoNumero.value;

    if (numero.length == 0) {
        respostaSequenciaFibonacci.textContent = "Digite algum número positivo!";
    } else if (isNaN(numero)) {
        respostaSequenciaFibonacci.textContent = "Digite somente números!";
    } else if (numero < 0) {
        respostaSequenciaFibonacci.textContent = "Digite somente números positivos!";
    } else {
        let fibonacci = numero;
        for (let i = numero - 1; i >= 1; i--) {
            fibonacci = fibonacci * i;
        }
        exibeRespostaSequenciaFibonacci(numero, fibonacci);
    }
}

function exibeRespostaSequenciaFibonacci(numero, fibonacci) {
    respostaSequenciaFibonacci.textContent = numero + "! = " + fibonacci;
}

function apagaRespostaSequenciaFibonacci() {
    campoNumero.value = "";
    respostaSequenciaFibonacci.style.display = "none";
}

let botaoCalcular = document.getElementById("botaoCalcular");
botaoCalcular.onclick = calculaSequenciaFibonacci;

let botaoApagar = document.getElementById("botaoApagar");
botaoApagar.onclick = apagaRespostaSequenciaFibonacci;