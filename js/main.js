"use strict";

const playBtn = document.querySelector(".js_letsplay");
const reloadBtn = document.querySelector(".js_reloadgame");
const selectOption = document.querySelector(".js_select");
const resultInput = document.querySelector(".js_result");
const computer = document.querySelector(".js_computer");
const player = document.querySelector(".js_player");

//variables globales:

let playerScore = 0;
let computerScore = 0;
let moves = 0;

//Funciones:

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// general jugada aleatoria del ordenador:

function generarJugada() {
  let moveComputer = "";
  let number = getRandomNumber(9);
  if (number <= 3) {
    moveComputer = "piedra";
  } else if (number <= 6) {
    moveComputer = "papel";
  } else {
    moveComputer = "tijera";
  }
  return moveComputer;
}

//obtener la jugada de la usuaria

function obtenerJugadaUser() {
  return selectOption.value;
}

//comparar jugadas y ver quien ha ganado

function playGame() {
  let moveComputer = generarJugada();
  let movePlayer = obtenerJugadaUser();
  console.log(`jugada computadora ${moveComputer}`);
  console.log(`jugada usuaria ${movePlayer}`);

  moves++; // aumentar el numero de jugadas
  console.log(moves);

  if (moveComputer === movePlayer) {
    //empate
    resultInput.innerHTML = "¡Empate!";
  } else if (movePlayer === "piedra") {
    if (moveComputer === "papel") {
      resultInput.innerHTML = "¡Has perdido!";
      computerScore++;
    } else if (moveComputer === "tijera") {
      resultInput.innerHTML = "¡Has ganado!";
      playerScore++;
    }
  } else if (movePlayer === "tijera") {
    if (moveComputer === "piedra") {
      resultInput.innerHTML = "¡Has perdido!";
      computerScore++;
    } else if (moveComputer === "papel") {
      resultInput.innerHTML = "¡Has ganado!";
      playerScore++;
    }
  } else if (movePlayer === "papel") {
    if (moveComputer === "tijera") {
      resultInput.innerHTML = "¡Has perdido!";
      computerScore++;
    } else if (moveComputer === "piedra") {
      resultInput.innerHTML = "¡Has ganado!";
      playerScore++;
    }
  }
  computer.innerHTML = "Ordenador: " + computerScore;
  player.innerHTML = "Jugadora: " + playerScore;
}

//finalizar juego:

function gameOver() {
  if (moves >= 10) {
    if (playerScore > computerScore) {
      resultInput.innerHTML = "¡Has ganado el juego!";
    } else if (playerScore < computerScore) {
      resultInput.innerHTML = "¡Has perdido el juego!";
    } else {
      resultInput.innerHTML = "¡Empate!";
    }
    playBtn.classList.add("hidden");
    reloadBtn.classList.remove("hidden");
  }
}

//mostrar resultador: texto, pontuación

function handleClickPlay(event) {
  event.preventDefault();
  playGame();
  gameOver();
}

function handleClickReload(event) {
  event.preventDefault();
  playBtn.classList.remove("hidden");
  reloadBtn.classList.add("hidden");
  playerScore = 0;
  computerScore = 0;
  moves = 0;
  resultInput.innerHTML = "¡Vamos a jugar!";
  computer.innerHTML = "Ordenador: " + computerScore;
  player.innerHTML = "Jugador:  " + playerScore;
}

//evento:
playBtn.addEventListener("click", handleClickPlay);
reloadBtn.addEventListener("click", handleClickReload);
