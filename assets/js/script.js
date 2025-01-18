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
let selectedOptions = new Set();

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question").innerText = question.question;
  document.getElementById("answer1").innerText = "A. " + question.A;
  document.getElementById("answer2").innerText = "B. " + question.B;
  document.getElementById("answer3").innerText = "C. " + question.C;
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
function selectAnswer() {
  document.querySelectorAll(".answers1").forEach((button) => {
    button.addEventListener("click", () => {
      const option = button.getAttribute("data-option");

      if (selectedOptions.has(option)) {
        selectedOptions.delete(option);
        button.style.backgroundColor = "";
      } else {
        selectedOptions.add(option);
        button.style.backgroundColor = "red";
      }
    });
  });
}

function runTest() {
  displayQuestion();
  selectAnswer();
  timerStart();
}

runTest();

// function questions() {}

// Function to open the sidebar
function openNav() {
  document.getElementById("mySidebar").classList.add("show");
  document.getElementById("main").style.marginLeft = "200px";
}

// Function to close the sidebar
function closeNav() {
  document.getElementById("mySidebar").classList.remove("show");
  document.getElementById("main").style.marginLeft = "0";
}
