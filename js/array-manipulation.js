let dog = ["misty", "misty", "nebula", "shadow", "hubert"];

// console.log(dog);
// dog.unshift("robert"); //unshit - add item to first array spot
// dog.push("hub"); //push - add item to end of array
// console.log(dog);
// //remove item from the end of the array
// dog.pop();
// //remove item from beginning ofr the array
// dog.shift();
// // console.log(dog);
// // let index = dog.indexOf("shadow");
// // console.log(index);
// // let index = dog.indexOf("misty");
// // console.log(index);
// let lastIndex = dog.lastIndexOf("misty");
// console.log(lastIndex);

// let newDogArrary =dog.slice(1, 3);
// console.log(newDogArrary);

//reverse an array

//console.log(dog.reverse());
let reverseDog = dog.reverse();
console.log(reverseDog);

//sort array by alphanumeric
let alphanumericDog = dog.sort();
console.log(alphanumericDog);

//convert string to array
let animals = "dogs, cats, hedgehogs"
let animalArray = animals.split(','); //make 's' - output dog, cat, hedgehog
console.log(animalArray);

//convert array into a string
let animalString = animalArray.join(" ");
console.log(animalString);
