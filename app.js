// import functions and grab DOM elements
import { powerLevel, countAsYes } from './test/functions.js' ;


const button = document.getElementById('quizButton');
const positiveResults = document.getElementById('positiveResults');
const neutralResults = document.getElementById('neutralResults');

button.addEventListener('click', () => {
    
    let answersRight = 0;

    const userName = prompt('What is your name?');
   
    console.log(userName);

    const userConfirm = confirm(`${userName}! Are you sure you want to know?`);
    if (!userConfirm) {
        alert('you do not have what it takes');
        return;}

    const power = prompt(`${userName}! What does the scouter say your power level is? (Number) `);
    
    if (powerLevel(power)) {
          
        answersRight++;
    }

    const strive = prompt(`${userName}! Do you train everyday to become more powerfull?`)

    if (countAsYes(strive)) {
        answersRight++;
    }
    
    const hairColor = prompt(`${userName}! Does your hair turn yellow when you powerup?`);
    
    if (countAsYes(hairColor)) {
          
        answersRight++;
       
    }
console.log(answersRight);

    if (answersRight === 3) {
        positiveResults.style.display = 'block';
        neutralResults.style.display = 'none';
    } else {
        positiveResults.style.display = 'none';
        neutralResults.style.display = 'block';
    } 
});

