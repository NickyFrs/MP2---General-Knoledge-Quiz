
// // JQuery code
// $(document).ready(function(){/*Code goes here*/});

// Array of question for the quiz. Te quiz data = Q&A

const questionsData = [
    {
        question: "Pregunta A",
        a: "respuesta a",
        b: "respuesta b",
        c:" respuesta c",
        d: "respuesta d",
        correct: "respuesta correcta"
    },

    {
        question: "Pregunta B",
        a: "respuesta a",
        b: "respuesta b",
        c: "respuesta c",
        d: "respuesta d",
        correct: "respuesta correcta"
    },

    {
        question: "Pregunta C",
        a: "respuesta a",
        b: "respuesta b",
        c: "respuesta c",
        d: "respuesta d",
        correct: "respuesta correcta"
    },

    {
        question: "Pregunta D",
        a: "respuesta a",
        b: "respuesta b",
        c: "respuesta c",
        d: "respuesta d",
        correct: "respuesta correcta"
    }
]

// All constant variables to manipulate the DOM

const questionsContainer = document.getElementById("questions-container");
const answers = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const optionA = document.getElementById("option-a");
const optionB = document.getElementById("option-b");
const optionC = document.getElementById("option-c");
const optionD = document.getElementById("option-d");
const submitBtn = document.getElementById("submit");

const progressBarFull = document.getElementById("progress-bar-full");

let activeQuiz = 0;
let nextQuestion = 0
let score = 0;


function startQuiz() {
    clearAnswerSelected();

    const questionArray = questionsData[activeQuiz];

    question.innerText = questionArray.question;
    optionA.innerText = questionArray.a;
    optionB.innerText = questionArray.b;
    optionC.innerText = questionArray.c;
    optionD.innerText = questionArray.d;
}

// Function to clear the selected answer once the next quiz's question is presented
function clearAnswerSelected() {
    answers.forEach(answer => answer.checked = false)
};

// Function to
function selectedAnswer () {
    let selectedOption;

    answers.forEach(answer => {
        if (answer.checked) {
            selectedOption = answer.id
        }
    })

    return selectedOption;
}

// Event listening event for the click on the submit button to check the option selected

submitBtn.addEventListener('click', () => {
    const answer = selectedAnswer(); //this constant will call the funtion to get the selected quiz' option

    // the conditional if statement below checks id the selected quiz's option is the correct answer
    if(answer){
        if(answer === questionsData[activeQuiz].correct){
            score++
        }

        nextQuestion++
        // evaluate if we are at the end of the quiz's questions
        if (nextQuestion < questionsData.length) {
            startQuiz();
        } else {
            questionsContainer.innerHTML = `<h2>done ___ correct</h2>`

        }
    }
})
