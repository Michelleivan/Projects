var css = document.querySelector("h3");
var color1 = document.querySelector(".clr1");
var color2 = document.querySelector(".clr2");
var color3 = document.querySelector(".clr3");
var body = document.getElementById("gradient");

function addColor() {
    body.style.background = 
        "radial-gradient(circle, "
        + color1.value
        + ", "
        + color2.value
        + ", "
        + color3.value
        + ")";

    css.textContent = body.style.background + ";" ;
}

color1.addEventListener("input", addColor);
color2.addEventListener("input", addColor);
color3.addEventListener("input", addColor);

