export class Question {
  /**
   *
   * @param {string} question this is a question
   * @param {string[]} choices options of the questions
   * @param {string} answer answer of the question
   */
  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   * 
   * @param {string} choice some text to guess
   * @returns {boolean} return true if the answer is correct
   */
  correctAnswer(choice) {
    return choice === this.answer;
  }
}

