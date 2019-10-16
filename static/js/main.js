window.onload = function () {
  setInterval(loadIntro, 2000)
}

var intros = ["front end developer", "feminist", "conference speaker", "content creator", "yogi", "huge nerd"]
var index = 0;
var intro = document.getElementById("intro-loader")

function loadIntro() {
  intro.innerHTML = intros[index];
  intro.classList.add("fade");
  index++;
  if (index >= intros.length) {
    index = 0;
  }
}