function inicio(){
console.log('fghj');
let numeroAleatorio = Math.floor(Math.random() * 10);
console.log(numeroAleatorio)

let intento = prompt('Adivina el numero')
console.log(intento)


if (intento == numeroAleatorio){
  alert("estas bien ")
} else{
  alert("estas mal")
}
}


function calcular(){
let numerouno = prompt("inserta el primer numero");
let numerodos = prompt("inserta el segundo número");
let op = prompt("quieres sumar restar o multiplicar");

if (op == "sumar"){
  let resultado =parseInt(numerouno) + parseInt(numerodos);
  alert(resultado);
  }else if (op == "multiplicar") {
    let resultado =parseInt(numerouno) * parseInt(numerodos);
    alert(resultado);
  }else if (op == "restar") {
    let resultado =parseInt(numerouno) - parseInt(numerodos);
    alert(resultado);
  }else {
    alert ("Sintax error")
  }

}
