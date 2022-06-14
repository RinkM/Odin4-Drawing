
// box.style.background = "blue"

const workspace = document.querySelector('.workspace')
// workspace.style.display = "flex"
let rowArray =[];
let boxArray = [];
let box;


// workspace.appendChild(box)

// box.textContent = "Box!"    
// let row = workspace.appendChild(document.createElement("div"))

const row = document.createElement("div")
// const box = document.createElement("div") 
// workspace.appendChild(row)
workspace.style.display = "block"
// row.style.display = "inline"

let height = 360/16
let width = 360/16

// row.classList.add ("row")
// box.classList.add ("box")

// row.appendChild(box)

for (let i = 0; i <=15; i++){
    rowArray[i] = document.createElement("div")
    rowArray[i].style.display = "flex"
    rowArray[i].classList.add ("row")
    // rowArray[i].style.height = `${height}px`
    for (let x = 0; x <=15; x++){
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
// box.addEventListener("click", myFunction)

for (const square of box){
    square.addEventListener('onlick', colorChange(square),true)
}

function colorChange(element){
    element.style.background = "black"
}




// for (let x = 0; x <=16; x++){
//     rowArray[i][boxArray[x]] = document.createElement("div")
//     boxArray[x].style.width = `${width}px`
//     rowArray[i].appendChild(boxArray[x])
// }
    
    
    // for (let i = 0; i <=16; i++){
        // console.log("Print")
        // document.createElement("div")
        
    // }
    // workspace.appendChild(document.createElement("div"))
