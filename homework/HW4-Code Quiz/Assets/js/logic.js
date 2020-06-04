// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 6;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects
var sfxRight = new Audio("assets/sfx/correct1.mp3");
var sfxWrong = new Audio("assets/sfx/incorrect.mp3");
var sfxWelcome = new Audio("assets/sfx/welcome.wav");
var sfxStart = new Audio("assets/sfx/startGame.mp3");
var sfxComplete = new Audio("assets/sfx/gameOver.wav");
var sfxTimeOut = new Audio("assets/sfx/gameOver1.wav");
var sfxSubmit = new Audio("assets/sfx/thankYou.mp3");
var sfxHighscores = new Audio("assets/sfx/highScores.wav");

// play "welcome" or "highscores" sound effect depending on html page
window.onload = function() {
  if (window.location.href.indexOf('highscores.html') > -1) {
    sfxHighscores.play();
  } else {
    sfxWelcome.play();
  }
}

function startQuiz() {
  // hide welcome screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.classList.remove("hide");

  // play "start" sound effect
  sfxStart.play();

  // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // clear out any old question choices
  choicesEl.innerHTML = "";

  // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.classList.add("choicesSpace");

    choiceNode.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceNode.onclick = questionClick;

    // display on the page
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  // check if user guessed wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    // penalize time
    time -= 5;

    if (time < 0) {
      time = 0;
    }

    // display new time on page
    timerEl.textContent = time;

    // play "wrong" sound effect
    sfxWrong.play();

    feedbackEl.textContent = "Incorrect!";
  } else {
    // play "right" sound effect
    sfxRight.play();

    feedbackEl.textContent = "Correct!";
    
    // move to next question
    currentQuestionIndex++;
  }

  // flash right/wrong feedback on page for half a second
  feedbackEl.classList.remove("hide");
  setTimeout(function() {
    feedbackEl.classList.add("hide");
  }, 1000);

  

  // check if we've run out of questions
  if (currentQuestionIndex === questions.length) {
    quizEnd();
    // play "complete" sound effect
    sfxComplete.play();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  // stop timer
  clearInterval(timerId);

  // show end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.classList.remove("hide");

  // show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // hide questions section
  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
    // play "time out" sound effect
    sfxTimeOut.play();
  }
}

function saveHighscore() {
  // get value of input box
  var initials = initialsEl.value.trim();
  // make uppercase
  initials = initials.toUpperCase();

  // make sure value wasn't empty
  if (initials !== "") {
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to next page
    window.location.href = "highscores.html";
  } else { var endScreenEl = document.getElementById("end-screen");
      var pTag = document.createElement("p");
      var brTag = document.createElement("br");
      pTag.textContent = "Please enter your initials to submit score";
      endScreenEl.appendChild(brTag);
      endScreenEl.appendChild(pTag);
  }
  
}

function checkForEnter(event) {
  // "13" represents the enter key
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
