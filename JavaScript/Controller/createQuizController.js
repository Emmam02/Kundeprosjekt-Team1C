function togglePrivate() {
    let togglePrivate = document.getElementById("togglePrivate");
    if (newQuiz.isPublic == false) {
        newQuiz.isPublic = true;
        togglePrivate.innerText = `Public`;
    } else if (newQuiz.isPublic == true) {
        togglePrivate.innerText = `Private`;
        newQuiz.isPublic = false;
    }
}

function newQuestions() {
    const createQuizContainer = document.getElementById("questions-container");
    createQuizContainer.innerHTML = /*HTML*/ `
      <input type="text" placeholder="Question" oninput="(newQuiz.questions[0].theQuestion =
          this.value)" >
      <input type="text" placeholder="Upload Question Image" oninput="(newQuiz.questions[0].questionImage =
          this.value)"></input>
      <div class="answer">
      <input type="text" placeholder="Answer1" oninput="(newQuiz.questions[0].answers[0].answerText =
          this.value)"></input>
          <select onchange="(newQuiz.questions[0].answers[0].color =
              this.value)">
              <option value="${model.data.colors[0]}">Red</option>
              <option value="${model.data.colors[1]}">Blue</option>
              <option value="${model.data.colors[2]}">Yellow</option>
              <option value="${model.data.colors[3]}">Orange</option>
          </select>
      </div>
      <div class="answer">
          <input type="text" placeholder="Answer2"oninput="(newQuiz.questions[0].answers[1].answerText =
              this.value)"></input>
          <select onchange="(newQuiz.questions[0].answers[1].color =
              this.value)">
              <option value="${model.data.colors[0]}">Red</option>
              <option value="${model.data.colors[1]}">Blue</option>
              <option value="${model.data.colors[2]}">Yellow</option>
              <option value="${model.data.colors[3]}">Orange</option>
          </select>
      </div>
      <div class="answer">
          <input type="text" placeholder="Answer3"oninput="(newQuiz.questions[0].answers[2].answerText =
              this.value)"></input>
          <select onchange="(newQuiz.questions[0].answers[2].color =
              this.value)">
              <option value="${model.data.colors[0]}">Red</option>
              <option value="${model.data.colors[1]}">Blue</option>
              <option value="${model.data.colors[2]}">Yellow</option>
              <option value="${model.data.colors[3]}">Orange</option>
          </select>
      </div>
      <div class="answer">
          <input type="text" placeholder="Answer4" oninput="(newQuiz.questions[0].answers[3].answerText =
              this.value)"></input>
          <select onchange="(newQuiz.questions[0].answers[3].color =
              this.value)">
              <option value="${model.data.colors[0]}">Red</option>
              <option value="${model.data.colors[1]}">Blue</option>
              <option value="${model.data.colors[2]}">Yellow</option>
              <option value="${model.data.colors[3]}">Orange</option>
          </select>
      </div>
      <!-- hsnush -->
      `;
}

function clearThis(target) {
    document.getElementById(target).innerHTML = "";
    //target.value = "";
}
function clearQuestions() {
    newQuiz.questions.push(newQuiz.questions[0]);

    //10
    //21

    clearThis("questions-container");
    newQuestions();

    newQuiz.questions[0] = {
        questionID: null,
        theQuestion: "",
        questionImage: "",
        answers: [
            {
                answerID: null,
                answerText: " ",
                color: "",
            },
            {
                answerID: null,
                answerText: "",
                color: "",
            },
            {
                answerID: null,
                answerText: "",
                color: "",
            },
            {
                answerID: null,
                answerText: "",
                color: "",
            },
        ],
    };

    console.log("Test: " + newQuiz.theme);

    setInteractionText(`Question Added Successfully`);
    setTimeout(() => {
        setInteractionText("");
    }, 2000);
}

function setInteractionText(text) {
    document.getElementById("interactionText").innerText = text;
}

function submit() {
    newQuiz.id = generateUniqueId();
    newQuiz.creator = getUsername();
    newQuiz.date = getCurrentDate();
    model.data.allQuizes.push(newQuiz);
    model.app.currentQuizId = newQuiz.id;
    getQuiz();
    quizView();
}

function generateUniqueId() {
    return Math.floor(Math.random() * Date.now());
}

function clearNewQuiz() {
    newQuiz = {
        id: null,
        title: "",
        creator: "",
        image: "",
        theme: "",
        date: "",
        questions: [
            {
                questionID: null,
                theQuestion: "",
                questionImage: "",
                answers: [
                    {
                        answerID: null,
                        answerText: " ",
                        color: "",
                    },
                    {
                        answerID: null,
                        answerText: "",
                        color: "",
                    },
                    {
                        answerID: null,
                        answerText: "",
                        color: "",
                    },
                    {
                        answerID: null,
                        answerText: "",
                        color: "",
                    },
                ],
            },
        ],
        results: [
            {
                id: null,
                result: "",
                resultimage: "", //URL Lenke i string (eller eksisterende importert bilde til nettsiden)
            },
        ],
        isPublic: true,
    };
    setInteractionText(`Question Added Successfully`);
    setTimeout(() => {
        setInteractionText("");
    }, 2000);
}
