const addBlogBtn = document.querySelector('.add-btn-blog');
const addCategoryBtn = document.querySelector('.add-btn-category');
const postsSection = document.querySelector('.posts');
const addPopUp = document.querySelector('.add-pop-up');
const closeIcon = document.querySelector('.close-icon');

const toggleClasses = () => {
  postsSection.classList.toggle('blur');
  addPopUp.classList.toggle('show-container');
};
const removeClasses = () => {
  postsSection.classList.remove('blur');
  addPopUp.classList.remove('show-container');
};
addBlogBtn.addEventListener('click', toggleClasses);
postsSection.addEventListener('click', removeClasses);
closeIcon.addEventListener('click', removeClasses);

fetch('/categories')
.then((data) => data.json())
.then((data) => console.log(data));


fetch('/posts').then((data) => data.json()).then((data) => console.log(data));


