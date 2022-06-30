



const workspace = document.querySelector('.workspace');
workspace.style.display = "block";
// workspace.style.display = "flex"

let rowArray =[];
let boxArray = [];
let allBoxes = [];
let box;
const slider = document.querySelector('.slider');
const sliderOutput = document.querySelector('.gridSize');
let size = slider.value;
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

function buildGrid(size){
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




clearButton.addEventListener('click', ()=>{
    clearColors()});

blackButton.addEventListener('click', ()=>{
    color = "black"});

whiteButton.addEventListener('click', ()=>{
    color = "white"});

redButton.addEventListener('click', ()=>{
    color = "red"});

greenButton.addEventListener('click', ()=>{
    color = "green"});

blueButton.addEventListener('click', ()=>{
    color = "blue"});




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












sliderOutput.innerHTML = slider.value;

slider.oninput = function() {
    sliderOutput.innerHTML = this.value;
    size = this.value;
}


const knob = document.querySelector('.knob');

function calculateDegree(e){
    const x1 = window.innerWidth/2;
    const y1 = window.innerHeight/2;
    const x2 = e.clientX;
    const y2 = e.clientY;
    

    const deltaX = x1 - x2;
    const deltaY = y1 - y2;
    // console.log(x3)
    // console.log("x2:" + x2)
    // console.log("y1,y2:" + [y1,y2])
    const rad = Math.atan2(deltaY,deltaX);
    let deg = rad *(180/Math.PI);
    // console.log(deg);
    return deg;

}

knob.addEventListener("mousedown",function() {
    knob.addEventListener("mousemove", rotate);
        function rotate(e){
            // console.log(e)
            const result = Math.floor(calculateDegree(e));
            knob.style.transform = `rotate(${result}deg)`;
            // console.log(knob.style.transform)
        }
        knob.addEventListener("mouseup", function(){
            knob.removeEventListener("mousemove", rotate);
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




