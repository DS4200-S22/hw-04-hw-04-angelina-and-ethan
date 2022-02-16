function circle1Clicked() {
  const text1 = document.getElementById("text1");
  let count = parseInt(text1.innerHTML);
  count = count + 1;
  text1.innerHTML = count;
}

function addBorder() {
  const circle2 = document.getElementById("circle2");
  circle2.setAttribute("class", "hasBorder");
}

function removeBorder() {
  const circle2 = document.getElementById("circle2");
  circle2.setAttribute("class", "");
}

function changeOpacity() {
  const circle3 = document.getElementById("circle3");
  if (circle3.getAttribute("class") === "zeroOpacity") {
    circle3.setAttribute("class", "fullOpacity hasBorder");
  } else {
    circle3.setAttribute("class", "zeroOpacity");
  }
}
