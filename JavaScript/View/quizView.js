let i = 0;
const quiz = model.data.allQuizes[i];

let currentQuestion = 0;

let userAnswers = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
};

function quizView() {
  app.innerHTML = /*HTML*/ `
    <div class="quizContainer">
      <h1>${quiz.title}</h1>
      <img src="${quiz.image}" class="mainImage" alt="image">
      <button onclick="quizStarted()" class="startQuizButton">Start Quiz!</button>
      <h4>Laget av: ${quiz.creator}</h4>
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
      <button onclick="nextQuestion()" class="nextButton">Next</button>
      </div>
      <!--<h4 style="color: white;">Laget av: ${quiz.creator}</h4>-->
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
        <div class="quizAnswer" onclick="submitAnswer(this)" color="${answer.color}">${answer.answerText}</div>
        `;
  });
  return result;
}

function submitAnswer(clickedAnswer) {
  const color = clickedAnswer.getAttribute("color");
  userAnswers[color]++;
  const allAnswers = document.querySelectorAll(".quizAnswer");
  allAnswers.forEach((answer) => {
    answer.style.backgroundColor = "#faf0e6";
    answer.style.boxShadow = "0px 0px 0px #888888";
  });
  clickedAnswer.style.backgroundColor = "#fdf0d0";
  clickedAnswer.style.border = "2px solid black";
  clickedAnswer.style.boxShadow = "6px 4px 4px #888888";
}

function nextQuestion() {
  if (currentQuestion < quiz.questions.length - 1) {
    currentQuestion++;
    quizStarted();
  } else {
    handleLastQuestion();
  }
}

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

function handleLastQuestion() {
  const mostSelectedColor = findMostSelectedColor();
  console.log("Most selected color in handleLastQuestion:", mostSelectedColor);
  const result = model.data.allQuizes[0].results[mostSelectedColor];
  console.log("Result:", result);

  app.innerHTML = /*HTML*/ `
    <div class="quizContainerResult">
      <h1>${quiz.title}</h1>
      <h6>Laget av: ${quiz.creator}, den: ${quiz.date}</h6>
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
  const link = encodeURIComponent(window.location.href);
  const message = encodeURIComponent("Jeg tok denne kule testen!");
  const title = encodeURIComponent(document.querySelector("title").textContent);

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
