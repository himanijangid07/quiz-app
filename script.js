const questions = [
    {
        question: "What is the tallest animal in the world?",
        answers: [
            {text: "Elephant", correct: "false"},
            {text: "Giraffe", correct: "true"},
            {text: "Kangaroo", correct: "false"},
            {text: "Rhino", correct: "false"}
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Mars", correct: "true"},
            {text: "Venus", correct: "false"},
            {text: "Saturn", correct: "false"},
            {text: "Jupiter", correct: "false"},
        ]
    },
    {
        question: "Which fruit is known for having seeds on the outside?",
        answers: [
            {text: "Apple", correct: "false"},
            {text: "Orange", correct: "false"},
            {text: "Strawberry", correct: "true"},
            {text: "Banana", correct: "false"}
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            {text: "Gold", correct: "false"},
            {text: "Diamond", correct: "true"},
            {text: "Iron", correct: "false"},
            {text: "Quartz", correct: "false"}
        ]
    },
    {
        question: "In the world of Harry Potter, what is the name of Harry's pet owl?",
        answers: [
            {text: "Crookshanks", correct: "false"},
            {text: "Scabbers", correct: "false"},
            {text: "Errol", correct: "false"},
            {text: "Hedwig", correct: "true"}
        ]
    }
]

// const questionElement = document.getElementById("question");
// const answerButton = document.getElementById("answer-buttons");
// const nextBtn = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     nextBtn.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion() {
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + " " + currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButton.appendChild(button);
//         if(answer.correct) {
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//     })
// }

// function resetState() {
//     nextBtn.style.display = "none";
//     while(answerButton.firstChild) {
//         answerButton.removeChild(answerButton.firstChild);
//     }
// }

// function selectAnswer(e) {
//     const selectedButton = e.target;
//     const isCorrect = selectedButton.dataset.correct === "true";
//     if (isCorrect) {
//         selectedButton.classList.add("correct");
//         score++;
//     } else {
//         selectedButton.classList.add("incorrect");
//     }
//     Array.from(answerButton.children).forEach(button => {
//         if (button.dataset.correct === "true") {
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextBtn.style.display = "block";
// }


// function handleNextBtn() {
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length) {
//         showQuestion();
//     }
//     else {
//         showScore();
//     }
// }

// function showScore() {
//     resetState();
//     questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
//     nextBtn.innerHTML = "Play Again";
//     nextBtn.style.display = "block";
// }

// nextBtn.addEventListener("click", () => {
//     if(currentQuestionIndex < questions.length) {
//         handleNextBtn();
//     }
//     else {
//         startQuiz();
//     }
// })

// startQuiz();

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct === "true") {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct-ans");
        score++;
    } else {
        selectedButton.classList.add("incorrect-ans");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct-ans");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function handleNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
});

startQuiz();