// Iteration 5: Store the player score and display it on the game over screen

let scoreq = localStorage.getItem("score");

var scoreBoard = document.getElementById("score-board");

var playAgainButton = document.getElementById("play-again-button");

scoreBoard.innerHTML = scoreq;

playAgainButton.onclick = (e) => {
    location.href = "./game.html";
}