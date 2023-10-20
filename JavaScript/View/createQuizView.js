function createQuizView() {
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
        <input id="quizCreator" type="text" placeholder="Creator" oninput="updateInput('creator', this.value)"></input>
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
    model.input.createQuizView.creator =
        document.getElementById("quizCreator").value;

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

    giveQuizId();
    model.data.allQuizes.push({ ...model.input.createQuizView });

    clearAllQuizes();
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
