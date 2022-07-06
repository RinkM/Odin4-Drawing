



const workspace = document.querySelector('.workspace');
workspace.style.display = "block";
// workspace.style.display = "flex"

let rowArray =[];
let boxArray = [];
let allBoxes = [];
let box;
const slider = document.querySelector('.slider');
const gridSize = document.querySelector('.gridSize');
let size =5;
let color = "black";
let height;
let width;

let workspaceHeight = workspace.clientHeight;
let workspaceWidth = workspace.clientWidth;

const clearButton = document.querySelector('.clear');
const blackButton = document.querySelector('.black');
const whiteButton = document.querySelector('.white');
const redButton = document.querySelector('.red');
const greenButton = document.querySelector('.green');
const blueButton = document.querySelector('.blue');
const recreateGrid = document.querySelector('.recreateGrid');
const colorPicker = document.querySelector('.colorPicker');




function buildGrid(size){
    colorPicker.style.background = color;
    workspaceHeight = workspace.clientHeight;
    workspaceWidth = workspace.clientWidth;
    height = workspaceHeight / size;
    width = workspaceWidth / size;

    for (let i = 0; i <=(size-1); i++){
        rowArray[i] = document.createElement("div");
        rowArray[i].style.display = "flex";
        rowArray[i].classList.add ("row");

        for (let x = 0; x <=(size-1); x++){
            boxArray[x] = document.createElement("div");
            boxArray[x].classList.add ("box");
            rowArray[i].appendChild(boxArray[x]);
            boxArray[x].style.height = `${height}px`;
            boxArray[x].style.width = `${width}px`;
        }

        workspace.appendChild(rowArray[i])
    }

    allBoxes = document.querySelectorAll(".box")
    // box.style.background = "grey"


    for (const box of allBoxes){
        box.addEventListener('mouseover',()=>{
            colorChange(box)},true
        )}

    // for (const box of allBoxes){
    //     box.addEventListener('mouseover',()=>{
    //         colorChange(box)},true
    //     )}

}


// box.addEventListener("click", myFunction)

recreateGrid.addEventListener('click', ()=>{
    while(workspace.firstChild)
        {workspace.removeChild(workspace.firstChild)}
    buildGrid(size)  
});




// clearButton.addEventListener('click', ()=>{
//     clearColors()});

// blackButton.addEventListener('click', ()=>{
    
//     color = "black";
//     colorPicker.style.background = color;
// });

// whiteButton.addEventListener('click', ()=>{
//     color = "white";
//     colorPicker.style.background = color;});

// redButton.addEventListener('click', ()=>{
//     color = "red";
//     colorPicker.style.background = color;});

// greenButton.addEventListener('click', ()=>{
//     color = "green";
//     colorPicker.style.background = color;});

// blueButton.addEventListener('click', ()=>{
//     color = "blue";
//     colorPicker.style.background = color;});




function colorChange(element){
    element.style.background = color
}

function clearColors(){
    for (const square of allBoxes){
        square.style.background = "white"}
    }

console.log(workspace.childNodes)
buildGrid(size)
console.log(workspace.childNodes)



// the knobs!   use offsetX to find the x value of cursor   use a percentage to 
// x = 0 then rotation  = -90
// x = mid then rotation = 0 
// x = max then rotation = +90



const knobList = document.querySelectorAll('.knob');

function calculateDegree(e){
    const x2 = e.clientX;
    const x3left = knobList[0].offsetLeft
    const x3right = knobList[1].offsetLeft

    // console.log(window.innerWidth)
    // console.log(x2) 
    // console.log(x3)

    dialValueLeft =  (((x2 - x3left)/64)*180)-90;
    dialValueRight = (((x2 - x3right)/64)*180)-90;
    // console.log("deltaX: " + (deltaX))
    
    console.log("left: " + dialValueLeft)
    console.log("right: " + dialValueRight)
    return [dialValueLeft, dialValueRight];

}
// knobList.map(knob => {
//     knob.addEventListener("mousedown",function() {
//         knob.addEventListener("mousemove", rotate);
//             function rotate(e){
//                 // console.log(e)
//                 const result = Math.floor(calculateDegree(e));
//                 knob.style.transform = `rotate(${result}deg)`;
//                 // console.log(knob.style.transform)
//             }
//             knob.addEventListener("mouseup", function(){
//                 knob.removeEventListener("mousemove", rotate);
//             });
//     });

// });

let dialValueLeft = 0;
let dialValueRight = 0;

function updateColor (){
    console.log(dialValueRight+135)
    if (dialValueRight + 135 <= 68) {
        color = "white";
        colorPicker.style.background = color;
    } else if (dialValueRight + 135 >= 69 && dialValueRight + 135 <= 135){
        color = "black";
        colorPicker.style.background = color;
    } else if (dialValueRight + 135 >= 136 && dialValueRight + 135 <= 203){
        color = "green";
        colorPicker.style.background = color;
    } else if (dialValueRight + 135 >= 204){
        color = "blue";
        colorPicker.style.background = color;
    } else {
        console.log ("right value dial if statementes broke.")
    }
}

function updateSize(){
console.log(dialValueLeft+135)
   if (dialValueLeft + 135 <= 68) {
    size = 2;    
    gridSize.textContent = "2"

    } else if (dialValueLeft + 135 >= 69 && dialValueLeft + 135 <= 135){
        size = 5;
        gridSize.textContent = "5";
    } else if (dialValueLeft + 135 >= 136 && dialValueLeft + 135 <= 203){
        size = 25;
        gridSize.textContent = "25"
    } else if (dialValueLeft + 135 >= 204){
        size = 50;
        gridSize.textContent = "50"
    } else {
        console.log ("right value dial if statementes broke.")
    }
}


knobList[0].addEventListener("mousedown",function() {
    knobList[0].addEventListener("mousemove", rotate);
        function rotate(e){
                

            // console.log(e)
            const result = Math.floor(calculateDegree(e)[0]);
            knobList[0].style.transform = `rotate(${result}deg)`;
            updateSize()
            // console.log(knobList[0].style.transform)
        }
        knobList[0].addEventListener("mouseup", function(){
            knobList[0].removeEventListener("mousemove", rotate);
        });
});

knobList[1].addEventListener("mousedown",function() {
    knobList[1].addEventListener("mousemove", rotate);
        function rotate(e){
            // console.log(e)
            const result = Math.floor(calculateDegree(e)[1]) ;
            knobList[1].style.transform = `rotate(${result}deg)`;
            updateColor()
            // console.log(knobList[1].style.transform)
        }
        knobList[1].addEventListener("mouseup", function(){
            knobList[1].removeEventListener("mousemove", rotate);
        });
    });

// let screenLog = document.querySelector('#screen-log');
// document.addEventListener('mousemove', logKey);

// function logKey(e) {
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}
//     Offset X/Y X/Y: ${knob.offsetX}, ${knob.offsetY}`;
    
// }




