"use strict"
//My Answer
// let i=2;
// while (i<=65536){
//     console.log(i);
//     i *= 2;
// }
//------------------------------------------------------------------------------------------
//instructor answer
// let i = 1;
// while (i < 65536){
//     i *= 2;
//     console.log(i);
// }
//===========================================================================================
//My Answer
// let allCones = Math.floor(Math.random() * 50) + 50;

// console.log("You need to sell total number of " + allCones + " cones");
// do{
//     let sellCones = Math.floor(Math.random() * 5) + 1;
//     if (sellCones > allCones){
//         console.log("Cannot sell you " + sellCones + " I only have " + allCones + " left" )
//     } else {
//         allCones -= sellCones;
//         console.log(sellCones + " are sold");
//     }
// } while(allCones > 0){
//     console.log("Yay! I sold them all!!");
// }
//------------------------------------------------------------------------------------------------
//Instructor Answer
//1. generate random number between 50 and 100 (cones to sell)
//2. construct do-while loop that will generate a number btw 1-5(cones bought(
//3. log out how many cones are sold by each person
let allCones = Math.floor(Math.random() * 50) + 50;
let soldCones;
do {
    soldCones = Math.floor(Math.random() * 5) + 1;
    if (allCones < soldCones) {
        console.log("Cannot sell you " + soldCones + " Cones I only have " + allCones);
        continue;
    }
    allCones -= soldCones;
    console.log(soldCones + " are sold");
} while(allCones > 0){ // while allCones are greater than 0, i can sell cones
    console.log("Yay! I sold them all!");
}
