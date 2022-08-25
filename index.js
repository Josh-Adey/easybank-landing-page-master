<<<<<<< HEAD
let toggleDisplay = document.querySelector(".mobile-nav-items");
let clicked = false;

function toggleSwitch() {
 
    if (clicked) {

        toggleDisplay.style.display = "block";
        clicked = false;
    }
    else {
        toggleDisplay.style.display = "none";
        clicked = true;
    }
=======
let toggleDisplay = document.querySelector(".mobile-nav-items");
let clicked = false;

function toggleSwitch() {
 
    if (clicked) {

        toggleDisplay.style.display = "block";
        clicked = false;
    }
    else {
        toggleDisplay.style.display = "none";
        clicked = true;
    }
>>>>>>> c49e89d52cde6d3589edae6c5f654afad275ecbd
}