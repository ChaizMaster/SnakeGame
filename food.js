import {onSnake,expandSnake} from './snake.js'
const GRID_SIZE=21;
let foodLocation=getRandomLocation();
const EXPANSION_RATE_OF_SNAKE=1;
export function draw(gameBoard){
    const foodElement=document.createElement('div');
    foodElement.classList.add('bait');
    foodElement.style.gridColumnStart=foodLocation.x;
    foodElement.style.gridRowStart=foodLocation.y;
    gameBoard.appendChild(foodElement);
}
export function update(){
    if(onSnake(foodLocation)){
        expandSnake(EXPANSION_RATE_OF_SNAKE);
        foodLocation=getRandomLocation();
    }
}

function getRandomLocation(){
    let newPosition;
    while(newPosition==null || onSnake(newPosition)){
        newPosition=randomGridPosition();
    }
    return newPosition
}
function randomGridPosition(){
    return {
        x: Math.floor(Math.random()*GRID_SIZE)+1,
        y: Math.floor(Math.random()*GRID_SIZE)+1
    }
}