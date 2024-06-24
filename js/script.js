/* script.js */
// let angle = 0;

// function rotateCarousel(direction) {
//     const items = document.querySelectorAll('.carousel__item');
//     const rotateAngle = 360 / items.length;
//     angle += direction * rotateAngle;
//     const carousel = document.querySelector('.carousel__container');
//     carousel.style.transform = `rotateY(${angle}deg)`;
// }

/* script.js */
let angle = 0;
const items = document.querySelectorAll(".carousel__item");
const totalItems = items.length;

function rotateCarousel(direction) {
  const rotateAngle = 360 / totalItems;
  angle += direction * rotateAngle;
  const carousel = document.querySelector(".carousel__container");
  carousel.style.transform = `rotateY(${angle}deg)`;
}

// Position items in a circular path
function positionItems() {
  const angleIncrement = 360 / totalItems;
  items.forEach((item, index) => {
    const itemAngle = angleIncrement * index;
    item.style.transform = `rotateY(${itemAngle}deg) translateZ(300px)`;
  });
}

positionItems();
