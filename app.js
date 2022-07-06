
const workspace = document.querySelector('.workspace');
workspace.style.display = "block";

let rowArray =[];
let boxArray = [];
let allBoxes = [];
let box;
const gridSize = document.querySelector('.gridSize');
let size =5;
let color = "black";
let height;
let width;
let dialValueLeft = 0;
let dialValueRight = 0;

const knobList = document.querySelectorAll('.knob');

let workspaceHeight = workspace.clientHeight;
let workspaceWidth = workspace.clientWidth;

const recreateGrid = document.querySelector('.recreateGrid');
const colorPicker = document.querySelector('.colorPicker');


buildGrid(size)

// measures workspace.  creates single row, then fills it with individual boxes / divs.  
// sets boxes as "allboxes" array. sets mouseover event (colorChange) for each box.
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

    for (const box of allBoxes){
        box.addEventListener('mouseover',()=>{
            colorChange(box)},true
        )}
}

// shake it up button. 
recreateGrid.addEventListener('click', ()=>{
    while(workspace.firstChild)
        {workspace.removeChild(workspace.firstChild)}
    buildGrid(size)  
});


function colorChange(element){
    element.style.background = color
}

function clearColors(){
    for (const square of allBoxes){
        square.style.background = "white"}
    }

function calculateDegree(e){
    const x2 = e.clientX;
    const x3left = knobList[0].offsetLeft
    const x3right = knobList[1].offsetLeft
    dialValueLeft =  (((x2 - x3left)/64)*180)-90;
    dialValueRight = (((x2 - x3right)/64)*180)-90;
    return [dialValueLeft, dialValueRight];
}

function updateColor (){
    console.log(dialValueRight+135)
    if (dialValueRight + 135 <= 68) {
        color = "yellow";
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
        console.log ("right value dial if statements broke.")
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
        console.log ("left value dial if statements broke.")
    }
}


knobList[0].addEventListener("mousedown",function() {
    knobList[0].addEventListener("mousemove", rotate);
        function rotate(e){
            const result = Math.floor(calculateDegree(e)[0]);
            knobList[0].style.transform = `rotate(${result}deg)`;
            updateSize()
        }
        knobList[0].addEventListener("mouseup", function(){
            knobList[0].removeEventListener("mousemove", rotate);
        });
});

knobList[1].addEventListener("mousedown",function() {
    knobList[1].addEventListener("mousemove", rotate);
        function rotate(e){
            const result = Math.floor(calculateDegree(e)[1]) ;
            knobList[1].style.transform = `rotate(${result}deg)`;
            updateColor()
        }
        knobList[1].addEventListener("mouseup", function(){
            knobList[1].removeEventListener("mousemove", rotate);
        });
    });

