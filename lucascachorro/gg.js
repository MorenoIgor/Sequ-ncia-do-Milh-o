var sequencia = [7,14,21,28,35]
//A sequência é de 7 em 7

var opcao_correta = 2

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
        window.location = "./caio/index.html"
    } else {
        console.log("ERROU")
        window.location = "./Tela-derrota/index.html"
    }
}