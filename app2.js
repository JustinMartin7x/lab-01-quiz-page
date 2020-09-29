const theQuiz = document.getElementById('theQuiz');
const aboutMeResults = document.getElementById('aboutMeResults');
import { countAsYes } from './test/functions.js';




theQuiz.addEventListener('click', () => {

    let answersRight = 0;

    const userName = prompt('Hello Friend! What is your name?');

    const userConfirm = confirm(`hello ${userName} do you think you know me well enoug?`);
    if (!userConfirm) {
        alert('try again when you are ready');
        return;
    }  

    const school = prompt(`${userName} Did i attend East Orient Elementary school`);
    
    if (countAsYes(school)) {
        answersRight++;
    }
    const favCar = prompt(`${userName} is my favorite car a Toyota Prius?`);

    if (!countAsYes(favCar)) {
        answersRight++;
    } else {
        alert(`Really ${userName} ! .. you really think id ever drive a Prius?`);
    }

    const place = prompt(`${userName} is my favorite place Sandy River?`);
    
    if (countAsYes(place)) {

        answersRight++;
    }
    alert(`${userName} you have answered all of the questions! See bottom of page for results`);

    const decimal = answersRight / 3;
    const percent = decimal * 100;

    aboutMeResults.textContent = `Well ${userName} you got ${answersRight} out of 3. Thats  ${percent} % `;
    

});