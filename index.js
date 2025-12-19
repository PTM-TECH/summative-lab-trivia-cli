//Declare the array variable
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: 0,
  },
  {
    question: "Which JavaScript keyword declares a constant?",
    options: ["var", "let", "const", "static"],
    answer: 2,
  },
  {
    question: "Which array method is used to iterate over elements?",
    options: ["map()", "push()", "pop()", "shift()"],
    answer: 0,
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: 1,
  },
];
//Initialize game state variables
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 40;
let timer;

//Initialize the DOM elements

const myH3 = document.querySelector("#myH3");
const myOptions = document.querySelector("#options");
const myTimer = document.querySelector("#timer");
const submitBtn = document.querySelector("#submitBtn");

//Initialize game
startTimer();
displayQuestion();

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    myTimer.textContent = `Time left: ${timeLeft} sec`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);
}
//Display the questions
function displayQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endGame();
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  myH3.textContent = currentQuestion.question;
  //clear all existing answer options beofre adding new ones
  myOptions.innerHTML = "";
  //Array iteration using map() method
  currentQuestion.options.map((option, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.classList.add("option");
    optionDiv.innerHTML = `<label>
        <input type="radio" name="answer" value="${index}">
        ${option}
    </label>`;
    myOptions.appendChild(optionDiv);
  });
}

submitBtn.addEventListener("click", () => {
  const selectedOption = document.querySelector(`input[name="answer"]:checked`);
  if (!selectedOption) {
    alert("Please select an answer.");
    return;
  }
  const userAnswer = Number(selectedOption.value);
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    alert("Correct!");
    score++;
  } else {
    alert("Incorrect!");
  }
  currentQuestionIndex++;
  displayQuestion();
});

//End the game
function endGame() {
  clearInterval(timer);
  document.querySelector("#quizContainer").innerHTML = `<h2>Game Over</h2>
  <p>Your Score: ${score} / ${questions.length}</p>
  `;
}
