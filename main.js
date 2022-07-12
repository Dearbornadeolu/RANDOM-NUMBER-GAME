//Get user input
let userInput;
let userFeedback;
const gameResult = document.getElementById("gameresult")
// check if input is corect
document.getElementById("check").addEventListener("click", check);
//generate random number
let generateRandomNumber;
//create a count 
let count = 0
//let gameOver = false;
const maxCount = 5;
newGame()
function check() {
    userInput = parseInt(document.getElementById("gamer-input").value);
    generateRandomNumber = Math.floor(1 + Math.random() * 50)
    if (userInput < generateRandomNumber) {
        userFeedback = "too low, try again!"
    } else if (userInput === generateRandomNumber) {
        userFeedback = "congrats"
        // gameOver = true;
        document.getElementById("check").disabled = true
        document.getElementById("newgame").disabled = false
    } else {
        userFeedback = "too much ! try again"
    }
    //increatment the count. As user clicks, its counts the click
    count++;
    if (count === maxCount && gameOver == false) {
        userFeedback = "hey, Out of tries. The number was" + ' ' + generateRandomNumber;
        document.getElementById("check").disabled = true
        document.getElementById("newgame").disabled = false
    }
    gameResult.textContent = userFeedback
}
document.getElementById("newgame").addEventListener("click", newGame);
function newGame() {
    document.getElementById("newgame").disabled = true
    let generateRandomNumber = Math.floor(1 + Math.random() * 5)
    generateRandomNumber = Math.floor(1 + Math.random() * 5)
    count = 0
    gameOver = false;
    document.getElementById("check").disabled = false
}
let footerDate = document.getElementById('footer')
const dateThisGame = new Date();
footerDate.innerHTML = dateThisGame.getDate()+ ' ' + dateThisGame.getMonth()+ ' ' + dateThisGame.getFullYear()+ ' ' +'<br> COPYRIGHT AND &COPY : ADEYENI DEARBORN. JULY 12 2022';