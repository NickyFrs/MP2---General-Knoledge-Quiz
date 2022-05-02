
// // JQuery code
// $(document).ready(function(){/*Code goes here*/});

// Array of question for the quiz. Te quiz data = Q&A

const questionsData = [
    {
        question: "Which of the following Pacific Islander countries is ruled by a constitutional monarchy?",
        a: "Kiribati",
        b: "Palau",
        c:"Fiji",
        d: "Tonga",
        correct: "d"
    },
    {
        "question": "What is the airspeed velocity of an unladen swallow?",
        a: "24 MPH",
        b: "15 MPH",
        c:"20 MPH",
        d: "200 MPH",
        correct: "a"
    },
    {
        question: "On a dartboard, what number is directly opposite No. 1?",
        a: "20",
        b: "12",
        c:"19",
        d: "15",
        correct: "c"
    },
    {
        question: "Who is a co-founder of music streaming service Spotify?",
        a: "Daniel Ek",
        b: "Felix Miller",
        c:"Michael Breidenbruecker",
        d: "Sean Parker",
        correct: "a"
    },
    {
        question: "Which of the following is an existing family in The Sims?",
        a: "The Simoleon Family",
        b: "The Family",
        c:"The Proud Family",
        d: "The Goth Family",
        correct: "d"
    },
    {
        question: "Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?",
        a: "Taipei 101",
        b: "Niagara Mohawk Building",
        c:"One Detroit Center",
        d: "Westendstrasse 1",
        correct: "b"
    },
    {
        question: "Who is depicted on the US hundred dollar bill?",
        a: "George Washington",
        b: "Thomas Jefferson",
        c:"Benjamin Franklin",
        d: "Abraham Lincoln",
        correct: "c"
    },
    {
        question: "What is a Burgee?",
        a: "A rope",
        b: "A window",
        c:"A type of food",
        d: "A flag",
        correct: "d"
    },
    {
        question: "What is the star sign of someone born on Valentines day?",
        a: "Aquarius",
        b: "Pisces",
        c:"Capricorn",
        d: "Scorpio",
        correct: "a"
    },
    {
        question: "Which of these cities does NOT have a United States Minting location?",
        a: "San Fransisco, CA",
        b: "Philidelphia, PA",
        c:"St. Louis, MO",
        d: "West Point, NY",
        correct: "c"
    },
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
}

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

//Functionm to fetch data from an API

// function apiTestReq() {
//     fetch("https://opentdb.com/api.php?amount=10")
//         .then(res => {
//             return res.json();
//         })
//         .then(loadedQuestions =>{
//             console.log(loadedQuestions.results)
//         })

}