"use strict";

//-------------------------Making custom Object----------------------------------
// will define a new do object by using new keyword to make a new Object prototype
// let dog = new Object();
//making an object using object literal notation
let dog = {}; // {} also defines new object
// console.log(typeof dog);
//------------------------setting object properties(to custom objects)-------------------
//------------------Dot Notation-----------------------------------------------------
// Can define or initialize property named breed belonging to dog object
//first time we call/name the property is where the declaration happens
dog.breed = "german shepard";
//calling object property
console.log(dog.breed);
//reinitializing breed property(can do this by calling the object followed my property name
dog.breed = "pit bull";
console.log(dog.breed);

//properties are only accessible through your object
//the snippit bellow will through me an error, because I cannot access breed(property) without accessing object (dog) first
//ex. console.log(breed) - this wouldn't work
//-----------------Array Notation--------------------------------------------------------
//the value inside of square bracket will be my property name
//must have property in double/sing quotes in order
//declaring /initializing color property for dog object using array notation
dog["color"] = "black";
//reinitializing my property value
dog["color"] = "gold";
// we are displaying dog color by referencing property
console.log(dog["color"]);
// you can set the properties of your object while initializing your object as shown below:
let cat = {
    name: "catName",
    color: "black",
    gender: "female"
}
console.log(cat.color);
console.log(cat["gender"]);

// -----------------Nesting values(data structures---------------------------------------
let shelter={
    name: "myShelter",  // all items are property
    location: "dallas, TX",
    rating: 5,
    //nesting an array in our object
    shelteredAnimals: ["dogs", "cats", "birds", "hamsters"],
    //nesting a list object within an array in object
    employees: [
        {
            name: "steve Jobs",
            position: "clerk",
            skills: ["cusomter service, people ops"]
        },
        {
            name: "Hward Johnson",
            position: "janitor",
            skills: ["cusomter service, people ops"]
        },
        {
            name: "alicia chaves",
            position: "animal specialist",
            skills: ["cusomter service, people ops"]
        }
    ],
    //nesting an object in our object
    manager: {
        name: "Jordy Muniz",
        position: "team operator"
    }
}
//accessing manager name
console.log(shelter.manager.name);
//accessing first index of sheltered animal within shelter object
console.log(shelter.shelteredAnimals[0]);
//accessing first employee name
console.log(shelter.employees[0].name);
//access first employee first skill
console.log(shelter.employees[0].skills[0]);

shelter.employees.forEach(function (employee){
    console.log("good morning " + employee.name);
    employee.skills.forEach(function (skill){
        console.log("your skill set is " + skill)
    })
})
//------------------- Assigning functions to object-------------------------
//assigning function to cat object as property (this function is now a method because it belongs to an object
// cat.meow = function (){
//     alert("MEOW");
// }
// console.log(cat);
// or calling our meow function by accessing our cat object (needs () after function name in order to call function
// cat.meow();

//---------------------------This keyword--------------------------------------------------
cat.meow = function (){
    //this = cat
    alert(this.name + " goes Meow")
}
cat.meow();

// extra - storing function as property use case
let user ={
    userName: "jordysol96",
    email: "jordy.muniz@codeup.com",
    passowrd: "password",
    greeter: function (){
        alert("Hello " + this.userName + " welcome to your batcave :")
    }
}
user.greeter();