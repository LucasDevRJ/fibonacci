function calculaSequenciaFibonacci() {
    let campoNumero = document.getElementById("numero");
    let numero = campoNumero.value;
    
    for (let i = numero - 1; i >= 1; i--) {
        numero = numero * i;
    }
}

let botao = document.getElementById("botao");
botao.onclick = calculaSequenciaFibonacci;