function createQuizView() {
    app.innerHTML = /*HTML*/ `
    <h1> Create Your own Quiz</h1>
    <input type="text" placeholder="Quiz Name" oninput=${model.input.quizView.title}></input>
    <input type="text" placeholder="choose Category" oninput=${model.input.quizView.theme}></input>
    <input type="text" placeholder="Upload Quiz Image" oninput=${model.input.quizView.bilde}></input>
    <div id="questions-container"></div>
    <button onclick="addQuestion()">Add question</button>
    <button type="submit">Submit</button>
    `;
}

function addQuestion() {
    const questionContainer = document.createElement("div");
    const questionId = `question-${Date.now()}`;
    questionContainer.innerHTML = /*HTML*/ `
    <input id="${model.input.quizView.questions.questionID}" type="text" placeholder="Question"oninput=${model.input.quizView.questions.theQuestion} required></input>
    <input id="${model.input.quizView.questions.bilde}" type="text" placeholder="Upload Question Image" oninput=${model.input.quizView.questions.bilde}></button>
    <input id="${model.input.quizView.questions[0].answers[0].answerID}" type="text" placeholder="Answer1" oninput="${model.input.quizView.questions[0].answers[0].answerText}" required></input>
    <input id="${model.input.quizView.questions[0].answers[1].answerID}" type="text" placeholder="Answer2" oninput="${model.input.quizView.questions[0].answers[1].answerText}" required></input>
    <input id="${model.input.quizView.questions[0].answers[2].answerID}" type="text" placeholder="Answer3" oninput="${model.input.quizView.questions[0].answers[2].answerText}" required></input>
    <input id="${model.input.quizView.questions[0].answers[3].answerID}" type="text" placeholder="Answer4" oninput="${model.input.quizView.questions[0].answers[3].answerText}" required></input>
    `;

    const questionsContainer = document.getElementById("questions-container");
    questionsContainer.appendChild(questionContainer);
}
