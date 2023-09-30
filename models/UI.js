export class UI{
    constructor(){}

    /**
     * 
     * @param {string} text question to render
     */
    showQuestion(text){
        console.log(text);
        const questionTitle = document.getElementById('question');
        questionTitle.innerText = text;
    }
    /**
     * 
     * @param {string[]} choices all the possible correct answers
     */
    showChoices(choices, callback){
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';
        for(let i=0;i<choices.length;i++){
            const button = document.createElement('button');
            button.innerText = choices[i];
            button.className = 'button';
            //pasamos el texto actual que tiene el button
            button.addEventListener('click', ()=> callback(choices[i]))
            choicesContainer.append(button);
        }

    }
    /**
     * 
     * @param {number} score total score
     */
    showScore(score, callback){
        const button = document.createElement('button');
        const quizEndHTML = `
            <h1>Result</h1>
            <h2>Your Score: ${score}</h2>
        `
        button.innerText = 'Restart!';
        button.className = 'button';        
        const element = document.getElementById('quiz');        
        element.innerHTML = quizEndHTML;
        element.append(button);
        button.addEventListener('click', ()=>{
            
            element.innerHTML = `
                <h1>Quiz</h1>
                <hr>
                <h2 id="question"></h2>
                <div id="choices">
                </div>
                <hr>
                <footer>
                    <p id="progress"></p>
                </footer>
            `;
            callback();
        });
    }

    /**
     * 
     * @param {number} currentIndex the current index of the quiz
     * @param {number} total total questions
     */
    showProgress(currentIndex, total){
        const element = document.getElementById('progress');
        element.innerHTML = `Question ${currentIndex} of ${total}`;
    }
}