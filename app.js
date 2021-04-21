let table = document.querySelector(".table");
let firstSymbol = document.getElementById("first-symbol");
let player = document.querySelector(".player-name");
let currentPlayer = 1;
let post = document.querySelector(".post");


function getPlayer () {
    player.style.visibility = "hidden";
    firstSymbol.style.visibility = "hidden";
    post.innerHTML = "Let's go " + player.value + ", you are player 'X'";
}


// Select current player
firstSymbol.addEventListener("click", makeCurrentPlayer ());
function makeCurrentPlayer () {
    if (currentPlayer === 1) {
        playerSymbol = "X";
        currentPlayer--;
        return
    } 
}
//Switch between Symbols/Players 
function switchSymbols () {
   if (currentPlayer === 0) {
    currentPlayer++;
    playerSymbol = "O"
   } else if (currentPlayer === 1) {
       currentPlayer--;
       playerSymbol = "X"
   }
}


//Game board as a 2D array 
let gameBoard = [
    ["O", "X", "O"],
    ["O", "X", "O"],
    ["O", "X", "O"]
];

//Print out gameboard array 
let rows = gameBoard.length;
let columns = gameBoard[0].length;
function displayArray () {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            //Create a div element for each Array item
            let boxes = document.createElement("div");
            //Add a class to each box
            boxes.classList.add("boxes")
            //Add each box to a div on the html page
            table.appendChild(boxes);  
            boxes.innerHTML 
            //Add an event listener to get symbold in the boxes
            boxes.addEventListener("click", displaySymbol)       
        }  
    }
    function displaySymbol () {
        if (this.innerHTML === "X") {
            this.innerHTML = "X";
        } else if (this.innerHTML === "O") {
            this.innerHTML = "O"
        } else if (this.innerHTML !== playerSymbol) {
            this.innerHTML = playerSymbol;
        } else {
            return
        }  
        switchSymbols()
    }
}
displayArray();



















