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

function Randomize (colors, SquaresLength){
    var Red = 0, Blue = 0, Green = 0;
    for (let i = 0; i < SquaresLength; i++) {
        Red = Math.floor(Math.random() * 256);
        Blue = Math.floor(Math.random() * 256);
        Green = Math.floor(Math.random() * 256);
        colors[i]=("rgb(" + Red + ", " + Blue) + ", " + Green + ")";
    }
    WinningRgb = colors[Math.floor(Math.random() * 7)];
}


function Update(squares, colors){
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === WinningRgb){
                for (let j = 0; j < squares.length; j++) {
                    squares[j].style.backgroundColor = WinningRgb;
                    h1.style.backgroundColor = WinningRgb;
                };
                MessageDisplay.textContent = "Correct!";
            } else {
                this.style.backgroundColor = "#232323";
                MessageDisplay.textContent = "Try Again";
            };
        })};
    document.getElementById("WinningRgb").textContent = WinningRgb;
};


//Dom Manipulation Call
var squares = document.querySelectorAll(".square");
var MessageDisplay = document.querySelector("#Message");
var h1 = document.querySelector("h1");
var Reset = document.querySelector("#Reset");
var Easy = document.querySelector("#Easy");
var Hard = document.querySelector("#Hard");

Randomize(colors, 6);
Update(squares, colors);