var sequencia = [1,8,15,22,29]
//A sequência é de sete em sete

var opcao_correta = 2

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("tu e foda")
        window.location = "../donjuan/index.html"
    } else {
        console.log("ne possivel que tu errou")
        window.location = "../Tela-derrota/index.html"
    }
    }
