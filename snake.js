import {getInputDirection} from './input.js';
export const SNAKE_SPEED=5;
const snakeBody=[{x:11,y:11}];
let newSegment=0;
export function update(){
    addSegments();
    const inputDirection=getInputDirection();
    for(let i=snakeBody.length-2;i>=0;i--){
        snakeBody[i+1]={...snakeBody[i]};
    }
    snakeBody[0].x+=inputDirection.x;
    snakeBody[0].y+=inputDirection.y;
}
export function draw(gameBoard){
    snakeBody.forEach(segment =>{
        const snakeElement=document.createElement('div');
        snakeElement.classList.add('snake');
        snakeElement.style.gridColumnStart=segment.x;
        snakeElement.style.gridRowStart=segment.y;
        gameBoard.appendChild(snakeElement);
    });

}
export function expandSnake(amount){
    newSegment+=amount;
}

export function onSnake(position,{ignoreHead=false}={}){
    return snakeBody.some((segment,index)=>{
        if(ignoreHead&&index===0) return false
        return equalPosition(segment,position);
    });
}
function equalPosition(pos1,pos2){
    return pos1.x===pos2.x && pos1.y===pos2.y;
}
function addSegments(){
    for(let i=0;i<newSegment;i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }
    newSegment=0;
}           
export function outsideGrid(pos){
    return pos.x<1 || pos.x>21 || pos.y<1 || pos.y>21;
}
export function getSnakeHead(){
    return snakeBody[0];
}
export function snakeBitesItself(){
    return onSnake(snakeBody[0],{ignoreHead:true})
}