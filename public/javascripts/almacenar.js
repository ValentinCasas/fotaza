const imageDropContainer = document.querySelector('#image-input').parentElement;
const watermarkDropContainer = document.querySelector('#watermark-input').parentElement;
const imageInput = document.querySelector('#image-input');
const watermarkInput = document.querySelector('#watermark-input');

imageDropContainer.addEventListener('dragover', (event) => {
  event.preventDefault();
  imageDropContainer.classList.add('dragging');
});

imageDropContainer.addEventListener('dragleave', () => {
  imageDropContainer.classList.remove('dragging');
});

imageDropContainer.addEventListener('drop', (event) => {
  event.preventDefault();
  imageDropContainer.classList.remove('dragging');
  const file = event.dataTransfer.files[0];
  imageInput.files = event.dataTransfer.files;
});

watermarkDropContainer.addEventListener('dragover', (event) => {
  event.preventDefault();
  watermarkDropContainer.classList.add('dragging');
});

watermarkDropContainer.addEventListener('dragleave', () => {
  watermarkDropContainer.classList.remove('dragging');
});

watermarkDropContainer.addEventListener('drop', (event) => {
  event.preventDefault();
  watermarkDropContainer.classList.remove('dragging');
  const file = event.dataTransfer.files[0];
  watermarkInput.files = event.dataTransfer.files;
});
