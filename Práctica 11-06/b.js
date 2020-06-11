function abrircuenta(){
let ahorroinicio =  prompt("con cuanto deseas abrir tu cuenta, la cantidad min. es $1000");
  if(ahorroinicio >= 1000){
  //alert("INGRESO VALIDO")
document.getElementById('cantidadactual').innerHTML = ahorroinicio;
}else {
    alert(" La cantidad mínima para abrir tu cuenta son $1000mxn")
    abrircuenta();
  }
}

function ahorro(){
  let ingreso = document.getElementById('usuario').value;
  let cantidadactual =document.getElementById('cantidadactual').innerHTML;

let suma = parseInt(ingreso) + parseInt(cantidadactual);
document.getElementById('cantidadactual').innerHTML = suma;
document.getElementById('usuario').value = "";

}
function quitar(){
  let menos = document.getElementById('usuario').value;
  let cantidadactual =document.getElementById('cantidadactual').innerHTML;

  let resta = parseInt(menos) - parseInt(cantidadactual);
  document.getElementById('cantidadactual').innerHTML = resta;
  document.getElementById('usuario').value = "";
}
