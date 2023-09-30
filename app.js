// @ts-check
import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

/**
 *
 * @param {Quiz} quiz main quiz object
 * @param {UI} ui UI object
 */

const renderPage = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScore(quiz.score, ()=>{
        quiz.questionIndex = 0
        quiz.score = 0;
        renderize(quiz, ui);
    });
  } else {
    renderize(quiz, ui);
  }
};

/**
 * 
 * @param {Quiz} quiz main quiz object
 * @param {UI} ui UI object
 */

const renderize = (quiz, ui) =>{
    ui.showQuestion(quiz.getQuestionIndex().question);
    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
      quiz.guess(currentChoice);
      renderPage(quiz, ui);
    });
    ui.showProgress(quiz.questionIndex + 1, quiz.questions.length); 
}


function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();

  renderPage(quiz, ui);
}

main();
