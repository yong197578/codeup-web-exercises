"use strict"

// function getRandomInt(min, max){
//     return Math.random() * 201; //generate number between 1-200
//     //Math.random() * (181) + 20; //generate number between 20-200
//     //Math.floor(Math.random() * (max - min -1) + min)
// }
// // will round decimal to the nearest whole number
// console.log(Math.round(5.49));
// console.log(Math.round(5.5));
//
// //will round the nearest whole number downward
// console.log(Math.floor(5.49));
//
// //will round decimal to the nearest whole number upward
// console.log(Math.ceil(5.49));
//
// //will value of base number to the power the exponent
// //first argument will be base, second will be exponent Math.pow(base, exponent)
// console.log(Math.pow(2, 2));
// console.log(Math.pow(2, 4));
//
// //Will return square root of number being passed in as the argument
// // negative number return as NaN
// console.log(Math.sqrt(9));
// console.log(Math.sqrt(21).toFixed(2));
//
// //constant Math object
// console.log(Math.E);
// console.log(Math.PI);
function getFisrtValue(arr){
    let invalid = false;
    arr.forEach(function (item){
        if(isNaN(item)){
            // console.log("invalid");
            invalid = true;
        }
    })
    if(invalid){
        return "value is not a number, invalid array";
    }else {
        return arr[0];
    }
}

console.log(getFisrtValue(["joe", 2, 3]))
console.log(getFisrtValue([1, 2, 3]))