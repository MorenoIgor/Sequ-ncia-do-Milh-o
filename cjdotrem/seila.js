var sequencia = [1,4,16,64,256]
//A sequência é pegar o numero anterior e multiplicar por 4

var opcao_correta = 4

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
        window.location = "./gb/index.html"
    } else {
        console.log("ERROU")
        window.location = "./Tela-derrota/index.html"
    }
}