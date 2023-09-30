import { Question } from "../models/Question.js"; 
import { data } from "./data.js";

//Recorrer el array de objetos de preguntas que tenemos en data.js y pasarlo a la clase Question.js


export const questions = data.map(question => new Question(question.question, question.choices, question.answer));


