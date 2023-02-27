"use strict"
//My answer
let userInput = prompt("please Enter odd number between 1-50!");
let userNumber = parseInt(userInput);

for (let i=1; i<=50; i++){
    if (userNumber %2 === 0 || userNumber > 50 || userNumber < 1) {
        console.log("you entered wrong input");
        break;
    }
    if(i % 2 === 0){
        continue;
    }
    if(userNumber === i){
        console.log("Number to skip is: " + userNumber);
    } else{
        console.log("Here is an odd number: " + i);
    }
}
//----------------------------------------------------------------
//instructor answer
// let isNotValid;
// let userNum;
// do {
//     userNum = Number(prompt("enter a number from 1 to 50"));
//     if((userNum < 50 || userNum > 1) || (userNum % 2 === 0)){
//         isNotValid = true;
//     } else {
//         break;
//     }console.log(isNotValid);
// } while(isNotValid);
//
// console.log("Number to skip is: " + userNum);
// for(let i=1; i < 50; i+= 2 ){
//     if(i === userNum){
//         console.log("Yikes! Skipping number: " + i);
//         continue;
//     }
//     console.log("here is an odd number: " + i);
// }