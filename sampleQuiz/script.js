const questions = [
{
    question: "Which planet is known as the Red Planet?",
    answers: [
        { text: "Earth", correct: false },
        { text: "Mars", correct: true },
        { text: "Jupiter", correct: false },
        { text: "Venus", correct: false }
    ]
},
{
    question: "What is the capital of France?",
    answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false }
    ]
},
{
    question: "Which is the fastest land animal?",
    answers: [
        { text: "Cheetah", correct: true },
        { text: "Lion", correct: false },
        { text: "Horse", correct: false },
        { text: "Tiger", correct: false }
    ]
},
{
    question: "Who invented the light bulb?",
    answers: [
        { text: "Nikola Tesla", correct: false },
        { text: "Alexander Graham Bell", correct: false },
        { text: "Thomas Edison", correct: true },
        { text: "Albert Einstein", correct: false }
    ]
},
{
    question: "Which is the smallest continent in the world?",
    answers: [
        { text: "Australia", correct: true },
        { text: "Europe", correct: false },
        { text: "Antarctica", correct: false },
        { text: "South America", correct: false }
    ]
},
{
    question: "How many colors are there in a rainbow?",
    answers: [
        { text: "5", correct: false },
        { text: "6", correct: false },
        { text: "7", correct: true },
        { text: "8", correct: false }
    ]
}
];

const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=> {
    if (currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz();
    }
})

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }

}

startQuiz();