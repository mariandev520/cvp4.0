
  function openWhatsappChat() {
    window.open("https://wa.me/1234567890", "_blank");
  }

var pepe = ''

  var booleano = false; // variable booleana inicial con valor "true"

  function cambiarValor() {
    if (booleano) {
      booleano = false; // si la variable es "true", cambia a "false"
     pepe = "" ;
    } else {
      booleano = true; // si la variable es "false", cambia a "true"
     pepe = 'https://randomuser.me/api/' ;
    }
  


fetch(pepe)
.then(response => response.json())
.then(data => {
    const user = data.results[0];
    document.getElementById('user-avatar').src = user.picture.large;
    document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById('user-email').innerHTML = `<i class="fas fa-envelope"></i> ${user.email}`;
    document.getElementById('user-phone').innerHTML = `<i class="fas fa-phone"></i> ${user.phone}`;
    document.getElementById('user-location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${user.location.city}, ${user.location.country}`;

    const experienceList = document.getElementById('user-experience');
    user.experience.forEach(exp => {
        const listItem = document.createElement('li');
        listItem.textContent = `${exp.position} at ${exp.company}`;
        experienceList.appendChild(listItem)
    }).reset()
})}
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
    const regexTelefono = /^[0-9]{8}$/; // el numero ingresado debe ser de 8 numeros se puede modificar la cantidad en este metodo.
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


/*  
  // Agregamos un event listener al botón para que llame a la función openWhatsappChat() cuando se presione el botón.
  document.getElementById("whatsapp-button").addEventListener("click", openWhatsappChat);

 */