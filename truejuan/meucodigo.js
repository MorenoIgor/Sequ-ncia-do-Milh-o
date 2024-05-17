var sequencia = [1,2,3,4]
//A sequência é de dois em dois
var opcao_correta = 2

var trocar = false
var butao = document.querySelector("#botao")

function verificarResposta(valor) {

    console.log(valor)

    if (sequencia[opcao_correta]==valor) {
        trocar = true
        console.log("ACERTOU")
        window.location = "../leo/index.html"
    }
    else {
        console.log("ERROU")
        window.location = "../Tela-derrota/index.html"
    }

    if (trocar == true) {
        butao.style.backgroundColor = "green"
    }
    else {
        butao.style.backgroundColor = "red"
    }
 
}

