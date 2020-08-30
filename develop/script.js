//variables for question & answer
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var randomQuestions, currentQuestionIndex;
var score = 0;



//variables for scorekeeper function & question counter
var resultForm = document.getElementById("form-result");
var countCorrectAnswers = 0; // change to index
var currentQuestion = 1; 

//event listeners, functions

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  getNextQuestion()

  currentQuestion++;
  document.getElementById("current-question").innerHTML = currentQuestion;
})

function startGame() {
  startButton.classList.add("hide");
/*   resultForm.classList.add("hide"); */
  

  randomQuestions = questions.sort(() => Math.random())
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  getNextQuestion();


//this function should reset the counter after we hit the restart button or the test starts but I cannot seem to get it to stop counting eg; 5 of 4 instead of reset
  /* document.getElementById("current-question").innerHTML = currentQuestion;
  countCorrectAnswers = 0; */
 /* if countCorrectAnswers === 4 //// create function to stop game */

  document.getElementById("all-questions2").innerHTML = questions.length;
  document.getElementById("all-questions").innerHTML = questions.length;


}

function getNextQuestion() {
  resetState()
  showQuestion(randomQuestions[currentQuestionIndex])
}

/* if (currentQuestionIndex === questions.length) {
    end(); 
} else { getNextQuestion();
} */
// show question function creates an button and evaluates user answer and appends child button

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

//very important function. this populates the button classes for the current question with answer options which I initially struggled with

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add("hide")
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

// selecting an answer from the array, shuffling questions, and generating a button to restart game
// i did get this code from a youtube video, but analyzed and rewrote the code myself to understand the methods setStatusClass, etx


function selectAnswer(e) {
  var selectedButton = e.target
  var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (randomQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}


/// function to get user inout for name and score then with that save it to local storage

// questions for user to answer 


var questions = [
  {
    question: "which is not a coding language?",
    answers: [
      { text: "bootstrap", correct: true },
      { text: "css", correct: false },
      { text: "html", correct: false },
      { text: "javascript", correct: false }
    ]
  },
  {
    question: "where is the correct place to insert your JavaScript?",
    answers: [
      { text: "<head> or <body>", correct: true },
      { text: "only <body>", correct: false },
      { text: "only <header>", correct: false },
      { text: "on a separate file", correct: false }
    ]
  },
  {
    question: "How does a FOR loop start?",
    answers: [
      { text: "for (i <= 5; i++)", correct: false },
      { text: "for (i = 0; i <= 5; i++)", correct: true },
      { text: "for i = 1 to 5", correct: false },
      { text: "for (i = 0; i <= 5)", correct: false }
    ]
  },
  {
    question: "How do you add a comment in a JavaScript?",
    answers: [
      { text: "~~", correct: false },
      { text: "//", correct: true },
      { text: "...", correct: false },
      { text: ">>>", correct: false }
    ]
  }
]

/// testing local storagge. I could not originally get this to work, which is why it's all the way down here. 

function storeScore () {
  if (currentQuestionIndex.length === 0)
  {localStorage.setItem("quizScore", score);
return window;}
}

function countDown () {
  var seconds = 60;
  var mins = minutes;
  function beginCount() {
    var counter = document.getElementById("countbtn");
    var currentMinutes= mins -1
    seconds --; 
    counter.innerHTML = currentMinutes.toStrong() + ":" + String(seconds);
    if (seconds > 0) {
      setTimeout(countDown, 1000);
    } else {
      if(mins>1) {
        countDown(mins-1);
        return window.location.assign("countbtn");
      }
    }
  }
  tick ();
}