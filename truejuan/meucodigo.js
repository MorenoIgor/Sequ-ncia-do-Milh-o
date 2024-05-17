var sequencia = [1,2,3,4]
//A sequência é de dois em dois
var opcao_correta = 3

var btnc = document.querySelector("#botao3")
btnc.addEventListener("click", verificarResposta)
var trocar = false
var butao = document.querySelector("#botao")

function verificarResposta(valor) {

    if (sequencia[opcao_correta]==valor) {
        trocar = true
        console.log("ACERTOU")
        window.location = "../wheytor/index.html"
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

