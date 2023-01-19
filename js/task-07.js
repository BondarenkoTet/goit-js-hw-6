// Напиши скрипт, який реагує на зміну значення 
//input#font-size-control (подія input) і змінює інлайн-стиль
// span#text, оновлюючи властивість font-size. В результаті, 
//перетягуючи повзунок, буде змінюватися розмір тексту.

const refs = {
    inputFontSize: document.querySelector("#font-size-control"),
    spanText: document.querySelector("#text"),
};

refs.inputFontSize.addEventListener("change", onFontSizeChange);


function onFontSizeChange(event) {
    refs.spanText.style.fontSize = `${event.target.value}px`;
};