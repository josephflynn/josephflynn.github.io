function printHighscores() {
  // either get scores from localstorage or set to empty array
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  // sort highscores by score property in descending order
  highscores.sort(function(a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function(score) {
    // create h2 tag for each high score
    var liTag = document.createElement("li");
    var brTag = document.createElement("br");
    liTag.textContent = score.initials + " .. recorded a score of .. " + score.score + " .. at .. " + score.date;

    // display on page
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liTag);
    olEl.appendChild(brTag);
  });
}

function clearHighscores() {
  // remove scores
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.getElementById("clear").addEventListener("click", clearHighscores, true);
// document.getElementById("clear").onclick = clearHighscores;

// run function when page loads
printHighscores();
