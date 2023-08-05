console.log("Connected!");
//variable / function call
var colors = [
    "#232323",
    "#232323",
    "#232323",
    "#232323",
    "#232323",
    "#232323"
];
var WinningRgb = "rgb(0, 0, 0)";
var SquaresLength = 6;

function Randomize (colors, SquaresLength){
//Creates randomized colors for color array
    var Red = 0, Blue = 0, Green = 0;
    for (let i = 0; i < SquaresLength; i++) {
        Red = Math.floor(Math.random() * 256);
        Blue = Math.floor(Math.random() * 256);
        Green = Math.floor(Math.random() * 256);
        colors[i]=("rgb(" + Red + ", " + Blue) + ", " + Green + ")";
    }
    for (let l = SquaresLength; l < squares.length; l++) {
        colors[l]="#232323";
    }
    WinningRgb = colors[Math.floor(Math.random() * (SquaresLength))];
}


function Update(squares, colors, SquaresLength){
    //Handles Constant Game Play element
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            var clickedObject = this;
            ColorCheck(clickedColor, WinningRgb, clickedObject);
        })};
    document.getElementById("WinningRgb").textContent = WinningRgb;
};

function ColorCheck(clickedColor, WinningRgb, clickedObject){
//Performs color check and winning / losing actions
    if(clickedColor === WinningRgb){
        for (let j = 0; j < SquaresLength; j++) {
            squares[j].style.backgroundColor = WinningRgb;
            h1.style.backgroundColor = WinningRgb;
            MessageDisplay.textContent = "Correct!";
            Reset.textContent = "Play again?"
        };
    } else {
        clickedObject.style.backgroundColor = "#232323";
        MessageDisplay.textContent = "Try Again";
        };
};

function ResetAll(colors, SquaresLength){
//Resets colors and backgrounds;
    Randomize(colors, SquaresLength);
    Update(squares, colors, SquaresLength);
    h1.style.backgroundColor = "#232323";
    MessageDisplay.textContent="";
    Reset.textContent = "New Colors";
}

function HardMode(colors) {
    SquaresLength = 6;
    ResetAll(colors, SquaresLength);
}

function EasyMode(colors){
    SquaresLength = 3;
    ResetAll(colors, SquaresLength);
}

//Dom Manipulation Call
var squares = document.querySelectorAll(".square");
var MessageDisplay = document.querySelector("#Message");
var h1 = document.querySelector("h1");
var Reset = document.querySelector("#Reset");
var Easy = document.querySelector("#Easy");
var Hard = document.querySelector("#Hard");
Reset.addEventListener("click", function(){
    ResetAll(colors, SquaresLength);
});

Easy.addEventListener("click", function() {
    EasyMode(colors);
    Easy.classList.add("selected");
    Hard.classList.remove("selected");
});

Hard.addEventListener("click", function(){
    HardMode(colors);
    Easy.classList.remove("selected");
    Hard.classList.add("selected");
});


Randomize(colors, SquaresLength);
Update(squares, colors, SquaresLength);