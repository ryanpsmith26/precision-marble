const nav = document.querySelector('.nav');
const openButton = document.querySelector(".open-nav");
const closeButton = document.querySelector(".close-nav")

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
});

closeButton.addEventListener("click", () => {
  nav.classList.remove('navigation-open');
});

console.log(document);
