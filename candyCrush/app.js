document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector('.grid')
    const width = 8
    const squares = []

const candyColors = [
    'red', 'yellow', 'orange',
    'purple', 'green', 'blue'
]
    //create board
    function createBoard(){
        for(let i = 0;i < width*width; i++) {
        const square = document.createElement('div')
        square.setAttribute('draggable', true)  //make items draggable
        square.setAttribute('id', i)
        let randomColor = Math.floor(Math.random() * candyColors.length)
        square.style.backgroundColor = candyColors[randomColor]
        grid.appendChild(square)
        squares.push(square)
        }
    }

let colorBeingDragged
let colorBeingReplaced


    createBoard()
//drag candy
squares.forEach(square => square.addEventListener('dragstart', dragStart))
squares.forEach(square => square.addEventListener('dragend', dragend))
squares.forEach(square => square.addEventListener('dragover', dragOver))
squares.forEach(square => square.addEventListener('dragenter', dragEnter))
squares.forEach(square => square.addEventListener('dragLeave', dragLeave))
squares.forEach(square => square.addEventListener('drop', drop))


function dragStart(){
    

}

function dragend(){
    
}

function dragOver(){
    
}

function dragEnter(){
    
}

function dragLeave(){
    
}





})