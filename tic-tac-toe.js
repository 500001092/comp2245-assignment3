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

    squares.forEach(function(square) {
        square.addEventListener("click", handleSquareClick);
        square.addEventListener("mouseenter", handleMouseEnter);
        square.addEventListener("mouseleave", handleMouseLeave);
    });
});
