// Створи змінну counterValue, в якій буде зберігатися поточне 
//значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй 
//або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const buttonDecrement = document.querySelector("[data-action=decrement]");
const buttonIncrement = document.querySelector("[data-action=increment]");
const valueEl= document.querySelector("#value");



buttonDecrement.addEventListener("click", () => {
    counterValue.decrement();
    valueEl.textContent= counterValue.value;
}) ;

buttonIncrement.addEventListener("click", () => {
    counterValue.increment();
    valueEl.textContent= counterValue.value;
});
