let i = 0;
const quiz = model.data.allQuizes[i];

let currentQuestion = 0;

function quizView() {
  app.innerHTML = /*HTML*/ `
    <div class="quizContainer">
     <h1>${quiz.title}</h1>
     <img src="${quiz.image}" class="mainImage" alt="image">
     <button onclick="quizStarted()" class="startQuizButton">Start Quiz!</button>
    `;
}

function quizStarted() {
  app.innerHTML = /*HTML*/ `
    <div class="quizContainer">
    <h1>${quiz.title}</h1>
    <img src="${
      quiz.questions[currentQuestion].questionImage
    }" id="quizImage" alt="image">
    <div class="quizQnAContainer">
    <h2>${getQuizQuestion().theQuestion}</h2>
    <div id="quizAnswerContainer">
    <p>${getQuizAnswers()}</p>
    </div>
    </div>
    <div class="nextAndPrevButtons">
    <button onclick="prevviousQuestion()" class="previousButton">Previous</button>
    <button onclick="nextQuestion()" class="nextButton">Next</button>
    </div> 
    </div>
    `;
}

function getQuizQuestion() {
  return model.data.allQuizes[0].questions[currentQuestion];
}

function getQuizAnswers() {
  let result = "";
  getQuizQuestion().answers.forEach((answer) => {
    result += `
        <div class="quizAnswer" onclick="submitAnswer(this)">${answer.answerText}</div>
        `;
  });
  return result;
}

function submitAnswer(clickedAnswer) {
  const allAnswers = document.querySelectorAll(".quizAnswer");
  allAnswers.forEach((answer) => {
    answer.style.backgroundColor = "#faf0e6";
    answer.style.boxShadow = "0px 0px 0px #888888";
  });
  clickedAnswer.style.backgroundColor = "rgb(231, 199, 199)";
  clickedAnswer.style.boxShadow = "6px 4px 4px #888888";
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("quizImage").innerHTML = quizStarted();
}

function prevviousQuestion() {
  /*Her må det legges til hvilket svar man trykket på
    når man gikk til neste side, så man ser det svaret
    når man går tilbake til den siden.
    
    Hvis vi ønsker å ha den funkjsonen med*/
  currentQuestion--;
  quizStarted();
}
