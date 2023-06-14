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
    let secao = document.querySelector("section");

    let p = document.createElement("p");
    let resposta = document.createTextNode(numero + "! = " + fibonacci);
    
    p.appendChild(resposta);
    secao.appendChild(p);
}

let botao = document.getElementById("botao");
botao.onclick = calculaSequenciaFibonacci;