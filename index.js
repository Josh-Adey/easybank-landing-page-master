var toggleOn = document.querySelector("nav-items");
var toggleOff = document.querySelector("img");

function toggleSwitch() {
    let toggleDisplay = toggleOn.style.display; 
    if ( toggleDisplay == "none")
    {
        toggleDisplay = "block";
    }
    else if (toggleDisplay == "block") {
        toggleDisplay = "none";
    }
}