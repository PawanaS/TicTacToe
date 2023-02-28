
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

