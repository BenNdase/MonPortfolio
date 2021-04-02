const hamburger = document.getElementById("hamburger");
const items = document.getElementById("items");

hamburger.addEventListener('click', () => {
  items.classList.toggle("show");
})