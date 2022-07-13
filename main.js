//Get user input
let userInput;
let userFeedback;
const gameResult = document.getElementById("gameresult")
// check if input is corect
document.getElementById("check").addEventListener("click", check);
//create a count 
let count = 0
//let gameOver = false;
const maxCount = 5;
newGame()
function check() {
    userInput = parseInt(document.getElementById("gamer-input").value);
    let generateRandomNumber = Math.floor(1 + Math.random() * 10)
    if (userInput < generateRandomNumber) {
        userFeedback = "close call!!!, try again!"
    } else if (userInput === generateRandomNumber) {
        userFeedback = "yay !!! congrats"
        // gameOver = true;
        document.getElementById("check").disabled = true
        document.getElementById("newgame").disabled = false
    } else {
        userFeedback = "woow ! guess so high!! try again"
    }
    //increatment the count. As user clicks, its counts the click
    count++;
    if (count === maxCount && gameOver == false) {
        userFeedback = "Thank you, Out of tries. The last random number was" + ' ' + generateRandomNumber;
        document.getElementById("check").disabled = true
        document.getElementById("newgame").disabled = false
    }
    gameResult.textContent = userFeedback
}
document.getElementById("newgame").addEventListener("click", newGame);
function newGame() {
    document.getElementById("newgame").disabled = true;
    count = 0
    gameOver = false;
    document.getElementById("check").disabled = false;
}
let footerDate = document.getElementById('footer')
const dateThisGame = new Date();
footerDate.innerHTML = dateThisGame.getDate() + ' ' + dateThisGame.getMonth() + ' ' + dateThisGame.getFullYear() + ' ' + '<br> COPYRIGHT AND &COPY : ADEYENI DEARBORN. JULY 12 2022';