function hola(){
  let texto = document.getElementById('nuevoElemento').value
  let lista = document.getElementById('lista')




  let nuevaetiqueta = document.createElement('li')
  let textoi = document.createTextNode(texto)




  nuevaetiqueta.appendChild(textoi)
  lista.appendChild(nuevaetiqueta)
}
