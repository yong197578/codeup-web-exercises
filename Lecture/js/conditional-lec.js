//console.log("testing");

let age = 15;

if (age >= 16){
    console.log("old enough to drive");
} else if (age > 0 && age <16) {
    console.log("not old enough");
} else {
    console.log("Not a valid age");
}

let daysOfTheWeek = prompt("Enter the days of the week: ")
if(daysOfTheWeek === "Monday" || daysOfTheWeek === "Tuesday" || daysOfTheWeek === "Wednesday"
    || daysOfTheWeek === "Thursday" || daysOfTheWeek === "Friday")
    console.log(daysOfTheWeek + "is my favorite day!");
else {
    console.log("Not a valid day!");
}

let num =42;
if (typeof num === "number") {
    console.log("type of 'num' is a Number")
} else {
    console.log("typeof is not a number")
}

/*let username = "user";
let password = "password";
let userUsername = prompt("Enter your username");
let userPassword = prompt("Enter your password");
//make sure do it correct order
if (username === userUsername && password === userPassword) {
    console.log("Successfully logged in")
} else if (username !== userUsername && password !== userPassword) {
        console.log("invalid username and password")
} else if (username !== userUsername) {
    console.log("Invalid username")
} else if (password !== userPassword) {
    console.log("Invalid password")
}
// password >= six character
//password must not include a space
*/
let password = prompt("please neter a password");
if (password.length >= 6){
    console.log("valid password)
} else {
    console.log("password hasn't met the requirement"
}
//ternary operators
//condition ? if true : else statement runs

let name = "bob"
let greeting = name ==="bob" ? "Hello " + name : "Hello stranger";
console.log(greeting)
//Switch Statement
let grade = "B";
switch(grade) {
    case "A":
        console.log("Way to Go!");
        break;
    case "B":

        console.log("Good Work");
        break;
    case "C":
        console.log("Not bad");
        break;
    case "D":
        console.log("Keep Trying");
        break;
    case "F":
        console.log("oh-oh! Not Good!");
        break;
    default:
        console.log(grade + " is not a valid letter grade!");
}