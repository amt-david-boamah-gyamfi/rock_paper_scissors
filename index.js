//displaying and hiding of rules
const rules = document.querySelector('.rules');
const gameRules = document.querySelector('.games_rules');
const rulesImage = document.querySelector('.rules_image');

rules.addEventListener('click', () => {
    gameRules.style.display = 'flex'
});

rulesImage.addEventListener('click', () => {
    gameRules.style.display = 'none'
})


//selecting of user's options
const userButtons = document.querySelectorAll('.users_button');
let usersChoice;
userButtons.forEach(button => {
    button.addEventListener('click', () => {
        usersChoice = button.getAttribute('users-option');

        //will delete later
        console.log(usersChoice);
        computersOption();
        console.log(computerDecision);
        checkWinner();
        console.log(scoreOutcome);
    })
})


//computer's selection 
let computerDecision;
const computersOption = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            computerDecision = 'Paper';
            break;

        case 2:
            computerDecision = 'Scissors';
            break;

        case 3:
            computerDecision = 'Rock';
            break;
    }
}


//checking the winner
let scoreOutcome;
const checkWinner = () => {
    if (usersChoice === computerDecision) {
        scoreOutcome = 'TIE';
        updateScore(0);
        changeSpan.textContent = `DRAW`
    } else if (usersChoice === 'Paper' && computerDecision === 'Rock' || usersChoice === 'Scissors' && computerDecision === 'Paper' || usersChoice === 'Rock' && computerDecision === 'Scissors') {
        scoreOutcome = 'YOU WON';
        updateScore(1);
        changeSpan.textContent = `WON`
    } else {
        scoreOutcome = 'YOU LOST';
        updateScore(-1);
        changeSpan.textContent = `LOST`
    }

    //updating the view
    updateSelection(user_select, usersChoice);
    updateSelection(computer_select, computerDecision);

    container_2.style.display = 'none'
    container_3.style.display = 'grid'

}



//disappearing and appearing of container_2 and container_3
const container_2 = document.querySelector('.container_2');
const container_3 = document.querySelector('.container_3');

const play_again = document.getElementById('play_again');

play_again.addEventListener('click', () => {
    container_2.style.display = 'grid';
    container_3.style.display = 'none'
}
)


//updating of Score
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


//updating of the image when user makes a choice
const updateSelection = (selectionElement, choice) => {
    selectionElement.classList.remove('btn-paper');
    selectionElement.classList.remove('btn-scissors');
    selectionElement.classList.remove('btn-rock');

    //Updating of the images
    // const img = selectionElement.querySelector('img');
    // selectionElement.classList.add(`btn-${choice}`);
    // img.src = `./images/icon-${choice}.svg`;
    // img.alt = choice;

    const img = selectionElement.querySelector('img');
    selectionElement.classList.add(`btn-${choice}`);
    img.src = `./images/icon-${choice}.svg`;
    img.alt = choice;
}

const user_select = document.getElementById('user_select');
const computer_select = document.getElementById('computer_select');

//Indicating whether you won, lost ,drew
const changeSpan = document.querySelector('.change');



