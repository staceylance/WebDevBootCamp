console.log("Connected");

//Creates Player elements using DOM, also establishes MaxScore
var Player1 = document.getElementById("P1Display");
var Player2 = document.getElementById("P2Display");
var WinningScore;
document.getElementById("MaxScore").addEventListener("input", function(){
    WinningScore = document.getElementById("MaxScore").value;
});

//Resets scores
function reset() {
    Player1.textContent = 0;
    Player2.textContent = 0;
    Player1.classList.remove("Winner");
    Player2.classList.remove("Winner");
;}

//Handles increment of scores per click
function IncrementScoreP1 (WinningScore) {
    var score = document.getElementById("P1Display").textContent
    if (score < WinningScore) {
        score++;
        document.getElementById("P1Display").textContent = score;
        //Turns color green for winner
        if (score == WinningScore){
            document.getElementById("P1Display").classList.toggle("Winner")
        }
    };
    
}

function IncrementScoreP2 (WinningScore) {
    var score = document.getElementById("P2Display").textContent
    if (score < WinningScore) {
        score++;
        document.getElementById("P2Display").textContent = score;
        //Turns color green for winner
        if (score == WinningScore){
            document.getElementById("P2Display").classList.toggle("Winner")
        }
    };
}

document.getElementById("Player1Scores").addEventListener("click", function(){
    var score = document.getElementById("P1Display").textContent
    if (score < WinningScore) {
        score++;
        document.getElementById("P1Display").textContent = score;
        //Turns color green for winner
        if (score == WinningScore){
            document.getElementById("P1Display").classList.toggle("Winner")
        }
    };
});
document.getElementById("Player2Scores").addEventListener("click", function(){
        var score = document.getElementById("P2Display").textContent
    if (score < WinningScore) {
        score++;
        document.getElementById("P2Display").textContent = score;
        //Turns color green for winner
        if (score == WinningScore){
            document.getElementById("P2Display").classList.toggle("Winner")
        }
    };
});

document.getElementById("reset").addEventListener("click", function(){
    Player1.textContent = 0;
    Player2.textContent = 0;
    Player1.classList.remove("Winner");
    Player2.classList.remove("Winner");
});

