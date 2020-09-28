// import functions and grab DOM elements
import { powerLevel, countAsYes } from './test/functions.js' ;

const endMessage =document.getElementById ('endMessage');
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
    const pureHeart = prompt(`${userName} do you have a pure heart?`);
    if (countAsYes(pureHeart)) {
        answersRight++;
    } 


    alert(`Congratulations ${userName}! You have answered all of the questions`);
    alert(`${userName} your results will now show on the page`);
    alert(`Remember ${userName} ! Not everyone can be Goku`);
    endMessage.textContent = `congratulations ${userName} you met ${answersRight} conditions out of 4 for being a Super Saiyan!`;
// console.log(answersRight);

    if (answersRight === 3) {
        positiveResults.style.display = 'block';
        neutralResults.style.display = 'none';
    } else {
        positiveResults.style.display = 'none';
        neutralResults.style.display = 'block';
    } 
});

