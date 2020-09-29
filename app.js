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

    if (answersRight === 4) {
        positiveResults.style.display = 'block';
        neutralResults.style.display = 'none';
    } else {
        positiveResults.style.display = 'none';
        neutralResults.style.display = 'block';
    } 
});

const knowlegeButton = document.getElementById ('knowlegeqQuizButton');
const quizResults = document.getElementById('quizResults');


knowlegeButton.addEventListener('click', () => {

    let rightAnswers = 0;

    const userName = prompt('What is your Name?');
    const planet = prompt('what planet are you from?');
    const species = prompt('what species are you?');
    alert(`ok ${species} from planet ${planet} named ${userName} ! Prepare yourself!`);

    const goku = prompt(`${species} from planet ${planet} named ${userName} Is Goku a native human from earth?`);

    if (!countAsYes(goku)) {
        
        rightAnswers++;

    }
    const yamcha = prompt(`${species} from planet ${planet} named ${userName} is yamcha the weakes of the Z-Fighters?`);

    if (countAsYes(yamcha)) {

        rightAnswers++;

    }

    const gohan = prompt(`${species} from planet ${planet} named ${userName} is Gohan the son of Goku?`);

    if (countAsYes(gohan)) {

        rightAnswers++;

    }

    const vageta = prompt(`${species} from planet ${planet} named ${userName} is Vageta the prince of all Saiyans?`);

    if (countAsYes(vageta)) {

        rightAnswers++;

    }

    alert(`${species} from planet ${planet} named ${userName} You have answered all of the questions. Please wait while your results are tallied!`);
    alert('your result will now be displayed on the page!');

    if (rightAnswers === 0) {
        quizResults.style.display = 'block';
        quizResults.textContent = 'you answered 0 out of 4 correct!! you know nothing of DragonBall Z!!';
    }
    if (rightAnswers === 1) {
        quizResults.style.display = 'block';
        quizResults.textContent = 'you answered 1 out of 4 correct! you know nex to nothing about Dragon Ball Z';
    }
    if (rightAnswers === 2) {
        quizResults.style.display = 'block';
        quizResults.textContent = 'you answered 2 out of 4 correctly! you have a bit of knowlege about DragonBall Z!';
    }
    if (rightAnswers === 3) {
        quizResults.style.display = 'block';
        quizResults.textContent = 'you answered 3 out of 4 correctly! you have spent many hours watching DragonBall Z!!';
        
    }
    console.log(quizResults);

    if (rightAnswers === 4) {
        quizResults.style.display = 'block';
        quizResults.textContent = 'you answered 4 out of 4 correct!! congratulations you have no life!';
    }
    
});
