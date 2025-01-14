const questions = [
  {
    question: "What does a red light mean?",
    A: "STOP",
    B: "GO",
    C: "WAIT",
    correct: ["A"],
  },
  {
    question: "What does a green light mean?",
    A: "STOP",
    B: "GO",
    C: "CAUTION",
    correct: ["B"],
  },
];

let currentQuestionIndex = 0;
let timeRemaining = 1800;
let timer;

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").innerText = question.question;
  document.querySelector(".answer-btn[data-option='A']").innerText = question.A;
  document.querySelector(".answer-btn[data-option='B']").innerText = question.B;
  document.querySelector(".answer-btn[data-option='C']").innerText = question.C;
}

document.querySelectorAll(".btn-submit").forEach((btn) => {
  btn.addEventListener("click", () => {
    currentQuestionIndex = currentQuestionIndex + 1;
    displayQuestion();
  });
});

function timerStart() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeRemaining--;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById("timer").innerText = `Time: ${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
    if (timeRemaining <= 0) {
      clearInterval(timer);
      displayScore();
    }
  }, 1000);
}

function runTest() {
  displayQuestion();
  timerStart();
}

runTest();

// function questions() {}
