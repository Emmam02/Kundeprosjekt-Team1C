let newQuiz = model.input.createQuizView;
let interactionText = "";

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
    createQuizContainer.innerHTML = /*HTML*/ `
      <input type="text" placeholder="Spørsmål" oninput="(newQuiz.questions[0].theQuestion =
          this.value)" >
      <input type="text" placeholder="Last opp spørsmåls bilde" oninput="(newQuiz.questions[0].questionImage =
          this.value)"></input>
      <div class="answer">
      <input type="text" placeholder="Svar1" oninput="(newQuiz.questions[0].answers[0].answerText =
          this.value)"></input>
          <select onchange="(newQuiz.questions[0].answers[0].color =
              this.value)">
              <option value="${model.data.colors[0]}">Rød</option>
              <option value="${model.data.colors[1]}">Blå</option>
              <option value="${model.data.colors[2]}">Gul</option>
              <option value="${model.data.colors[3]}">Oransje</option>
          </select>
      </div>
      <div class="answer">
          <input type="text" placeholder="Svar2"oninput="(newQuiz.questions[0].answers[1].answerText =
              this.value)"></input>
          <select onchange="(newQuiz.questions[0].answers[1].color =
              this.value)">
              <option value="${model.data.colors[0]}">Rød</option>
              <option value="${model.data.colors[1]}">Blå</option>
              <option value="${model.data.colors[2]}">Gul</option>
              <option value="${model.data.colors[3]}">Oransje</option>
          </select>
      </div>
      <div class="answer">
          <input type="text" placeholder="Svar3"oninput="(newQuiz.questions[0].answers[2].answerText =
              this.value)"></input>
          <select onchange="(newQuiz.questions[0].answers[2].color =
              this.value)">
              <option value="${model.data.colors[0]}">Rød</option>
              <option value="${model.data.colors[1]}">Blå</option>
              <option value="${model.data.colors[2]}">Gul</option>
              <option value="${model.data.colors[3]}">Oransje</option>
          </select>
      </div>
      <div class="answer">
          <input type="text" placeholder="Svar4" oninput="(newQuiz.questions[0].answers[3].answerText =
              this.value)"></input>
          <select onchange="(newQuiz.questions[0].answers[3].color =
              this.value)">
              <option value="${model.data.colors[0]}">Rød</option>
              <option value="${model.data.colors[1]}">Blå</option>
              <option value="${model.data.colors[2]}">Gul</option>
              <option value="${model.data.colors[3]}">Oransje</option>
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

    setInteractionText(`Spørsmål lagt til!`);
    setTimeout(() => {
        setInteractionText("");
    }, 2000);
}

function setInteractionText(text) {
    document.getElementById("interactionText").innerText = text;
}

//A certain snake was here
function checkAndSubmit(){
    if (newQuiz.image == (null || "")) {
        notifyMessages('');
    }else if(newQuiz){
        notifyMessages('');
    }else if(newQuiz){
        notifyMessages('');
    }else if(newQuiz){
        notifyMessages('');
    }else if(newQuiz){
        notifyMessages('');
    }else if(newQuiz){
        notifyMessages('');
    }else if(newQuiz){
        notifyMessages('');
    }else if(newQuiz){
        notifyMessages('');
    }else{
        submit();
    }
}

function notifyMessages(errorMessage){
    setInteractionText(errorMessage);
    setTimeout(() => {
        setInteractionText("");
    }, 2000);
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
