"use strict";
//Start

//Her har dere hvordan man oppdaterer viewen når den skal endres.
//Gi currentView et av navnene som ligger i case for å så oppdatere det med updateView for å hoppe inn i den nye viewen.
//currentView = ""; <-- Siden denne ikke har noen string i seg for øyeblikket vil den hoppe i default og kjøre mainView();
//Samme skjer hvis noe får feil navn (pass på uppercase og lowercase) ^
//currentView = "myProfilePage"; <-- Hopper inn i profileView();
//updateView();

//View
function updateView() {
    switch (model.app.currentView) {
        //Main Page
        case "mainPage":
            mainView();
            break;
        //Quiz Page kategorier
        case "matQuizPage":
            matQuizView();
            break;
        case "dyrQuizPage":
            matQuizView();
            break;
        case "sportQuizPage":
            matQuizView();
            break;
        case "bilQuizPage":
            matQuizView();
            break;
        case "spillQuizPage":
            matQuizView();
            break;
        case "annetQuizPage":
            annetQuizView();
            break;
        //Profil
        case "editProfilePage":
            editProfileView();
            break;
        case "myProfilePage":
            profileView();
            break;
        case "loginPage":
            loginView();
            break;
        case "registerPage":
            registerView();
            break;
        //Quiz
        case "createQuizView":
            createQuizView();
            break;
        case "myQuizPage":
            myQuizView();
            break;
        case "quizPage":
            quizView();
            break;
        //Resultat
        case "myResultsPage":
            myResultsView();
            break;
        //Default hvis ingen blir funnet
        default:
            mainView();
            break; //<-- Lagt til av auto generering av koden. Trengs ikke her
    }
}

updateView();

//Om dere ønsker å skifte fra en view til en annen, har en funksjon blitt laget for å forenkle det.
//Alt som må skrives er hva view/page heter i changeView.
//Eksempel: changeView('loginPage');

function changeView(view) {
    model.app.currentView = view.toString();
    updateView();
}

//End
