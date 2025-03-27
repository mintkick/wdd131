import recipes from "./recipes.mjs";

console.log(recipes);

function getRandomIndex(maxNum) {
  return Math.floor(Math.random() * maxNum); // will give a number 0-4
}

// alert(getRandomIndex(recipes.length));
