function average(grades){
    let sum =0;
    for (let i =0; i < grades.length; i++){
        sum = sum + grades[i];
    }
    return Math.round(sum/grades.length);
}

let grades = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

console.log(average(grades));  