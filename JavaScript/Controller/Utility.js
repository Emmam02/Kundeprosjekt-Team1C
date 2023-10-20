"use strict";
//Start

//dd:mm:yyyy <-- dag, måned, år //ss:mm:hh <-- Sekund, minutt, time (klokke)
function getCurrentDate() {}

function getQuizByDate() {}

function getQuizByPopularity() {}

function getQuizByRating() {}

function getUsername() {
    if (model.app.username.toString() == (null || "")) {
        model.app.username = "Anonymous";
    } else {
        return model.app.username.toString();
    }
}

//End
