var sequencia = [2,5,8,11,14]
//A sequência é de tres em tres

var opcao_correta = 4

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
        window.location = "../helana/index.html"
    } else {
        console.log("ERROU")
        window.location = "../Tela-derrota/index.html"
    }
}