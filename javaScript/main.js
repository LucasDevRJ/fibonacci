let campoNumero = document.getElementById("numero");
let respostaSequenciaFibonacci = document.getElementById("resposta");

function calculaSequenciaFibonacci() {
    let numero = campoNumero.value;

    if (isNaN(numero)) {
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
    respostaSequenciaFibonacci.textContent = "";
    campoNumero.value = "";
}

let botaoCalcular = document.getElementById("botaoCalcular");
botaoCalcular.onclick = calculaSequenciaFibonacci;

let botaoApagar = document.getElementById("botaoApagar");
botaoApagar.onclick = apagaRespostaSequenciaFibonacci;