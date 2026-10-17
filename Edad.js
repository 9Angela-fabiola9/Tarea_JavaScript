const prompt = require("prompt-sync")();
let nota = parseInt(prompt("Ingresa su edad: "));

if(edad >=0 || edad <=10){
    console.log("niño");
}else if (edad >= 11 && edad <=17){
    console.log("adolescente");
}else if(edad >= 18 && edad <=59){
    console.log("adulto");
}else if(edad >=60 && edad <=100){
    console.log("adulto mayor");
}
 else{
    console.log("Reliquia mayor");
}

//(0-10)años niño
//11-17 adolescente
//18-59 adulto
//60-100 adulto mayor
//reliquia mayor