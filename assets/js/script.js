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

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").innerText = question.question;
  document.querySelector(".answer-btn[data-option='A']").innerText = question.A;
  document.querySelector(".answer-btn[data-option='B']").innerText = question.B;
  document.querySelector(".answer-btn[data-option='C']").innerText = question.C;
}

displayQuestion();

// function timerStart() {}

// function runTest() {}

// function questions() {}
