"use strict"
//1. create function named showMultiplicationTable
//2. have function accept (take in( a number as an argument
//3. console.log multiplication table 1-10(for loop)
//My answer
// function showMultiplicationTable(input){
//     for (let i=1; i<=10; i++){
//         console.log(input + " X " + i + " = " + (input*i));
//     }
// }
// showMultiplicationTable(7);
//------------------------------------------------------------------------
//Instructor answer
// function showMultiplicationTable(num){
//     for (let i = 1; i <= 10; i++) {
//         let sum =  num * i;
//         console.log(num + " " + " * " + i + " = " + sum);
//     }
// } showMultiplicationTable(7);
//=========================================================================
//My Answer
// for(let i=1; i <= 10; i++){
//    let randomNumber = Math.floor(Math.random() * (200 - 20) + 20);
//    if (randomNumber %2 === 0){
//        console.log(randomNumber + " is even");
//    }else {
//        console.log(randomNumber + " is odd");
//    }
// }
//---------------------------------------------------------------------------------
//Instructor answer
//1. have a for loop that will generate 10 random numbers (for loop)
//2. ensure that random numbers are between 20 and 200 (Math.random)
//3. check to see if random number is even or odd (if statement/ conditional)

// for (let i = 1; i <= 10 ; i++) {
//     //math.random * max) + min - if you include 200 than put 181.
//     let randomNum = Math.floor(Math.random() * 181)+ 20;
//     if(randomNum %2 === 0){
//         console.log(randomNum + ": Even")
//     }else{
//         console.log(randomNum+ ": Odd")
//     }
// }
//=======================================================================================
//My Answer question 4
// let stringNumber = "";
// for(let i =1; i<= 9; i++){
//     for(let j=1; j<= i; j++){
//         stringNumber += i;
//     }
//     stringNumber += "\n"
// }console.log(stringNumber);
//-----------------------------------------------------------------------------------------
//Instructor Answer
//alt 1
// for (let i = 1; i <=9 ; i++) {
//     console.log(i.toString().repeat(i))
// }
//alt 2
// for(let i =1; i<=9; i++){
//     let str = "";
//     for(let j=1; j<= i; j++){
//         str += i;
//     }console.log(str);
// }
//===========================================================================================
// let number = 105;
// for(let i=1; i <=20; i++){
//     number -= 5;
//     console.log(number);
// }
// for(let i=100; i>=5; i = i - 5){
//     console.log(i);
// }
//instructor Answer
for (let i = 100; i >= 5 ; i -= 5) {
    console.log(i);
}