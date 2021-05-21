let inputDir={x:0,y:0};
let prevDir={x:0,y:0};
export function getInputDirection(){
    prevDir=inputDir;
    return inputDir;
}
window.addEventListener("keydown",e=>{
    switch(e.key){
        case 'ArrowUp':
            if(prevDir.y!==0) break;
            inputDir={x:0,y:-1};
            break;
        case 'ArrowDown':
            if(prevDir.y!==0) break;
            inputDir={x:0,y:1};
            break;
        case 'ArrowRight':
            if(prevDir.x!==0) break;
            inputDir={x:1,y:0};
            break;
        case 'ArrowLeft':
            if(prevDir.x!==0) break;
            inputDir={x:-1,y:0};
            break;
    }
});