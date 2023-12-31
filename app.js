const fs = require("fs");
const division = require("./operaciones/division");
const multiplicacion = require("./operaciones/multiplicacion");
const resta = require("./operaciones/resta");
const suma = require("./operaciones/suma");
const { log } = require("console");

const operacion = process.argv[2];
const num1 = +process.argv[3];
const num2 = +process.argv[4];
const path = __dirname + "/data/registro.json";

function calcular(operacion, numero1, numero2) {
  let resultado = 0;
  let registro;

  switch (operacion) {
    case "suma":
      resultado = suma(numero1, numero2);
      registro = { operacion: operacion, resultado: resultado };
      escribir(registro);
      break;
    case "resta":
      resultado = resta(numero1, numero2);
      registro = { operacion: operacion, resultado: resultado };
      escribir(registro);
      break;
    case "multiplicar":
      resultado = multiplicacion(numero1, numero2);
      registro = { operacion: operacion, resultado: resultado };
      escribir(registro);
      break;
    case "division":
      resultado = division(numero1, numero2);
      registro = { operacion: operacion, resultado: resultado };
      escribir(registro);
      break;
    case "lista":
      registro = listar();
      break;
    default:
      return "operacion no encontrada";
  }

  return registro;
}

function listar() {
  let archivo = fs.readFileSync(path, "utf-8");
  return JSON.parse(archivo);
}

function escribir(registro) {
  let archivo = listar();
  archivo.push(registro);
  fs.writeFileSync(path, JSON.stringify(archivo));
}
console.log(calcular(operacion, num1, num2));
//console.log(listar());
