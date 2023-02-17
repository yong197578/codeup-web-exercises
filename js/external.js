"use strict";

console.log("Hello from inline JavaScript");

alert("Welcome to my Website!");
let color = prompt("What is your favorite color?");
alert("Great, " + color + " is my favorite color too!");
//command d for copy duplicate line
//let mermaid = number(prompt("message"));
let mermaid = prompt("how many days did you borrow The Little Mermaid?");
let brotherBear = prompt("how many days did you borrow The Brother Bear?");
let Hercules = prompt("how many days did you borrow the Hercules?");
let moviePerDay = prompt("How much is movie per day?");
//let cost = 3;
// let total = 3* (mermaid + brotherBear + Hercules);
let totalMoviePrice = (parseInt(mermaid) + parseInt(brotherBear) + parseInt(Hercules)) * parseInt(moviePerDay);
alert("Your total movie price is $" + totalMoviePrice);

//let google = Number(prompt("message));
let googlePay = prompt("How much Google pays per hour?");
let googleHour = prompt("How many hours did you work at Google?");
let amazonPay = prompt("How much Amazon pays per hour?");
let amazonHour = prompt("How many hours did you work at Amazon?");
let facebookPay = prompt("How much Facebook pays per hour?");
let facebookHour = prompt("How many hours did you work at Facebook?");
//let paycheck = (google * 400) + (amazon * 380) + (facebook * 350);
let totalPay = (parseInt(googlePay)*parseInt(googleHour)) + (parseInt(amazonPay)*parseInt(amazonHour)) + (parseInt(facebookPay)*parseInt(facebookHour));
alert("Your total earning from 3 companies are $" + totalPay);

//let notFull = confirm("is the class not full?")
//let notConflict = confirm("message");
//let canEnter = notFull && notConflict;
//alert("ability to enter class: " + canEnter);
let classStatus = confirm("Is class full?");
let validSchedule = confirm("Is class conflict with your schedule?");
    if (classStatus === false && validSchedule === false) {
        alert("You can enroll the Class!");
    } else {
        alert("You cannot enroll the Class!");
    }
//quantity = number(confirm("how  item do you have?);
//let enoughItems = quantity >= 2;
//let isNotExpired = confimr("click ok if your offer is not expired);
//let preMem = confirm("click ok if you are a premium member");
//let offerValid = (enoughItems && isNotExpired) || preMem;
//alert("valid discount: " + offerValid);
let offerNotExpired = confirm("Is your coupon still valid?");
let quantity = prompt("How many product did you purchase?");
let pMember = confirm("Are you premium member?");

    if ((offerNotExpired === true && quantity >= 2) || pMember === true) {
        alert("Your Product offer is applied!");
    } else if ((offerNotExpired === false || quantity < 2)) {
        alert("Sorry, product offer cannot be applied");
    } else {
        alert("Sorry, product offer cannot be applied");
    }