function showGif() {
    const gifContainer = document.getElementById("gifContainer");
    const gif = document.createElement('img');
    gif.src = "Faça_Isso.gif";
    gif.alt = "Faça Isso";
    gif.width = 200;
    gifContainer.innerHTML = "";
    gifContainer.appendChild(gif);

    
    setTimeout(() => {
        gifContainer.innerHTML = "";
    }, 2000);
}

const questions = [
    {
        question: "Qual é o próximo número na sequência: 6, 12, 18, ___?", //Somando +6
        options: [24, 26, 28, 22],
        correctAnswer: 24
    },
    {
        question: "Qual é o Próximo Nome? : Samuel, André, Nicolas, Samanta, ____", //Primeira Letra Do Nome
        options: ["Sans", "Carl", "Levi", "Eric"],
        correctAnswer: "Sans"
    },
    {
        question: "Qual é o próximo número na sequência: 5, 5, 25, 125, ___?", //Multiplicando Com o Anterior
        options: [3.125, 3.225, 3.075, 3.025],
        correctAnswer: 3.125
    }
];

let currentQuestion = 0;
let shuffledOptions = [];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    questionElement.textContent = questions[currentQuestion].question;

    shuffledOptions = shuffle(questions[currentQuestion].options);

    optionsElement.innerHTML = "";
    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
        nextQuestion();
    } else {
        gameOver();
    }
}

function gameOver() {
    document.getElementById("gameOver").style.display = "flex"; 
    document.querySelector(".container").style.display = "none"; 
    

    setTimeout(restartGame, 3500);
}

function restartGame() {
    document.getElementById("gameOver").style.display = "none"; 
    document.querySelector(".container").style.display = "block"; 
    currentQuestion = 0;
    displayQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        document.getElementById("endQuiz").style.display = "flex"; 
        document.getElementById("nextQuestionBtn").style.display = "none"; 
    }
}

function goToNextPage() {
    // Código Para ir Para a Próxima Página Caso Necessário 
    window.location = "../wheytor/index.html"
}

displayQuestion();
