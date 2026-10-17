
// La linea de instruccion que decimos que vamos a usar la herramienta de prompt
const prompt = require("prompt-sync")();


// es como el leer de Pseint

// solo con prompt el espera cualquier tipo de dato, String, number, etc.
// let nota = prompt("Ingresa tu nota: ");


//el parse int/ float nos indica que espera numeros ya sean decimales o enteros.
let nota = parseFloat(prompt("Ingresa tu nota: "));



if(nota >= 70){
    console.log("Aprobado");
} else if (nota >= 60){
    console.log("raspado");
}else if(nota >= 50){
    console.log("Te vas a retrancas");
}
 else{
    console.log("reprobado");
}


