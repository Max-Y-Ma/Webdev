// Score Elements
let playerOneScore = 0;
let playerTwoScore = 0;
const playerOneScoreElement = document.querySelector("#playerOneScore");
const playerTwoScoreElement = document.querySelector("#playerTwoScore");

// Button Elements
const scoreDropdownButton = document.querySelector("#scoreDropdown")
const playerOneButton = document.querySelector("#playerOneButton");
const playerTwoButton = document.querySelector("#playerTwoButton");
const resetButton = document.querySelector("#resetButton");

// Game Logic
let gameOver = false;
let gameScore = scoreDropdownButton.innerText;
function gameUpdate() {
  if (playerOneScore >= gameScore || playerTwoScore >= gameScore) {
    gameOver = true;

    // Update Score Color
    if (playerOneScore >= gameScore ) {
      playerOneScoreElement.style.color = "green";
      playerTwoScoreElement.style.color = "red";
    }
    else {
      playerOneScoreElement.style.color = "red";
      playerTwoScoreElement.style.color = "green";
    }
  }
}

function resetGame() {
  playerOneScore = 0;
  playerTwoScore = 0;
  gameOver = false;

  playerOneScoreElement.style.color = "black";
  playerTwoScoreElement.style.color = "black";

  playerOneScoreElement.innerText = playerOneScore; 
  playerTwoScoreElement.innerText = playerTwoScore;
}

// Event Listeners
document.addEventListener('click', (event) => {
  // Update Dropdown Button
  switch (event.target.id) {
    case "dropdown1" :
      gameScore = 1;
      scoreDropdownButton.innerText = "1";
      resetGame();
      break;
    case "dropdown2" :
      gameScore = 2;
      scoreDropdownButton.innerText = "2";
      resetGame();
      break;
    case "dropdown3" :
      gameScore = 3;
      scoreDropdownButton.innerText = "3";
      resetGame();
      break;
    case "dropdown4" :
      gameScore = 4;
      scoreDropdownButton.innerText = "4";
      resetGame();
      break;
    case "dropdown5" :
      gameScore = 5;
      scoreDropdownButton.innerText = "5";
      resetGame();
      break;
    case "dropdown6" :
      gameScore = 6;
      scoreDropdownButton.innerText = "6";
      resetGame();
      break;
    case "dropdown7" :
      gameScore = 7;
      scoreDropdownButton.innerText = "7";
      resetGame();
      break;
    case "dropdown8" :
      gameScore = 8;
      scoreDropdownButton.innerText = "8";
      resetGame();
      break;
    case "dropdown9" :
      gameScore = 9;
      scoreDropdownButton.innerText = "9";
      resetGame();
      break;
    case "dropdown10" :
      gameScore = 10;
      scoreDropdownButton.innerText = "10";
      resetGame();
      break;
    case "dropdown11" :
      gameScore = 11;
      scoreDropdownButton.innerText = "11";
      resetGame();
      break;
    default:
      break;
  }
});

playerOneButton.addEventListener("click", function () {
  if (!gameOver) {
    playerOneScoreElement.innerText = ++playerOneScore;
    gameUpdate();
  }
});

playerTwoButton.addEventListener("click", function () {
  if (!gameOver) {
    playerTwoScoreElement.innerText = ++playerTwoScore;
    gameUpdate();
  }
});

resetButton.addEventListener("click", function () {
  resetGame();
});
