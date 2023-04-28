const details = document.getElementById('politica');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal-close');

details.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none'; // cierra el modal estableciendo el estilo "display" a "none"
});



