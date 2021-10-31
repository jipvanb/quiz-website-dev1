"use strict";

//studentnumber for login
let studentnumber;

//highscore table
const name1 = document.getElementById("naam1");
const name2 = document.getElementById("naam2");
const name3 = document.getElementById("naam3");
const name4 = document.getElementById("naam4");
const name5 = document.getElementById("naam5");
const name6 = document.getElementById("naam6");
const name7 = document.getElementById("naam7");
const name8 = document.getElementById("naam8");
const name9 = document.getElementById("naam9");
const name10 = document.getElementById("naam10");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const score3 = document.getElementById("score3");
const score4 = document.getElementById("score4");
const score5 = document.getElementById("score5");
const score6 = document.getElementById("score6");
const score7 = document.getElementById("score7");
const score8 = document.getElementById("score8");
const score9 = document.getElementById("score9");
const score10 = document.getElementById("score10");
const time1 = document.getElementById("time1");
const time2 = document.getElementById("time2");
const time3 = document.getElementById("time3");
const time4 = document.getElementById("time4");
const time5 = document.getElementById("time5");
const time6 = document.getElementById("time6");
const time7 = document.getElementById("time7");
const time8 = document.getElementById("time8");
const time9 = document.getElementById("time9");
const time10 = document.getElementById("time10");

//score submission popups at endpage
const scoreSucc = document.getElementById("scoreSucc");
const scoreFout = document.getElementById("scoreFout");
const error = document.getElementById("error");
const error2 = document.getElementById("error2");

//all buttons
//twitter
const twitterButton = document.getElementById("twitter");
//start
const startButton = document.getElementById("button-start");
const questionsButton = document.getElementById("button-questions");
const loginButton = document.getElementById("submit");

//all pages
const startPage = document.getElementById("page-start");
const endPage = document.getElementById("page-end");
const loginPage = document.getElementById("page-login");
const questionsPage = document.getElementById("page-questions");

//question
const vraag = document.getElementById("vraag");
const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");
const ans4 = document.getElementById("ans4");
const next = document.getElementById("button-next");
const vraagtitel = document.getElementById("vraagtitel");
var currectQuestion = 0;

//extra counters
const naam = document.getElementById("naam-display");
const counter = document.getElementById("live-score");
let counterDisplayElem = document.getElementById("counter-display");
let count = 0;
const timerDisplay = document.getElementById("timer-display");
let timer = 0;
let timerStarted = false;

//vragen array
const vragen = [
  ["Brons is een samenstelling van welke twee metalen?", "ijzer & nickel", "koper & tin", "titanium & koper", "tin & zink", 2],
  ["Wat is in Celsius de koudst mogelijke temperatuur die mogelijk is ook wel het absolute nulpunt genoemd?", "0 °C", "−265 °C", "−273 °C", "−284 °C", 3],
  ["Waarvoor staat de computerterm 'CPU'?", "Central Processing Unit", "Computer Processing Unit", "Computing Unit", "Central Power Unit", 1],
  ["Wat is het scheikundige symbool voor zilver?", "Ag", "Au", "Zi", "Hg", 1],
  ["Ofidiofobie is de extreme angst voor welk soort dieren?", "Katten", "Honden", "Spinnen", "Slangen", 4],
  ["Welk kleur bloed hebben inktvissen, kreeften en krabben?", "Rood", "Paars", "Blauw", "Groen", 3],
  ["Welk Australisch dier kent men in de Engelse taal als 'platypus'?", "Gans", "Vogelbekdier", "Bever", "Kangoeroe", 2],
  ["Het Romeinse cijfer 'X' is 10. Maar welke waarde stemt overeen met het Romeinse getal 'D'?", "500", "50", "1000", "100", 1],
  ["Alfa, bèta, gamma en delta ken je. Maar wat is de vijfde letter van het Griekse alfabet?", "Charlie", "Echo", "Bestaat niet", "Epsilon", 4],
  ["Welke Engelsman publiceerde in juli 1687 zijn meesterwerk ‘Philosophiae Naturalis Principia Mathematica’?", "Isaac Newton", "Leonardo Da Vinci", "Galileo Galilei", "Albert Einstein", 1]
];

/**
 * Add actions to page buttons
 */
function addButtonActions() {
  //start
  startButton.addEventListener("click", function () {
    showStartPage();
  });
  questionsButton.addEventListener("click", function () {
    showPage("page-login");
  });
  loginButton.addEventListener("click", function () {
    login();
  });
  ans1.addEventListener("click", function () {
    antwoord1(1, ans1);
  });
  ans2.addEventListener("click", function () {
    antwoord1(2, ans2);
  });
  ans3.addEventListener("click", function () {
    antwoord1(3, ans3);
  });
  ans4.addEventListener("click", function () {
    antwoord1(4, ans4);
  });
  next.addEventListener("click", function () {
    nextButton();
  });
  twitterButton.addEventListener("click", function () {
    window.open("https://twitter.com/intent/tweet?text=Ik heb de kennis quiz gehaald in " + timer + " seconden en met " + count + " punten!");
  });
}

/**
 * Hide all pages
 */
function hideAllPages() {
  startPage.style.display = "none";
  loginPage.style.display = "none";
  questionsPage.style.display = "none";
  endPage.style.display = "none";
  error.style.display = "none";
  error2.style.display = "none";
  scoreSucc.style.display = "none";
  scoreFout.style.display = "none";
  next.style.display = "none";
}

//show question
function showQuestion(vraagnummer){ 
vraagtitel.innerHTML = "Vraag " + (currectQuestion + 1) + ".";
vraag.innerHTML = vragen[vraagnummer][0];
ans1.innerHTML = vragen[vraagnummer][1];
ans2.innerHTML = vragen[vraagnummer][2];
ans3.innerHTML = vragen[vraagnummer][3];
ans4.innerHTML = vragen[vraagnummer][4];
}

function nextButton() {
  if (currectQuestion == vragen.length) {
  showEndPage();
  }
  else {
  showQuestion(currectQuestion);
  next.style.display = "none";
  ans1.disabled = false;
  ans2.disabled = false;
  ans3.disabled = false;
  ans4.disabled = false;
  ans1.style.backgroundColor = "";
  ans2.style.backgroundColor = "";
  ans3.style.backgroundColor = "";
  ans4.style.backgroundColor = "";
  ans1.style.cursor = "";
  ans2.style.cursor = "";
  ans3.style.cursor = "";
  ans4.style.cursor = "";
}}

function antwoord1(clickedButton, clickedAns) {
  if (clickedButton == vragen[currectQuestion][5]) {
    console.log("correct");
    addScore();
  }
  else {
    clickedAns.style.backgroundColor = "red";
    console.log("wrong");
  }
  next.style.display = "";
  ans1.disabled = true;
  ans2.disabled = true;
  ans3.disabled = true;
  ans4.disabled = true;
  ans1.style.cursor = "not-allowed";
  ans2.style.cursor = "not-allowed";
  ans3.style.cursor = "not-allowed";
  ans4.style.cursor = "not-allowed";
  if (vragen[currectQuestion][5] == 1) {
    ans1.style.backgroundColor = "green";
  }
  else if (vragen[currectQuestion][5] == 2) {
    ans2.style.backgroundColor = "green";
  }
  else if (vragen[currectQuestion][5] == 3) {
    ans3.style.backgroundColor = "green";
  }
  else {
    ans4.style.backgroundColor = "green";
  }
  currectQuestion++;
}

/**
 * Show start page & reset buttons and score
 */
function showStartPage() {
  naam.style.display = "none";
  counter.style.display = "none";
  timerDisplay.style.display = "none";
  //Reset score
  count = 0;
  updateDisplay();

  timerStarted = false;
  timer = 0;

  hideAllPages();

  //Display page (start page)
  startPage.style.display = "block";

  console.info("Je bent nu op de startpagina");
}

/**
 * Show page
 */
 function showPage(pagename) {
  var page = document.getElementById(pagename);

  hideAllPages();

  page.style.display = "block";

  console.info("Je bent nu op " + pagename);
  if (pagename == "page-questions") {
    console.log("de timer wordt gestart");
    timerStarted = true;
  }
}

/**
 * Show end page
 */
function showEndPage() {
  var page = document.getElementById("page-end");

  hideAllPages();
  stopTimer();
  timerStarted = false;

  page.style.display = "block";

  console.info("Je bent nu bij het einde");
  sendScore();
  moveProgressBar();
}

/**
 * Score counter
 */
function addScore() {
  count++;
  updateDisplay();
}

//Update live score
function updateDisplay() {
  counterDisplayElem.innerHTML = "Score: " + count + " punten";
}

/** 
 * score bar
 */
var i = 0;
function moveProgressBar() {
  if (i == 0) {
    i = 1;
    var bar = document.getElementById("bar");
    var width = 1;
    var id = setInterval(frame, 25);
    var eind = document.getElementById("eindscore");
    frame();
  }
  function frame() {
    if (width >= count * 10) {
      clearInterval(id);
      i = 0;
    } else {
      width++;
      bar.style.width = width + "%";
      bar.innerHTML = width / 10;
      eind.innerHTML = "Gefeliciteerd! Je hebt " + count + " punten gehaald!";
    }
  }
}

/**
 * login with pattern check
 */
function login() {
  var naam = document.getElementById("naam").value;
  var patt = /(^s|[a-z]{2})(?=\d{7}$)/;
  var result = naam.match(patt);
  console.log("naam: " + naam);
  console.log("result: " + result);
  if (result == null || naam == "" || naam == null) {
    console.log("login fout");
    error2.style.display = "";
  } else {
    checkStudent(naam);
    console.log("door naar de vragen");
  }
}

/**
 * Check student number using the API
 */
 function checkStudent(number) {
  var xHttp = new XMLHttpRequest();
  xHttp.onreadystatechange = function () {
      if (xHttp.readyState == XMLHttpRequest.DONE) {
          var response = JSON.parse(xHttp.response);
          if (xHttp.status == 200) {
              studentIdentificationSucces(response);
              studentnumber = response.number;
          } else {
              studentIdentificationFailed(response);
          }
      }
  };
  xHttp.onerror = function () {
      studentIdentificationFailed(xHttp.statusText);
  };
  xHttp.open("GET", "https://quiz.clow.nl/v1/student/" + number, true);
  xHttp.send();
}

/**
* Student is successfully identified
*/
function studentIdentificationSucces(student) {
  console.info(student);
  var elem = document.getElementById("naam-display-display");
  var naamDisplay = document.getElementById("naam-display");
  elem.innerHTML = "Naam: " + student.firstName + " " + student.lastName;
  showPage("page-questions"); 
  console.log("succesinlog");
  naamDisplay.style.display = "";
  counter.style.display = "";
  timerDisplay.style.display = "";
}

/**
* Student number is incorrect
*/
function studentIdentificationFailed(errorMessage) {
  error.style.display = "";
  console.error(errorMessage);
  console.log("nee error");
}

//send score to api
function sendScore() {
  var xHttp = new XMLHttpRequest();
  xHttp.onreadystatechange = function () {
    if (xHttp.readyState == XMLHttpRequest.DONE) {
      var response = JSON.parse(xHttp.response);
      if (xHttp.status == 200) {
      console.log(response);
      console.log("score is succesvol verstuurd");
      scoreSucc.style.display = "";
      }
      else{
        console.log("de score is niet verstuurd");
        scoreFout.style.display = "";
      }
    }
};
  xHttp.onerror = function () {
      console.log("error when sending score");
  };
  xHttp.open("POST", "https://quiz.clow.nl/v1/score", true);
  xHttp.send(
    JSON.stringify({
      quizMaster: "s1168975",
      student: studentnumber,
      points: count,
      time: timer,
    })
  );
}

//get highscores from api
 function getScore() {
  var xHttp = new XMLHttpRequest();
  xHttp.onreadystatechange = function () {
    if (xHttp.readyState == XMLHttpRequest.DONE) {
      var response = JSON.parse(xHttp.response);
          console.log(response);
          sortScore(response);
      }
  };
  xHttp.onerror = function () {
      console.log("error when getting highscores");
  };
  xHttp.open("GET", "https://quiz.clow.nl/v1/highscores/s1168975", true);
  xHttp.send();
}

//sort score array and display it
function sortScore(score) {
  score.sort(function(a, b){
    if (a.points === b.points) {
      return a.time - b.time;
    }
    return b.points - a.points});
  name1.innerHTML = score [0].player.firstName + " " + score[0].player.lastName;
  name2.innerHTML = score [1].player.firstName + " " + score[1].player.lastName;
  name3.innerHTML = score [2].player.firstName + " " + score[2].player.lastName;
  name4.innerHTML = score [3].player.firstName + " " + score[3].player.lastName;
  name5.innerHTML = score [4].player.firstName + " " + score[4].player.lastName;
  name6.innerHTML = score [5].player.firstName + " " + score[5].player.lastName;
  name7.innerHTML = score [6].player.firstName + " " + score[6].player.lastName;
  name8.innerHTML = score [7].player.firstName + " " + score[7].player.lastName;
  name9.innerHTML = score [8].player.firstName + " " + score[8].player.lastName;
  name10.innerHTML = score [9].player.firstName + " " + score[9].player.lastName;
  score1.innerHTML = score [0].points + " punten";
  score2.innerHTML = score [1].points + " punten";
  score3.innerHTML = score [2].points + " punten";
  score4.innerHTML = score [3].points + " punten";
  score5.innerHTML = score [4].points + " punten";
  score6.innerHTML = score [5].points + " punten";
  score7.innerHTML = score [6].points + " punten";
  score8.innerHTML = score [7].points + " punten";
  score9.innerHTML = score [8].points + " punten";
  score10.innerHTML = score [9].points + " punten";
  time1.innerHTML = score [0].time + " sec";
  time2.innerHTML = score [1].time + " sec";
  time3.innerHTML = score [2].time + " sec";
  time4.innerHTML = score [3].time + " sec";
  time5.innerHTML = score [4].time + " sec";
  time6.innerHTML = score [5].time + " sec";
  time7.innerHTML = score [6].time + " sec";
  time8.innerHTML = score [7].time + " sec";
  time9.innerHTML = score [8].time + " sec";
  time10.innerHTML = score [9].time + " sec";
}

//timer
var timername = setInterval(timerAction, 1000);

function timerAction() {
  if (timerStarted == true) {
  timer++;
  timerDisplay.innerHTML = "Timer: " + timer;
  }
}

function stopTimer() {
  clearInterval(timername);
}

// Initialize
addButtonActions();
showStartPage();
updateDisplay();
showQuestion(0);
getScore();