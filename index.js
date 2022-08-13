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
}