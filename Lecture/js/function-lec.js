"use strict"
//-------------how to invoke(call) a function---------------------------
//console is object and .log is function.
console.log("function lecture ");
//pass arguments to functions inside the set of parentheses. doesn't have to have object to use function
alert("This is my function lecture"); //alert function

//----------------storing function----------------------------------------
let userDay = prompt("How's your day going?"); //some functions have return value itself
alert("I'm having a " + userDay + " day too!");

//-----------------defining a function ------------------------------------
//function is Keyword. greeter is Name of Function.
// () -contains input or parameter. it is not variable. may have multi parameters
// { } - body of the function. Return statement is inside of body of the function

//argument - actual specific value
//parameter - input value that creates output
function greeter(name, message) {
    //----------this is parameter---------------------
    return "Hello, " + name + " , " + message + ".";
}
//---this is argument & calling the function-------
alert(greeter("Will", "have a great day!"));
function getName() {
    let userName = prompt("what is your name?");
    return userName;
}
    let message = prompt("what would you like your message to be?");
    console.log(greeter(getName(), message));

//----------------Anonymous Functions-----------------------
let greeter2 = function(name, message){
    return "Hello " + name + " " + message + ".";
}
//-----------------function scoping----------------------
let height = "3ft"; //global variable
function jump(){
    let name = "Jim";
    return name + "you jumped " + height;
}
console.log(jump());
console.log(name); // wouldn't pop up in console log

//immediately-invoked function expression (IIFE)
(function(){alert("message")
})();