
const containMenu = document.getElementById("contain-menu");
const containMenuShare = document.getElementById("contain-menu-share");
const cerrarMenu = document.getElementById("cerrar");

window.addEventListener('load', () => {
  const animatedElements = document.querySelectorAll('.animated');
  animatedElements.forEach(element => {
    element.style.opacity = 1;
    element.style.transform = 'translateX(0)';
  });
});


const b = document.querySelectorAll("#cerrar");
const containMenuOverlay = document.querySelector(".contain-menu-overlay ");

function abrirMenu() {
  containMenu.style.transform = `translateX(100%)`;
  cerrarMenu.style.transform = `translateX(-35%)`;

  containMenuOverlay.classList.add("active");
}


b[0].addEventListener("click", () => {
  containMenuOverlay.classList.toggle("active");
  cerrar();
});

b[1].addEventListener("click", () => {
  containMenuOverlay.classList.toggle("active");
  cerrar();
});

function cerrar() {
  containMenu.style.transform = `translateX(-100%)`;
  cerrarMenu.style.transform = `translateX(-400%)`;

  containMenuShare.style.transform = `translateX(-100%)`;
  containMenuShare.style.transform = `translateX(-400%)`;

}

containMenuOverlay.addEventListener("click", () => {
  containMenuOverlay.classList.toggle("active");
  cerrar();
});


const input = document.getElementById("papa");

function abrirMenuShare(id) {
  console.log(id);
  containMenuShare.style.transform = `translateX(100%)`;
  cerrarMenu.style.transform = `translateX(-35%)`;
  input.setAttribute('value', id);

  containMenuOverlay.classList.add("active");

}


const slider = document.querySelector('.slider');
const sliderImages = document.querySelector('.slider-images');
const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const indicatorsContainer = document.querySelector('.slider-indicators');

const images = [
  '/910923.png',
  '/template.png',
  '/logo3.png',
];

let currentIndex = 0;

const addImage = (image) => {
  const imgElement = document.createElement('img');
  imgElement.src = image;
  imgElement.title = "fotos importantes";
  sliderImages.appendChild(imgElement);
};

const addIndicator = (index) => {
  const indicator = document.createElement('span');
  indicator.classList.add('dot');
  if (index === currentIndex) {
    indicator.classList.add('active');
  }
  indicator.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
  });
  indicatorsContainer.appendChild(indicator);
};

const clearImages = () => {
  while (sliderImages.firstChild) {
    sliderImages.removeChild(sliderImages.firstChild);
  }
};

const clearIndicators = () => {
  while (indicatorsContainer.firstChild) {
    indicatorsContainer.removeChild(indicatorsContainer.firstChild);
  }
};

const showImage = (index) => {
  clearImages();
  addImage(images[index]);
  clearIndicators();
  for (let i = 0; i < images.length; i++) {
    addIndicator(i);
  }
  const indicators = document.querySelectorAll('.dot');
  indicators[currentIndex].classList.add('active');
};

const showPrevImage = () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
};

const showNextImage = () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
};

prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);

showImage(currentIndex);




