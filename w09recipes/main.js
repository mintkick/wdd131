import recipes from "./recipes.mjs";

console.log(recipes);

function getRandomIndex(maxNum) {
  return Math.floor(Math.random() * maxNum); // will give a number 0-4
}

console.log(getRandomIndex(recipes.length));

function getRandomRecipe(recipes) {
  return recipes[getRandomIndex(recipes.length)];
}

console.log(getRandomRecipe(recipes));

function tagTemplate(tagArray) {
  // loop through the tags list and transform the strings to HTML
  let html = ``; // empty string literal

  tagArray.forEach(function (tag) {
    html += `\n<span class="tag">${tag}</span>`; // add a tag for each there is
  });
  return html;
}
function ratingTemplate(rating) {
  // begin building an html string using the ratings HTML written earlier as a model.
  let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`;
  // our ratings are always out of 5, so create a for loop from 1 to 5
  for (let i = 1; i <= 5; i++) {
    // check to see if the current index of the loop is less than our rating
    // if so then output a filled star
    if (i <= rating)
      html += `<span aria-hidden="true" class="icon-star">⭐</span>\n`;
    // else output an empty star
    else html += `<span aria-hidden="true" class="icon-star-empty">☆</span>\n`;
  }
  // after the loop, add the closing tag to our string
  html += `</span>`;
  // return the html string
  return html;
}

function recipeTemplate(recipe) {
  return `<article class="recipe">
        <img
          src="${recipe.image}"
          alt="${recipe.description}"
        />
        <div class="tag-row">
          ${tagTemplate(recipe.tags)}
        </div>
        <h2>${recipe.name}</h2>
          ${ratingTemplate(recipe.rating)}
      </article>`;
}

const recipe = getRandomRecipe(recipes);
console.log(recipeTemplate(recipe));

// renders ALL recipes, targets a place to render them
function renderRecipes(recipeList) {
  // get the element we will output the recipes into
  let target = document.querySelector(".recipe-list");
  // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
  let recipeString = ``;
  recipeList.forEach(function (recipe) {
    recipeString += recipeTemplate(recipe);
  });
  // Set the HTML strings as the innerHTML of our output element
  target.innerHTML = recipeString;
}

function init() {
  // get a random recipe
  const recipe = getRandomRecipe(recipes);
  // render the recipe with renderRecipes.
  renderRecipes([recipe]); // an array (declared right here) of just one recipe, since renderRecipes takes an array
}
init();

function filterFunction() {
  recipes.forEach(recipe);
  recipe.tagArray.find((item) => item.toLowerCase().includes(query));
}

function filterRecipes(query) {
  const filtered = recipes.filter(filterFunction);
  const sorted = filtered.sort(sortFunction);
  return sorted;
}

function searchHandler() {
  // (e) {
  // e.preventDefault();
  // get the search input
  filterRecipes(document.querySelector("input").value);
  // convert the value in the input to lowercase
  query.toLowerCase();
  // use the filter function to filter our recipes
  filterRecipes(query);
  // render the filtered list
  renderRecipes(recipes);
}

// getElementsByTagName
document.querySelector("button").addEventListener("click", searchHandler);
