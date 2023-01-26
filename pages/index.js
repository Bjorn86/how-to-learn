const headerSquareElement = document.querySelector(".header__square-pic");

if (document.documentElement.clientWidth <= 896) {
  headerSquareElement.classList.remove("rotation");
} else {
  headerSquareElement.classList.add("rotation");
}
