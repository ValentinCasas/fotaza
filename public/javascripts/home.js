
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
  '/1b9375c0-6eb8-11ed-add4-15096d32766612.jpg',
  '/1cc1d1b0-6eba-11ed-905e-e732e539789622.jpg',
  '/210cdf50-69cc-11ed-a26e-7bb3a8a5eb1811.jpg',
  '/24965670-6917-11ed-aacb-ed0a57a2a3ecimagen-de-escritorio-del-minimalismo.jpg',
  '/33291a50-69cc-11ed-a26e-7bb3a8a5eb1826.jpg',
  '/6f1f1a10-71d7-11ed-9fea-a3f69e26f20e10.jpg',
  '/ef95fa00-6896-11ed-8128-21ca6c543602iconoSillaMesa.png',
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



