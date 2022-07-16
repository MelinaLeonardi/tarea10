/*PROBAMOS PRIMERA LINEA DE CODIGO JAVA*/
let nombre = "Programacion" + "Facil.";
let variableadicional = "Comision A";
let saludo = "Les doy la bienvenida a ";
let fraseCompleta = saludo + nombre + variableadicional;
console.log(fraseCompleta);

/* PROBAMOS SEGUNDA LINEA DE CODIGO*/
let frase = "JavaScript " + "es un lenguaje " + "esencial para crear " + 'sitios web poderosos.';
console.log(frase);

/*PROBAMOS CODIGO CONCATENANDO NUMEROS COMO CADENA DE TEXTO*/
let numeroString1 = "texto 10 ";
let numeroString2 = "texto 20 ";
let numeroString3 = "texto 30 ";
let concatenaNumeros = numeroString1 + numeroString2 + numeroString3;
console.log(concatenaNumeros);

/* vamos a solicitar un input para que el usuario ingrese  su nombre y edad. luego lo mostraremos mediante un aviso (warn)*/
var nombre1 = prompt("cual es tu nombre?");
var age = prompt("cual es tu edad?");

console.warn(nombre1 + age);

/*incorporamos las funciones */

sexo = prompt("introduce tu sexo");

if (sexo = "masculino"){
    /*alert('podes entrar si sos mayor de 18'); PREGUNTA REDUNDANTE*/

    edad = prompt("Introduce tu edad");
    if (edad >= 18){
        alert("Puedes entrar, eres mayor de edad.");
       } else {
        alert("No puedes entrar, eres menor de edad.");
       }
}

else if(sexo ="femenino"){
    /*alert('mujeres solo mayores de 20');PREGUNTA REDUNDANTE*/

    edad = prompt("Introduce tu edad");
    if (edad >= 20){
        alert("Puedes entrar, eres mayor de edad.");
       } else {
        alert("No puedes entrar, eres menor de edad.");
       }
}else{
    alert("no has introducido tu sexo correctamente")
}