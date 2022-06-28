



const workspace = document.querySelector('.workspace');
workspace.style.display = "block";
// workspace.style.display = "flex"

let rowArray =[];
let boxArray = [];
let box;
const slider = document.querySelector('.slider');
const sliderOutput = document.querySelector('.gridSize');
let size = slider.value;
let color = "black";
let height;
let width;

const clearButton = document.querySelector('.clear');
const blackButton = document.querySelector('.black');
const whiteButton = document.querySelector('.white');
const redButton = document.querySelector('.red');
const greenButton = document.querySelector('.green');
const blueButton = document.querySelector('.blue');
const recreateGrid = document.querySelector('.recreateGrid');

function buildGrid(size){
    height = 500/size;
    width = 500/size;

    for (let i = 0; i <=(size-1); i++){
        rowArray[i] = document.createElement("div")
        rowArray[i].style.display = "flex"
        rowArray[i].classList.add ("row")
        // rowArray[i].style.height = `${height}px`
        for (let x = 0; x <=(size-1); x++){
            boxArray[x] = document.createElement("div")
            boxArray[x].classList.add ("box")
            // rowArray[i] = document.createElement("div")
            // box.style.width = `${width}px`
            rowArray[i].appendChild(boxArray[x])
            boxArray[x].style.height = `${height}px`
            boxArray[x].style.width = `${width}px`
        }

        workspace.appendChild(rowArray[i])
        // box.classList.add ("box")
    }

    box = document.querySelectorAll(".box")

    for (const square of box){
        square.addEventListener('mouseover',()=>{
            colorChange(square)},true
        )}

}





// box.addEventListener("click", myFunction)



recreateGrid.addEventListener('click', ()=>{
    while(workspace.firstChild)
        {workspace.removeChild(workspace.firstChild)}
    buildGrid(size)});

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







// color = 
// red rgb(255, 0, 0)
// green rgb(0, 180, 0)
// blue rgb(0, 0, 255)
// white rgb(255, 255, 255)
// black rgb(0, 0, 0)

function colorChange(element){
    element.style.background = color
}

function clearColors(){
    for (const square of box){
        square.style.background = "white"}
    }


buildGrid(size)


sliderOutput.innerHTML = slider.value;

slider.oninput = function() {
    sliderOutput.innerHTML = this.value;
    size = this.value;
}
