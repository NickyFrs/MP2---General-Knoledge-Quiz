
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
        correct: "a"
    },

    {
        question: "Pregunta B",
        a: "respuesta a",
        b: "respuesta b",
        c: "respuesta c",
        d: "respuesta d",
        correct: "b"
    },

    {
        question: "Pregunta C",
        a: "respuesta a",
        b: "respuesta b",
        c: "respuesta c",
        d: "respuesta d",
        correct: "c"
    },

    {
        question: "Pregunta D",
        a: "respuesta a",
        b: "respuesta b",
        c: "respuesta c",
        d: "respuesta d",
        correct: "d"
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
const quitGame = document.getElementById("go-home");


const questionsTrackerCounter = document.getElementById("question-text");
const scoreTrackerCounter = document.getElementById("score-text");
const maxQuestionsNumber = questionsData.length;
const progressBar = document.getElementById("progress-bar");
const progressBarFull = document.getElementById("progress-bar-full");

console.log(selectedAnswer.length / maxQuestionsNumber * 100);

let nextQuestion = 0
let scorePoints = 10;
let score = 0;

// Call the function to start the quiz
startQuiz();

function startQuiz() {
    clearAnswerSelected(); //call the function to clear answers selected before the next question set

    const questionArray = questionsData[nextQuestion];

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

// Function to loop thru all the options and check if an option has been selected and if so
// then return the ID of the selected option.
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

submitBtn.addEventListener("click", () => {
    const answer = selectedAnswer(); //this constant will call the function to get the selected quiz's option

    // the conditional if statement below checks if any option has been selected
    if (!answer){
        alert('Please choose an option!')
    }

    // the conditional if statement below checks if the id of the selected quiz's option is the correct answer
    if(answer){

        if(answer === questionsData[nextQuestion].correct){
            score++
            scoreTrackerCounter.innerText = score //+= 10-1;
        }

        nextQuestion++
        questionsTrackerCounter.innerText = `${nextQuestion}/${maxQuestionsNumber}`;

        // conditional to evaluate if we are at the end of the quiz's questions
        if (nextQuestion < questionsData.length) {
            startQuiz();
        } else {

            questionsContainer.innerHTML = `
                <div class="result-quiz">
                  <h2>${score} correct questions of ${questionsData.length} </h2>
                </div>
    
                <div class="results-message">
                  <h2>All done!</h2>
                  <p>You finished the quiz.</p>
                  <p>You have answer ${score} questions correct out of ${questionsData.length}</p>
                  <p>Now you can either try again or go back to the start page.</p>
                </div>
    
    
                <div class="result-btns">
                  <button type="button" class="btn btn-primary btn-next-question" id="play-again" onclick="playAgain">
                      <a href="quiz.html">Play again</a>
                  </button>
                  <button type="button" class="btn btn-primary btn-next-question" id="go-home" onclick="goHome">
                      <a href="index.html">Go Home</a>
                  </button>
                </div>
                `

        }

    }

})

quitGame.addEventListener("click", () => {
        alert("You have QUIT de game. Back to the beginning!!")
    });




function apiTestReq() {
    fetch("https://opentdb.com/api.php?amount=10")
        .then(res => {
            return res.json();
        })
        .then(loadedQuestions =>{
            console.log(loadedQuestions.results)
        })

}