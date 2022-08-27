const addBlogBtn = document.querySelector(".add-btn-blog");
const addCategoryBtn = document.querySelector(".add-btn-category");
const postsSection = document.querySelector(".posts");
const addPopUp = document.querySelector(".add-pop-up");
const addCategoryPopUp = document.querySelector(".add-category-pop-up");
const closeIcon = document.querySelector(".close-add-icon");
const closeCategoryIcon = document.querySelector(".close-category-icon");
const containerCategoriesLabels = document.querySelector(
  "div.labels-container ul"
);
// Toggle classes
const toggleClasses = () => {
  postsSection.classList.toggle("blur");
  addPopUp.classList.toggle("show-container");
};
const toggleCategoryClasses = () => {
  postsSection.classList.toggle("blur");
  addCategoryPopUp.classList.toggle("show-container");
};
const removeClasses = () => {
  postsSection.classList.remove("blur");
  if (addPopUp.classList.contains("show-container")) {
    addPopUp.classList.remove("show-container");
  }
  if (addCategoryPopUp.classList.contains("show-container")) {
    addCategoryPopUp.classList.remove("show-container");
  }
};
const removeCategoryClasses = () => {
  postsSection.classList.remove("blur");
  addCategoryPopUp.classList.remove("show-container");
};
// Events
addBlogBtn.addEventListener("click", toggleClasses);
addCategoryBtn.addEventListener("click", toggleCategoryClasses);

postsSection.addEventListener("click", removeClasses);

closeIcon.addEventListener("click", removeClasses);

fetch("/categories")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
    data.forEach((element, i) => {
      const li = document.createElement("li");
      containerCategoriesLabels.appendChild(li);

      const checkboxCategory = document.createElement("input");
      checkboxCategory.setAttribute("type", "checkbox");
      checkboxCategory.setAttribute("id", `${element["id"]}`);
      checkboxCategory.value = element["name"];
      li.appendChild(checkboxCategory);

      const labelCategory = document.createElement("label");
      labelCategory.setAttribute("for", `${element["id"]}`);
      labelCategory.textContent = element["name"];
      labelCategory.style.background=element["color"]
      li.appendChild(labelCategory);
    });

  })
  .catch((err) => console.log(err));

fetch("/posts")
  .then((data) => data.json())
  .then((data) => console.log(data));

closeCategoryIcon.addEventListener("click", removeCategoryClasses);
