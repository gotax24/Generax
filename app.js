const generates = () => {
  let quantity = parseInt(document.getElementById("quantity").value);
  let capital = document.getElementById("capital");
  let number = document.getElementById("number");
  let specialCharacters = document.getElementById("specialCharacters");
  let result = document.getElementById("result");

  let password = "";

  let caracteres = "abcdefghijklmnopqrstuvwxyz";
  if (capital.checked) {
    caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (number.checked) {
    caracteres += "1234567890";
  }
  if (specialCharacters.checked) {
    caracteres += '!"#$%&/()@';
  }

  for (let i = 0; i < quantity; i++) {
    password =
      password + caracteres[Math.trunc(Math.random() * caracteres.length)];
  }

  let resultado = (result.innerText = "Su contraseña es : " + password);

  let reset = (quantity.value = "");
  
  return resultado, reset;
};
