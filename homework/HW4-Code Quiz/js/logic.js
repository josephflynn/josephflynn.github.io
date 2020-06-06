// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 6;
var timerId;
var date;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var speaker = document.getElementById("speaker");
var muted = document.getElementById("muted");
var soundCheckbox = document.getElementById("sound")
var speakerMemory = localStorage.getItem("speakerMute")

// sound effects variables to reference files
sfxRight = new Audio("sfx/correct01.m4a");
sfxWrong = new Audio("sfx/incorrect1.m4a");
sfxWelcome = new Audio("sfx/welcome01.m4a");
sfxStart = new Audio("sfx/startGame1.m4a");
sfxComplete = new Audio("sfx/gameOver0.m4a");
sfxTimeOut = new Audio("sfx/gameOver01.m4a");
sfxSubmit = new Audio("sfx/thankYou1.m4a");
sfxHighscores = new Audio("sfx/highScores1.m4a");

// Access to audio files depend on speaker image checkbox status
function quizSounds(audio) {
  if (soundCheckbox.checked) {
    return;
  } else {
    if (audio == "correct") {
      sfxRight.play();
    } else if (audio == "incorrect") {
      sfxWrong.play();
    } else if (audio == "welcome") {
      sfxWelcome.play();
    } else if (audio == "start") {
      sfxStart.play();
    } else if (audio == "complete") {
      sfxComplete.play();
    } else if (audio == "timout") {
      sfxTimeOut.play();
    } else if (audio == "submit") {
      sfxSubmit.play();
    } else if (audio == "highscores") {
      sfxHighscores.play();
    }
  }
}

// Update speakerMuter after speaker checked
function speakerMuter() {
  if (soundCheckbox.checked) {
      // sound off
      var audioChoice = speaker.setAttribute("src", "./imgs/sound.png");
      soundCheckbox.checked = false;

      // save to localstorage
      window.localStorage.setItem("speakerMute", (audioChoice));
  } else {
      // sound on
      speaker.setAttribute("src", "./imgs/muted.png");
      soundCheckbox.checked = true;

      // // save to localstorage
      window.localStorage.setItem("speaker", (audioChoice));
  }
}

speaker.addEventListener("click", speakerMuter, false);

// play "welcome" or "highscores" sound effect depending on html page
window.onload = function() {
  if (window.location.href.indexOf('highscores.html') > -1) {
    quizSounds("highscores");
  } else {
    quizSounds("welcome");
  }
}

function startQuiz() {
  // hide welcome screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.classList.remove("hide");

  // play "start" sound effect
  quizSounds("start");
  // sfxStart.play();

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

    choiceNode.textContent = choice;

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

    // play "incorrect" sound effect
    quizSounds("incorrect");
    // sfxWrong.play();

    feedbackEl.textContent = "Incorrect!";
  } else {
    // play "correct" sound effect
    quizSounds("correct");
    // sfxRight.play();

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
    quizSounds("complete");
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
    // play "timeout" sound effect
    quizSounds("timout");
    // sfxTimeOut.play();
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
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    // Give score a date reference
    var date = new Date();

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials,
      date: date
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to next page
    window.location.href = "highscores.html";
  } else { 
    // play "submit" sound effect
    quizSounds("submit");
    // sfxSubmit.play();
    // Append message to user to enter their initials
    var endScreenEl = document.getElementById("end-screen");
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
