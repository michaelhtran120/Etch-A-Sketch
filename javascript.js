const container = document.querySelector('#container');
container.setAttribute('style', 'display: grid; grid-template-columns: repeat(16, 2em);')

const body = document.querySelector('#body');
body.setAttribute('style', 'display: flex; align-items: center; justify-content: center;')

function createGrid() {
    for (i=1; i<=256; i++) {
        const gridBox = document.createElement('div');
        gridBox.setAttribute('style', 'background: lightgray; width: 2em; height: 2em; border: 0.5px solid black;');
        container.appendChild(gridBox)
    }
}
createGrid();
//const gridBox[i] = document.createElement('div');
//gridBox.setAttribute('style', 'background: gray; width: 1em; height: 1em');