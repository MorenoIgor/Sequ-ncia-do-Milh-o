var sequencia = [15.999,14.007,18.998,20.179]
//A sequência é de ordem de massas atomicas na tabela periódica 

var opcao_correta = 1

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
        window.location = "/braian/index.html"
    } else {
        console.log("ERROU")
        window.location = "/Tela-derrota/index.html"
    }
}