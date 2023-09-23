const fs = require("fs");
const division = require("./division");
const multiplicacion = require("./multiplicacion")

const operacion = process.argv[2];
const num1 = +process.argv[3];
const num2 = +process.argv[4];
const path = __dirname + "/registro.json";

function calcular(operacion, numero1, numero2) {
  let resultado = 0;

  switch (operacion) {
    case "suma":
      resultado = numero1 + numero2;

      break;
    case "resta":
      resultado = numero1 - numero2;
      break;
    case "multiplicar":
      resultado = multiplicacion(numero1, numero2);
      break;
    case "division":
      resultado = division(numero1, numero2);
      break;
    default:
      return "operacion no encontrada";
  }
  escribir({ operacion: operacion, resultado: resultado });
  return { operacion: operacion, resultado: resultado };
}

function leer() {
  let archivo = fs.readFileSync(path, "utf-8");
  return JSON.parse(archivo);
}

function escribir(registro) {
  let archivo = leer();
  archivo.push(registro);
  fs.writeFileSync(path, JSON.stringify(archivo));
}
console.log(calcular(operacion, num1, num2));
