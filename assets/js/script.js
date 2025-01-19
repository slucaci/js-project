let questions = [
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
  {
    question: "What does a yellow light mean?",
    A: "GO",
    B: "STOP",
    C: "PREPARE TO STOP",
    correct: ["C"],
  },
  {
    question: "What does a yield sign mean?",
    A: "STOP COMPLETELY",
    B: "LET OTHERS GO FIRST",
    C: "GO QUICKLY",
    correct: ["B"],
  },
  {
    question: "What is the speed limit in a school zone?",
    A: "25 mph",
    B: "15 mph",
    C: "35 mph",
    correct: ["B"],
  },
  {
    question: "What should you do when you see a stop sign?",
    A: "Continue at a slow pace",
    B: "Slow down, but don’t stop",
    C: "Stop completely and check for other vehicles",
    correct: ["C"],
  },
  {
    question:
      "What should you do if you are driving and it begins to rain heavily?",
    A: "Slow down and use windshield wipers",
    B: "Turn on your headlights",
    C: "Speed up to get through the rain quickly",
    correct: ["A", "B"],
  },
  {
    question:
      "What should you do if a school bus stops with its red lights flashing?",
    A: "Continue driving carefully",
    B: "Stop and wait until the bus moves",
    C: "Slow down but do not stop",
    correct: ["B"],
  },
  {
    question: "What is the purpose of a roundabout?",
    A: "To allow for smooth traffic flow",
    B: "To make it easier to enter highways",
    C: "To reduce traffic congestion at intersections",
    correct: ["A", "C"],
  },
  {
    question: "When should you use your vehicle's horn?",
    A: "To signal a warning",
    B: "To express frustration",
    C: "To signal to other drivers in a dangerous situation",
    correct: ["A", "C"],
  },
  {
    question: "What does a white line on the road mean?",
    A: "A lane divider",
    B: "You are not allowed to cross it",
    C: "It indicates a stop line or crossing",
    correct: ["A", "C"],
  },
  {
    question: "What should you do if your vehicle starts to skid?",
    A: "Brake hard to stop the car",
    B: "Steer in the direction you want to go",
    C: "Turn the steering wheel in the opposite direction of the skid",
    correct: ["B"],
  },
  {
    question: "When should you use your headlights during the day?",
    A: "When driving in foggy conditions",
    B: "During heavy rain",
    C: "When driving on a bright sunny day",
    correct: ["A", "B"],
  },
  {
    question: "What should you do when you approach a pedestrian crossing?",
    A: "Slow down and yield to pedestrians",
    B: "Speed up to pass before pedestrians arrive",
    C: "Stop if there are pedestrians",
    correct: ["A", "C"],
  },
  {
    question: "What is the correct hand signal to indicate a left turn?",
    A: "Left arm extended horizontally",
    B: "Left arm bent upward",
    C: "Left arm bent downward",
    correct: ["A"],
  },
  {
    question: "What does a blue traffic sign indicate?",
    A: "A warning or caution",
    B: "Information or direction",
    C: "No parking allowed",
    correct: ["B"],
  },
  {
    question:
      "When driving on a highway, when is it appropriate to use the left lane?",
    A: "When passing other vehicles",
    B: "When you are entering the highway",
    C: "When the right lane is congested",
    correct: ["A"],
  },
  {
    question:
      "What should you do when you hear a siren from an emergency vehicle?",
    A: "Continue driving and ignore it",
    B: "Pull over to the side of the road and stop",
    C: "Speed up to avoid emergency vehicles",
    correct: ["B"],
  },
  {
    question: "What is the primary purpose of a catalytic converter?",
    A: "To reduce emissions",
    B: "To improve fuel efficiency",
    C: "To increase engine power",
    correct: ["A"],
  },
  {
    question:
      "When can you legally park in a space reserved for handicapped parking?",
    A: "If you have a disabled person in the car",
    B: "When there is no other parking available",
    C: "Only if you have a valid handicapped parking permit",
    correct: ["C"],
  },
  {
    question: "What is the minimum following distance behind another vehicle?",
    A: "1 car length",
    B: "2 car lengths",
    C: "3 seconds",
    correct: ["C"],
  },
  {
    question: "What should you do when you are in a car accident?",
    A: "Leave the scene immediately",
    B: "Exchange contact and insurance information with the other party",
    C: "Call the police and report the accident",
    correct: ["B", "C"],
  },
  {
    question: "How should you signal a right turn?",
    A: "Extend left arm out with the elbow bent upward",
    B: "Extend right arm straight out",
    C: "Use your vehicle's right turn signal",
    correct: ["A", "C"],
  },
  {
    question: "When should you check your blind spots?",
    A: "Before changing lanes",
    B: "Before merging onto a highway",
    C: "Before making a left turn",
    correct: ["A", "B"],
  },
  {
    question: "What should you do if you experience brake failure?",
    A: "Pump the brake pedal to regain braking power",
    B: "Shift to a lower gear",
    C: "Turn off the ignition",
    correct: ["A", "B"],
  },
  {
    question:
      "When approaching an intersection with no traffic signals or signs, who has the right of way?",
    A: "The vehicle on the left",
    B: "The vehicle on the right",
    C: "The vehicle going straight",
    correct: ["B"],
  },
  {
    question: "How should you handle a tire blowout while driving?",
    A: "Steer straight and gently apply the brakes",
    B: "Quickly turn the steering wheel to the left or right",
    C: "Apply the brakes firmly",
    correct: ["A"],
  },
  {
    question: "What should you do when driving in foggy conditions?",
    A: "Use high-beam headlights",
    B: "Use low-beam headlights",
    C: "Drive faster to clear the fog quickly",
    correct: ["B"],
  },
  {
    question: "What should you do when merging onto a highway?",
    A: "Yield to traffic already on the highway",
    B: "Speed up to match the flow of traffic",
    C: "Stop and wait for a gap in traffic",
    correct: ["A", "B"],
  },
  {
    question: "What should you do when you see an animal on the road?",
    A: "Swerving to avoid the animal",
    B: "Slow down and prepare to stop",
    C: "Continue driving at the same speed",
    correct: ["B"],
  },
  {
    question: "What should you do if your brakes are overheating?",
    A: "Drive at a slower speed",
    B: "Stop and allow the brakes to cool down",
    C: "Pump the brake pedal repeatedly",
    correct: ["B"],
  },
  {
    question:
      "What is the correct action to take if your vehicle is involved in a collision?",
    A: "Drive away from the scene immediately",
    B: "Exchange details with other parties involved",
    C: "Report the incident to the police",
    correct: ["B", "C"],
  },
  {
    question: "What should you do if you are driving and feel sleepy?",
    A: "Pull over to a safe area and take a short nap",
    B: "Turn on the radio to stay alert",
    C: "Keep driving until you reach your destination",
    correct: ["A"],
  },
  {
    question: "When is it safe to cross a railroad track?",
    A: "When the lights are flashing",
    B: "When the track is clear of trains",
    C: "When there is no train coming",
    correct: ["B", "C"],
  },
  {
    question:
      "What should you do when you are approaching an intersection and the light turns yellow?",
    A: "Speed up to clear the intersection",
    B: "Slow down and prepare to stop",
    C: "Stop if it is safe to do so",
    correct: ["B", "C"],
  },
];

let currentQuestionIndex = 0;
let timeRemaining = 1800;
let timer;
let selectedOptions = new Set();
let selectedQuestions = [];
let correctAnswers = 0;
let wrongAnswers = 0;

// function to generate 28 random questions
function generateRandomQuestions(questionPool, numberOfQuestions) {
  const mixedQuestions = [...questionPool];
  const length = mixedQuestions.length;

  for (let i = 0; i < length - 1; i++) {
    const randomIndex = i + Math.floor(Math.random() * (length - i));
    [mixedQuestions[i], mixedQuestions[randomIndex]] = [
      mixedQuestions[randomIndex],
      mixedQuestions[i],
    ];
  }
  return mixedQuestions.slice(0, numberOfQuestions);
}

// function to display a question
function displayQuestion(index) {
  const question = selectedQuestions[index];
  document.getElementById("question").innerText = question.question;
  document.getElementById("answer1").innerText = "A. " + question.A;
  document.getElementById("answer2").innerText = "B. " + question.B;
  document.getElementById("answer3").innerText = "C. " + question.C;
  selectedOptions.clear();

  document
    .querySelectorAll(".answers1")
    .forEach((btn) => (btn.style.backgroundColor = ""));
  statsBar();
}

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
    }
  }, 1000);
}

function runTest() {
  selectedQuestions = generateRandomQuestions(questions, 28);
  currentQuestionIndex = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  answerLaterList = [];
  selectedOptions = new Set();
  timeRemaining = 1800;

  setupDisplay();
  displayQuestion(currentQuestionIndex);
  selectAnswer();
  timerStart();
  console.log(selectedQuestions);
}

// Display the User Interface
function setupDisplay() {
  document.querySelector(
    ".status-bar #total-questions"
  ).innerText = `Total Questions: 28`;
  document.querySelector(
    ".status-bar #remaining-questions"
  ).innerText = `Remaining Questions: 28`;
  document.querySelector(
    ".status-bar #correct-answers"
  ).innerText = `Correct Answers: 0`;
  document.querySelector(
    ".status-bar #wrong-answers"
  ).innerText = `Wrong Answers: 0`;
  document.querySelector(".status-bar #timer").innerText = `Time: 30:00`;
}

// Buttons
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
  // Submit answer
  document.querySelector(".btn-submit").addEventListener("click", () => {
    if (selectedOptions.size === 0) {
      alert("Please select at least one answer before submitting.");
      return;
    }

    const questionData = selectedQuestions[currentQuestionIndex];
    const correctSet = new Set(questionData.correct);
    const isCorrect =
      selectedOptions.size === correctSet.size &&
      [...selectedOptions].every((option) => correctSet.has(option));

    if (isCorrect) {
      correctAnswers++;
    } else {
      wrongAnswers++;
    }
    if (wrongAnswers > 6) {
      alert("You have exceeded the maximum number of wrong answers (6).");

      return;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
      displayQuestion(currentQuestionIndex);
    } else alert("Maximum questions.");
  });
}

// function to update the bar
function statsBar() {
  document.getElementById(
    "remaining-questions"
  ).innerText = `Remaining Questions: ${
    selectedQuestions.length +
    answerLaterList.length -
    wrongAnswers -
    correctAnswers
  }`;
  document.getElementById(
    "correct-answers"
  ).innerText = `Correct Answers: ${correctAnswers}`;
  document.getElementById(
    "wrong-answers"
  ).innerText = `Wrong Answers: ${wrongAnswers}`;
}

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

runTest();
