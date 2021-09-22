"use strict";

/**
 * Add actions to page buttons 
 */
function addButtonActions() {
    var startButton = document.getElementById('button-start');
    var questionsButton = document.getElementById('button-questions');
    var ansButton1 = document.getElementById('button-ans1');
    var ansButton2 = document.getElementById('button-ans2');
    var ansButton3 = document.getElementById('button-ans3');
    var correctAnsButton = document.getElementById('button-correctans');
    var nextButton1 = document.getElementById('button-next');
    
    var ansButton12 = document.getElementById('button-ans1-2');
    var ansButton22 = document.getElementById('button-ans2-2');
    var ansButton32 = document.getElementById('button-ans3-2');
    var correctAnsButton2 = document.getElementById('button-correctans-2');
    var nextButton2 = document.getElementById('button-next-2');

    startButton.addEventListener("click", function () {
        showStartPage();
    });
    questionsButton.addEventListener("click", function () {
        showQuestionsPage();
    });
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
}

/**
 * Hide all pages
 */
function hideAllPages() {
    var startPage = document.getElementById('page-start');
    var endPage = document.getElementById('page-end');
    var questionsPage = document.getElementById('page-questions');
    var questionsPage2 = document.getElementById('page-questions2');
    var questionsPage3 = document.getElementById('page-questions3');
    var questionsPage4 = document.getElementById('page-questions4');
    var questionsPage5 = document.getElementById('page-questions5');
    var questionsPage6 = document.getElementById('page-questions6');
    var questionsPage7 = document.getElementById('page-questions7');
    var questionsPage8 = document.getElementById('page-questions8');
    var questionsPage9 = document.getElementById('page-questions9');
    var questionsPage10 = document.getElementById('page-questions10');


    startPage.style.display = 'none';
    questionsPage.style.display = 'none';
    questionsPage2.style.display = 'none';
    questionsPage3.style.display = 'none';
    questionsPage4.style.display = 'none';
    questionsPage5.style.display = 'none';
    questionsPage6.style.display = 'none';
    questionsPage7.style.display = 'none';
    questionsPage8.style.display = 'none';
    questionsPage9.style.display = 'none';
    questionsPage10.style.display = 'none';
    endPage.style.display = 'none';
}

/**
 * Show start page
 */
function showStartPage() {
    var ansButton1 = document.getElementById('button-ans1');
    var ansButton2 = document.getElementById('button-ans2');
    var ansButton3 = document.getElementById('button-ans3');
    var correctAnsButton = document.getElementById('button-correctans');
    var page = document.getElementById('page-start');
    var buttonNext1 = document.getElementById('button-next');
    var buttonNext2 = document.getElementById('button-next-2');
    
    var correctAnsButton2 = document.getElementById('button-correctans-2');
    var ansButton12 = document.getElementById('button-ans1-2');
    var ansButton22 = document.getElementById('button-ans2-2');
    var ansButton32 = document.getElementById('button-ans3-2');
    var buttonNext3 = document.getElementById('button-next-3');
    

    hideAllPages();

    correctAnsButton.style.backgroundColor = "";
    ansButton1.style.backgroundColor = "";
    ansButton2.style.backgroundColor = "";
    ansButton3.style.backgroundColor = "";

    correctAnsButton2.style.backgroundColor = "";
    ansButton12.style.backgroundColor = "";
    ansButton22.style.backgroundColor = "";
    ansButton32.style.backgroundColor = "";


    page.style.display = 'block';
    correctAnsButton.disabled = false;
    ansButton1.disabled = false;
    ansButton2.disabled = false;
    ansButton3.disabled = false;
    buttonNext1.style.display = 'none';
    buttonNext2.style.display = 'none';

    ansButton12.disabled = false;
    ansButton22.disabled = false;
    ansButton32.disabled = false;
    correctAnsButton2.disabled = false;
    buttonNext3.style.display = 'none';

    console.info('Je bent nu op de startpagina');
}

/**
 * Show questions page 1
 */
function showQuestionsPage() {
    var page = document.getElementById('page-questions');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de vragenpagina');
}

/**
 * Show questions page 2
 */
 function showQuestionsPage2() {
    var page = document.getElementById('page-questions2');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de vragenpagina deel 2');
}

/**
 * Show questions page 3
 */
 function showQuestionsPage3() {
    var page = document.getElementById('page-questions3');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de vragenpagina deel 3');
}

/**
 * Show end page
 */
 function showEndPage() {
    var page = document.getElementById('page-end');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de eindpagina');
}

/**
 * correct ans button 1
 */
function anscorrect() {
    var buttonNext = document.getElementById('button-next');
    var ansButton1 = document.getElementById('button-ans1');
    var ansButton2 = document.getElementById('button-ans2');
    var ansButton3 = document.getElementById('button-ans3');
    var correctAnsButton = document.getElementById('button-correctans');

    correctAnsButton.style.backgroundColor = "lightgreen";
    buttonNext.style.display = '';
    console.info('correct');
    correctAnsButton.disabled = true;
    ansButton1.disabled = true;
    ansButton2.disabled = true;
    ansButton3.disabled = true;
}

/**
 * wrong ans 1 button
 */
function answrong1() {
    var buttonNext = document.getElementById('button-next');
    var ansButton1 = document.getElementById('button-ans1');
    var ansButton2 = document.getElementById('button-ans2');
    var ansButton3 = document.getElementById('button-ans3');
    var correctAnsButton = document.getElementById('button-correctans');

    correctAnsButton.style.backgroundColor = "lightgreen";
    ansButton1.style.backgroundColor = "red";
    buttonNext.style.display = '';
    correctAnsButton.disabled = true;
    ansButton1.disabled = true;
    ansButton2.disabled = true;
    ansButton3.disabled = true;
    
    console.info('1 was wrong');
}

/**
 * wrong ans 2 button
 */
function answrong2() {
    var ansButton1 = document.getElementById('button-ans1');
    var ansButton2 = document.getElementById('button-ans2');
    var ansButton3 = document.getElementById('button-ans3');
    var correctAnsButton = document.getElementById('button-correctans');
    var buttonNext = document.getElementById('button-next');

    correctAnsButton.style.backgroundColor = "lightgreen";
    ansButton2.style.backgroundColor = "red";
    buttonNext.style.display = '';
    correctAnsButton.disabled = true;
    ansButton1.disabled = true;
    ansButton2.disabled = true;
    ansButton3.disabled = true;
    
    console.info('2 was wrong');
}

/**
 * wrong ans 3 button
 */
function answrong3() {
    var ansButton1 = document.getElementById('button-ans1');
    var ansButton2 = document.getElementById('button-ans2');
    var ansButton3 = document.getElementById('button-ans3');
    var correctAnsButton = document.getElementById('button-correctans');
    var buttonNext = document.getElementById('button-next');

    correctAnsButton.style.backgroundColor = "lightgreen";
    ansButton3.style.backgroundColor = "red";
    buttonNext.style.display = '';
    correctAnsButton.disabled = true;
    ansButton1.disabled = true;
    ansButton2.disabled = true;
    ansButton3.disabled = true;
    
    console.info('3 was wrong');
}

/**
 * correct ans button 2
 */
 function anscorrect2() {
    var buttonNext = document.getElementById('button-next-2');
    var ansButton1 = document.getElementById('button-ans1-2');
    var ansButton2 = document.getElementById('button-ans2-2');
    var ansButton3 = document.getElementById('button-ans3-2');
    var correctAnsButton = document.getElementById('button-correctans-2');

    correctAnsButton.style.backgroundColor = "lightgreen";
    buttonNext.style.display = '';
    console.info('correct');
    correctAnsButton.disabled = true;
    ansButton1.disabled = true;
    ansButton2.disabled = true;
    ansButton3.disabled = true;
}

/**
 * wrong ans 1 button 2
 */
 function answrong12() {
    var buttonNext = document.getElementById('button-next-2');
    var ansButton1 = document.getElementById('button-ans1-2');
    var ansButton2 = document.getElementById('button-ans2-2');
    var ansButton3 = document.getElementById('button-ans3-2');
    var correctAnsButton = document.getElementById('button-correctans-2');

    correctAnsButton.style.backgroundColor = "lightgreen";
    ansButton1.style.backgroundColor = "red";
    buttonNext.style.display = '';
    correctAnsButton.disabled = true;
    ansButton1.disabled = true;
    ansButton2.disabled = true;
    ansButton3.disabled = true;
    
    console.info('1 was wrong');
}

/**
 * wrong ans 2 button 2
 */
 function answrong22() {
    var ansButton1 = document.getElementById('button-ans1-2');
    var ansButton2 = document.getElementById('button-ans2-2');
    var ansButton3 = document.getElementById('button-ans3-2');
    var correctAnsButton = document.getElementById('button-correctans-2');
    var buttonNext = document.getElementById('button-next-2');

    correctAnsButton.style.backgroundColor = "lightgreen";
    ansButton2.style.backgroundColor = "red";
    buttonNext.style.display = '';
    correctAnsButton.disabled = true;
    ansButton1.disabled = true;
    ansButton2.disabled = true;
    ansButton3.disabled = true;
    
    console.info('2 was wrong');
}

/**
 * wrong ans 3 button 2
 */
 function answrong32() {
    var ansButton1 = document.getElementById('button-ans1-2');
    var ansButton2 = document.getElementById('button-ans2-2');
    var ansButton3 = document.getElementById('button-ans3-2');
    var correctAnsButton = document.getElementById('button-correctans-2');
    var buttonNext = document.getElementById('button-next-2');

    correctAnsButton.style.backgroundColor = "lightgreen";
    ansButton3.style.backgroundColor = "red";
    buttonNext.style.display = '';
    correctAnsButton.disabled = true;
    ansButton1.disabled = true;
    ansButton2.disabled = true;
    ansButton3.disabled = true;
    
    console.info('3 was wrong');
}

// Initialize
addButtonActions();
showStartPage();