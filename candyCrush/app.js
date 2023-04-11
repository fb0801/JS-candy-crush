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
let squareIdBeingDragged
let squareIdBeingReplaced

    createBoard()
//drag candy
squares.forEach(square => square.addEventListener('dragstart', dragStart))
squares.forEach(square => square.addEventListener('dragend', dragend))
squares.forEach(square => square.addEventListener('dragover', dragOver))
squares.forEach(square => square.addEventListener('dragenter', dragEnter))
squares.forEach(square => square.addEventListener('dragLeave', dragLeave))
squares.forEach(square => square.addEventListener('drop', dragDrop))


function dragStart(){
    colorBeingDragged= this.style.backgroundColor
    squareIdBeingDragged = parseInt(this.id)
    console.log(this.id, 'dragstart')

}

function dragend(){
    console.log(this.id, 'dragend')
    let validMoves = [squareIdBeingDragged -1, squareIdBeingDragged - width, 
    squareIdBeingDragged + 1,
    squareIdBeingDragged + width]

    let validMove = validMoves.includes(squareIdBeingReplaced)

    if(squareIdBeingReplaced && validMove) {
        squareIdBeingReplaced = null
    } else if (squareIdBeingDragged && !validMove){
        squares[squareIdBeingReplaced].style.backgroundColor  = colorBeingReplaced
        squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
    } else squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged
}

function dragOver(e){
    e.preventDefault()
    console.log(this.id, 'dragover')
}

function dragEnter(e){
    e.preventDefault()
    
}

function dragLeave(){
    
}


function dragDrop(){
    console.log(this.id, 'dragdrop')
    colorBeingReplaced - this.style.backgroundColor
    squareIdBeingReplaced = parseInt(this.id)
    this.style.backgroundColor  = colorBeingDragged
    squares[squareIdBeingDragged].style.backgroundColor  = colorBeingReplaced
}


})