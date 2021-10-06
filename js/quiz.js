"use strict";

/**
 * Add actions to page buttons
 */
function addButtonActions() {
  //start
  var startButton = document.getElementById("button-start");
  var questionsButton = document.getElementById("button-questions");
  var loginButton = document.getElementById("submit");
  //Q1
  var ansButton1 = document.getElementById("button-ans1");
  var ansButton2 = document.getElementById("button-ans2");
  var ansButton3 = document.getElementById("button-ans3");
  var correctAnsButton = document.getElementById("button-correctans");
  var nextButton1 = document.getElementById("button-next");
  //Q2
  var ansButton12 = document.getElementById("button-ans1-2");
  var ansButton22 = document.getElementById("button-ans2-2");
  var ansButton32 = document.getElementById("button-ans3-2");
  var correctAnsButton2 = document.getElementById("button-correctans-2");
  var nextButton2 = document.getElementById("button-next-2");
  //Q3
  var ansButton13 = document.getElementById("button-ans1-3");
  var ansButton23 = document.getElementById("button-ans2-3");
  var ansButton33 = document.getElementById("button-ans3-3");
  var correctAnsButton3 = document.getElementById("button-correctans-3");
  var nextButton3 = document.getElementById("button-next-3");
  //Q4
  var ansButton14 = document.getElementById("button-ans1-4");
  var ansButton24 = document.getElementById("button-ans2-4");
  var ansButton34 = document.getElementById("button-ans3-4");
  var correctAnsButton4 = document.getElementById("button-correctans-4");
  var nextButton4 = document.getElementById("button-next-4");
  //Q5
  var ansButton15 = document.getElementById("button-ans1-5");
  var ansButton25 = document.getElementById("button-ans2-5");
  var ansButton35 = document.getElementById("button-ans3-5");
  var correctAnsButton5 = document.getElementById("button-correctans-5");
  var nextButton5 = document.getElementById("button-next-5");
  //Q6
  var ansButton16 = document.getElementById("button-ans1-6");
  var ansButton26 = document.getElementById("button-ans2-6");
  var ansButton36 = document.getElementById("button-ans3-6");
  var correctAnsButton6 = document.getElementById("button-correctans-6");
  var nextButton6 = document.getElementById("button-next-6");
  //Q7
  var ansButton17 = document.getElementById("button-ans1-7");
  var ansButton27 = document.getElementById("button-ans2-7");
  var ansButton37 = document.getElementById("button-ans3-7");
  var correctAnsButton7 = document.getElementById("button-correctans-7");
  var nextButton7 = document.getElementById("button-next-7");
  //Q8
  var ansButton18 = document.getElementById("button-ans1-8");
  var ansButton28 = document.getElementById("button-ans2-8");
  var ansButton38 = document.getElementById("button-ans3-8");
  var correctAnsButton8 = document.getElementById("button-correctans-8");
  var nextButton8 = document.getElementById("button-next-8");
  //Q9
  var ansButton19 = document.getElementById("button-ans1-9");
  var ansButton29 = document.getElementById("button-ans2-9");
  var ansButton39 = document.getElementById("button-ans3-9");
  var correctAnsButton9 = document.getElementById("button-correctans-9");
  var nextButton9 = document.getElementById("button-next-9");
  //Q10
  var ansButton110 = document.getElementById("button-ans1-10");
  var ansButton210 = document.getElementById("button-ans2-10");
  var ansButton310 = document.getElementById("button-ans3-10");
  var correctAnsButton10 = document.getElementById("button-correctans-10");
  var nextButton10 = document.getElementById("button-next-10");

  //start
  startButton.addEventListener("click", function () {
    showStartPage();
  });
  questionsButton.addEventListener("click", function () {
    showLoginPage();
  });
  loginButton.addEventListener("click", function () {
    login();
  });

  //Q1
  correctAnsButton.addEventListener("click", function () {
    anscorrect();
  });
  ansButton1.addEventListener("click", function () {
    answrong1();
  });
  ansButton2.addEventListener("click", function () {
    answrong2();
  });
  ansButton3.addEventListener("click", function () {
    answrong3();
  });
  nextButton1.addEventListener("click", function () {
    showQuestionsPage2();
  });

  //Q2
  correctAnsButton2.addEventListener("click", function () {
    anscorrect2();
  });
  ansButton12.addEventListener("click", function () {
    answrong12();
  });
  ansButton22.addEventListener("click", function () {
    answrong22();
  });
  ansButton32.addEventListener("click", function () {
    answrong32();
  });
  nextButton2.addEventListener("click", function () {
    showQuestionsPage3();
  });

  //Q3
  correctAnsButton3.addEventListener("click", function () {
    anscorrect3();
  });
  ansButton13.addEventListener("click", function () {
    answrong13();
  });
  ansButton23.addEventListener("click", function () {
    answrong23();
  });
  ansButton33.addEventListener("click", function () {
    answrong33();
  });
  nextButton3.addEventListener("click", function () {
    showQuestionsPage4();
  });

  //Q4
  correctAnsButton4.addEventListener("click", function () {
    anscorrect4();
  });
  ansButton14.addEventListener("click", function () {
    answrong14();
  });
  ansButton24.addEventListener("click", function () {
    answrong24();
  });
  ansButton34.addEventListener("click", function () {
    answrong34();
  });
  nextButton4.addEventListener("click", function () {
    showQuestionsPage5();
  });

  //Q5
  correctAnsButton5.addEventListener("click", function () {
    anscorrect5();
  });
  ansButton15.addEventListener("click", function () {
    answrong15();
  });
  ansButton25.addEventListener("click", function () {
    answrong25();
  });
  ansButton35.addEventListener("click", function () {
    answrong35();
  });
  nextButton5.addEventListener("click", function () {
    showQuestionsPage6();
  });

  //Q6
  correctAnsButton6.addEventListener("click", function () {
    anscorrect6();
  });
  ansButton16.addEventListener("click", function () {
    answrong16();
  });
  ansButton26.addEventListener("click", function () {
    answrong26();
  });
  ansButton36.addEventListener("click", function () {
    answrong36();
  });
  nextButton6.addEventListener("click", function () {
    showQuestionsPage7();
  });

  //Q7
  correctAnsButton7.addEventListener("click", function () {
    anscorrect7();
  });
  ansButton17.addEventListener("click", function () {
    answrong17();
  });
  ansButton27.addEventListener("click", function () {
    answrong27();
  });
  ansButton37.addEventListener("click", function () {
    answrong37();
  });
  nextButton7.addEventListener("click", function () {
    showQuestionsPage8();
  });

  //Q8
  correctAnsButton8.addEventListener("click", function () {
    anscorrect8();
  });
  ansButton18.addEventListener("click", function () {
    answrong18();
  });
  ansButton28.addEventListener("click", function () {
    answrong28();
  });
  ansButton38.addEventListener("click", function () {
    answrong38();
  });
  nextButton8.addEventListener("click", function () {
    showQuestionsPage9();
  });

  //Q9
  correctAnsButton9.addEventListener("click", function () {
    anscorrect9();
  });
  ansButton19.addEventListener("click", function () {
    answrong19();
  });
  ansButton29.addEventListener("click", function () {
    answrong29();
  });
  ansButton39.addEventListener("click", function () {
    answrong39();
  });
  nextButton9.addEventListener("click", function () {
    showQuestionsPage10();
  });

  //Q10
  correctAnsButton10.addEventListener("click", function () {
    anscorrect10();
  });
  ansButton110.addEventListener("click", function () {
    answrong110();
  });
  ansButton210.addEventListener("click", function () {
    answrong210();
  });
  ansButton310.addEventListener("click", function () {
    answrong310();
  });
  nextButton10.addEventListener("click", function () {
    showEndPage();
  });

  //Start end bar animation
  nextButton10.addEventListener("click", function () {
    move();
  });
}

/**
 * Hide all pages
 */
function hideAllPages() {
  var startPage = document.getElementById("page-start");
  var endPage = document.getElementById("page-end");
  var loginPage = document.getElementById("page-login");
  var questionsPage = document.getElementById("page-questions");
  var questionsPage2 = document.getElementById("page-questions2");
  var questionsPage3 = document.getElementById("page-questions3");
  var questionsPage4 = document.getElementById("page-questions4");
  var questionsPage5 = document.getElementById("page-questions5");
  var questionsPage6 = document.getElementById("page-questions6");
  var questionsPage7 = document.getElementById("page-questions7");
  var questionsPage8 = document.getElementById("page-questions8");
  var questionsPage9 = document.getElementById("page-questions9");
  var questionsPage10 = document.getElementById("page-questions10");
  var error = document.getElementById("error");

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
}

/**
 * Show start page & reset buttons and score
 */
function showStartPage() {
  //Page
  var page = document.getElementById("page-start");
  //Next buttons
  var buttonNext1 = document.getElementById("button-next");
  var buttonNext2 = document.getElementById("button-next-2");
  var buttonNext3 = document.getElementById("button-next-3");
  var buttonNext4 = document.getElementById("button-next-4");
  var buttonNext5 = document.getElementById("button-next-5");
  var buttonNext6 = document.getElementById("button-next-6");
  var buttonNext7 = document.getElementById("button-next-7");
  var buttonNext8 = document.getElementById("button-next-8");
  var buttonNext9 = document.getElementById("button-next-9");
  var buttonNext10 = document.getElementById("button-next-10");
  var naam = document.getElementById("naam-display");
  
  naam.style.display = "none";
  //Q1
  var correctAnsButton = document.getElementById("button-correctans");
  var ansButton1 = document.getElementById("button-ans1");
  var ansButton2 = document.getElementById("button-ans2");
  var ansButton3 = document.getElementById("button-ans3");
  //Q2
  var correctAnsButton2 = document.getElementById("button-correctans-2");
  var ansButton12 = document.getElementById("button-ans1-2");
  var ansButton22 = document.getElementById("button-ans2-2");
  var ansButton32 = document.getElementById("button-ans3-2");
  //Q3
  var correctAnsButton3 = document.getElementById("button-correctans-3");
  var ansButton13 = document.getElementById("button-ans1-3");
  var ansButton23 = document.getElementById("button-ans2-3");
  var ansButton33 = document.getElementById("button-ans3-3");
  //Q4
  var correctAnsButton4 = document.getElementById("button-correctans-4");
  var ansButton14 = document.getElementById("button-ans1-4");
  var ansButton24 = document.getElementById("button-ans2-4");
  var ansButton34 = document.getElementById("button-ans3-4");
  //Q5
  var correctAnsButton5 = document.getElementById("button-correctans-5");
  var ansButton15 = document.getElementById("button-ans1-5");
  var ansButton25 = document.getElementById("button-ans2-5");
  var ansButton35 = document.getElementById("button-ans3-5");
  //Q6
  var correctAnsButton6 = document.getElementById("button-correctans-6");
  var ansButton16 = document.getElementById("button-ans1-6");
  var ansButton26 = document.getElementById("button-ans2-6");
  var ansButton36 = document.getElementById("button-ans3-6");
  //Q7
  var correctAnsButton7 = document.getElementById("button-correctans-7");
  var ansButton17 = document.getElementById("button-ans1-7");
  var ansButton27 = document.getElementById("button-ans2-7");
  var ansButton37 = document.getElementById("button-ans3-7");
  //Q8
  var correctAnsButton8 = document.getElementById("button-correctans-8");
  var ansButton18 = document.getElementById("button-ans1-8");
  var ansButton28 = document.getElementById("button-ans2-8");
  var ansButton38 = document.getElementById("button-ans3-8");
  //Q9
  var correctAnsButton9 = document.getElementById("button-correctans-9");
  var ansButton19 = document.getElementById("button-ans1-9");
  var ansButton29 = document.getElementById("button-ans2-9");
  var ansButton39 = document.getElementById("button-ans3-9");
  //Q10
  var correctAnsButton10 = document.getElementById("button-correctans-10");
  var ansButton110 = document.getElementById("button-ans1-10");
  var ansButton210 = document.getElementById("button-ans2-10");
  var ansButton310 = document.getElementById("button-ans3-10");
  //Reset score
  count = 0;
  updateDisplay();
  var counter = document.getElementById("live-score");

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
  page.style.display = "block";

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
 * Show login page
 */
 function showLoginPage() {
  var page = document.getElementById("page-login");

  hideAllPages();

  page.style.display = "block";

  console.info("Je bent nu op de loginpagina");
}

/**
 * Show questions page 1
 */
function showQuestionsPage() {
  var page = document.getElementById("page-questions");

  hideAllPages();

  page.style.display = "block";

  console.info("Je bent nu op de vragenpagina");
}

/**
 * Show questions page 2
 */
function showQuestionsPage2() {
  var page = document.getElementById("page-questions2");

  hideAllPages();

  page.style.display = "block";

  console.info("Je bent nu op de vragenpagina deel 2");
}

/**
 * Show questions page 3
 */
function showQuestionsPage3() {
  var page = document.getElementById("page-questions3");

  hideAllPages();

  page.style.display = "block";

  console.info("Je bent nu op de vragenpagina deel 3");
}

/**
 * Show questions page 4
 */
function showQuestionsPage4() {
  var page = document.getElementById("page-questions4");

  hideAllPages();

  page.style.display = "block";

  console.info("Je bent nu op de vragenpagina deel 4");
}

/**
 * Show questions page 5
 */
function showQuestionsPage5() {
  var page = document.getElementById("page-questions5");

  hideAllPages();

  page.style.display = "block";

  console.info("Je bent nu op de vragenpagina deel 5");
}

/**
 * Show questions page 6
 */
function showQuestionsPage6() {
  var page = document.getElementById("page-questions6");

  hideAllPages();

  page.style.display = "block";

  console.info("Je bent nu op de vragenpagina deel 6");
}

/**
 * Show questions page 7
 */
function showQuestionsPage7() {
  var page = document.getElementById("page-questions7");

  hideAllPages();

  page.style.display = "block";

  console.info("Je bent nu op de vragenpagina deel 7");
}

/**
 * Show questions page 8
 */
function showQuestionsPage8() {
  var page = document.getElementById("page-questions8");

  hideAllPages();

  page.style.display = "block";

  console.info("Je bent nu op de vragenpagina deel 8");
}

/**
 * Show questions page 9
 */
function showQuestionsPage9() {
  var page = document.getElementById("page-questions9");

  hideAllPages();

  page.style.display = "block";

  console.info("Je bent nu op de vragenpagina deel 9");
}

/**
 * Show questions page 10
 */
function showQuestionsPage10() {
  var page = document.getElementById("page-questions10");

  hideAllPages();

  page.style.display = "block";

  console.info("Je bent nu op de vragenpagina deel 10");
}

/**
 * Show end page
 */
function showEndPage() {
  var page = document.getElementById("page-end");
  var counter = document.getElementById("live-score");

  hideAllPages();

  page.style.display = "block";
  counter.style.display = "none";

  console.info("Je bent nu op de eindpagina");
}

/**
 * correct ans button 1
 */
function anscorrect() {
  var buttonNext = document.getElementById("button-next");
  var ansButton1 = document.getElementById("button-ans1");
  var ansButton2 = document.getElementById("button-ans2");
  var ansButton3 = document.getElementById("button-ans3");
  var correctAnsButton = document.getElementById("button-correctans");

  correctAnsButton.style.backgroundColor = "green";
  buttonNext.style.display = "";
  console.info("correct");
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";
  addScore();
}

/**
 * wrong ans 1 button
 */
function answrong1() {
  var buttonNext = document.getElementById("button-next");
  var ansButton1 = document.getElementById("button-ans1");
  var ansButton2 = document.getElementById("button-ans2");
  var ansButton3 = document.getElementById("button-ans3");
  var correctAnsButton = document.getElementById("button-correctans");

  correctAnsButton.style.backgroundColor = "green";
  ansButton1.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("1 was wrong");
}

/**
 * wrong ans 2 button
 */
function answrong2() {
  var ansButton1 = document.getElementById("button-ans1");
  var ansButton2 = document.getElementById("button-ans2");
  var ansButton3 = document.getElementById("button-ans3");
  var correctAnsButton = document.getElementById("button-correctans");
  var buttonNext = document.getElementById("button-next");

  correctAnsButton.style.backgroundColor = "green";
  ansButton2.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("2 was wrong");
}

/**
 * wrong ans 3 button
 */
function answrong3() {
  var ansButton1 = document.getElementById("button-ans1");
  var ansButton2 = document.getElementById("button-ans2");
  var ansButton3 = document.getElementById("button-ans3");
  var correctAnsButton = document.getElementById("button-correctans");
  var buttonNext = document.getElementById("button-next");

  correctAnsButton.style.backgroundColor = "green";
  ansButton3.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("3 was wrong");
}

/**
 * correct ans button 2
 */
function anscorrect2() {
  var buttonNext = document.getElementById("button-next-2");
  var ansButton1 = document.getElementById("button-ans1-2");
  var ansButton2 = document.getElementById("button-ans2-2");
  var ansButton3 = document.getElementById("button-ans3-2");
  var correctAnsButton = document.getElementById("button-correctans-2");

  correctAnsButton.style.backgroundColor = "green";
  buttonNext.style.display = "";
  console.info("correct");
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";
  addScore();
}

/**
 * wrong ans 1 button 2
 */
function answrong12() {
  var buttonNext = document.getElementById("button-next-2");
  var ansButton1 = document.getElementById("button-ans1-2");
  var ansButton2 = document.getElementById("button-ans2-2");
  var ansButton3 = document.getElementById("button-ans3-2");
  var correctAnsButton = document.getElementById("button-correctans-2");

  correctAnsButton.style.backgroundColor = "green";
  ansButton1.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("1 was wrong");
}

/**
 * wrong ans 2 button 2
 */
function answrong22() {
  var ansButton1 = document.getElementById("button-ans1-2");
  var ansButton2 = document.getElementById("button-ans2-2");
  var ansButton3 = document.getElementById("button-ans3-2");
  var correctAnsButton = document.getElementById("button-correctans-2");
  var buttonNext = document.getElementById("button-next-2");

  correctAnsButton.style.backgroundColor = "green";
  ansButton2.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("2 was wrong");
}

/**
 * wrong ans 3 button 2
 */
function answrong32() {
  var ansButton1 = document.getElementById("button-ans1-2");
  var ansButton2 = document.getElementById("button-ans2-2");
  var ansButton3 = document.getElementById("button-ans3-2");
  var correctAnsButton = document.getElementById("button-correctans-2");
  var buttonNext = document.getElementById("button-next-2");

  correctAnsButton.style.backgroundColor = "green";
  ansButton3.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("3 was wrong");
}

/**
 * correct ans button 3
 */
function anscorrect3() {
  var buttonNext = document.getElementById("button-next-3");
  var ansButton1 = document.getElementById("button-ans1-3");
  var ansButton2 = document.getElementById("button-ans2-3");
  var ansButton3 = document.getElementById("button-ans3-3");
  var correctAnsButton = document.getElementById("button-correctans-3");

  correctAnsButton.style.backgroundColor = "green";
  buttonNext.style.display = "";
  console.info("correct");
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";
  addScore();
}

/**
 * wrong ans 1 button 3
 */
function answrong13() {
  var buttonNext = document.getElementById("button-next-3");
  var ansButton1 = document.getElementById("button-ans1-3");
  var ansButton2 = document.getElementById("button-ans2-3");
  var ansButton3 = document.getElementById("button-ans3-3");
  var correctAnsButton = document.getElementById("button-correctans-3");

  correctAnsButton.style.backgroundColor = "green";
  ansButton1.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("1 was wrong");
}

/**
 * wrong ans 2 button 3
 */
function answrong23() {
  var ansButton1 = document.getElementById("button-ans1-3");
  var ansButton2 = document.getElementById("button-ans2-3");
  var ansButton3 = document.getElementById("button-ans3-3");
  var correctAnsButton = document.getElementById("button-correctans-3");
  var buttonNext = document.getElementById("button-next-3");

  correctAnsButton.style.backgroundColor = "green";
  ansButton2.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("2 was wrong");
}

/**
 * wrong ans 3 button 3
 */
function answrong33() {
  var ansButton1 = document.getElementById("button-ans1-3");
  var ansButton2 = document.getElementById("button-ans2-3");
  var ansButton3 = document.getElementById("button-ans3-3");
  var correctAnsButton = document.getElementById("button-correctans-3");
  var buttonNext = document.getElementById("button-next-3");

  correctAnsButton.style.backgroundColor = "green";
  ansButton3.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("3 was wrong");
}

/**
 * correct ans button 4
 */
function anscorrect4() {
  var buttonNext = document.getElementById("button-next-4");
  var ansButton1 = document.getElementById("button-ans1-4");
  var ansButton2 = document.getElementById("button-ans2-4");
  var ansButton3 = document.getElementById("button-ans3-4");
  var correctAnsButton = document.getElementById("button-correctans-4");

  correctAnsButton.style.backgroundColor = "green";
  buttonNext.style.display = "";
  console.info("correct");
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";
  addScore();
}

/**
 * wrong ans 1 button 4
 */
function answrong14() {
  var buttonNext = document.getElementById("button-next-4");
  var ansButton1 = document.getElementById("button-ans1-4");
  var ansButton2 = document.getElementById("button-ans2-4");
  var ansButton3 = document.getElementById("button-ans3-4");
  var correctAnsButton = document.getElementById("button-correctans-4");

  correctAnsButton.style.backgroundColor = "green";
  ansButton1.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("1 was wrong");
}

/**
 * wrong ans 2 button 4
 */
function answrong24() {
  var ansButton1 = document.getElementById("button-ans1-4");
  var ansButton2 = document.getElementById("button-ans2-4");
  var ansButton3 = document.getElementById("button-ans3-4");
  var correctAnsButton = document.getElementById("button-correctans-4");
  var buttonNext = document.getElementById("button-next-4");

  correctAnsButton.style.backgroundColor = "green";
  ansButton2.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("2 was wrong");
}

/**
 * wrong ans 3 button 4
 */
function answrong34() {
  var ansButton1 = document.getElementById("button-ans1-4");
  var ansButton2 = document.getElementById("button-ans2-4");
  var ansButton3 = document.getElementById("button-ans3-4");
  var correctAnsButton = document.getElementById("button-correctans-4");
  var buttonNext = document.getElementById("button-next-4");

  correctAnsButton.style.backgroundColor = "green";
  ansButton3.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("3 was wrong");
}

/**
 * correct ans button 5
 */
function anscorrect5() {
  var buttonNext = document.getElementById("button-next-5");
  var ansButton1 = document.getElementById("button-ans1-5");
  var ansButton2 = document.getElementById("button-ans2-5");
  var ansButton3 = document.getElementById("button-ans3-5");
  var correctAnsButton = document.getElementById("button-correctans-5");

  correctAnsButton.style.backgroundColor = "green";
  buttonNext.style.display = "";
  console.info("correct");
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";
  addScore();
}

/**
 * wrong ans 1 button 5
 */
function answrong15() {
  var buttonNext = document.getElementById("button-next-5");
  var ansButton1 = document.getElementById("button-ans1-5");
  var ansButton2 = document.getElementById("button-ans2-5");
  var ansButton3 = document.getElementById("button-ans3-5");
  var correctAnsButton = document.getElementById("button-correctans-5");

  correctAnsButton.style.backgroundColor = "green";
  ansButton1.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("1 was wrong");
}

/**
 * wrong ans 2 button 5
 */
function answrong25() {
  var ansButton1 = document.getElementById("button-ans1-5");
  var ansButton2 = document.getElementById("button-ans2-5");
  var ansButton3 = document.getElementById("button-ans3-5");
  var correctAnsButton = document.getElementById("button-correctans-5");
  var buttonNext = document.getElementById("button-next-5");

  correctAnsButton.style.backgroundColor = "green";
  ansButton2.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("2 was wrong");
}

/**
 * wrong ans 3 button 5
 */
function answrong35() {
  var ansButton1 = document.getElementById("button-ans1-5");
  var ansButton2 = document.getElementById("button-ans2-5");
  var ansButton3 = document.getElementById("button-ans3-5");
  var correctAnsButton = document.getElementById("button-correctans-5");
  var buttonNext = document.getElementById("button-next-5");

  correctAnsButton.style.backgroundColor = "green";
  ansButton3.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("3 was wrong");
}

/**
 * correct ans button 6
 */
function anscorrect6() {
  var buttonNext = document.getElementById("button-next-6");
  var ansButton1 = document.getElementById("button-ans1-6");
  var ansButton2 = document.getElementById("button-ans2-6");
  var ansButton3 = document.getElementById("button-ans3-6");
  var correctAnsButton = document.getElementById("button-correctans-6");

  correctAnsButton.style.backgroundColor = "green";
  buttonNext.style.display = "";
  console.info("correct");
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";
  addScore();
}

/**
 * wrong ans 1 button 6
 */
function answrong16() {
  var buttonNext = document.getElementById("button-next-6");
  var ansButton1 = document.getElementById("button-ans1-6");
  var ansButton2 = document.getElementById("button-ans2-6");
  var ansButton3 = document.getElementById("button-ans3-6");
  var correctAnsButton = document.getElementById("button-correctans-6");

  correctAnsButton.style.backgroundColor = "green";
  ansButton1.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("1 was wrong");
}

/**
 * wrong ans 2 button 6
 */
function answrong26() {
  var ansButton1 = document.getElementById("button-ans1-6");
  var ansButton2 = document.getElementById("button-ans2-6");
  var ansButton3 = document.getElementById("button-ans3-6");
  var correctAnsButton = document.getElementById("button-correctans-6");
  var buttonNext = document.getElementById("button-next-6");

  correctAnsButton.style.backgroundColor = "green";
  ansButton2.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("2 was wrong");
}

/**
 * wrong ans 3 button 6
 */
function answrong36() {
  var ansButton1 = document.getElementById("button-ans1-6");
  var ansButton2 = document.getElementById("button-ans2-6");
  var ansButton3 = document.getElementById("button-ans3-6");
  var correctAnsButton = document.getElementById("button-correctans-6");
  var buttonNext = document.getElementById("button-next-6");

  correctAnsButton.style.backgroundColor = "green";
  ansButton3.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("3 was wrong");
}

/**
 * correct ans button 7
 */
function anscorrect7() {
  var buttonNext = document.getElementById("button-next-7");
  var ansButton1 = document.getElementById("button-ans1-7");
  var ansButton2 = document.getElementById("button-ans2-7");
  var ansButton3 = document.getElementById("button-ans3-7");
  var correctAnsButton = document.getElementById("button-correctans-7");

  correctAnsButton.style.backgroundColor = "green";
  buttonNext.style.display = "";
  console.info("correct");
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";
  addScore();
}

/**
 * wrong ans 1 button 7
 */
function answrong17() {
  var buttonNext = document.getElementById("button-next-7");
  var ansButton1 = document.getElementById("button-ans1-7");
  var ansButton2 = document.getElementById("button-ans2-7");
  var ansButton3 = document.getElementById("button-ans3-7");
  var correctAnsButton = document.getElementById("button-correctans-7");

  correctAnsButton.style.backgroundColor = "green";
  ansButton1.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("1 was wrong");
}

/**
 * wrong ans 2 button 7
 */
function answrong27() {
  var ansButton1 = document.getElementById("button-ans1-7");
  var ansButton2 = document.getElementById("button-ans2-7");
  var ansButton3 = document.getElementById("button-ans3-7");
  var correctAnsButton = document.getElementById("button-correctans-7");
  var buttonNext = document.getElementById("button-next-7");

  correctAnsButton.style.backgroundColor = "green";
  ansButton2.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("2 was wrong");
}

/**
 * wrong ans 3 button 7
 */
function answrong37() {
  var ansButton1 = document.getElementById("button-ans1-7");
  var ansButton2 = document.getElementById("button-ans2-7");
  var ansButton3 = document.getElementById("button-ans3-7");
  var correctAnsButton = document.getElementById("button-correctans-7");
  var buttonNext = document.getElementById("button-next-7");

  correctAnsButton.style.backgroundColor = "green";
  ansButton3.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("3 was wrong");
}

/**
 * correct ans button 8
 */
function anscorrect8() {
  var buttonNext = document.getElementById("button-next-8");
  var ansButton1 = document.getElementById("button-ans1-8");
  var ansButton2 = document.getElementById("button-ans2-8");
  var ansButton3 = document.getElementById("button-ans3-8");
  var correctAnsButton = document.getElementById("button-correctans-8");

  correctAnsButton.style.backgroundColor = "green";
  buttonNext.style.display = "";
  console.info("correct");
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";
  addScore();
}

/**
 * wrong ans 1 button 8
 */
function answrong18() {
  var buttonNext = document.getElementById("button-next-8");
  var ansButton1 = document.getElementById("button-ans1-8");
  var ansButton2 = document.getElementById("button-ans2-8");
  var ansButton3 = document.getElementById("button-ans3-8");
  var correctAnsButton = document.getElementById("button-correctans-8");

  correctAnsButton.style.backgroundColor = "green";
  ansButton1.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("1 was wrong");
}

/**
 * wrong ans 2 button 8
 */
function answrong28() {
  var ansButton1 = document.getElementById("button-ans1-8");
  var ansButton2 = document.getElementById("button-ans2-8");
  var ansButton3 = document.getElementById("button-ans3-8");
  var correctAnsButton = document.getElementById("button-correctans-8");
  var buttonNext = document.getElementById("button-next-8");

  correctAnsButton.style.backgroundColor = "green";
  ansButton2.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("2 was wrong");
}

/**
 * wrong ans 3 button 8
 */
function answrong38() {
  var ansButton1 = document.getElementById("button-ans1-8");
  var ansButton2 = document.getElementById("button-ans2-8");
  var ansButton3 = document.getElementById("button-ans3-8");
  var correctAnsButton = document.getElementById("button-correctans-8");
  var buttonNext = document.getElementById("button-next-8");

  correctAnsButton.style.backgroundColor = "green";
  ansButton3.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("3 was wrong");
}

/**
 * correct ans button 9
 */
function anscorrect9() {
  var buttonNext = document.getElementById("button-next-9");
  var ansButton1 = document.getElementById("button-ans1-9");
  var ansButton2 = document.getElementById("button-ans2-9");
  var ansButton3 = document.getElementById("button-ans3-9");
  var correctAnsButton = document.getElementById("button-correctans-9");

  correctAnsButton.style.backgroundColor = "green";
  buttonNext.style.display = "";
  console.info("correct");
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";
  addScore();
}

/**
 * wrong ans 1 button 9
 */
function answrong19() {
  var buttonNext = document.getElementById("button-next-9");
  var ansButton1 = document.getElementById("button-ans1-9");
  var ansButton2 = document.getElementById("button-ans2-9");
  var ansButton3 = document.getElementById("button-ans3-9");
  var correctAnsButton = document.getElementById("button-correctans-9");

  correctAnsButton.style.backgroundColor = "green";
  ansButton1.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("1 was wrong");
}

/**
 * wrong ans 2 button 9
 */
function answrong29() {
  var ansButton1 = document.getElementById("button-ans1-9");
  var ansButton2 = document.getElementById("button-ans2-9");
  var ansButton3 = document.getElementById("button-ans3-9");
  var correctAnsButton = document.getElementById("button-correctans-9");
  var buttonNext = document.getElementById("button-next-9");

  correctAnsButton.style.backgroundColor = "green";
  ansButton2.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("2 was wrong");
}

/**
 * wrong ans 3 button 9
 */
function answrong39() {
  var ansButton1 = document.getElementById("button-ans1-9");
  var ansButton2 = document.getElementById("button-ans2-9");
  var ansButton3 = document.getElementById("button-ans3-9");
  var correctAnsButton = document.getElementById("button-correctans-9");
  var buttonNext = document.getElementById("button-next-9");

  correctAnsButton.style.backgroundColor = "green";
  ansButton3.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("3 was wrong");
}

/**
 * correct ans button 10
 */
function anscorrect10() {
  var buttonNext = document.getElementById("button-next-10");
  var ansButton1 = document.getElementById("button-ans1-10");
  var ansButton2 = document.getElementById("button-ans2-10");
  var ansButton3 = document.getElementById("button-ans3-10");
  var correctAnsButton = document.getElementById("button-correctans-10");

  correctAnsButton.style.backgroundColor = "green";
  buttonNext.style.display = "";
  console.info("correct");
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";
  addScore();
}

/**
 * wrong ans 1 button 10
 */
function answrong110() {
  var buttonNext = document.getElementById("button-next-10");
  var ansButton1 = document.getElementById("button-ans1-10");
  var ansButton2 = document.getElementById("button-ans2-10");
  var ansButton3 = document.getElementById("button-ans3-10");
  var correctAnsButton = document.getElementById("button-correctans-10");

  correctAnsButton.style.backgroundColor = "green";
  ansButton1.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("1 was wrong");
}

/**
 * wrong ans 2 button 10
 */
function answrong210() {
  var ansButton1 = document.getElementById("button-ans1-10");
  var ansButton2 = document.getElementById("button-ans2-10");
  var ansButton3 = document.getElementById("button-ans3-10");
  var correctAnsButton = document.getElementById("button-correctans-10");
  var buttonNext = document.getElementById("button-next-10");

  correctAnsButton.style.backgroundColor = "green";
  ansButton2.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("2 was wrong");
}

/**
 * wrong ans 3 button 10
 */
function answrong310() {
  var ansButton1 = document.getElementById("button-ans1-10");
  var ansButton2 = document.getElementById("button-ans2-10");
  var ansButton3 = document.getElementById("button-ans3-10");
  var correctAnsButton = document.getElementById("button-correctans-10");
  var buttonNext = document.getElementById("button-next-10");

  correctAnsButton.style.backgroundColor = "green";
  ansButton3.style.backgroundColor = "red";
  buttonNext.style.display = "";
  correctAnsButton.disabled = true;
  ansButton1.disabled = true;
  ansButton2.disabled = true;
  ansButton3.disabled = true;
  correctAnsButton.style.cursor = "not-allowed";
  ansButton1.style.cursor = "not-allowed";
  ansButton2.style.cursor = "not-allowed";
  ansButton3.style.cursor = "not-allowed";

  console.info("3 was wrong");
}

/**
 * Score counter
 */
var counterDisplayElem = document.getElementById("counter-display");
var count = 0;

updateDisplay();

function addScore() {
  count++;
  updateDisplay();
}

//Update live score
function updateDisplay() {
  counterDisplayElem.innerHTML = "Score: " + count + " punten";
}

//score bar
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
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
      elem.style.width = width + "%";
      elem.innerHTML = width / 10;
      eind.innerHTML = "Gefeliciteerd! Je hebt " + count + " punten gehaald!";
    }
  }
}


//login POGING 2
function login() {
  var naam = document.getElementById("naam").value;
  var patt = /\bs[s1234567890]/g;
  var result = naam.match(patt);
  console.log("naam: " + naam);
  console.log("result: " + result);
  if (result == null || naam == "" || naam == null) {
    console.log("nee deel 1");
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
  console.info(student); // Een Javascript-object met studentnummer, voornaam en achternaam
  var elem = document.getElementById("naam-display-display");
  var naamDisplay = document.getElementById("naam-display");
  elem.innerHTML = "Naam: " + student.firstName + " " + student.lastName;
  showQuestionsPage(); 
  console.log("succesinlog");
  naamDisplay.style.display = "";
  // Schrijf hier de code die uitgevoerd moet worden als het studentnummer klopt
}

/**
* Student number is incorrect
*/
function studentIdentificationFailed(errorMessage) {
  var error = document.getElementById("error");
  error.style.display = "";
  console.error(errorMessage);
  console.log("nee error");

  // Schrijf hier de code die uitgevoerd moet worden als het studentnummer NIET klopt
}

// Initialize
addButtonActions();
showStartPage();