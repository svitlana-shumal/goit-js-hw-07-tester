// document.addEventListener("DOMContentLoaded", () => {
//   const categoriesList = document.querySelector("#categories");

//   if (!categoriesList) {
//     console.error("Елемент #categories не знайдено!");
//     return;
//   }

//   const categoryItems = document.querySelectorAll("#categories .item");

//   console.log(`Number of categories: ${categoryItems.length}`);

//   categoryItems.forEach((category) => {
//     const categoryTitle =
//       category.querySelector("h2")?.textContent || "Заголовок не знайдено";
//     const categoryElements = category.querySelectorAll("ul li");

//     console.log(`Category: ${categoryTitle}`);
//     console.log(`Elements: ${categoryElements.length}`);
//   });
// });
