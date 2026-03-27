function generarPassword(){

let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let minusculas = "abcdefghijklmnopqrstuvwxyz";
let numeros = "0123456789";
let simbolos = "!@#$%^&*()_+[]{}<>?/";

let caracteres = minusculas;

if(document.getElementById("mayusculas").checked){
caracteres += mayusculas;
}

if(document.getElementById("numeros").checked){
caracteres += numeros;
}

if(document.getElementById("simbolos").checked){
caracteres += simbolos;
}

let longitud = document.getElementById("longitud").value;

let password = "";

for(let i = 0; i < longitud; i++){

let random = Math.floor(Math.random() * caracteres.length);

password += caracteres[random];

}

document.getElementById("password").value = password;

}

function copiarPassword(){

let campo = document.getElementById("password");

campo.select();

document.execCommand("copy");

alert("Contraseña copiada");

}