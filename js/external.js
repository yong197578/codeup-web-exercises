"use strict";

console.log("Hello from inline JavaScript");

alert("Welcome to my Website!");
let color = prompt("What is your favorite color?");
alert("Great, " + color + " is my favorite color too!");

let mermaid = prompt("how many days did you borrow The Little Mermaid?");
let brotherBear = prompt("how many days did you borrow The Brother Bear?");
let Hercules = prompt("how many days did you borrow the Hercules?");
let moviePerDay = prompt("How much is movie per day?");
let totalMoviePrice = (parseInt(mermaid) + parseInt(brotherBear) + parseInt(Hercules)) * parseInt(moviePerDay);
alert("Your total movie price is $" + totalMoviePrice);

let googlePay = prompt("How much Google pays per hour?");
let googleHour = prompt("How many hours did you work at Google?");
let amazonPay = prompt("How much Amazon pays per hour?");
let amazonHour = prompt("How many hours did you work at Amazon?");
let facebookPay = prompt("How much Facebook pays per hour?");
let facebookHour = prompt("How many hours did you work at Facebook?");
let totalPay = (parseInt(googlePay)*parseInt(googleHour)) + (parseInt(amazonPay)*parseInt(amazonHour)) + (parseInt(facebookPay)*parseInt(facebookHour));
alert("Your total earning from 3 companies are $" + totalPay);

let classStatus = confirm("Is class full?");
let validSchedule = confirm("Is class conflict with your schedule?");
    if (classStatus === false && validSchedule === false) {
        alert("You can enroll the Class!");
    } else {
        alert("You cannot enroll the Class!");
    }

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