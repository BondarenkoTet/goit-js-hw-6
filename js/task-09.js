// Напиши скрипт, який змінює кольори фону елемента <body> через 
//інлайн-стиль по кліку на button.change-color і виводить значення 
//кольору в span.color.
//Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  spanText: document.querySelector(".color"),
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.changeColorBtn.addEventListener("click", () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.spanText.textContent = refs.body.style.backgroundColor;
});

