var audio = new Audio("Rick Astley - Never Gonna Give You Up.mp3" ) ;
var story = document.getElementById("story");
var first = document.getElementById("first");
var second = document.getElementById("second");
var win = document.getElementById("win");
var easter = document.getElementById("easter")
var demon;
demon = document.getElementById("demon")
 var name;


function go() {
  name = prompt("What is you name.");
  story.innerHTML = "Okay, " + name + " What do you want to do";
  first.innerHTML = "Get some food";
  first.onclick = function() {food();}

  second.innerHTML = "Quest";
  second.onclick = function() {quest();}

  win.classList.remove("hidden");
}

function no() {
  alert("Game Over");
}

function home() {
  
  win.classList.add("hidden");
  easter.classList.remove("hidden");
  story.innerHTML = "How slick do you think you are";
  audio.play();
}

function easter() {
  prompt("How slick") 
}

function food() {
  win.classList.add("hidden");
  story.innerHTML = "";

}

function quest() {
  win.classList.add("hidden");
  story.innerHTML = "";
}