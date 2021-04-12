const card = document.querySelector(".card");
const card_content = document.querySelector(".card__content");
const image_box = document.querySelector(".card__image-box");

card.addEventListener('hover', () => {
  card_content.classList.toggle("show");
  image_box.classList.toggle("hidden");
})
