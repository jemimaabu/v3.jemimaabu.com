window.onload = function () {
  setInterval(loadIntro, 2000);
  createBalloons(50);
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

function messageCount() {
  var msg = document.getElementById("message").value;
  var msgCount = document.getElementById("message-count")
  var msgLength = msg.length;
  const maxLength = 1000;
  var charLeft = maxLength - msgLength;
  msgCount.innerText = charLeft;
}

function random(num) {
  return Math.floor(Math.random()*num)
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5)+5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r-10},${g-10},${b-10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `
}

function createBalloons(num) {
  var balloonContainer = document.getElementById("balloon-container")
  for (var i = num; i > 0; i--) {
  var balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.cssText = getRandomStyles();           balloonContainer.append(balloon);
  }
}
