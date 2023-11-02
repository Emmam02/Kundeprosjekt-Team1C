"use strict";
//Start

//YYYY:MM:DD:HH:mm:ss
function getCurrentDate() {
  const theDate = new Date();

  let seconds = theDate.getSeconds();
  let minutes = theDate.getMinutes();
  let hours = theDate.getHours();
  //let day = theDate.getDay();
  let day = theDate.getDate();
  let month = theDate.getMonth() + 1;
  let year = theDate.getFullYear();

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + (month + 1);
  }

  let absoluteDate = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
  return absoluteDate;
}

function getQuizByDate() {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
}

function getQuizByPopularity() {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
}

/*
function getQuizByRating() {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
  }
}
*/

function getUsername() {
  if (model.app.username.toString() == (null || "")) {
    model.app.username = "Anonymous";
  } else {
    return model.app.username.toString();
  }
}

function selectQuiz(id) {
  model.app.currentQuizId = id;
  model.app.currentView = "quizView";
}

// let foodQuizes = getFoodQuizes();

// function getFoodQuizes() {
//   return model.data.allQuizes.filter((quiz) => quiz.category == "food");
// }
// function getAnimalQuizes() {
//   return model.data.allQuizes.filter((quiz) => quiz.theme == "Dyr");
// }

// let dyreQuizer = getAnimalQuizes()

//End
