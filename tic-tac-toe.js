document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#game-board div");

    let currentPlayer = "X";
    let gameState = Array(9).fill(""); 

    function handleSquareClick(event) {
        const clickedSquare = event.target;
        const squareIndex = Array.from(squares).indexOf(clickedSquare);

        if (gameState[squareIndex] !== "") {
            return;
        }

        gameState[squareIndex] = currentPlayer;
        clickedSquare.textContent = currentPlayer;

        clickedSquare.classList.add(currentPlayer);

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    squares.forEach(function(square) {
        square.addEventListener("click", handleSquareClick);
    });
});
