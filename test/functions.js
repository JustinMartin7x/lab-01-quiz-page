import './example.test.js';


export function countAsYes(userInput) {
    return userInput.charAt(0).toUpperCase() === 'Y';
    
}

export function powerLevel(userInput) {
    return userInput > 9000;

}
