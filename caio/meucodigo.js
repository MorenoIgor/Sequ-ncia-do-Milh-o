var sequencia = [1,1,2,3,5,8,13,21,34,55,79,134]
//A sequência será em Fibonacci

var opcao_correta = 11

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
        window.location = "/fatrick/index.html"
    } else {
        console.log("ERROU")
        window.location = "/Tela-derrota/index.html"
    }
}