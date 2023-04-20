const headerSquareElement = document.querySelector(".header__square-pic");
const minWidth = window.matchMedia("(min-width: 896px)");

function checkWidth() {
  minWidth.matches
    ? headerSquareElement.classList.add("rotation")
    : headerSquareElement.classList.remove("rotation");
}

minWidth.addEventListener("change", checkWidth);

checkWidth();
