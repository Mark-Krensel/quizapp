//Show / hide question & toggle button text
const cardButtonAnswer = document.querySelector(
  '[data-js="card-button_answer"]'
);
const cardAnswer = document.querySelector('[data-js="card-answer"]');

cardButtonAnswer.addEventListener("click", () => {
  console.log("I'm working");
  cardAnswer.classList.toggle("card__answer--active");
  if (cardAnswer.classList.contains("card__answer--active")) {
    cardButtonAnswer.textContent = "Hide answer";
  } else {
    cardButtonAnswer.textContent = "Show answer";
  }
});

//Toggle bookmark on/off
const bookmarkButton = document.querySelector(
  '[data-js="card__button__bookmark"]'
);
const bookMarkIcon = document.querySelector(
  '[data-js="card__bookmark __icon"]'
);
console.log(bookmarkButton);

bookmarkButton.addEventListener("click", () => {
  bookMarkIcon.classList.toggle("card__bookmark__icon");
});
