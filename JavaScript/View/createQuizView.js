function createQuizView() {
    currentQuiz();
    giveQuizId();
    app.innerHTML = /*HTML*/ `
        <h1 class="gameQuizContainer"> Create Your own Quiz</h1>
        <input id="quizTitle" type="text" placeholder="Quiz Name" oninput="updateInput('title', this.value)"></input>
        <select id="quizTheme" oninput="updateInput('theme', this.value)">
            <option value="Mat">Mat</option>
            <option value="Dyr">Dyr</option>
            <option value="Sport">Sport</option>
            <option value="orange">Biler</option>
            <option value="Spill">Spill</option>
            <option value="Annet">Annet</option>
        </select>
        <input id="quizImage" type="text" placeholder="Upload Quiz Image" oninput="updateInput('image', this.value)"></input>
        <div id="questionsContainer"></div>
        <button onclick="addQuestion()">Add question</button>
        <button onclick="submitQuiz()" type="submit">Submit</button>
        <p class="temp-class" onclick="changeView('mainView')">Tilbake</p>
        <p class="temp-class" onclick="changeView('quizView')">Preview Quiz</p>
    `;
}

function updateInput(key, value) {
    model.input.createQuizView[key] = value;
}

function updateTheme() {
    theme = model.data.allCategories.value;
    return theme;
}

function submitQuiz() {
    model.input.createQuizView.title =
        document.getElementById("quizTitle").value;
    model.input.createQuizView.theme =
        document.getElementById("quizTheme").value;
    model.input.createQuizView.image =
        document.getElementById("quizImage").value;
    model.input.createQuizView.creator = getUsername();
    model.input.createQuizView.date = getCurrentDate();

    const questionsContainer = document.getElementById("questionsContainer");
    model.input.createQuizView.questions = Array.from(
        questionsContainer.children
    ).map((questionContainer) => {
        const questionId =
            questionContainer.querySelector('input[type="text"]').id;
        const questionIndex = model.input.createQuizView.questions.findIndex(
            (q) => q.questionID === questionId
        );
        return model.input.createQuizView.questions[questionIndex];
    });

    model.data.allQuizes.push({ ...model.input.createQuizView });

    clearAllQuizes();
}
function currentQuiz() {
    return model.data.currentQuiz;
}

function giveQuizId() {
    model.input.createQuizView.id = crypto.randomUUID().toString();
    return model.input.createQuizView.id;
}

function giveUniqueId() {
    return crypto.randomUUID().toString();
}

function addQuestion() {
    const questionContainer = document.createElement("div");
    const questionId = giveUniqueId();

    questionContainer.innerHTML = /*HTML*/ `
        <input id="${questionId}" type="text" placeholder="Question" oninput="updateQuestion('${questionId}', 0)" required></input>
        <input id="${questionId}-image" type="text" placeholder="Upload Question Image" oninput="updateQuestion('${questionId}', 0, true)"></input>
        <div class="answers-container" id="${questionId}-answers">
            <div class="answer">
                <input type="text" placeholder="Answer1" oninput="updateAnswer(${questionId}, 0)"></input>
                <select onchange="updateAnswerColor(${questionId}, 0)">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                </select>
            </div>
            <div class="answer">
                <input type="text" placeholder="Answer2" oninput="updateAnswer(${questionId}, 1)"></input>
                <select onchange="updateAnswerColor(${questionId}, 1)">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                </select>
            </div>
            <div class="answer">
                <input type="text" placeholder="Answer3" oninput="updateAnswer(${questionId}, 2)"></input>
                <select onchange="updateAnswerColor(${questionId}, 2)">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                </select>
            </div>
            <div class="answer">
                <input type="text" placeholder="Answer4" oninput="updateAnswer(${questionId}, 3)"></input>
                <select onchange="updateAnswerColor(${questionId}, 3)">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                </select>
            </div>
        </div>
    `;
    const questionsContainer = document.getElementById("questionsContainer");
    questionsContainer.appendChild(questionContainer);
}

function updateQuestion(questionId, questionIndex, isImage = false) {
    const question = model.input.createQuizView.questions[questionIndex];
    question.theQuestion = document.getElementById(questionId).value;

    if (isImage) {
        question.image = document.getElementById(`${questionId}-image`).value;
    }
}

function updateAnswerColor(questionId, answerIndex) {
    const colorSelect = document.getElementById(
        `${questionId}-color${answerIndex}`
    );
    model.input.createQuizView.questions[0].answers[answerIndex].color =
        colorSelect.value;
}

function clearAllQuizes() {
    model.input.createQuizView = {
        id: null,
        creator: "",
        title: "",
        image: "",
        theme: "",
        rating: 0,
        popularitet: 0,
        date: "",
        questions: [],
    };
    updateView();
}

/*function results() {
    let red = model.data.allQuizes.questions.answers.color["0"];
    let blue = model.data.allQuizes.questions.answers.color["1"];
    let yellow = model.data.allQuizes.questions.answers.color["2"];
    let orange = model.data.allQuizes.questions.answers.color["3"];
    let result = (model.data.allQuizes[currentQuiz].results = userResult);
    //lage redCount, blueCount osvosv
    //Funksjon for å telle svarene fra currentQuiz
    //sjekke counts mot hverandre for å få resultatet
    for (let i = 0; i < model.data.currentQuiz.questions.length; i++) {
        if (model.data.currentQuiz.question[i].answer.color == "0") redCount++;
        if (model.data.currentQuiz.question[i].answer.color == "1") blueCount++;
        if (model.data.currentQuiz.question[i].answer.color == "2") yellowCount++;
        if (model.data.currentQuiz.question[i].answer.color == "3") orangeCount++;
    }
    if (
        redCount > blueCount &&
        redCount > yellowCount &&
        redCount > orangeCount
    ) {
        result = red; // Burde den endres til redResult så vikan linke det til result[index/tall]
    } else if (blue > yellow && orange && red) result = blue;
    else if (yellow > orange && red && blue) result = yellow;

    getResultText();

    //Bare telle når man har trykket på vis resultat
}
*/
function results() {
    // Assuming these are counts for each color
    let redCount = 0;
    let blueCount = 0;
    let yellowCount = 0;
    let orangeCount = 0;
    let red = model.data.allQuizes.questions.answers.color["0"];
    let blue = model.data.allQuizes.questions.answers.color["1"];
    let yellow = model.data.allQuizes.questions.answers.color["2"];
    let orange = model.data.allQuizes.questions.answers.color["3"];

    // Assuming userResult is a variable available in the scope
    let result = (model.data.allQuizes[currentQuiz].results = userResult);

    // Funksjon for å telle svarene fra currentQuiz
    // sjekke counts mot hverandre for å få resultatet
    for (let i = 0; i < model.data.currentQuiz.questions.length; i++) {
        const answerColor = model.data.currentQuiz.questions[i].answer.color;

        // Increment the corresponding count based on the color
        if (answerColor === "0") redCount++;
        else if (answerColor === "1") blueCount++;
        else if (answerColor === "2") yellowCount++;
        else if (answerColor === "3") orangeCount++;
    }

    // Determine the result based on counts
    if (
        redCount > blueCount &&
        redCount > yellowCount &&
        redCount > orangeCount
    ) {
        result = red; // Assuming red is a predefined variable
    } else if (blueCount > yellowCount && blueCount > orangeCount) {
        result = blue; // Assuming blue is a predefined variable
    } else if (yellowCount > orangeCount) {
        result = yellow; // Assuming yellow is a predefined variable
    } else {
        result = orange; // Assuming orange is a predefined variable
    }

    getResultText();

    // Bare telle når man har trykket på vis resultat
}

//Henter resultatet fra nåværende quiz som er lastet inn i currentQuiz
function results2() {
    let red = "0";
    let blue = "1";
    let orange = "2";
    let yellow = "3";

    switch (key) {
        case "0":
            break;
        case "1":
            break;
        case "2":
            break;
        case "3":
            break;
        default:
            break;
    }

    //let red = model.data.allQuizes.questions.answers.color[0];
    //let blue = model.data.allQuizes.questions.answers.color[1];
    //let yellow = model.data.allQuizes.questions.answers.color[2];
    //let orange = model.data.allQuizes.questions.answers.color[3];
    let result = (model.data.allQuizes[currentQuiz].results = userResult);
    //lage redCount, blueCount osvosv
    //Funksjon for å telle svarene fra currentQuiz
    //sjekke counts mot hverandre for å få resultatet
    for (let i = 0; i < model.data.currentQuiz.questions.length; i++) {
        if (model.data.currentQuiz.question[i].answer.color == "0") redCount++;
        if (model.data.currentQuiz.question[i].answer.color == "1") blueCount++;
        if (model.data.currentQuiz.question[i].answer.color == "2")
            yellowCount++;
        if (model.data.currentQuiz.question[i].answer.color == "3")
            orangeCount++;
    }
    if (
        redCount > blueCount &&
        redCount > yellowCount &&
        redCount > orangeCount
    ) {
        result = red; // Burde den endres til redResult så vikan linke det til result[index/tall]
    } else if (blue > yellow && orange && red) result = blue;
    else if (yellow > orange && red && blue) result = yellow;

    getResultText(1);

    //Bare telle når man har trykket på vis resultat
}

function getResultText(color) {
    return model.currentQuiz.results.find((result) => result.id == color);
}

function updateAnswer(questionId, answerIndex) {
    const answerInput = document.getElementById(
        `${questionId}-answer${answerIndex}`
    );
    const answerId = giveUniqueId();

    const newAnswer = {
        answerID: answerId,
        answerText: answerInput.value,
        color: "",
    };

    const questionIndex = model.input.createQuizView.questions.findIndex(
        (question) => question.questionID === questionId
    );

    if (questionIndex !== -1) {
        model.input.createQuizView.questions[questionIndex].answers[
            answerIndex
        ] = newAnswer;
    }
}
