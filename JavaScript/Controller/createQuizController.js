let newQuiz = model.input.createQuizView;

function togglePrivate() {
    let togglePrivate = document.getElementById("togglePrivate");
    if (newQuiz.isPublic == false) {
        newQuiz.isPublic = true;
        togglePrivate.innerText = `Offentlig`;
    } else if (newQuiz.isPublic == true) {
        togglePrivate.innerText = `Privat`;
        newQuiz.isPublic = false;
    }
}

function newQuestions() {
    const createQuizContainer = document.getElementById("questions-container");
    createQuizContainer.innerHTML = "";
    for (let i = 0; i < newQuiz.questions.length; i++) {
        createQuizContainer.innerHTML = /*HTML*/ `
      <input type="text" placeholder="Spørsmål" oninput="(newQuiz.questions[${i}].theQuestion =
          this.value)" >
      <input type="text" placeholder="Last opp spørsmåls bilde" oninput="(newQuiz.questions[${i}].questionImage =
          this.value)"></input>
      <div class="answer">
      <input type="text" placeholder="Svar1" oninput="(newQuiz.questions[${i}].answers[0].answerText =
          this.value)"></input>
          <select onchange="(newQuiz.questions[${i}].answers[0].color =
              this.value)">
              <option value="${model.data.colors[0]}">Rød</option>
              <option value="${model.data.colors[1]}">Blå</option>
              <option value="${model.data.colors[2]}">Gul</option>
              <option value="${model.data.colors[3]}">Oransje</option>
          </select>
      </div>
      <div class="answer">
          <input type="text" placeholder="Svar2"oninput="(newQuiz.questions[${i}].answers[1].answerText =
              this.value)"></input>
          <select onchange="(newQuiz.questions[${i}].answers[1].color =
              this.value)">
              <option value="${model.data.colors[0]}">Rød</option>
              <option value="${model.data.colors[1]}">Blå</option>
              <option value="${model.data.colors[2]}">Gul</option>
              <option value="${model.data.colors[3]}">Oransje</option>
          </select>
      </div>
      <div class="answer">
          <input type="text" placeholder="Svar3"oninput="(newQuiz.questions[${i}].answers[2].answerText =
              this.value)"></input>
          <select onchange="(newQuiz.questions[${i}].answers[2].color =
              this.value)">
              <option value="${model.data.colors[0]}">Rød</option>
              <option value="${model.data.colors[1]}">Blå</option>
              <option value="${model.data.colors[2]}">Gul</option>
              <option value="${model.data.colors[3]}">Oransje</option>
          </select>
      </div>
      <div class="answer">
          <input type="text" placeholder="Svar4" oninput="(newQuiz.questions[${i}].answers[3].answerText =
              this.value)"></input>
          <select onchange="(newQuiz.questions[${i}].answers[3].color =
              this.value)">
              <option value="${model.data.colors[0]}">Rød</option>
              <option value="${model.data.colors[1]}">Blå</option>
              <option value="${model.data.colors[2]}">Gul</option>
              <option value="${model.data.colors[3]}">Oransje</option>
          </select>
          <button class="addQuestionButton"onclick="clearQuestions()">Legg til spørsmål</button>
      </div>
      <!-- hsnush -->
      `;
    }
}

function clearThis(target) {
    document.getElementById(target).innerHTML = "";
}

function clearQuestions() {
    const newQuestion = {
        theQuestion: "",
        questionImage: "",
        answers: [
            { answerText: "", color: model.data.colors[0] },
            { answerText: "", color: model.data.colors[0] },
            { answerText: "", color: model.data.colors[0] },
            { answerText: "", color: model.data.colors[0] },
        ],
    };

    newQuiz.questions.push(newQuestion);
    clearThis("questions-container");
    newQuestions();
}

/*
function clearQuestions() {
    newQuiz.questions.push(newQuiz.questions[0]);
    clearThis("questions-container");
    newQuestions();
}
*/
function submit() {
    newQuiz.id = generateUniqueId();
    newQuiz.creator = getUsername();
    newQuiz.date = getCurrentDate();
    model.data.allQuizes.push(newQuiz);
    model.app.currentQuizId = newQuiz.id;
    getQuiz(); //<-- Kan hende at vi ikke trenger dette
    quizView();
}

function generateUniqueId() {
    return Math.floor(Math.random() * Date.now());
}
