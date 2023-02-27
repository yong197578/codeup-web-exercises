"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
//1. create function analyzeColor that accept color as a parameter
//2. return a message if color is true
//3. for any color we haven't specified return a string as such
// function analyzeColor(color) {
//     if (color === 'blue') {
//         return "blue is the color of the sky";
//     } else if (color === 'red'){
//         return "Strawberries are red";
//     } else {
//         return "I don't know anything about that " + color;
//     }
// }
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));


// function analyzeColor(input) {
//     if (input === 'blue') {
//         return console.log(input + " is the color of the sky");
//     } else if (input === 'red') {
//         return console.log("strawberries are " + input);
//     } else if (input === 'cyan') {
//         return console.log("I don't know anything about " + input);
//     } else {
//         return console.log("not valid color input");
//     }
// }
// analyzeColor('blue');
// analyzeColor('red');
// analyzeColor('cyan');
// analyzeColor('green');


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)


var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(analyzeColor(randomColor));
// function analyzeColor(randomColor) {
//     if (randomColor === 'blue') {
//         return console.log(randomColor + " is the color of the sky");
//     } else if (randomColor === 'red') {
//         return console.log("strawberries are " + randomColor);
//     } else if (randomColor === 'cyan') {
//         return console.log("I don't know anything about " + randomColor);
//     } else {
//         return console.log("not valid color input");
//     }
// }
// analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(randomColor) {
    switch (randomColor) {
        case 'blue':
            console.log("blue is the color of the sky");
            break;
        case 'red':
            console.log("Strawberries are red");
            break;
        case 'green':
            console.log("grass is green");
            break;
        case 'yellow':
            console.log("sun is yellow");
            break;
        default:
            console.log("I don't know anything about that color");
            break;
    }
}
analyzeColor(randomColor);
//u can use return("what is your favorite color);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let userColor = prompt("enter a color");
//.toLowerCase();
// alert (analyzeColor(userColor));
function analyzeColor(input) {
    input = prompt("what is your favorite color?");
    if (input === 'blue') {
        return alert(input + " is the color of the sky");
    } else if (input === 'red') {
        return alert("strawberries are " + input);
    } else if (input === 'cyan') {
        return alert("I don't know anything about " + input);
    } else {
        return alert("not valid color input");
    }
}
analyzeColor();
/* ########################################################################## */
/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// let luckyNumber = Math.floor(Math.random()*5);
// function calculateTotal(luckyNumber, totalAmount) {
//
//     if (luckyNumber === 0) {
//         return totalAmount;
//     } else if (luckyNumber === 1) {
//         return totalAmount - (totalAmount * .1);
//     } else if (luckyNumber === 2) {
//         return totalAmount - (totalAmount * .25);
//     } else if (luckyNumber === 3) {
//         return totalAmount - (totalAmount * .35);
//     } else if (luckyNumber === 4) {
//         return totalAmount - (totalAmount * .5);
//     } else if (luckyNumber === 5) {
//         return 0; -> totalAmount - totalAmount
//     } else {
//          return "invalid lucky number";
// }
// console.log(luckyNumber);
// console.log(calculateTotal(luckyNumber, 100));
//1. function named calculateTotal
//2. calculateTotal should accept luckyNumber, totalAmount
//3. return the discounted price
//4. discount rates 0 - 0, 1- .1, 2- .25, 3 - .35 4 - .50, 5 - free

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 5.
     * (In this line of code, 0 is inclusive, and 6 is exclusive)
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
    let luckyNumber = Math.floor(Math.random() * 6), totalAmount = prompt("what is the total price of the product?");

function calculateTotal(luckyNumber, totalAmount) {

    if (luckyNumber === 0) {
        return totalAmount;
    } else if (luckyNumber === 1) {
        return totalAmount - (totalAmount * .1);
    } else if (luckyNumber === 2) {
        return totalAmount - (totalAmount * .25);
    } else if (luckyNumber === 3) {
        return totalAmount - (totalAmount * .35);
    } else if (luckyNumber === 4) {
        return totalAmount - (totalAmount * .5);
    } else if (luckyNumber === 5) {
        return totalAmount - (totalAmount * .75);
    } else if (luckyNumber === 6) {
        return totalAmount - (1 * totalAmount);
    }
}
alert("Your lucky Number is " + luckyNumber + ". Your product price was $" + totalAmount +
    ". Your new discount price is $" + calculateTotal(luckyNumber, totalAmount).toFixed(2));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// function putNumber (userConfirm) {
//     userConfirm = confirm("Would like to enter a number?");
//     if (userConfirm === true) {
//         return userInput();
//     } else {
//         return putNumber();
//     }
// }
// putNumber();
// function userInput (numberInput) {
//     numberInput = prompt("Please enter a number");
//     if (isNaN(numberInput)) {
//         return alert("Incorrect input data type");
//     }
//     if (numberInput % 2 === 0) {
//         alert("Your input is even!");
//     } else if (numberInput % 2 === 1){
//         alert("Your input is odd!");
//     }
//     if (numberInput >= 0) {
//         alert(numberInput + " is positive");
//     } else if (numberInput < 0) {
//         alert(numberInput + " is negative");
//     }
//     alert(numberInput + " plus 100 is " + (parseFloat(numberInput) + 100));
// }
// userInput();
//case for 0 because 0 is neither negative or positive && its neither even or odd

    // let userConfirm = confirm("Would you like to enter a number?");
    // if (userConfirm) {
    //     let userNum = parseFloat(prompt("enter a number!"));
    //     if (userNum === 0) {
    //         alert(userNum + " is neither even or odd");
    //         alert(userNum + " + 100 is " + (userNum + 100));
    //         alert(userNum + "is neither negative or positive");
    //     } else if (!isNaN(userNum)) {
    //         //Ternary operator
    //         alert(userNum % 2 === 0 ? "Number is even" : "Number is odd");
    //         alert(userNum + " + 100 is " + (userNum + 100));
    //         alert(userNum > 0 ? "Number is positive" : "Number is negative");
    //     } else {
    //         alert("Invalid input type. Please put number");
    //     }
    // }

    //code below is the refactor
let userConfirm = confirm("Would you like to enter a number?");
if (userConfirm) {
    let userNum = parseFloat(prompt("enter a number!"));
    if (!isNaN(userNum)) {
        alert("invalid input type");
    } else {
        alert(evenOdd(userNum));
        alert(add100(userNum));
        alert(negPos(userNum));
    }
}
function evenOdd(number) {
    if(number % 2 === 0) {
        return "is an even number";
    } else {
        return "Odd number";
    }
}
function add100(number) {
    return number + 100;
}
function negPos(number) {
    if(number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "negative";
    } else {
        return "neither positive or negative";
    }
}