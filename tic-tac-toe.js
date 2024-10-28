document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#game-board div");
    const statusDiv = document.getElementById("status");
    const newGameButton = document.getElementById("new-game");

    let currentPlayer = "X";
    let gameState = Array(9).fill(""); 

    const winningCombinations = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top left to bottom right
        [2, 4, 6]  // Diagonal from top right to bottom left
    ];

    function handleSquareClick(event) {
        const clickedSquare = event.target;
        const squareIndex = Array.from(squares).indexOf(clickedSquare);

        if (gameState[squareIndex] !== "") {
            return;
        }

        gameState[squareIndex] = currentPlayer;
        clickedSquare.textContent = currentPlayer;

        clickedSquare.classList.add(currentPlayer);

        if (checkForWinner()) {
            statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
            statusDiv.classList.add("you-won");

            squares.forEach(function(square) {
                square.removeEventListener("click", handleSquareClick);
            });
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    function handleMouseEnter(event) {
        const hoveredSquare = event.target;
        const squareIndex = Array.from(squares).indexOf(hoveredSquare);

        if (gameState[squareIndex] === "") {
            hoveredSquare.classList.add("hover");
        }
    }

    function handleMouseLeave(event) {
        const hoveredSquare = event.target;
        hoveredSquare.classList.remove("hover");
    }

    function checkForWinner() {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;

            if (gameState[a] === currentPlayer && gameState[b] === currentPlayer && gameState[c] === currentPlayer) {
                return true;
            }
        }
        return false;
    }

    function resetGame() {
        gameState.fill("");

        squares.forEach(function(square) {
            square.textContent = "";
            square.classList.remove("X", "O", "hover"); 
            square.addEventListener("click", handleSquareClick); 
        });

        currentPlayer = "X";

        statusDiv.textContent = "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");
    }

    squares.forEach(function(square) {
        square.addEventListener("click", handleSquareClick);
        square.addEventListener("mouseenter", handleMouseEnter);
        square.addEventListener("mouseleave", handleMouseLeave);
    });

    newGameButton.addEventListener("click", resetGame);
});
