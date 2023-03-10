"use strict"

// let name = "joe";
// let myFirstArray = [true, false, 12, "bill", name];
// console.log(myFirstArray.length); // getting length
// console.log('My 3rd index is ' + myFirstArray[2]);//getting index of array
// console.log("out of bound element (Exception) " + myFirstArray[12]); //undefined. 12 does not exist in the array

//Iterating through arrays
 let namesArray = ["Bob", "joe", "mama", "guts", "will"];
// //loop through the array and log the value
// for (let i = 0; i < namesArray.length; i++) {
//     let greeter = 'hello ' + name[i]
//     console.log(greeter);
//
// }
//loop through array and log values via For-Each loop
namesArray.forEach(function (nameCurrentIndex){
    let greeter = "Hello " + nameCurrentIndex;
    console.log(greeter);
})