const refs = {
    inputFontSize: document.querySelector("#font-size-control"),
    spanText: document.querySelector("#text"),
};

refs.inputFontSize.addEventListener("change", onFontSizeChange);


function onFontSizeChange(event) {
    refs.spanText.style.fontSize = `${event.target.value}px`;
};