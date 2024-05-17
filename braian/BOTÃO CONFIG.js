var sequencia = [0,1,2,3]
//A sequência é sobre os dias seguintes

var opcao_correta = 2

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU, BOA MLK 👌")
        window.location = "./evys/index.html"
    } else {
        console.log("ERROU MANÉ KKKKKK")
        window.location = "./Tela-derrota/index.html"
    }
}

// configurações de botão: Ao clicar no botão certo, Vai aparecer no console o resultado da partida