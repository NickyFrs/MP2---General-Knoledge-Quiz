
// All constant variables to manipulate the DOM

const questionsContainer = document.getElementById("questions-container");
const answers = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const optionA = document.getElementById("option-a");
const optionB = document.getElementById("option-b");
const optionC = document.getElementById("option-c");
const optionD = document.getElementById("option-d");
const submitBtn = document.getElementById("submit");
const questionsData = [];
const questionsTrackerCounter = document.getElementById("question-text");
const scoreTrackerCounter = document.getElementById("score-text");
const maxQuestionsNumber = questionsData.length;
const progressBar = document.getElementById("progress-bar");
const progressBarFull = document.getElementById("progress-bar-full");



// questionsContainer.innerHTML = `
// <!--<h2>done ___${score} of ${questionsData.length} correct</h2>-->
// <button class="btn btn-primary btn-next-question" onclick="location.reload()">Play again</button>
// <button class="btn btn-primary btn-next-question" onclick="\">Go Home</button>
// `

