
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
