

/*document.getElementById('boton').onclick = function () {

    console.log("capturamos el elemento clic");
    document.getElementById("demo").innerHTML ="estamos probando un evento";
}
*/
function enviarFormulario() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;

    // Validar que los campos no estén vacíos
    if (!nombre || !telefono) {
      alert('Por favor, complete todos los campos.');
      return false;
    }

    // Validar el número de teléfono
    const regexTelefono = /^[0-9]{8}$/;
    if (!regexTelefono.test(telefono)) {
      alert('Por favor, introduzca un número de teléfono válido.');
      return false;
    }

    // Mostrar mensaje de éxito
    alert('Gracias por contactarnos, ' + nombre + '. Nos pondremos en contacto contigo pronto.');

    // Resetear el formulario
    document.getElementById('formulario-contacto').reset();

    return true;
  }

  function openWhatsappChat() {
    window.open("https://wa.me/1234567890", "_blank");
  }
  
  // Agregamos un event listener al botón para que llame a la función openWhatsappChat() cuando se presione el botón.
  document.getElementById("whatsapp-button").addEventListener("click", openWhatsappChat);