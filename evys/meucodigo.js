var sequencia = [1,3,5,7,11]
//a SEQUENCIA FUNCIONA A BASE DE NUMEROS PRIMOS

var opcao_correta = 3

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
        window.location = "/vicwirz/index.html"
    } else {
        console.log("ERROU")
        window.location = "/Tela-derrota/index.html"
    }
}