function crecer(){
  let  imagen = document.getElementById('hola')
let  crecer = document.getElementById('pi')
  let  decrecer = document.getElementById('ra')
  imagen.width += 100;

  if (imagen.width >= 500){
  crecer.disabled = true;
  }

if(imagen.width > 120){
  decrecer.disabled = false;
}

}

function no (){

  let imagen = document.getElementById('hola')
  let  crecer = document.getElementById('pi')
    let  decrecer = document.getElementById('ra')
  imagen.width -= 50;

  if  (imagen.width <= 100){
    decrecer.disabled = true;
  }

if (imagen.width >50){
  crecer.disabled = false;
}
}
 function bueno(){
   let imp = "https://i.pinimg.com/236x/7f/cc/23/7fcc23dad7ac190d67f5947611dc6275.jpg"
   let imo ="https://i.pinimg.com/236x/41/f4/ff/41f4ffbb5d070a100214d9f332d2acf3.jpg"
  let imagen = document.getElementById('hola')
   imagen.src = "https://i.pinimg.com/236x/41/f4/ff/41f4ffbb5d070a100214d9f332d2acf3.jpg"

if (imagen.src = "https://i.pinimg.com/236x/41/f4/ff/41f4ffbb5d070a100214d9f332d2acf3.jpg" )
  imagen.src ="https://i.pinimg.com/236x/7f/cc/23/7fcc23dad7ac190d67f5947611dc6275.jpg"
 }











 
