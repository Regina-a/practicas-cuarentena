
function suma(){
  let total = parseInt(document.getElementById('numero1').value) + parseInt(document.getElementById('numero2').value)

document.getElementById("resultado").innerHTML = total
}

function resta(){
  let total = parseInt(document.getElementById('numero1').value) -  parseInt(document.getElementById('numero2').value)

document.getElementById("resultado").innerHTML = total


}
function multiplicame(){
  let total = parseInt(document.getElementById('numero1').value) * parseInt(document.getElementById('numero2').value)

document.getElementById("resultado").innerHTML = total
}
function divide(){
  let total = parseInt(document.getElementById('numero1').value) / parseInt(document.getElementById('numero2').value)

document.getElementById("resultado").innerHTML = total
}
