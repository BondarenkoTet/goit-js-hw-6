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

