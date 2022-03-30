

const numberButtons = document.querySelectorAll('[data-number]');
const submitButton = document.querySelector('[data-submit]');
const scorecard = document.getElementsByClassName('score-table');
const holeNumber = document.getElementById('current-hole');
const holeScores = document.querySelectorAll('[data-score]');
const backButton = document.querySelector('[data-function]');
const clearButton = document.querySelector('[data-clear]');
const front9 = document.getElementById('in');
const back9 = document.getElementById('out');
const totalScore = document.getElementById('total');
const totalButton = document.querySelector('[data-total]');

let currentHole = Number(holeNumber.innerText);
let currentHoleBox = holeScores[currentHole-1];


//Event listeners


const updateHole = function() {
    holeNumber.innerText = currentHole;
    currentHoleBox = holeScores[currentHole-1];
}
const clearScores = function(){
    holeScores.forEach(input => {
        input.innerText = '';
        input.style.color = 'red';
        input.style.fontWeight = 'normal';
    })
    currentHole = 1;
    updateHole();
    back9.innerText = '';
    front9.innerText = '';
    totalScore.innerText = '';

}
const updateFront = function() {
    let frontTotal = 0;
    for (let i = 0; i<9; i++) {
        frontTotal = frontTotal + Number(holeScores[i].innerText);
    } 
    front9.innerText = frontTotal;
}
const updateBack = function() {
    let backTotal = 0;
    for (let i = 9; i<18; i++) {
        backTotal = backTotal + Number(holeScores[i].innerText);
    } 
    back9.innerText = backTotal;
}
const totalScores = function() {
    scoreTotal = Number(front9.innerText) + Number(back9.innerText);
    totalScore.innerText = scoreTotal;
    front9.style.color = 'black'
    back9.style.color = 'black'
    front9.style.fontWeight = 'bold'
    back9.style.fontWeight = 'bold'
    totalScore.style.color = 'black'
    totalScore.style.fontWeight = 'bold'
    currentHoleBox.style.color = 'black'
    currentHoleBox.style.fontWeight = 'bold'


}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentHoleBox.innerText = button.innerText;
    })
})

const submitScore = function() { 
    if (currentHole < 18) {
    holeNumber.innerText = currentHole.toString();
    currentHole++
    currentHoleBox.style.color = 'black';
    currentHoleBox.style.fontWeight = 'bold';
    updateHole();
    updateFront();
    updateBack();
    }
}
const previousHole = function() {
    if (currentHole > 1)
    currentHole--
    updateHole();
    currentHoleBox.style.color = 'red';
    currentHoleBox.style.fontWeight = 'normal';
}

submitButton.addEventListener('click', submitScore);
backButton.addEventListener('click', previousHole);
clearButton.addEventListener('click', clearScores);
totalButton.addEventListener('click', totalScores)