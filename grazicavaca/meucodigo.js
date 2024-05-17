var sequencia = [16,25,4,350]
//A sequência é decrescente de potencias elevadaa a 2 começando por 10

var opcao_correta = 1

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
         window.location = "./cjdotrem/index.html"
    } else {
        console.log("ERROU")
        window.location = "./Tela-derrota/index.html"
    }
}