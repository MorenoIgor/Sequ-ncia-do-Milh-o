var sequencia = [250,500,750,1000]
//A sequência vai somando 250

var opcao_correta = 2

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
        window.location = "/yanfatrick/index.html"
    } else {
        console.log("ERROU")
        window.location = "/Tela-derrota/index.html"
    }
}