"use strict";

//studentnumber for login
let studentnumber;

//score submission popups at endpage
const scoreSucc = document.getElementById("scoreSucc");
const scoreFout = document.getElementById("scoreFout");

//all buttons
//start
const startButton = document.getElementById("button-start");
const questionsButton = document.getElementById("button-questions");
const loginButton = document.getElementById("submit");
//Q1
const ansButton1 = document.getElementById("button-ans1");
const ansButton2 = document.getElementById("button-ans2");
const ansButton3 = document.getElementById("button-ans3");
const correctAnsButton = document.getElementById("button-correctans");
const nextButton1 = document.getElementById("button-next");
//Q2
const ansButton22 = document.getElementById("button-ans2-2");
const ansButton32 = document.getElementById("button-ans3-2");
const ansButton12 = document.getElementById("button-ans1-2");
const correctAnsButton2 = document.getElementById("button-correctans-2");
const nextButton2 = document.getElementById("button-next-2");
//Q3
const ansButton13 = document.getElementById("button-ans1-3");
const ansButton23 = document.getElementById("button-ans2-3");
const ansButton33 = document.getElementById("button-ans3-3");
const correctAnsButton3 = document.getElementById("button-correctans-3");
const nextButton3 = document.getElementById("button-next-3");
//Q4
const ansButton14 = document.getElementById("button-ans1-4");
const ansButton24 = document.getElementById("button-ans2-4");
const ansButton34 = document.getElementById("button-ans3-4");
const correctAnsButton4 = document.getElementById("button-correctans-4");
const nextButton4 = document.getElementById("button-next-4");
//Q5
const ansButton15 = document.getElementById("button-ans1-5");
const ansButton25 = document.getElementById("button-ans2-5");
const ansButton35 = document.getElementById("button-ans3-5");
const correctAnsButton5 = document.getElementById("button-correctans-5");
const nextButton5 = document.getElementById("button-next-5");
//Q6
const ansButton16 = document.getElementById("button-ans1-6");
const ansButton26 = document.getElementById("button-ans2-6");
const ansButton36 = document.getElementById("button-ans3-6");
const correctAnsButton6 = document.getElementById("button-correctans-6");
const nextButton6 = document.getElementById("button-next-6");
//Q7
const ansButton17 = document.getElementById("button-ans1-7");
const ansButton27 = document.getElementById("button-ans2-7");
const ansButton37 = document.getElementById("button-ans3-7");
const correctAnsButton7 = document.getElementById("button-correctans-7");
const nextButton7 = document.getElementById("button-next-7");
//Q8
const ansButton18 = document.getElementById("button-ans1-8");
const ansButton28 = document.getElementById("button-ans2-8");
const ansButton38 = document.getElementById("button-ans3-8");
const correctAnsButton8 = document.getElementById("button-correctans-8");
const nextButton8 = document.getElementById("button-next-8");
//Q9
const ansButton19 = document.getElementById("button-ans1-9");
const ansButton29 = document.getElementById("button-ans2-9");
const ansButton39 = document.getElementById("button-ans3-9");
const correctAnsButton9 = document.getElementById("button-correctans-9");
const nextButton9 = document.getElementById("button-next-9");
//Q10
const ansButton110 = document.getElementById("button-ans1-10");
const ansButton210 = document.getElementById("button-ans2-10");
const ansButton310 = document.getElementById("button-ans3-10");
const correctAnsButton10 = document.getElementById("button-correctans-10");
const nextButton10 = document.getElementById("button-next-10");

//all pages
const startPage = document.getElementById("page-start");
const endPage = document.getElementById("page-end");
const loginPage = document.getElementById("page-login");
const questionsPage = document.getElementById("page-questions");
const questionsPage2 = document.getElementById("page-questions2");
const questionsPage3 = document.getElementById("page-questions3");
const questionsPage4 = document.getElementById("page-questions4");
const questionsPage5 = document.getElementById("page-questions5");
const questionsPage6 = document.getElementById("page-questions6");
const questionsPage7 = document.getElementById("page-questions7");
const questionsPage8 = document.getElementById("page-questions8");
const questionsPage9 = document.getElementById("page-questions9");
const questionsPage10 = document.getElementById("page-questions10");
const error = document.getElementById("error");
const error2 = document.getElementById("error2");

//Next buttons
const buttonNext1 = document.getElementById("button-next");
const buttonNext2 = document.getElementById("button-next-2");
const buttonNext3 = document.getElementById("button-next-3");
const buttonNext4 = document.getElementById("button-next-4");
const buttonNext5 = document.getElementById("button-next-5");
const buttonNext6 = document.getElementById("button-next-6");
const buttonNext7 = document.getElementById("button-next-7");
const buttonNext8 = document.getElementById("button-next-8");
const buttonNext9 = document.getElementById("button-next-9");
const buttonNext10 = document.getElementById("button-next-10");

//Back buttons
const buttonBack2 = document.getElementById("button-back-2");
const buttonBack3 = document.getElementById("button-back-3");
const buttonBack4 = document.getElementById("button-back-4");
const buttonBack5 = document.getElementById("button-back-5");
const buttonBack6 = document.getElementById("button-back-6");
const buttonBack7 = document.getElementById("button-back-7");
const buttonBack8 = document.getElementById("button-back-8");
const buttonBack9 = document.getElementById("button-back-9");
const buttonBack10 = document.getElementById("button-back-10");

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
  ["Brons is een samenstelling van welke twee metalen?", "ijzer & nickel", "koper & tin", "titanium & koper", "tin & zink"],
  ["Wat is in Celsius de koudst mogelijke temperatuur die mogelijk is ook wel het absolute nulpunt genoemd?", "0 °C", "−265 °C", "−273 °C", "−284 °C"]
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

  //Q1
  correctAnsButton.addEventListener("click", function () {
    ansButton(nextButton1, ansButton1, ansButton2, ansButton3, correctAnsButton, true);
  });
  ansButton1.addEventListener("click", function () {
    ansButton(nextButton1, ansButton1, ansButton2, ansButton3, correctAnsButton, false);
  });
  ansButton2.addEventListener("click", function () {
    ansButton(nextButton1, ansButton2, ansButton1, ansButton3, correctAnsButton, false);
  });
  ansButton3.addEventListener("click", function () {
    ansButton(nextButton1, ansButton3, ansButton2, ansButton1, correctAnsButton, false);
  });
  nextButton1.addEventListener("click", function () {
    showPage("page-questions2");
  });

  //Q2
  correctAnsButton2.addEventListener("click", function () {
    ansButton(nextButton2, ansButton12, ansButton22, ansButton32, correctAnsButton2, true);
  });
  ansButton12.addEventListener("click", function () {
    ansButton(nextButton2, ansButton12, ansButton22, ansButton32, correctAnsButton2, false);
  });
  ansButton22.addEventListener("click", function () {
    ansButton(nextButton2, ansButton22, ansButton12, ansButton32, correctAnsButton2, false);
  });
  ansButton32.addEventListener("click", function () {
    ansButton(nextButton2, ansButton32, ansButton22, ansButton12, correctAnsButton2, false);
  });
  nextButton2.addEventListener("click", function () {
    showPage("page-questions3");
  });
  buttonBack2.addEventListener("click", function () {
    showPage("page-questions");
  });

  //Q3
  correctAnsButton3.addEventListener("click", function () {
    ansButton(nextButton3, ansButton13, ansButton23, ansButton33, correctAnsButton3, true);
  });
  ansButton13.addEventListener("click", function () {
    ansButton(nextButton3, ansButton13, ansButton23, ansButton33, correctAnsButton3, false);
  });
  ansButton23.addEventListener("click", function () {
    ansButton(nextButton3, ansButton23, ansButton13, ansButton33, correctAnsButton3, false);
  });
  ansButton33.addEventListener("click", function () {
    ansButton(nextButton3, ansButton33, ansButton23, ansButton13, correctAnsButton3, false);
  });
  nextButton3.addEventListener("click", function () {
    showPage("page-questions4");
  });
  buttonBack3.addEventListener("click", function () {
    showPage("page-questions2");
  });

  //Q4
  correctAnsButton4.addEventListener("click", function () {
    ansButton(nextButton4, ansButton14, ansButton24, ansButton34, correctAnsButton4, true);
  });
  ansButton14.addEventListener("click", function () {
    ansButton(nextButton4, ansButton14, ansButton24, ansButton34, correctAnsButton4, false);
  });
  ansButton24.addEventListener("click", function () {
    ansButton(nextButton4, ansButton24, ansButton14, ansButton34, correctAnsButton4, false);
  });
  ansButton34.addEventListener("click", function () {
    ansButton(nextButton4, ansButton34, ansButton24, ansButton14, correctAnsButton4, false);
  });
  nextButton4.addEventListener("click", function () {
    showPage("page-questions5");
  });
  buttonBack4.addEventListener("click", function () {
    showPage("page-questions3");
  });

  //Q5
  correctAnsButton5.addEventListener("click", function () {
    ansButton(nextButton5, ansButton15, ansButton25, ansButton35, correctAnsButton5, true);
  });
  ansButton15.addEventListener("click", function () {
    ansButton(nextButton5, ansButton15, ansButton25, ansButton35, correctAnsButton5, false);
  });
  ansButton25.addEventListener("click", function () {
    ansButton(nextButton5, ansButton25, ansButton15, ansButton35, correctAnsButton5, false);
  });
  ansButton35.addEventListener("click", function () {
    ansButton(nextButton5, ansButton35, ansButton25, ansButton15, correctAnsButton5, false);
  });
  nextButton5.addEventListener("click", function () {
    showPage("page-questions6");
  });
  buttonBack5.addEventListener("click", function () {
    showPage("page-questions3");
  });

  //Q6
  correctAnsButton6.addEventListener("click", function () {
    ansButton(nextButton6, ansButton16, ansButton26, ansButton36, correctAnsButton6, true);
  });
  ansButton16.addEventListener("click", function () {
    ansButton(nextButton6, ansButton16, ansButton26, ansButton36, correctAnsButton6, false);
  });
  ansButton26.addEventListener("click", function () {
    ansButton(nextButton6, ansButton26, ansButton16, ansButton36, correctAnsButton6, false);
  });
  ansButton36.addEventListener("click", function () {
    ansButton(nextButton6, ansButton36, ansButton26, ansButton16, correctAnsButton6, false);
  });
  nextButton6.addEventListener("click", function () {
    showPage("page-questions7");
  });
  buttonBack6.addEventListener("click", function () {
    showPage("page-questions5");
  });

  //Q7
  correctAnsButton7.addEventListener("click", function () {
    ansButton(nextButton7, ansButton17, ansButton27, ansButton37, correctAnsButton7, true);
  });
  ansButton17.addEventListener("click", function () {
    ansButton(nextButton7, ansButton17, ansButton27, ansButton37, correctAnsButton7, false);
  });
  ansButton27.addEventListener("click", function () {
    ansButton(nextButton7, ansButton27, ansButton17, ansButton37, correctAnsButton7, false);
  });
  ansButton37.addEventListener("click", function () {
    ansButton(nextButton7, ansButton37, ansButton27, ansButton17, correctAnsButton7, false);
  });
  nextButton7.addEventListener("click", function () {
    showPage("page-questions8");
  });
  buttonBack7.addEventListener("click", function () {
    showPage("page-questions6");
  });

  //Q8
  correctAnsButton8.addEventListener("click", function () {
    ansButton(nextButton8, ansButton18, ansButton28, ansButton38, correctAnsButton8, true);
  });
  ansButton18.addEventListener("click", function () {
    ansButton(nextButton8, ansButton18, ansButton28, ansButton38, correctAnsButton8, false);
  });
  ansButton28.addEventListener("click", function () {
    ansButton(nextButton8, ansButton28, ansButton18, ansButton38, correctAnsButton8, false);
  });
  ansButton38.addEventListener("click", function () {
    ansButton(nextButton8, ansButton38, ansButton28, ansButton18, correctAnsButton8, false);
  });
  nextButton8.addEventListener("click", function () {
    showPage("page-questions9");
  });
  buttonBack8.addEventListener("click", function () {
    showPage("page-questions7");
  });

  //Q9
  correctAnsButton9.addEventListener("click", function () {
    ansButton(nextButton9, ansButton19, ansButton29, ansButton39, correctAnsButton9, true);
  });
  ansButton19.addEventListener("click", function () {
    ansButton(nextButton9, ansButton19, ansButton29, ansButton39, correctAnsButton9, false);
  });
  ansButton29.addEventListener("click", function () {
    ansButton(nextButton9, ansButton29, ansButton19, ansButton39, correctAnsButton9, false);
  });
  ansButton39.addEventListener("click", function () {
    ansButton(nextButton9, ansButton39, ansButton29, ansButton19, correctAnsButton9, false);
  });
  nextButton9.addEventListener("click", function () {
    showPage("page-questions10");
  });
  buttonBack9.addEventListener("click", function () {
    showPage("page-questions8");
  });

  //Q10
  correctAnsButton10.addEventListener("click", function () {
    ansButton(nextButton10, ansButton110, ansButton210, ansButton310, correctAnsButton10, true);
  });
  ansButton110.addEventListener("click", function () {
    ansButton(nextButton10, ansButton110, ansButton210, ansButton310, correctAnsButton10, false);
  });
  ansButton210.addEventListener("click", function () {
    ansButton(nextButton10, ansButton210, ansButton110, ansButton310, correctAnsButton10, false);
  });
  ansButton310.addEventListener("click", function () {
    ansButton(nextButton10, ansButton310, ansButton210, ansButton110, correctAnsButton10, false);
  });
  nextButton10.addEventListener("click", function () {
    showEndPage();
  });
  buttonBack10.addEventListener("click", function () {
    showPage("page-questions9");
  });
}

/**
 * Hide all pages
 */
function hideAllPages() {
  startPage.style.display = "none";
  loginPage.style.display = "none";
  questionsPage.style.display = "none";
  questionsPage2.style.display = "none";
  questionsPage3.style.display = "none";
  questionsPage4.style.display = "none";
  questionsPage5.style.display = "none";
  questionsPage6.style.display = "none";
  questionsPage7.style.display = "none";
  questionsPage8.style.display = "none";
  questionsPage9.style.display = "none";
  questionsPage10.style.display = "none";
  endPage.style.display = "none";
  error.style.display = "none";
  error2.style.display = "none";
  scoreSucc.style.display = "none";
  scoreFout.style.display = "none";
}

/**
 * Show start page & reset buttons and score
 */
function showStartPage() {
  naam.style.display = "none";
  //Reset score
  count = 0;
  updateDisplay();

  hideAllPages();

  //Reset all colors of ans buttons
  //Q1
  correctAnsButton.style.backgroundColor = "";
  ansButton1.style.backgroundColor = "";
  ansButton2.style.backgroundColor = "";
  ansButton3.style.backgroundColor = "";
  //Q2
  correctAnsButton2.style.backgroundColor = "";
  ansButton12.style.backgroundColor = "";
  ansButton22.style.backgroundColor = "";
  ansButton32.style.backgroundColor = "";
  //Q3
  correctAnsButton3.style.backgroundColor = "";
  ansButton13.style.backgroundColor = "";
  ansButton23.style.backgroundColor = "";
  ansButton33.style.backgroundColor = "";
  //Q4
  correctAnsButton4.style.backgroundColor = "";
  ansButton14.style.backgroundColor = "";
  ansButton24.style.backgroundColor = "";
  ansButton34.style.backgroundColor = "";
  //Q5
  correctAnsButton5.style.backgroundColor = "";
  ansButton15.style.backgroundColor = "";
  ansButton25.style.backgroundColor = "";
  ansButton35.style.backgroundColor = "";
  //Q6
  correctAnsButton6.style.backgroundColor = "";
  ansButton16.style.backgroundColor = "";
  ansButton26.style.backgroundColor = "";
  ansButton36.style.backgroundColor = "";
  //Q7
  correctAnsButton7.style.backgroundColor = "";
  ansButton17.style.backgroundColor = "";
  ansButton27.style.backgroundColor = "";
  ansButton37.style.backgroundColor = "";
  //Q8
  correctAnsButton8.style.backgroundColor = "";
  ansButton18.style.backgroundColor = "";
  ansButton28.style.backgroundColor = "";
  ansButton38.style.backgroundColor = "";
  //Q9
  correctAnsButton9.style.backgroundColor = "";
  ansButton19.style.backgroundColor = "";
  ansButton29.style.backgroundColor = "";
  ansButton39.style.backgroundColor = "";
  //Q10
  correctAnsButton10.style.backgroundColor = "";
  ansButton110.style.backgroundColor = "";
  ansButton210.style.backgroundColor = "";
  ansButton310.style.backgroundColor = "";

  //Reset all cursors of ans buttons
  //Q1
  correctAnsButton.style.cursor = "";
  ansButton1.style.cursor = "";
  ansButton2.style.cursor = "";
  ansButton3.style.cursor = "";
  //Q2
  correctAnsButton2.style.cursor = "";
  ansButton12.style.cursor = "";
  ansButton22.style.cursor = "";
  ansButton32.style.cursor = "";
  //Q3
  correctAnsButton3.style.cursor = "";
  ansButton13.style.cursor = "";
  ansButton23.style.cursor = "";
  ansButton33.style.cursor = "";
  //Q4
  correctAnsButton4.style.cursor = "";
  ansButton14.style.cursor = "";
  ansButton24.style.cursor = "";
  ansButton34.style.cursor = "";
  //Q5
  correctAnsButton5.style.cursor = "";
  ansButton15.style.cursor = "";
  ansButton25.style.cursor = "";
  ansButton35.style.cursor = "";
  //Q6
  correctAnsButton6.style.cursor = "";
  ansButton16.style.cursor = "";
  ansButton26.style.cursor = "";
  ansButton36.style.cursor = "";
  //Q7
  correctAnsButton7.style.cursor = "";
  ansButton17.style.cursor = "";
  ansButton27.style.cursor = "";
  ansButton37.style.cursor = "";
  //Q8
  correctAnsButton8.style.cursor = "";
  ansButton18.style.cursor = "";
  ansButton28.style.cursor = "";
  ansButton38.style.cursor = "";
  //Q9
  correctAnsButton9.style.cursor = "";
  ansButton19.style.cursor = "";
  ansButton29.style.cursor = "";
  ansButton39.style.cursor = "";
  //Q10
  correctAnsButton10.style.cursor = "";
  ansButton110.style.cursor = "";
  ansButton210.style.cursor = "";
  ansButton310.style.cursor = "";

  //Hide all next Q buttons
  buttonNext1.style.display = "none";
  buttonNext2.style.display = "none";
  buttonNext3.style.display = "none";
  buttonNext4.style.display = "none";
  buttonNext5.style.display = "none";
  buttonNext6.style.display = "none";
  buttonNext7.style.display = "none";
  buttonNext8.style.display = "none";
  buttonNext9.style.display = "none";
  buttonNext10.style.display = "none";

  //Display page (start page)
  startPage.style.display = "block";

  //Enable all Q buttons on start
  //Q1
  correctAnsButton.disabled = false;
  ansButton1.disabled = false;
  ansButton2.disabled = false;
  ansButton3.disabled = false;
  //Q2
  correctAnsButton2.disabled = false;
  ansButton12.disabled = false;
  ansButton22.disabled = false;
  ansButton32.disabled = false;
  //Q3
  correctAnsButton3.disabled = false;
  ansButton13.disabled = false;
  ansButton23.disabled = false;
  ansButton33.disabled = false;
  //Q4
  correctAnsButton4.disabled = false;
  ansButton14.disabled = false;
  ansButton24.disabled = false;
  ansButton34.disabled = false;
  //Q5
  correctAnsButton5.disabled = false;
  ansButton15.disabled = false;
  ansButton25.disabled = false;
  ansButton35.disabled = false;
  //Q6
  correctAnsButton6.disabled = false;
  ansButton16.disabled = false;
  ansButton26.disabled = false;
  ansButton36.disabled = false;
  //Q7
  correctAnsButton7.disabled = false;
  ansButton17.disabled = false;
  ansButton27.disabled = false;
  ansButton37.disabled = false;
  //Q8
  correctAnsButton8.disabled = false;
  ansButton18.disabled = false;
  ansButton28.disabled = false;
  ansButton38.disabled = false;
  //Q9
  correctAnsButton9.disabled = false;
  ansButton19.disabled = false;
  ansButton29.disabled = false;
  ansButton39.disabled = false;
  //Q10
  correctAnsButton10.disabled = false;
  ansButton110.disabled = false;
  ansButton210.disabled = false;
  ansButton310.disabled = false;

  counter.style.display = "";

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
  };
}

/**
 * Show end page
 */
function showEndPage() {
  var page = document.getElementById("page-end");

  hideAllPages();

  page.style.display = "block";

  console.info("Je bent nu bij het einde");
  sendScore();
  moveProgressBar();
}

/**
 * ans button
 */
 function ansButton(buttonNext, clickedButton, ansButton2, ansButton3, correctAnsButton, correct) {
  if (correct) {
    console.log("correct");
    addScore();
  }
  else {
    clickedButton.style.backgroundColor = "red";
    console.log("wrong");
  }
  correctAnsButton.style.backgroundColor = "green";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  clickedButton.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  clickedButton.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";
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
      }
  };
  xHttp.onerror = function () {
      console.log("error when getting highscores");
  };
  xHttp.open("GET", "https://quiz.clow.nl/v1/highscores/s1168975", true);
  xHttp.send();
}

//timer
//function startTimer() {
var timername = setInterval(timerAction, 1000);
//};

function timerAction() {
  if (timerStarted == true) {
  timer++
  timerDisplay.innerHTML = timer;
  };
}

function stopTimer() {
  clearInterval(timername);
}
// Initialize
addButtonActions();
showStartPage();
updateDisplay();