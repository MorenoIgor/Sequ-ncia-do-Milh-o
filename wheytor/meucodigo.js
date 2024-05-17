var sequencia = [2,8,14,20,26]
// Começando pela adaga, você pula de 6 em 6 pela lista de armas do livro de mestre 5e(versão em inglês) em ordem.

var opcao_correta = 4

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
        window.location = "./lucascachorro/index.html"
    } else {
        console.log("ERROU")
        window.location = "./Tela-derrota/index.html"
    }
}