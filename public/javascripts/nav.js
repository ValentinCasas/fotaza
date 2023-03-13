const navItem = document.querySelector("header .container nav");
const items = document.querySelectorAll("header .container nav a");
const barIcon = document.querySelector(".bar-icon");
const closeIcon = document.querySelector(".close-icon");
const overlay = document.querySelector(".overlay");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((item) => {
      item.classList.remove("active");
    });
  });
  item.addEventListener("click", () => {
    item.classList.add("active");
  });
});

barIcon.addEventListener("click", () => {
  navItem.classList.toggle("active");
  overlay.classList.toggle("active");
});

closeIcon.addEventListener("click", () => {
  navItem.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  navItem.classList.toggle("active");
  overlay.classList.toggle("active");
});