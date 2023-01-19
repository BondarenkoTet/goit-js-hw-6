// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод
// document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const container = document.getElementById("ingredients");
const ulElem = document.createElement("ul");

for (const ingredient of ingredients) {
const liElem = document.createElement("li");

liElem.textContent = ingredient;
liElem.classList.add(".item");
container.append(liElem);
}
console.log(ulElem);

