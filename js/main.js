const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal")
const close = document.querySelector(".close")

cartButton.addEventListener("click", toggelModal);
close.addEventListener("click", toggelModal);

function toggelModal() {
  modal.classList.toggle("is-open");
}

new WOW().init();