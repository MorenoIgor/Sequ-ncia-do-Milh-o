var sequencia = [2,4,6,8,10]
//A sequência é de dois em dois

var opcao_correta = 2

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
        window.location ="../almeidalucas/index.html"
    } else {
        console.log("ERROU")
        window.location = "../Tela-derrota/index.html"
    }
}