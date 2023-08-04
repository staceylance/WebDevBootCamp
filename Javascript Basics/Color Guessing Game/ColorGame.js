console.log("Connected!");
//variable / function call
var colors = [
    "rgb(0, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)"
];
var WinningRgb = "rgb(0, 0, 0)";
var SquaresLength = 6;

function Randomize (colors, SquaresLength){
//Creates randomized colors for color array
    var Red = 0, Blue = 0, Green = 0;
    for (let i = 0; i < SquaresLength+1; i++) {
        Red = Math.floor(Math.random() * 256);
        Blue = Math.floor(Math.random() * 256);
        Green = Math.floor(Math.random() * 256);
        colors[i]=("rgb(" + Red + ", " + Blue) + ", " + Green + ")";
    }
    WinningRgb = colors[Math.floor(Math.random() * (SquaresLength+1))];
}


function Update(squares, colors){
    //Handles Constant Game Play element
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            var clickedObject = this;
            ColorCheck(clickedColor, WinningRgb, clickedObject);
        })};
    document.getElementById("WinningRgb").textContent = WinningRgb;
    Reset.addEventListener("click", function(){
        ResetAll(colors, SquaresLength);
    });
    Easy.addEventListener("click", function() {
        EasyMode(colors, SquaresLength);
    });
    Hard.addEventListener("click", function(){
        HardMode(colors, SquaresLength);
    });
};

function ColorCheck(clickedColor, WinningRgb, clickedObject){
//Performs color check and winning / losing actions
    if(clickedColor === WinningRgb){
        for (let j = 0; j < squares.length; j++) {
            squares[j].style.backgroundColor = WinningRgb;
            h1.style.backgroundColor = WinningRgb;
            MessageDisplay.textContent = "Correct!";
        };
    } else {
        clickedObject.style.backgroundColor = "#232323";
        MessageDisplay.textContent = "Try Again";
        };
};

function ResetAll(colors, SquaresLength){
//Resets colors and backgrounds;
    Randomize(colors, SquaresLength);
    Update(squares, colors);
    h1.style.backgroundColor = "#232323";
    MessageDisplay.textContent="";
}

function HardMode(colors, SquaresLength) {
    SquaresLength = 6;
    ResetAll(colors, SquaresLength);
}

function EasyMode(colors, SquaresLength){
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
var playingDiv = document.querySelector(".container");
var PlaySpaces = playingDiv.querySelectorAll("div");

Randomize(colors, 6);
Update(squares, colors);