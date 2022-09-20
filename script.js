let gameBoard = (function() {
    let gameBoard = [];
    return {};
})();

let displayController = (function() {
    
    return {};
})();


const xClass = 'x';
const circleClass = 'o';
const squareDivs = document.querySelectorAll('.square');
const board = document.querySelector('game-grid');
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

squareDivs.forEach(square => {
    square.addEventListener('click', clickAction, { once:true})
});

function clickAction(e) {
    const square =e.target;
    const currentClass = circleTurn ? circleClass : xClass;
    placeMark(square, currentClass)
    switchTurns()
}

function placeMark(square, currentClass){
    square.classList.add(currentClass);
}

function switchTurns() {
    circleTurn = !circleTurn
}