"use strict";

const selectOption = document.querySelector(".js_select");
const playButn = document.querySelector(".js_button");
const stone = document.querySelector(".js_stone");
const paper = document.querySelector(".js_paper");
const scissors = document.querySelector(".js_scissors");
const player = document.querySelector(".js_player");
const computer = document.querySelector(".js_computer");


function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
  }


function playGame( ){
    console.log("ahora juego");
    const userValue = selectOption.value; 
if(getRandomNumber <3){

}

else if(getRandomNumber >=6){

}
else{

}
}

function handleClickPlay(event){
    event.preventDefault();
    playGame();
    const randomNumber = getRandomNumber(10);
    console.log({randomNumber});
}

playButn.addEventListener( 'click', handleClickPlay );

