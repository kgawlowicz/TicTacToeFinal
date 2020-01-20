
//states: gameon, winner draw
let turnCount = 0;
let state = "gameon"
let player = "X";  //player 1
let cells = document.querySelectorAll('.cell');

let winCombos = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[2], cells[4], cells[6]],
    [cells[0], cells[4], cells[8]]
]


cells.forEach(function (cell) {
    cell.addEventListener("click", function () {
        if (turnCount % 2 === 0) {
            //player 1 - X
            cell.textContent = "X";
        } else {
            //player 2 - O
            cell.textContent = "O";
        }
        turnCount++
        checkWin();
    });
});

function checkWin() {
    //length of 8 b/c 8 ways to win or b/c 8 boxes if count starts at 0
    for (let i = 0; i < winCombos.length; i++) {
        let sum = 0;
        //length of 2
        for (let j = 0; j < winCombos[i].length; j++) {
            if (winCombos[i][j].textContent === "X") {
                sum++
            }

            if (sum === 3) {
                alert("X Wins!")
            }
        }

    }
    for (let l = 0; l < winCombos.length; l++) {
        let sum = 0;
        //length of 2
        for (let k = 0; k < winCombos[l].length; k++) {
            if (winCombos[l][k].textContent === "O") {
                sum++
            }

            if (sum === 3) {
                alert("O Wins!")
            }
        }

    }
}


