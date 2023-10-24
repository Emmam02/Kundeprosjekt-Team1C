let newQuiz = model.input.createQuizView;

function createQuizView() {
    app.innerHTML = /*HTML*/ `
        <h1 class="gameQuizContainer"> Create Your own Quiz</h1>
        <input id="quizTitle" type="text" placeholder="Quiz Name" oninput="${(newQuiz.title =
            this.value)}" ></input>
        <select id="quizTheme" oninput="${(newQuiz.theme = this.value)}">
            <option value="Mat">Mat</option>
            <option value="Dyr">Dyr</option>
            <option value="Sport">Sport</option>
            <option value="orange">Biler</option>
            <option value="Spill">Spill</option>
            <option value="Annet">Annet</option>
        </select>
        <input id="quizImage" type="text" placeholder="Upload Quiz Image"oninput="${(newQuiz.image =
            this.value)}"></input>
        <button onclick="clearQuestions()">Add question</button>
        <button onclick="submit()"type="submit">Submit</button>
 
        <div>
        <input type="text" placeholder="Question" oninput="${(newQuiz.questions[0].theQuestion =
            this.value)}" >
        <input type="text" placeholder="Upload Question Image" oninput="${(newQuiz.questions[0].questionImage =
            this.value)}"></input>
            <div class="answer">
            <input type="text" placeholder="Answer1" oninput="${(newQuiz.questions[0].answers[0].answerText =
                this.value)}"></input>
                <select onchange="${(newQuiz.questions[0].answers[0].color =
                    this.value)}">
                    <option value="0">Red</option>
                    <option value="1">Blue</option>
                    <option value="2">Yellow</option>
                    <option value="3">Orange</option>
                </select>
            </div>
            <div class="answer">
                <input type="text" placeholder="Answer2"oninput="${(newQuiz.questions[0].answers[1].answerText =
                    this.value)}"></input>
                <select onchange="${(newQuiz.questions[0].answers[1].color =
                    this.value)}">
                    <option value="0">Red</option>
                    <option value="1">Blue</option>
                    <option value="2">Yellow</option>
                    <option value="3">Orange</option>
                </select>
            </div>
            <div class="answer">
                <input type="text" placeholder="Answer3"oninput="${(newQuiz.questions[0].answers[2].answerText =
                    this.value)}"></input>
                <select onchange="${(newQuiz.questions[0].answers[2].color =
                    this.value)}">
                    <option value="0">Red</option>
                    <option value="1">Blue</option>
                    <option value="2">Yellow</option>
                    <option value="3">Orange</option>
                </select>
            </div>
            <div class="answer">
                <input type="text" placeholder="Answer4" oninput="${(newQuiz.questions[0].answers[3].answerText =
                    this.value)}"></input>
                <select onchange="${(newQuiz.questions[0].answers[3].color =
                    this.value)}">
                    <option value="0">Red</option>
                    <option value="1">Blue</option>
                    <option value="2">Yellow</option>
                    <option value="3">Orange</option>
                </select>
            </div>
        </div>
        </div>

        <p class="temp-class" onclick="changeView('mainView')">Tilbake</p>
        <p class="temp-class " onclick="changeView('quizView')">Preview Quiz</p>

    <div id="resultsContainer">
        <div id="resultRed">Result Red:
            <input oninput="${(newQuiz.results[0].result =
                this.value)}" placeholder="result text"></input>
            <input oninput="${(newQuiz.results[0].resultimage =
                this.value)}" placeholder="result image"></input>
        </div>
        <div id="resultBlue">Result Blue:
            <input oninput="${(newQuiz.results[1].result =
                this.value)}" placeholder="result text"></input>
            <input oninput="${(newQuiz.results[1].resultimage =
                this.value)}" placeholder="result image"></input>
        </div>
        <div id="resultYellow">Result Yellow:
            <input oninput="${(newQuiz.results[2].result =
                this.value)}" placeholder="result text"></input>
            <input oninput="${(newQuiz.results[2].resultimage =
                this.value)}" placeholder="result image"></input>
        </div>
        <div id="resultOrange">Result Orange:
            <input oninput="${(newQuiz.results[3].result =
                this.value)}" placeholder="result text"></input>
            <input oninput="${(newQuiz.results[3].resultimage =
                this.value)}" placeholder="result image"></input>
        </div>
    </div>
    `;
}

function clearQuestions() {
    // let newQuestion = structuredClone(newQuiz.questions[0]);
    newQuiz.questions.push(newQuiz.questions[0]);

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

    // newQuiz.questions.push(newQuestion);
}

function submit() {
    model.data.allQuizes.push(model.input.createQuizView);
}

function clearNewQuiz() {
    model.input.createQuizView = {
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
        isPublic: false,
    };
}
