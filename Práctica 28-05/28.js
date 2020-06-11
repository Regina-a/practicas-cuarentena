function comprobar(){
  let num1 = document.getElementById('num1').innerHTML;
  let num2 = document.getElementById('num2').innerHTML;
  let numusuario = document.getElementById('numusuario').value;
  console.log(numusuario)

  let resmulti = num1 * num2
if (numusuario == resmulti){
  alert("Correcto")
  document.getElementById('numusuario').value = "";
  refresh();
} else{
  alert("Sigue intentando")
}

}
function refresh(){

  let numrandom1 = Math.floor(Math.random() * 10);
  console.log(numrandom1);
  let numrandom2 = Math.floor(Math.random() * 10);
  console.log(numrandom2);

  document.getElementById('num1').innerHTML = numrandom1;
  document.getElementById('num2').innerHTML = numrandom2;
}
