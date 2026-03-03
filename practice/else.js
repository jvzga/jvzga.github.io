"use strict";
function addToBody(text) {
    document.body.innerHTML += "<p>" + text + "</p>";
}
/*
console.log("It works!");
let YourName = prompt("What is your name?");
addToBody("Hello " + YourName);
*/
let temp = prompt("What is the temperature outside?");
if (temp < 35) {
    addToBody("It's cold outside!");
}
else if (temp < 80) {
    addToBody("It's hot outside!");
}
else {
    addToBody("It's not cold outside! Go outside and enjoy the weather!");
}