// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Multiplicar un numero sin utilizar el simbolo de multiplicación

const multiply = (a, b) => {
  let resultado = 0;
  const positivo = Math.abs(b) == b;
  for (let i = 0; i < Math.abs(b); i++) {
    resultado = positivo ? resultado + a : resultado - a;
  }
  return resultado;
};

console.log(multiply(-3, 4));
