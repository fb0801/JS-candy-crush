document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector('.grid')
    const width = 8


    //create board
    function createBoard(){
        for(let i = 0;i < width*width; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
        }
    }
})