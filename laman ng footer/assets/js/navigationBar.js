// NAVIGATION BAR

const searchBar = document.querySelector(".search-bar");
const inputSearchBar = document.querySelector(".search-bar-input");
const categoriesButton = document.getElementById("categories-button");
const categories = document.getElementById("categories-button");
const categoriesArrow = document.getElementById("category-arrow");
const categoriesOptions = document.getElementById("categories-options");
const categoriesDropdown = document.getElementById("categories-dropdown");
const body = document.getElementsByTagName("body")[0];
let clicked = false;

categoriesButton.addEventListener("click", () => {
  if (!clicked) {
    categories.style.fontWeight = "bold";
    categoriesArrow.style.rotate = "180deg";
    categoriesOptions.style.height = "240px";
    categoriesOptions.style.padding = "1rem 1.6rem";
    categoriesOptions.style.borderStyle = "none solid solid solid";
    categoriesOptions.style.borderWidth = "3px";
    clicked = !clicked;
  } else {
    categories.style.fontWeight = 800;
    categoriesArrow.style.rotate = "0deg";
    categoriesOptions.style.height = "0px";
    categoriesOptions.style.padding = "0rem";
    categoriesOptions.style.border = "none";
    categoriesOptions.style.borderWidth = 0;
    clicked = !clicked;
  }
});

body.addEventListener("click", () => {
    if (!categoriesDropdown.contains(event.target)) {
        categories.style.fontWeight = 800;
        categoriesArrow.style.rotate = "0deg";
        categoriesOptions.style.height = "0px";
        categoriesOptions.style.padding = "0rem";
        categoriesOptions.style.border = "none";
        categoriesOptions.style.borderWidth = 0;
        clicked = false;
    }
})

searchBar.addEventListener("click", () => {
  inputSearchBar.focus();
});