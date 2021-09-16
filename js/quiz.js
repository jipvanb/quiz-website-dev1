"use strict"

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
}

/**
 * Hide all pages
 */
function hideAllPages() {
    var startPage = document.getElementById('page-start');
    var questionsPage = document.getElementById('page-questions');
    var buttonNext = document.getElementById('button-next');

    startPage.style.display = 'none';
    questionsPage.style.display = 'none';
    buttonNext.style.display = 'none';
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

    hideAllPages();

    correctAnsButton.style.backgroundColor = "";
    ansButton1.style.backgroundColor = "";
    ansButton2.style.backgroundColor = "";
    ansButton3.style.backgroundColor = "";

    page.style.display = 'block';

    console.info('Je bent nu op de startpagina');
}

/**
 * Show questions page
 */
function showQuestionsPage() {
    var page = document.getElementById('page-questions');

    hideAllPages();

    page.style.display = 'block';

    console.info('Je bent nu op de vragenpagina');
}

function anscorrect() {
    var correctAnsButton = document.getElementById('button-correctans');
    var buttonNext = document.getElementById('button-next');

    correctAnsButton.style.backgroundColor = "lightgreen";
    buttonNext.style.display = '';
    console.info('correct');
}

function answrong1() {
    var ansButton1 = document.getElementById('button-ans1');
    var correctAnsButton = document.getElementById('button-correctans');
    var buttonNext = document.getElementById('button-next');

    correctAnsButton.style.backgroundColor = "lightgreen";
    ansButton1.style.backgroundColor = "red";
    buttonNext.style.display = '';
    
    console.info('1 was wrong');
}

function answrong2() {
    var ansButton2 = document.getElementById('button-ans2');
    var correctAnsButton = document.getElementById('button-correctans');
    var buttonNext = document.getElementById('button-next');

    correctAnsButton.style.backgroundColor = "lightgreen";
    ansButton2.style.backgroundColor = "red";
    buttonNext.style.display = '';
    
    console.info('2 was wrong');
}

function answrong3() {
    var ansButton3 = document.getElementById('button-ans3');
    var correctAnsButton = document.getElementById('button-correctans');
    var buttonNext = document.getElementById('button-next');

    correctAnsButton.style.backgroundColor = "lightgreen";
    ansButton3.style.backgroundColor = "red";
    buttonNext.style.display = '';
    
    console.info('3 was wrong');
}

// Initialize
addButtonActions();
showStartPage();