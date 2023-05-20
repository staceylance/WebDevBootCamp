function SelectionOne() {
    // Counts from -10 to 19
    var number = -10;
    while (number <= 19){
        console.log(number);
        number ++;
    };
}


function SelectionTwo() {
    // Counts even numbers from 10 to 40
    var number = 10; 
    while (number <= 40){
        console.log(number);
        number+=2;
    }
}


function SelectionThree() {
    // Counts odds from 300 - 333
    var number = 300;
    while (number <= 333){
        console.log(number);
        number+=3;
    }
}


function SelectionFour() {
    // Counts number divisible by 5 and 3 from 5-50
    var number = 5; 
    while (number <= 50){
        if (number % 3 === 0){
            console.log(number);
        }
        number+=5;
    }
}

var Selection = prompt("pick your poison");
if (Number(Selection) === 1){
    SelectionOne()
} else if (Number(Selection) === 2){
    SelectionTwo()
} else if (Number(Selection)===3) {
    SelectionThree()
} else if (Number(Selection)===4) {
    SelectionFour()
} else alert("Please pick a valid selection")