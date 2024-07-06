var css = document.querySelector("h3");
var color1 = document.querySelector(".clr1");
var color2 = document.querySelector(".clr2");
var body = document.getElementById("gradient");

function addColor() {
    body.style.background = 
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";" ;
}

color1.addEventListener("input", addColor);
color2.addEventListener("input", addColor);

