"use strict";
//Start

let quizRendered = false;

//Koden blir nesten en copy-paste bare at den skifter kategori. Kan garantert sette alt i ett ved å finne en måte å skifte kategori på
function annetQuizView(){
    app.innerHTML = /*HTML*/`
    <div>Hei, denne siden er tom. :></div>
    <div class="link-view" onclick="changeView('mainView')">Tilbake</div>
    <div id="annetQuizList"></div>
    <button id="quizToggler" onclick="addQuizAnnet()">Show quizes</button>
    `;
}

function addQuizAnnet(){
    (quizRendered == true) ? hideQuiz() : renderQuiz();
}

function renderQuiz(){
    const annetQuizList = document.getElementById("annetQuizList");
    const quizToggler = document.getElementById("quizToggler");

    annetQuizList.innerHTML = /*HTML*/ `
    <div>Hei</div>
    `;
    let allQuizes = model.data.allQuizes;
    let quizLength = model.data.allQuizes.length - 1;
    for (let i = 0; i <= quizLength; i++) {
        annetQuizList.innerHTML += /*HTML*/`

        <div class="innerQuiz" id="${allQuizes[i].id}">
            <div class="theQuizTitle">${allQuizes[i].title}</div>
            <div class="theCreator">${allQuizes[i].creator}</div>
            <div class="theCategory">${allQuizes[i].theme}</div>
        </div>
        `;
        console.log("Running index: " + i);
    }

    quizToggler.innerText = "Hide Quiz";

    quizRendered = true;
    console.log("Status:" + quizRendered);
}

function hideQuiz(){
    const annetQuizList = document.getElementById("annetQuizList");
    const quizToggler = document.getElementById("quizToggler");
    annetQuizList.innerHTML = /*HTML*/``;
    quizToggler.innerText = "Show Quiz";

    quizRendered = false;
    console.log(("Status:" + quizRendered).toString());
}

//Do_you_know_the_most_common_symptoms_of_stress_in_dogs__Read_our_list_and_relax <--- Hvor kom denne fra?
//End