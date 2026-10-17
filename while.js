const prompt = require("prompt-sync")();

let password = "ABC123";
let intento = prompt ("ingrese contrasenia ");

while(intento !== password){
    console.log("clave incorrecta");

    intento = prompt("intenta de nuevo ");
}

console.log("acceso concedido");