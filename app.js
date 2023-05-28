/*
" a -> ai "
" e -> enter "
" i -> imes "
" o -> ober "
" u -> ufat "
*/


function encriptar(){
    var ingreso = document.getElementById("ingreso").value.toLowerCase();
    var cifrado = ingreso.replace(/e/igm, "enter");
    cifrado = cifrado.replace(/o/igm, "ober");
    cifrado = cifrado.replace(/i/igm, "imes");
    cifrado = cifrado.replace(/a/igm, "ai");
    cifrado = cifrado.replace(/u/igm, "ufat");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("texto").innerHTML = cifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var ingreso = document.getElementById("ingreso").value.toLowerCase();
    var cifrado = ingreso.replace(/enter/igm, "e");
    cifrado = cifrado.replace(/ober/igm, "o");
    cifrado = cifrado.replace(/imes/igm, "i");
    cifrado = cifrado.replace(/ai/igm, "a");
    cifrado = cifrado.replace(/ufat/igm, "u");

    document.getElementById("muneco").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("texto").innerHTML = cifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var texto = document.getElementById("texto");
    texto.select();
    document.execCommand("copy");
    alert("Contenido copiado")
}