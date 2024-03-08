var offCanvas = document.getElementById('offCanvas');
var navBarM = document.getElementById('navBarM');

function offCanvasMenu(){
    offCanvas.style.display = "flex";
    navBarM.style.left = "100vw";
    navBarM.style.transition = "left 1.5s ease";
}

function navBar(){
    navBarM.style.left = "0px";
    navBarM.style.transition = "left 0s ease";
    offCanvas.style.display = "none";
}