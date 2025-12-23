# JavaScript Trivia Game

**JavaScript Trivia Game** is a simple, interactive quiz application built with **HTML, CSS, and JavaScript**. Users can answer multiple-choice questions within a time limit, receive instant feedback on their answers, and see their final score when the game ends.

## Features

- Timed trivia quiz with a 40-second countdown.
- Multiple-choice questions with immediate feedback (correct/incorrect alerts).
- Dynamic question display with radio buttons for answers.
- Score tracking and final results displayed at the end of the game.
- User-friendly interface with responsive design.

## Technologies Used

- **HTML** – Structure of the quiz.
- **CSS** – Styling and layout for a clean, modern UI.
- **JavaScript** – Game logic, DOM manipulation, and timer functionality.

## Project Structure

├─ index.html # Main HTML file
├─ index.css # CSS file for styling
└─ index.js # JavaScript file for game logic

## How to Use

1. Clone or download the repository.
2. Open `index.html` in your web browser.
3. The quiz will start automatically with a 40-second timer.
4. Select your answer for each question and click **Submit Answer**.
5. Alerts will indicate whether your answer is correct or incorrect.
6. At the end of the quiz or when time runs out, your final score will be displayed.

## Game Mechanics

- **Questions:** An array of question objects is stored in `index.js`, each containing the question, answer options, and correct answer index.
- **Timer:** A 40-second countdown starts when the quiz loads. If time runs out, the game ends automatically.
- **Answer Submission:** Users select an answer and click the submit button. Correct answers increase the score.
- **End Game:** After all questions are answered or time expires, the game shows the total score out of the number of questions.

## JavaScript Functions Overview

- `startTimer()` – Starts the countdown timer and updates the display.
- `displayQuestion()` – Shows the current question and its options dynamically.
- `submitBtn.addEventListener("click", ...)` – Handles answer submission, checks correctness, and moves to the next question.
- `endGame()` – Stops the timer and displays the final score.

## Styling

- Clean, modern design with a centered quiz container.
- Colored buttons and hover effects for better interactivity.
- Timer displayed prominently at the top.
- Responsive layout suitable for desktops and smaller screens.

## Future Enhancements

- **Multiple Levels:** Add difficulty levels and more questions.
- **Local Storage:** Save high scores locally to track user progress.
- **Animations:** Smooth transitions between questions.
- **Question Randomization:** Randomize questions to make each quiz unique.

## Author: Patrick Mutua
