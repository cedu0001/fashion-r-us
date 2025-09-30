const categoryList = document.querySelector(".category_list_container");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => showCategories(categories));

function showCategories(categories) {
  categories.forEach((category) => {
    categoryList.innerHTML += `<a href="produktliste.html?category=${category.category}" class="category_a grid-3-2">${category.category}</a>`;
  });
}