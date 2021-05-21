import {update as updateSnake, draw as drawSnake, getSnakeHead,outsideGrid,snakeBitesItself,SNAKE_SPEED} from "./snake.js";
import {update as updateFood, draw as drawFood} from "./food.js";
let lastRender;
const gameBoard=document.getElementById('game-board');
let gameOver=false;
function main(currentTime){
    if(gameOver){
        if(confirm('You Lost. Press Ok to restart!!!')){
            window.location='/'
        }
        return;
    }



    window.requestAnimationFrame(main);
    let secondsSinceLastRender=(currentTime-lastRender)/1000;
    if(secondsSinceLastRender<1/SNAKE_SPEED)return;
    lastRender=currentTime;
    update();
    draw();
}
window.requestAnimationFrame(main);


function update(){
    updateSnake();
    updateFood();
    checkDeath();
}
function draw(){
    gameBoard.innerHTML='';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}
function checkDeath(){
    if(outsideGrid(getSnakeHead())|| snakeBitesItself()){
        gameOver=true;
    }
}