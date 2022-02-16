
function circle1Clicked() {

    let text1 = document.getElementById("text1");

    let text = parseInt(text1.innerHTML);
    text = text + 1;

    text1.innerHTML = text;

    console.log(text1);
}

function addBorder() {

    let circle2 = document.getElementById("circle2");
    circle2.setAttribute("class", "hasBorder");

}

function removeBorder() {
    let circle2 = document.getElementById("circle2");
    circle2.setAttribute("class", "");
}

function changeOpacity() {

    let circle3 = document.getElementById("circle3");

    if (circle3.getAttribute("class") === "fullOpacity") {
        circle3.setAttribute("class", "zeroOpacity");
        console.log(circle3.className);
    } else {
        circle3.setAttribute("class", "fullOpacity");
    }
}
