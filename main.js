// The learning objective of this exercise is writing event listeners to handle button clicks, and modifying the classList of DOM elements when those events are broadcast by the browser.

// document.querySelector("#activate-flight").addEventListener()

// 1. Add the correct string as the first argument to addEventListener()
// 2. Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
// 3. Have your developer tools open. When you click the button, the following element...

{/* <section id="flight" class="power disabled">
Should then look like this.

<section id="flight" class="power enabled"> */}


function flightHandlerFunction (oldClass, newClass) {
    document.getElementById("flight").classList.remove(oldClass);
    document.getElementById("flight").classList.add(newClass);
}

document.querySelector("#activate-flight").addEventListener("click", function() {
    flightHandlerFunction("disabled", "enabled");
})

// Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements

function mindReadingFunction (oldClass, newClass) {
    document.getElementById("mindreading").classList.remove(oldClass);
    document.getElementById("mindreading").classList.add(newClass);
}

document.querySelector("#activate-mindreading").addEventListener("click", function() {
    mindReadingFunction("disabled", "enabled");
})

function xrayVisionFunction (oldClass, newClass) {
    document.getElementById("xray").classList.remove(oldClass);
    document.getElementById("xray").classList.add(newClass);
}

document.querySelector("#activate-xray").addEventListener("click", function() {
    xrayVisionFunction("disabled", "enabled");
})

// Once that is complete, add two more buttons
// Enable All Powers
// Disable All Powers

// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.


// This creates a LIST of all elements with the "disabled" class.
let disabledPower = document.querySelectorAll(".disabled");
console.log(disabledPower);


// Activate All button
document.querySelector("#activate-all").addEventListener("click", function() {
    for (let i = 0; i < disabledPower.length; i++) {
        disabledPower[i].classList.remove("disabled"); 
        disabledPower[i].classList.add("enabled");
    }
})

// Deactivate All button
document.querySelector("#deactivate-all").addEventListener("click", function() { 
    let enabledPower = document.querySelectorAll(".enabled");
    console.log(enabledPower); 
    for (let i = 0; i < enabledPower.length; i++) { 
        enabledPower[i].classList.remove("enabled"); 
        enabledPower[i].classList.add("disabled");
    }
})