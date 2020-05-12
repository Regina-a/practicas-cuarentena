let  coloreado = false
let  subrayado = false

function pnombre(){
let nombre = prompt("hola")
document.getElementById("saludo").innerHTML = "hola " + nombre + "! "

}

function colorear(){
let texto = document.getElementById("saludo")
if (coloreado == false) {
  texto.classList.add("letrasrojas")
  coloreado = true
}else {
  texto.classList.remove("letrasrojas")
  coloreado = false
}

}

function subrayar(){
let texto = document.getElementById("saludo")
if (subrayado == false) {
  texto.classList.add("subra")
  subrayado = true
}else {
  texto.classList.remove("subra")
 subrayado = false
}

}
