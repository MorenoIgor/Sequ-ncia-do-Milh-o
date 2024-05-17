var sequencia = [10,11,12,13,14,15]
//letras
//não preciso de mais explicação
//tá ok a vitória tá enchendo o saco ent dxa eu explicar
//qual a décima letra do alfabeto?
//é j, yan patrick
//jamv começa com j
//décima primeira letra, k
//ken da barbie
//lebron james
//manoel gomes
//lontra é otter em inglês
//
//mt foda nossa walter queria pensar como vc
//-vitória

var opcao_correta = 2

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
        window.location = "Aviso/index.html"
    } else {
        console.log("ERROU")
        window.location = "Tela-derrota/index.html"
    }
}
