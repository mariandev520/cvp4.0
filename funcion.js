const formulario = document.getElementById('formulario');
const firmaDiv = document.getElementById('firma');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita que se recargue la página al enviar el formulario
  
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const departamento = document.getElementById('departamento').value;
  const email = document.getElementById('email').value;

  const firma = `
    <p>${nombre}</p>
    <p>Teléfono: ${telefono}</p>
    <p>Departamento: ${departamento}</p>
    <p>Email: <a href="mailto:${email}">${email}</a></p>
  `;
  
  firmaDiv.innerHTML = firma; // Agrega la firma al div
});