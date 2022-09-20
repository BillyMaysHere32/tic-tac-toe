const xClass = 'x';
const circleClass = 'o';
const squareDivs = document.querySelectorAll('.square');
const board = document.querySelector('game-grid');
const endgameMessage = document.querySelector('.endgame-message')
const endGameText = document.querySelector('[endgame-message-text]')
const restartBtn =document.getElementById('restart-button')
let circleTurn;
const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
gameBoard()
  function gameBoard() {
    circleTurn = false;
    squareDivs.forEach(square => {
        square.classList.remove(xClass);
        square.classList.remove(circleClass);
        
        square.addEventListener('click', clickAction, { once:true})
    });
    endgameMessage.classList.remove('show');
};

restartBtn.addEventListener('click', gameBoard);

function clickAction(e) {
    const square =e.target;
    const currentClass = circleTurn ? circleClass : xClass;
    placeMark(square, currentClass)
    if (checkWin(currentClass)) {
        //console.log('winner');
        endGame(false);
    } else if (isDraw()) {
        endGame(true)
    } else {
        switchTurns()
    }
};

function isDraw() {
    return [...squareDivs].every(square => {
        return square.classList.contains(xClass) || square.classList.contains(circleClass)
    })
}

function placeMark(square, currentClass){
    square.classList.add(currentClass);
};

function endGame(draw) {
    if (draw) {
        endGameText.innerText = 'Draw!';
    } else {
        endGameText.innerText = `${circleTurn ? 'Red' : 'Blue'} Wins!`;
    }
    endgameMessage.classList.add('show');
};

function checkWin(currentClass) {
    return winCombinations.some(combination => {
        return combination.every(index => {
            return squareDivs[index].classList.contains(currentClass)
        })
    })
};

function switchTurns() {
    circleTurn = !circleTurn
};