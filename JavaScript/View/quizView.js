let i = 0;

let currentQuestion = 0;

let userAnswers = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
};

function getQuiz() {
    return model.data.allQuizes.find(
        (quiz) => quiz.id == model.app.currentQuizId
    );
}

function updateQuizID() {
    return model.app.currentQuizId;
}

/* 
Den siden man først kommer til når man trykker
på en quiz, med start knapp for å begynne quizen. ↓
*/
function quizView() {
    app.innerHTML = /*HTML*/ `
    <div class="quizContainer">
      <h1>${getQuiz().title}</h1>
      <img src="${getQuiz().image}" class="mainImage" alt="image">
      <button onclick="quizStarted()" class="startQuizButton">Start Quiz!</button>
      <h4>Laget av: ${getQuiz().creator}</h4>
    `;
}

/* 
Når man har trykket på start knappen så går man til dette,her 
ser man første spørssmål og svaralternativene som hører til ↓.
 */
function quizStarted() {
    app.innerHTML = /*HTML*/ `
    <div class="quizContainer">
      <h1>${getQuiz().title}</h1>
      <img src="${
          getQuiz().questions[currentQuestion].questionImage
      }" id="quizImage" alt="image">
      <div class="quizQnAContainer">
        <h2>${getQuizQuestion().theQuestion}</h2>
        <div id="quizAnswerContainer">
          <p>${getQuizAnswers()}</p>
        </div>
      </div>
      <div class="nextAndPrevButtons">
      <button onclick="nextQuestion()" class="nextButton">Next</button>
      </div>
    </div>
  `;
}

/* 
Denne henter spørsmålet som skal vises  ↓. 
 */
function getQuizQuestion() {
    return getQuiz().questions[currentQuestion];
}

/*
Henter svaralternativer og legger til det valgte 
svaret i result = ""; ↓.	 
*/
function getQuizAnswers() {
    let result = "";

    const answers = getQuizQuestion().answers;
    for (let i = 0; i < answers.length; i++) {
        result +=
            '<div class="quizAnswer" onclick="submitAnswer(this)" color="' +
            answers[i].color +
            '">' +
            answers[i].answerText +
            "</div>";
    }
    return result;
}

/*
Lagrer vardien til svaret som er klikket for å finne ut hva 
man trykket mest på, for å komme frem til resultatet.

Endrer utseende på det svaret man trykket på så det skal være 
godt synlig for brukeren hva de har svart før man går videre ↓.
 */
function submitAnswer(clickedAnswer) {
    const color = clickedAnswer.getAttribute("color");
    userAnswers[color]++;

    const allAnswers = document.querySelectorAll(".quizAnswer");

    for (let i = 0; i < allAnswers.length; i++) {
        const answer = allAnswers[i];
        answer.style.backgroundColor = "#faf0e6";
        answer.style.boxShadow = "0px 0px 0px #888888";
    }

    clickedAnswer.style.backgroundColor = "#fdf0d0";
    clickedAnswer.style.border = "2px solid black";
    clickedAnswer.style.boxShadow = "6px 4px 4px #888888";
}

/*
Når man trykker på next vil denne funksjonen kjøre,
da komme rman til det neste spørsmålet. ↓
 */
function nextQuestion() {
    if (currentQuestion < getQuiz().questions.length - 1) {
        currentQuestion++;
        quizStarted();
    } else {
        handleLastQuestion();
    }
}

/*
Finner hvilket svar(farge) som brukeren har
valgt flest ganger. ↓
 */
function findMostSelectedColor() {
    let mostSelectedColor = 0;
    let maxCount = userAnswers[0];

    for (let color = 1; color < 4; color++) {
        if (userAnswers[color] > maxCount) {
            maxCount = userAnswers[color];
            mostSelectedColor = color;
        }
    }
    console.log("Most selected color:", mostSelectedColor);
    return mostSelectedColor;
}

/*
Viser resultatet som ble valgt i forhold til 
hvilket svar(farge) som brukeren valgte flest ganger ↓.
 */
function handleLastQuestion() {
    const mostSelectedColor = findMostSelectedColor();

    const result = getQuiz().results[mostSelectedColor];

    app.innerHTML = /*HTML*/ `
    <div class="quizContainerResult">
      <h1>${getQuiz().title}</h1>
      <h6>Laget av: ${getQuiz().creator}, den: ${getQuiz().date}</h6>
      <img src="${result.resultimage}" alt="Result Image">
      <p>${result.result}</p>

      </div>
      <div id="share-buttons">
      <a class="facebook" target="blank"><i class="fab fa-facebook"></i></a>

      <a class="twitter" target="blank"><i class="fab fa-twitter"></i></a>

      <a class="linkedin" target="blank"><i class="fab fa-linkedin"></i></a>

      <a class="reddit" target="blank"><i class="fab fa-reddit"></i></a>
      </div>
      
  `;

    // Dette fungerer, men den viser ikke typ "skjermbilde" av siden
    // til resultatene som man ønsker å dele, så det må rettes opp i.
    /*
  Linker til andre some sider hvor man kan share resultatet sitt. ↓
   */
    const link = encodeURIComponent(window.location.href);
    const message = encodeURIComponent("Jeg tok denne kule testen!");
    const title = encodeURIComponent(
        document.querySelector("title").textContent
    );

    console.log([link, message, title]);

    const fb = document.querySelector(".facebook");
    fb.href = `https://www.facebook.com/share.php?u=${link}&title=${title}`;

    const twitter = document.querySelector(".twitter");
    twitter.href = `http://twitter.com/share?&url=${link}&title=${title}`;

    const linkedIn = document.querySelector(".linkedin");
    linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}&title=${title}`;

    const reddit = document.querySelector(".reddit");
    reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`;
}
