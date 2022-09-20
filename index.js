let toggleDisplay = document.querySelector(".mobile-nav-items");
let close = document.querySelector(".icon-hamburger");
let clicked = false;


function toggleSwitch() {
 
    if (!clicked) {

      
      setTimeout(function () {
          toggleDisplay.style.display = "block";
        }, 10);
      clicked = true;
      close.style.backgroundImage = "url(images/icon-close.svg)";
    }
    else {
        setTimeout(function () {
          toggleDisplay.style.display = "none";
        }, 10);
        clicked = false;
        close.style.backgroundImage = "url(images/icon-hamburger.svg)";
        
    }
}

