var sequencia = [216,343,512,729]
//A sequência é sobre numeros ao cubo

var opcao_correta = 3

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
        window.location = "../felipepreuss/index.html"
    } else {
        console.log("ERROU")
        window.location = "../Tela-derrota/index.html"
    }
}