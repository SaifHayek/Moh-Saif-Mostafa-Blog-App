
const addBlogBtn = document.querySelector('.add-btn-blog');
const addCategoryBtn = document.querySelector('.add-btn-category');
const postsSection = document.querySelector('.posts');
const addPopUp = document.querySelector('.add-pop-up');
const addCategoryPopUp = document.querySelector('.add-category-pop-up');
const closeIcon = document.querySelector('.close-add-icon');
const closeCategoryIcon = document.querySelector('.close-category-icon');

// Toggle classes
const toggleClasses = () => {
  postsSection.classList.toggle('blur');
  addPopUp.classList.toggle('show-container');
};
const toggleCategoryClasses = () => {
  postsSection.classList.toggle('blur');
  addCategoryPopUp.classList.toggle('show-container');
};
const removeClasses = () => {
  postsSection.classList.remove('blur');
  if (addPopUp.classList.contains('show-container')) {
    addPopUp.classList.remove('show-container');
  }
  if (addCategoryPopUp.classList.contains('show-container')) {
    addCategoryPopUp.classList.remove('show-container');
  }
};
const removeCategoryClasses = () => {
  postsSection.classList.remove('blur');
  addCategoryPopUp.classList.remove('show-container');
};
// Events
addBlogBtn.addEventListener('click', toggleClasses);
addCategoryBtn.addEventListener('click', toggleCategoryClasses);

postsSection.addEventListener('click', removeClasses);

closeIcon.addEventListener('click', removeClasses);

fetch('/categories')
.then((data) =>  console.log(data.json()) /* data.json()*/)
/*.then((data) => console.log(data))*/
.catch((err)=>console.log(err));


fetch('/posts').then((data) => data.json()).then((data) => console.log(data));


closeCategoryIcon.addEventListener('click', removeCategoryClasses);

