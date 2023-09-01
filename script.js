const randomNumber = parseInt(Math.random() * 100 + 1);

const form = document.querySelector("form");

const guessNumber = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const prevGuess = document.querySelector(".guesses");
const remGuess = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
console.log("remGuess.innerText -> ", remGuess.innerText);

const p = document.createElement("p");
const newGame = document.createElement("p");
const ele = document.querySelector(".resultParas");

let guessDone = [];
let numberOfGuesses = 0;
let played = 0;
console.log("played -> ", played);
console.log(played > 10);

let submitNumber = function (event) {
  event.preventDefault();
  if (played < 1) {
    console.log("played 2-> ", played);
    if (validateInput(parseInt(guessNumber.value))) {
      prevGuess.innerText += `${guessNumber.value}, `;
      if (parseInt(guessNumber.value) == randomNumber) {
        lowOrHi.innerHTML = "You Gussed it RIGHT !!";
      }
      played += 1;
      remGuess.innerText = `${10 - played}`;
      guessNumber.value = "";
      console.log("remGuess.innerText 2-> ", remGuess.innerText);
    }
  } else {
    lowOrHi.innerHTML = "Gameover you do not have any guess left";
    p.innerText = `The number was ${randomNumber}`;
    newGame.innerHTML = `<h3>Start Game Again</h3>`;
    newGame.classList.add("newGame");
    newGame.classList.add("button");
    newGame.addEventListener("click", startAgain);
    guessNumber.disabled = true;
    ele.appendChild(p);
    ele.appendChild(newGame);
  }
};

let validateInput = function (input) {
  if (isNaN(input)) {
    lowOrHi.innerHTML = `<h2>Please input valid Number</h2>`;
    guessNumber.value = "";
    return false;
  } else {
    lowOrHi.innerHTML = ``;
    return true;
  }
};

let startAgain = function () {
  location.reload();
};

form.addEventListener("submit", submitNumber);
