const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "London"],
        correct: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correct: 1
    },
    {
        question: "What is the largest mammal on Earth?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => checkAnswer(index));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].correct) {
        score++;
        scoreElement.textContent = score;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
}

loadQuestion();

