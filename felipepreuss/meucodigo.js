var sequencia = [4,20,39,83,131,222]
//Massa atômica dos gases nobres

var opcao_correta = 2

function verificarResposta(valor) {
    if (sequencia[opcao_correta]==valor) {
        console.log("ACERTOU")
        window.location = "walti/index.html"
    } else {
        console.log("ERROU")
        window.location = "Tela-derrota/index.html"
    }
}
function applySkew() {
    var heading = document.getElementById("myHeading"); // Get the heading element
    heading.style.transform = "rotate(2deg)"; // Apply the skew transformation
}