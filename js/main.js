"use strict";

const selectOption = document.querySelector(".js_select");
const playButn = document.querySelector(".js_button");
const stone = document.querySelector(".js_stone");
const paper = document.querySelector(".js_paper");
const scissors = document.querySelector(".js_scissors");

function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
  }
  console.log(getRandom(10));


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
}

playButn.addEventListener( 'click', handleClickPlay );

