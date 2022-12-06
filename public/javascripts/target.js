const menu = document.getElementById("menu");
const containMenu = document.getElementById("contain-menu");
const cerrarMenu = document.getElementById("cerrar");

function abrirMenu(){
      menu.style.transform = `translateX(-200%)`;
      containMenu.style.transform = `translateX(100%)`;
      cerrarMenu.style.transform = `translateX(-35%)`;
}

function cerrar(){
      menu.style.transform = `translateX(0%)`;
      containMenu.style.transform = `translateX(-100%)`;
      cerrarMenu.style.transform = `translateX(-400%)`;
}

