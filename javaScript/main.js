function calculaSequenciaFibonacci() {
    let campoNumero = document.getElementById("numero");
    let numero = campoNumero.value;
    
    let fibonacci = numero;
    for (let i = numero - 1; i >= 1; i--) {
        fibonacci = fibonacci * i;
    }
    exibeRespostaSequenciaFibonacci(numero, fibonacci);
}

function exibeRespostaSequenciaFibonacci(numero, fibonacci) {
    let respostaSequenciaFibonacci = document.getElementById("resposta");

    respostaSequenciaFibonacci.textContent = numero + "! = " + fibonacci;
}

let botao = document.getElementById("botaoCalcular");
botao.onclick = calculaSequenciaFibonacci;