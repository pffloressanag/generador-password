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

for(let i=0;i<longitud;i++){

let random = Math.floor(Math.random()*caracteres.length);

password += caracteres[random];

}

document.getElementById("password").value = password;

evaluarSeguridad(password);

}


function evaluarSeguridad(password){

let fuerza = 0;

if(password.length >= 8) fuerza++;
if(/[A-Z]/.test(password)) fuerza++;
if(/[0-9]/.test(password)) fuerza++;
if(/[!@#$%^&*()_+\[\]{}<>?/]/.test(password)) fuerza++;

let barra = document.getElementById("barra");
let nivel = document.getElementById("nivel");

if(fuerza <= 2){

barra.style.width = "33%";
barra.style.background = "red";
nivel.textContent = "Seguridad: Débil";

}

else if(fuerza === 3){

barra.style.width = "66%";
barra.style.background = "orange";
nivel.textContent = "Seguridad: Media";

}

else{

barra.style.width = "100%";
barra.style.background = "limegreen";
nivel.textContent = "Seguridad: Fuerte";

}

}


function copiarPassword(){

let campo = document.getElementById("password");

campo.select();

document.execCommand("copy");

alert("Contraseña copiada");

}