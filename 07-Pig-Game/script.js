'use strict';

//Selecting elements
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");

const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let scores, currentScore, activePlayer, playing;

//Starting conditions
const init = function () {

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;

    diceElement.classList.add('hidden');
    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');
    const p1Name = prompt("Set player one name");
    const p2Name = prompt("Set player two name");
    document.getElementById("name--0").textContent = p1Name;
    document.getElementById("name--1").textContent = p2Name;
};

init();

function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = "0";
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle("player--active");
    player1Element.classList.toggle("player--active");
}

//Rolling dice functionality
btnRoll.addEventListener("click", function () {

    if (playing) {
        //1.Generate random number 1-6
        const randomDice = Math.trunc(Math.random() * 6) + 1;

        //2.Display dice
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${randomDice}.png`;

        //3.Check if equal to 1
        if (randomDice !== 1) {

            currentScore += randomDice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

            //if true switch player
        } else {
            //Switch to next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {

    if (playing) {
        // 1.Add current score to score of active player
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2.Check if score is >= 100
        if (scores[activePlayer] >= 100) {
            diceElement.classList.add('hidden');
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            //Switch to next player
            switchPlayer();
        }
    }
    //Finish game
});

btnNew.addEventListener('click', init);








