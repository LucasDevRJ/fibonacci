function calculaSequenciaFibonacci() {
    let campoNumero = document.getElementById("numero");
    let numero = campoNumero.value;
    
    for (let i = numero - 1; i >= 1; i--) {
        numero = numero * i;
    }
    exibeRespostaSequenciaFibonacci(numero);
}

function exibeRespostaSequenciaFibonacci(numero) {
    let secao = document.querySelector("section");

    let p = document.createElement("p");
    let fibonacci = document.createTextNode(numero);
    p.appendChild(fibonacci);

    secao.appendChild(p);
}

let botao = document.getElementById("botao");
botao.onclick = calculaSequenciaFibonacci;