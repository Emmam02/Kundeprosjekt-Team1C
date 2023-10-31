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
        case "mainView":
            mainView();
            break;
        //Quiz Page kategorier
        case "matQuizView":
            matQuizView();
            break;
        case "dyrQuizView":
            dyrQuizView();
            break;
        case "sportQuizView":
            sportQuizView();
            break;
        case "bilQuizView":
            bilQuizView();
            break;
        case "spillQuizView":
            spillQuizView();
            break;
        case "annetQuizView":
            annetQuizView();
            break;
        case "quizFilterView":
            quizFilterView();
            break;
        //Profil
        case "editProfileView":
            editProfileView();
            break;
        case "myProfileView":
            profileView();
            break;
        case "loginView":
            loginView();
            break;
        case "registerView":
            registerView();
            break;
        //Quiz
        case "createQuizView":
            createQuizView();
            break;
        case "myQuizView":
            myQuizView();
            break;
        case "quizView":
            quizView();
            break;
        //Resultat
        case "myResultsView":
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

function changeViewByCategory(category){

}

//End
