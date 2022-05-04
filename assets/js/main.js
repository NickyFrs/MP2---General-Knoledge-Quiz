/* This document was created using the following tutorials on YouTube:

https://www.youtube.com/watch?v=u98ROZjBWy8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx
https://www.youtube.com/watch?v=f4fB9Xg2JEY

I have borrowed code from this tutorial to assist with creating the quiz game.
Please note some of the borrowed code has been customised by me to fit this project.
I have also added my own code for additional functions for the project. */


// Array of question for the quiz.

const questionsData = [
    {
        a: "Kiribati",
        b: "Palau",
        c:"Fiji",
        correct: "d",
        d: "Tonga",
        question: "Which of the following Pacific Islander " +
            "countries is ruled by a constitutional monarchy?"
    },
    {
        a: "24 MPH",
        b: "15 MPH",
        c:"20 MPH",
        correct: "a",
        d: "200 MPH",
        question: "What is the airspeed velocity " +
            "of an unladen swallow?"
    },
    {
        a: "20",
        b: "12",
        c:"19",
        correct: "c",
        d: "15",
        question: "On a dartboard, what number " +
            "is directly opposite No. 1?"
    },
    {
        a: "Daniel Ek",
        b: "Felix Miller",
        c:"Michael Breidenbruecker",
        correct: "a",
        d: "Sean Parker",
        question: "Who is a co-founder of music " +
            "streaming service Spotify?"
    },
    {
        a: "The Simoleon Family",
        b: "The Family",
        c:"The Proud Family",
        correct: "d",
        d: "The Goth Family",
        question: "Which of the following is an " +
            "existing family in The Sims?"
    },
    {
        a: "Taipei 101",
        b: "Niagara Mohawk Building",
        c:"One Detroit Center",
        correct: "b",
        d: "Westendstrasse 1",
        question: "Which of the following buildings " +
            "is example of a structure primarily " +
            "built in the Art Deco architectural style?"
    },
    {
        a: "George Washington",
        b: "Thomas Jefferson",
        c:"Benjamin Franklin",
        correct: "c",
        d: "Abraham Lincoln",
        question: "Who is depicted on the US " +
            "hundred dollar bill?"
    },
    {
        a: "A rope",
        b: "A window",
        c:"A type of food",
        correct: "d",
        d: "A flag",
        question: "What is a Burgee?"
    },
    {
        a: "Aquarius",
        b: "Pisces",
        c:"Capricorn",
        correct: "a",
        d: "Scorpio",
        question: "What is the star sign of " +
            "someone born on Valentines day?"
    },
    {
        a: "San Fransisco, CA",
        b: "Philidelphia, PA",
        c:"St. Louis, MO",
        correct: "c",
        d: "West Point, NY",
        question: "Which of these cities does " +
            "NOT have a United States Minting location?"
    }
];

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

let nextQuestion = 0;
let score = 0;

// Call the function to start the quiz
startQuiz();


function startQuiz() {
    /* Call the function to clear answers
    selected before the next question set */
        clearAnswerSelected();

        const questionArray = questionsData[nextQuestion];

        question.innerText = questionArray.question;
        optionA.innerText = questionArray.a;
        optionB.innerText = questionArray.b;
        optionC.innerText = questionArray.c;
        optionD.innerText = questionArray.d;
    }

    /* Function to clear the selected answer once
     the next quiz's question is presented */
    function clearAnswerSelected() {
        answers.forEach(function  (answer) {
            answer.checked = false;
        });
    }

    /* Function to loop thru all the options and
     check if an option has been selected and if so
     then return the ID of the selected option. */
function selectedAnswer () {
    let selectedOption;

    answers.forEach( function  (answer) {
        if (answer.checked) {
            selectedOption = answer.id;
        }
    });

    return selectedOption;
}

/* Event listening event for the click on
the submit button to check the option selected */

submitBtn.addEventListener("click", function() {
//this constant will call the function
// to get the selected quiz's option
    const answer = selectedAnswer();

    // the conditional if statement below
    // checks if any option has been selected
    if (!answer){
        alert("Please choose an option!");
    }

    /* the conditional if statement below checks
     if the id of the selected quiz's option
     is the correct answer. */
    if(answer){

        if(answer === questionsData[nextQuestion].correct){
            score+=1;
            scoreTrackerCounter.innerText = score;
        }

        nextQuestion+=1;
        questionsTrackerCounter.innerText = `${nextQuestion}/${maxQuestionsNumber}`;

        /* conditional to evaluate if we are
         at the end of the quiz's questions
         if we are it give the final number of
         correct questions. */
        if (nextQuestion < questionsData.length) {
            startQuiz();
        } else {

            questionsContainer.innerHTML = `
                <div class="result-page">
                    <div class="result-quiz">
                      <h2>${score} correct questions out of ${questionsData.length} </h2>
                    </div>
                    <div class="results-message">
                      <h2>All done!</h2>
                      <p>You finished the quiz.</p>
                      <p>You have answer ${score} questions correct out of ${questionsData.length}</p>
                      <p>Now you can either try again or go back to the start page.</p>
                    </div>
                    <div class="result-btns">
                      <button type="button" class="btn btn-primary btn-next-question" id="play-again" onclick="playAgain">
                          <a href="quiz.html">Try again</a>
                      </button>
                      <button type="button" class="btn btn-success btn-next-question" id="go-home" onclick="goHome">
                          <a href="index.html">Go Home</a>
                      </button>
                    </div>
                </div>
                `;
        }
    }
});

//event listener for the go home button
quitGame.addEventListener("click", function() {
        alert("You have QUIT de game. Back to the beginning!!");
    });