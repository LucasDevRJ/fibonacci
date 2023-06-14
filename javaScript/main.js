let campoNumero = document.getElementById("numero");
let respostaSequenciaFibonacci = document.getElementById("resposta");

function calculaSequenciaFibonacci() {
    let numero = campoNumero.value;
    
    let fibonacci = numero;
    for (let i = numero - 1; i >= 1; i--) {
        fibonacci = fibonacci * i;
    }
    exibeRespostaSequenciaFibonacci(numero, fibonacci);
}

function exibeRespostaSequenciaFibonacci(numero, fibonacci) {
    respostaSequenciaFibonacci.textContent = numero + "! = " + fibonacci;
}

function apagaRespostaSequenciaFibonacci() {
    respostaSequenciaFibonacci.textContent = "";
}

let botaoCalcular = document.getElementById("botaoCalcular");
botaoCalcular.onclick = calculaSequenciaFibonacci;