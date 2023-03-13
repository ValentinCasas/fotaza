function sendBuyMSG(idPhoto, idOwner) {
    swal.fire({
        title: 'Ingresa un mensaje',
        text: 'Escribe un mensaje para enviar al autor de la foto',
        icon: 'success',
        input: 'text',
        inputPlaceholder: 'Escribe aquí tu mensaje',
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#5256ade3',
        cancelButtonColor: '#5256ade3', 
        customClass: {
            popup: 'my-custom-popup-class',
            confirmButton: 'my-custom-button-class',
            cancelButton: 'my-custom-button-class'
        }
    }).then(result => {
        if (result.value) {
            // Obtenemos el valor del input del Sweet Alert
            const mensaje = result.value;
            // Redirigimos al enlace con el mensaje como parámetro de la consulta
            window.location.replace(`/message/buy/${idPhoto}/${idOwner}?mensaje=${mensaje}`);
        }
    });
}
