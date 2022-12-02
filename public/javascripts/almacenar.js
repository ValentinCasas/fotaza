const dropArea = document.querySelector(".drop-area");
const dragText = dropArea.querySelector("h2");
const button = dropArea.querySelector("button");
const input = dropArea.querySelector("#input-file");

button.addEventListener("click", (e) => {
    input.click();
});

input.addEventListener("change", (e) => {
    files = this.file;
    dropArea.classList.add("active");
    showFiles(files);
    dropArea.classList.remove("active");
});

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent = "Suelte el elemento aqui";

});

dropArea.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastra y suelta imagenes";
});

dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    showFiles(files);
    dropArea.classList.remove("active");
    dragText.textContent = "Arrastra y suelta imagenes";
});

function showFiles(files) {
    if (files.length === undefined) {
        processFile(files);
    } else {
        for (const file of files) {
            processFile(file);
        }
    }
}

function processFile(file) {
    const docType = file.type;
    const validExtension = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

    if (validExtension.includes(docType)) {
        const fileReader = new FileReader();
        const id = `file-${1}`;

        fileReader.addEventListener("load", (e) => {
            const fileUrl = fileReader.result;
            const image = `
    <div id="${id}" class="file-container>
      <img src="${fileUrl}" alt="${file.name} width="50px">
      <div class="status">
        <span class="${file.name}"></span>
        <span class="status-text">
        Loading...
        </span>
       </div>
    </div>
    `
            const html = document.querySelector("#preview").innerHTML;
            document.querySelector("#preview").innerHTML = image + html;
        });

        fileReader.readAsDataURL(file);
        /* uploadFile(file, id); */

    } else {
        Swal.fire({
            title: "Se detectó un archivo erroneo para la plataforma!",
            position: 'center',
            icon: 'warning',
            showConfirmButton: false,
            timer: 5000
      })
    }

}

/* div(class=" drop-area row justify-content-center col-lg-11 col-md-11 col-sm-11 col-xs-11 my-5 p-2") 
                    h2 Arrastra y suelta imagenes o
                    button Selecciona tus archivos
                    h2.text-danger ¡ EN MANTENIMIENTO !
                    input(type="file" name="" accept="image/jpeg,image/jpg,image/png" id="input-file" hidden)  */