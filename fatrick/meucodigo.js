var sequencia = [9,22,37,27]
//todos os numeros sao elevados ao cubo, 1 elevado ao cubo, 2 elevado ao cubo, 3 elevado ao cubo que da 27.

var opcao_correta = 3

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
        window.location = "../mariaclara/index.html"
    } else {
        console.log("ERROU")
        window.location = "../Tela-derrota/index.html"
    }
}