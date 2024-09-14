const generates = () => {
  let quantity = parseInt(document.getElementById("quantity").value);
  let capital = document.getElementById("capital");
  let number = document.getElementById("number");
  let specialCharacters = document.getElementById("specialCharacters");
  let result = document.getElementById("result");

  let password = "";
  let caracteres = "abcdefghijklmnopqrstuvwxyz";

  // Validar que la cantidad sea mayor a 0
  if (quantity <= 0 || isNaN(quantity)) {
    alert("El número no es válido");
    return; // Detener ejecución si el número no es válido
  }

  // Añadir letras mayúsculas, números y caracteres especiales si están seleccionados
  if (capital.checked) {
    caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (number.checked) {
    caracteres += "1234567890";
  }
  if (specialCharacters.checked) {
    caracteres += '!"#$%&/()@';
  }

  // Generar la contraseña
  for (let i = 0; i < quantity; i++) {
    password += caracteres[Math.trunc(Math.random() * caracteres.length)];
  }

  // Mostrar la contraseña generada
  result.innerText = "Su contraseña es: " + password;

  // Resetear el valor de la cantidad de caracteres a vacío
  document.getElementById("quantity").value = "";
};
