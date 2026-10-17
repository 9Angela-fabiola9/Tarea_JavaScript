const prompt = require("prompt-sync")();


let numero;

do {
    numero = prompt ("ingrese contrasenia mayor a 0: ");
} while (numero <= 0 );

console.log("Numero Invalido");