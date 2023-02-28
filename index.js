
// selecting all the element in game board cell and make array cellElements
const cellElements = document.querySelectorAll('.game-board .cell')
const player1 = document.querySelector(".players .players1")
const player2 = document.querySelector(".players .players2")
const WINNING_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]

const playerO = "O"
const playerX = "X"
let toggleTurn = true;
// console.log(cellElements)
cellElements.forEach(cell => {
    cell.onclick = () => {
        let currentPlayer = toggleTurn ? playerO : playerX
        cell.classList.add("disabled")
    addInCell(cell, currentPlayer)
        // if (winnerCheck()) {
        //     console.log("WINNER")

        }


        swapPlayer()
    })



// function winnerCheck(currentPlayer){
//     return WINNING_CONDITIONS.some(condition=>{
//         console.log(condition)
//         return condition.every(index=>{
//             console.log(index)
//             return cellElements[index].classList.contains(currentPlayer)
//         })
//     })
// }
function swapPlayer() {
    toggleTurn = !toggleTurn;
    if (toggleTurn) {
        player1.classList.add("active")
        player2.classList.remove("active")

    } else {
        player2.classList.add("active")
        player1.classList.remove("active")

    }
    
}
function addInCell(cell,currentPlayer){
    cell.innerHTML=currentPlayer
}

