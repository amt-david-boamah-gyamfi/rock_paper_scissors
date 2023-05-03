//display and hiding of rules
const rules = document.querySelector('.rules');
const gameRules = document.querySelector('.games_rules');
const rulesImage = document.querySelector('.rules_image');

rules.addEventListener('click', () => {
    gameRules.style.display = 'grid'
});

rulesImage.addEventListener('click', () => {
    gameRules.style.display = 'none'
})


//selecting of user's option
const userButtons = document.querySelectorAll('.click');
let userDecision;
userButtons.forEach(button => {
    button.addEventListener('click', () => {
        userDecision = button.getAttribute('data-choice');



        // console.log(userDecision);
        computersOption();
        // console.log(computerDecision);



        checkWinner();
    })
})


//computer's selection 
let computerDecision;
const computersOption = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            computerDecision = 'paper';
            break;

        case 2:
            computerDecision = 'scissors';
            break;

        case 3:
            computerDecision = 'rock';
            break;
    }
}


let switchSpan = document.querySelector('.you');
let grid = document.querySelector('.grid');
let triangle = document.querySelector('.triangle');
let playAgain = document.querySelector('.play_again');


//reset default
playAgain.addEventListener('click', () => {
    triangle.style.display = 'grid'
    grid.style.display = 'none';
})


//updating scores
let scoreElement = document.querySelector('.num');

function updateScore(score) {
    // Get the current score from localStorage or set it to 0 if it doesn't exist
    const currentScore = parseInt(localStorage.getItem('score')) || 0;

    // Add the new score to the current score
    let newScore = currentScore + score;

    //Preventing negative scores
    if (newScore < 0) {
        newScore = 0;
    }

    // Store the new score in localStorage
    localStorage.setItem('score', newScore);

    // Update the scoreboard on the page
    scoreElement.textContent = newScore;
}


window.onload = function () {
    updateScore(0);
}



//checking the winner
const checkWinner = () => {
    if (userDecision === computerDecision) {
        //Draw
        switchSpan.textContent = 'YOU DRAW';
        updateScore(0);
    } else if (userDecision === 'paper' && computerDecision === 'rock' || userDecision === 'scissors' && computerDecision === 'paper' || userDecision === 'rock' && computerDecision === 'scissors') {
        //win
        switchSpan.textContent = 'YOU WIN';
        updateScore(1);
    } else {
        //lost
        switchSpan.textContent = 'YOU LOSE';
        updateScore(-1);
    }



    triangle.style.display = 'none'
    grid.style.display = 'grid';

    updateSelection(userSelect, userDecision);
    updateSelection(computerSelect, computerDecision);
}

// console.log(checkWinner());

function updateSelection(selectionEl, choice) {
    //class reset
    selectionEl.classList.remove('btn-paper');
    selectionEl.classList.remove('btn-scissors');
    selectionEl.classList.remove('btn-rock');

    //update the img
    const img = selectionEl.querySelector('img');
    selectionEl.classList.add(`btn-${choice}`);
    img.src = `./images/icon-${choice}.svg`;
    img.alt = choice;
}

const userSelect = document.getElementById('user_select');
const computerSelect = document.getElementById('computer_select');


