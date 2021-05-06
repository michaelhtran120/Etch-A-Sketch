//Style for body
const body = document.querySelector('#body');
body.setAttribute('style', 
    `display: flex; 
    flex-direction: column;
    width: 100vw;
    align-items: center; 
    justify-content: center;`)

// Style for container and total grid size
const container = document.querySelector('#container');
container.setAttribute('style', 
    `display: grid; 
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(16, 1fr);
    width: 550px; 
    height: 550px;
    border: 1px solid black;`);
  
const btnContainer = document.createElement('div');
btnContainer.setAttribute('style',
    `display: flex;
    width: 400px;
    height: auto;;
    margin-bottom: 2em;
    justify-content: space-evenly;`)
body.insertBefore(btnContainer, container);

const title = document.createElement('h1');
title.setAttribute('style', 'font-family: montserrat, sans-serif;')
title.textContent = "Etch-A-Sketch";
body.insertBefore(title, btnContainer);

let value = 16;
color = 'black';

function createGrid(value) {
    for (i=1; i<=value; i++) { //row
        const gridBox = document.createElement('div');
        gridBox.setAttribute('style', 
            `background: lightgray; 
            width: 1fr; 
            height: 1fr; 
            border: 0.1px solid grey;`);
        gridBox.setAttribute('class', 'grid-box');
        container.appendChild(gridBox)

        for (j=1; j<=value-1; j++){ //column
            const gridBox = document.createElement('div');
            gridBox.setAttribute('style', 
                `background: lightgray; 
                width: 1fr; 
                height: 1fr; 
                border: 0.1px solid grey;`);
            gridBox.setAttribute('class', 'grid-box');
            container.appendChild(gridBox)
        }
    } 
    //Hover effect to change box color
    document.querySelectorAll('.grid-box').forEach(box => {
        box.addEventListener('mouseenter', Event => {
            box.style.backgroundColor = `${color}`;
        })
    })
}

// Run function to create initial grid.
createGrid(value);

// Reset grid button.
const resetBtn = document.createElement('button');
resetBtn.innerText="Reset Grid";
resetBtn.setAttribute('style', 
    `padding: 5px 10px; 
    margin-right: 10px;`)
btnContainer.appendChild(resetBtn);

//Function to reset grid.
resetBtn.addEventListener('click', () => {
    document.querySelectorAll('.grid-box').forEach(box => {
        box.style.backgroundColor = 'lightgray';
    })
    promptNewGrid();
    updateGrid();
    color = 'black';
    colorBtn.style.setProperty('background-color','lightgrey');
})

// New Grid Value Prompt
function promptNewGrid() {
    value = prompt ('How many squares in a row?', 16);
    while (value < 5 || value > 100) {
        value = prompt('Please choose a value between 5 and 100')
    }
}

//function to update grid
function updateGrid() {
    container.innerHTML= '';
    container.style.setProperty('grid-template-columns', `repeat(${value}, 1fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${value}, 1fr)`);
    createGrid(value);

}
// Change color button.
const colorBtn = document.createElement('button');
colorBtn.innerText = "Random color";
colorBtn.setAttribute('style', 
    `padding: 5px 10px;
    margin-right: 10px;` 
    )
btnContainer.appendChild(colorBtn);

// Function that provides a random value then assigns value as the color.
colorBtn.addEventListener('click', ()=>{
    randomNumber = Math.floor(Math.random()*16777215).toString(16);
    color=randomNumber;
    colorBtn.style.setProperty(`background-color`, `${color}`);
})

const rainbowBtn = document.createElement('button');
rainbowBtn.setAttribute('style', 
    `padding: 5px 10px;
`)
