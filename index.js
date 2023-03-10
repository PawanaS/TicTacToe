
// selecting all the element in game board cell and make array cellElements
const cellElements = document.querySelectorAll('.game-board .cell')
const player1 = document.querySelector(".players .player1");
const player2 = document.querySelector(".players .player2");
const result = document.querySelector(".result")
const result_text = document.querySelector(".result h1")
const restart_btn = document.querySelector(".result button")

const playerO = 'O'
const playerX = "X"
let toggleTurn = true;
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
//console.log(cellElements)
cellElements.forEach(cell => {
    // console.log(cell)
    cell.onclick = () => {
        let currentPlayer = toggleTurn ? playerO : playerX;//toggles turns between O and X after each click in the cells.
        //console.log(cell)
        cell.classList.add("disabled")//disabled class is applied in each cell after each one is clicked.
        //cell.innerHTML = currentPlayer;

        addInCell(cell, currentPlayer);

        if (winnerCheck(currentPlayer)) {// today march 1
            // console.log(currentPlayer, "is a WINNER!")
            addInactive()
            //swapPlayer()
            result_text.innerHTML = currentPlayer + "  win the game!";
            endGame()
        } else if (isDraw()) {
            // console.log("Draw the game!")
            addInactive()
            result_text.innerHTML = "The game is draw";
            //endGame()
        } else {
           // game_board.cell.removeEventListener
            swapPlayer();
            

        }
    }
})


function swapPlayer() {
    toggleTurn = !toggleTurn;//working till here
    if (toggleTurn) {// this if else is to hit the turn-bottom one after another
        player1.classList.add("active");
        player2.classList.remove("active");
    } else {
        player2.classList.add("active");
        player1.classList.remove("active");//working till here
    }

}
function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(playerX) || cell.classList.contains(playerO)//work from here

    })
}

function addInCell(cell, currentPlayer) {
    cell.innerHTML = currentPlayer;
    cell.classList.add(currentPlayer);//add current players in the classList.

}
function addInactive() {
    result.classList.remove("inactive");

}
function endGame() {
    cellElements.forEach((cell) => {
      cell.onclick=null
    });
    
  }

function winnerCheck(currentPlayer) {
    return WINNING_CONDITIONS.some(condition => {
        //console.log(condition)
        return condition.every(index => {
            return cellElements[index].classList.contains(currentPlayer)
            // console.log (cellElements[index].classList.contains(currentPlayer))

        })
    })

}
restart_btn.onclick = () => {
    location.reload();//method reloads the current resource, when the Restart button is clicked.
}