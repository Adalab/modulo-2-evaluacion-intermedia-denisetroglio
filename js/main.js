"use strict";

const select = document.querySelector(".js_select");
const playButn = document.querySelector(".js_button");
const stone = document.querySelector(".js_stone");
const paper = document.querySelector(".js_paper");
const scissors = document.querySelector(".js_scissors");

function getRandomNumber(max) { 
    return Math.ceil(Math.random(10) * max); 
  }


function playGame(){
    console.log("ahora juego");
}

function handleClickPlay(event){
    event.preventDefault();
    playGame();
}


playButn.addEventListener( 'click', handleClickPlay );