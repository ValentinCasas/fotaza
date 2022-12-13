
const containMenu = document.getElementById("contain-menu");
const containMenuShare = document.getElementById("contain-menu-share");
const cerrarMenu = document.getElementById("cerrar");

function abrirMenu() {
    containMenu.style.transform = `translateX(100%)`;
    cerrarMenu.style.transform = `translateX(-35%)`;
}

function cerrar() {
    containMenu.style.transform = `translateX(-100%)`;
    cerrarMenu.style.transform = `translateX(-400%)`;

    containMenuShare.style.transform = `translateX(-100%)`;
    containMenuShare.style.transform = `translateX(-400%)`;
}

const input = document.getElementById("papa");

function abrirMenuShare(id) {
    console.log(id);
    containMenuShare.style.transform = `translateX(100%)`;
    cerrarMenu.style.transform = `translateX(-35%)`;
    input.setAttribute('value', id);

}





const slider = document.querySelector('.slider');
const sliderImages = document.querySelector('.slider-images');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');

const images = [
  '/910923.png',

  '/template.png'
];

let currentIndex = 0;

const addImage = (image) => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    sliderImages.appendChild(imgElement);
};

const clearImages = () => {
    while (sliderImages.firstChild) {
        sliderImages.removeChild(sliderImages.firstChild);
    }
};

const showPrevImage = () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    clearImages();
    addImage(images[currentIndex]);
};

const showNextImage = () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    clearImages();
    addImage(images[currentIndex]);
};

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

addImage(images[currentIndex]);



