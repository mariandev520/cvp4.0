


  // Este metodo hace que el administrador itere los Cv que trae la Api externa, con un metodo booleano 

var cvNuevo = ''

  var booleano = false; // variable booleana inicial con valor "true"

  function cambiarValor() {
    if (booleano) {
      booleano = false; // si la variable es "true", cambia a "false"
     cvNuevo = "" ;
    } else {
      booleano = true; // si la variable es "false", cambia a "true"
     cvNuevo = 'https://randomuser.me/api/' ;
    }
  


    // metodo trae los datos de la api https://randomuser.me/ y los itera

fetch(cvNuevo) // la variable cvNuevo , es el resultado del boton cambiar Cv cuando se clikea 
.then(response => response.json())
.then(data => {
    const user = data.results[0];
    document.getElementById('user-avatar').src = user.picture.large;
    document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
    document.getElementById('user-email').innerHTML = ` ${user.email}`;
    document.getElementById('user-phone').innerHTML = ` ${user.phone}`;
    document.getElementById('user-location').innerHTML = ` ${user.location.city}, ${user.location.country}`;

// 

    const experienceList = document.getElementById('user-experience');
    user.experience.forEach(exp => { const listItem = document.createElement('li');
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
      alert('Por favor, introduzca un número de teléfono correcto ejemplo:223445566');
      return false;
    }

    // Mostrar mensaje de éxito
    alert('Gracias por contactarnos, ' + nombre + '. Nos pondremos en contacto contigo pronto.');

    // Resetear el formulario
    document.getElementById('formulario-contacto').reset();

    return true;
  }


  // Funcion que permite , reemplazar el numero de telefonico que trae la Api , del usuario que va iterando y abrir un chat con cada usuario.

  // la estructura de codigo document.getElementById("user-phone").innerHTML.replace(/[-\s]/g, ""), es la variable que coloca el numero de celular aletorio segun el cv

  function openWhatsappChat() {
    window.open("https://wa.me/"+document.getElementById("user-phone").innerHTML.replace(/[-()\s]/g, ''), "_blank");
  }

 


