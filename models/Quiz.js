// @ts-check

import { Question } from "./Question.js";
export class Quiz {
    questionIndex = 0;
    score = 0;

    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions){
        this.questions = questions;
    }

    /**
     * 
     * @returns {Question} the question found
     */

    getQuestionIndex(){
        return this.questions[this.questionIndex];
    }

    /**
     * 
     * @param {string} answer the correct answer expected
     */

    guess(answer){
        console.log(answer);
        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded(){
        //comparamos la long del array con el indice de la pregunta actual
        return this.questions.length === this.questionIndex;
    }
}