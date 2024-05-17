var sequencia = [1,2,3,4]
//A sequência são nomes que a quarta letra tenha acento agudo 

var opcao_correta = 3

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
        window.location = "./malu/index.html"
    } else {
        console.log("ERROU")
        window.location = "./Tela-derrota/index.html"
    }
}