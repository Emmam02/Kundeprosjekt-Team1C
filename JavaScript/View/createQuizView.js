function createQuizView() {
<<<<<<< Updated upstream
    app.innerHTML = /*HTML*/ `
        <h1 class="gameQuizContainer"> Lag din egen Quiz!</h1>
=======
  app.innerHTML = /*HTML*/ `
  <div id="createYourOwnQuizContainer">
  <h1 class="gameQuizContainer">Lag din egen quiz</h1>

  <div class=""
>>>>>>> Stashed changes
        <input id="quizTitle" type="text" placeholder="Quiz Navn" oninput="(newQuiz.title =
            this.value)" required></input>
            
           <select id="quizTheme" oninput="(newQuiz.theme =
            this.value)" required>
            <option value="${model.data.allCategories[0].name}">Mat</option>
            <option value="${model.data.allCategories[1].name}">Dyr</option>
            <option value="${model.data.allCategories[2].name}">Sport</option>
            <option value="${model.data.allCategories[3].name}">Biler</option>
            <option value="${model.data.allCategories[4].name}">Spill</option>
            <option value="${model.data.allCategories[5].name}">Annet</option>
        </select>
<<<<<<< Updated upstream
        <input id="quizImage" type="text" placeholder="Last opp Quiz bilde"oninput="(newQuiz.image =
          this.value)"required></input>
        <button onclick="clearQuestions()">Legg til spørsmål</button>
        
        <label class="switch">
        <input onclick="togglePrivate()" type="checkbox">
        <span class="slider round"></span>
        </label>
        <div id="togglePrivate" class="private"> Privat/Offentlig</div>
            
        <div id="questions-container">
        <!-- hsnush -->
            <input type="text" placeholder="Spørsmål" oninput="(newQuiz.questions[0].theQuestion =
                this.value)" >
            <input type="text" placeholder="Last opp Spørsmålsbilde" oninput="(newQuiz.questions[0].questionImage =
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
=======
        

        <input id="createQuizImage" type="text" placeholder="Legg til hovedbilde(URL)"oninput="(newQuiz.image =
          this.value)"required></input>
        
        
            
        <div id="questions-container">
        <!-- hsnush -->
            <input type="text" placeholder="Spørsmål"oninput="(newQuiz.questions[0].theQuestion =
                this.value)" >
            <input type="text" placeholder="Legg til spørsmålsbilde(URL)" oninput="(newQuiz.questions[0].questionImage =
                this.value)"></input>
            <div class="answer">
            <input type="text" placeholder="Svaralternativ 1" oninput="(newQuiz.questions[0].answers[0].answerText =
                this.value)"></input>
                <select onchange="(newQuiz.questions[0].answers[0].color =
                    this.value)">
                    <option data-color="RED" value="${model.data.colors[0]}">Rød</option>
                    <option class="BLUE" value="${model.data.colors[1]}">Blå</option>
                    <option class="YELLOW"value="${model.data.colors[2]}">Gul</option>
                    <option class="ORANGE"value="${model.data.colors[3]}">Orange</option>
                </select>
            </div>
            <div class="answer">
                <input type="text" placeholder="Svaralternativ 2"oninput="(newQuiz.questions[0].answers[1].answerText =
>>>>>>> Stashed changes
                    this.value)"></input>
                <select onchange="(newQuiz.questions[0].answers[1].color =
                    this.value)">
                    <option value="${model.data.colors[0]}">Rød</option>
                    <option value="${model.data.colors[1]}">Blå</option>
                    <option value="${model.data.colors[2]}">Gul</option>
<<<<<<< Updated upstream
                    <option value="${model.data.colors[3]}">Oransje</option>
                </select>
            </div>
            <div class="answer">
                <input type="text" placeholder="Svar3"oninput="(newQuiz.questions[0].answers[2].answerText =
=======
                    <option value="${model.data.colors[3]}">Orange</option>
                </select>
            </div>
            <div class="answer">
                <input type="text" placeholder="Svaralternativ 3"oninput="(newQuiz.questions[0].answers[2].answerText =
>>>>>>> Stashed changes
                    this.value)"></input>
                <select onchange="(newQuiz.questions[0].answers[2].color =
                    this.value)">
                    <option value="${model.data.colors[0]}">Rød</option>
                    <option value="${model.data.colors[1]}">Blå</option>
                    <option value="${model.data.colors[2]}">Gul</option>
<<<<<<< Updated upstream
                    <option value="${model.data.colors[3]}">Oransje</option>
                </select>
            </div>
            <div class="answer">
                <input type="text" placeholder="Svar4" oninput="(newQuiz.questions[0].answers[3].answerText =
=======
                    <option value="${model.data.colors[3]}">Orange</option>
                </select>
            </div>
            <div class="answer">
                <input type="text" placeholder="Svaralternativ 4" oninput="(newQuiz.questions[0].answers[3].answerText =
>>>>>>> Stashed changes
                    this.value)"></input>
                <select onchange="(newQuiz.questions[0].answers[3].color =
                    this.value)">
                    <option value="${model.data.colors[0]}">Rød</option>
                    <option value="${model.data.colors[1]}">Blå</option>
                    <option value="${model.data.colors[2]}">Gul</option>
<<<<<<< Updated upstream
                    <option value="${model.data.colors[3]}">Oransje</option>
                </select>
=======
                    <option value="${model.data.colors[3]}">Orange</option>
                </select><br>
                <button onclick="clearQuestions()">Legg til spørsmål</button>
                
>>>>>>> Stashed changes
            </div>
            <!-- hsnush -->
        </div>
        
        
<<<<<<< Updated upstream
        <p class="temp-class" onclick="changeView('mainView')">Tilbake</p>
        <p class="temp-class " onclick="changeView('quizView')">Forhåndsvis Quiz</p>

    <div id="resultsContainer">
        <div id="resultRed">Resultat Rød:
            <input oninput="(newQuiz.results[0].result =
                this.value)" placeholder="resultat"></input>
            <input oninput="(newQuiz.results[0].resultimage =
                this.value)" placeholder="resultat bilde"></input>
        </div>
        <div id="resultBlue">Resultat Blå:
            <input oninput="(newQuiz.results[1].result =
                this.value)" placeholder="resultat"></input>
            <input oninput="(newQuiz.results[1].resultimage =
                this.value)" placeholder="resultat bilde"></input>
        </div>
        <div id="resultYellow">Resultat Gul:
            <input oninput="(newQuiz.results[2].result =
                this.value)" placeholder="resultat"></input>
            <input oninput="(newQuiz.results[2].resultimage =
                this.value)" placeholder="resultat bilde"></input>
        </div>
        <div id="resultOrange">Resultat Oransje:
            <input oninput="(newQuiz.results[3].result =
                this.value)" placeholder="resultat"></input>
            <input oninput="(newQuiz.results[3].resultimage =
                this.value)" placeholder="resultat bilde"></input>
        </div>
    </div>
    <span id="interactionText"></span>
    <button onclick="submit()" type="submit">Godkjenn</button>

    `;
}
=======
        

    <div id="resultsContainer">
        <div id="resultRed">Resultat for Rød  ‎ ‎ ‎ ‎ ‎ ‎:
            <input oninput="(newQuiz.results[0].result =
                this.value)" placeholder="Resultat text"></input>
            <input oninput="(newQuiz.results[0].resultimage =
                this.value)" placeholder="Resultat bilde(URL)"></input>
        </div>
        <div id="resultBlue">Resultat for Blå ‎ ‎ ‎ ‎ ‎ ‎ ‎:
            <input oninput="(newQuiz.results[1].result =
                this.value)" placeholder="Resultat text"></input>
            <input oninput="(newQuiz.results[1].resultimage =
                this.value)" placeholder="Resultat bilde(URL)"></input>
        </div>
        <div id="resultYellow">Resultat for Gul ‎ ‎ ‎ ‎ ‎ ‎  :
            <input oninput="(newQuiz.results[2].result =
                this.value)" placeholder="Resultat text"></input>
            <input oninput="(newQuiz.results[2].resultimage =
                this.value)" placeholder="Resultat bilde(URL)"></input>
        </div>
        <div id="resultOrange">Resultat for Orange:
            <input oninput="(newQuiz.results[3].result =
                this.value)" placeholder="Resultat text"></input>
            <input oninput="(newQuiz.results[3].resultimage =
                this.value)" placeholder="Resultat bilde(URL)"></input>
        </div>
    </div>
    <span id="interactionText"></span>
    <span class="lastTolastButtons">
    <p class="tempClass" onclick="changeView('mainView')">Tilbake til hovedmeny</p>
<p class="tempClass" onclick="changeView('quizView')">Preview Quiz</p></span>
        
    <button onclick="submit()" type="submit" class="submitButton">Submit</button>
    <label class="switch">
        <input onclick="togglePrivate()" type="checkbox">
        <span class="slider round"></span>
        </label>
        <div id="togglePrivate" class="private"> Private/Public</div>
</div>
    `;
}

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
  setInteractionText(`Quiz Added Successfully`);
  setTimeout(() => {
    setInteractionText("");
  }, 2000);
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
>>>>>>> Stashed changes
