

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






