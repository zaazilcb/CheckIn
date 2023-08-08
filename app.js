const contenedor = document.querySelector("#select-adultos") ;
const contenedor2 = document.querySelector("#select-menores") ;
const formulario =document.querySelector("#formulario").addEventListener('submit', guardarDatos);

//Funcion que recoge datos del formulario para saber el numero de habitaciones a elegir
function recogerDatos(){
    let habitaciones = parseInt(document.getElementById("numero-habitaciones").value);
   //console.log(habitaciones);
    for(i = 1;i <= habitaciones;i++){
        desplegarFormulario(); 
   }
    mostrarBoton(); 
}

//funcion que despliega el formulario para saber cuantos adultos y cuantos niños estan en la habitación
function desplegarFormulario(){
    let div1 = document.createElement('div');
    div1.innerHTML = `<label>Habitación ${i}- Adultos</label>  <input type="number" min="1" max="4" class= "input-padron" id="${i}adulto" name="numAdultos"  required>`;
    let div2 = document.createElement('div');
    div2.innerHTML = `<label>Habitación ${i}-Menores</label>  <input type="number" min= "0" max="1"class= "input-padron" id="${i}menor" name="numMenores" >`;
    contenedor.appendChild(div1);
    contenedor.appendChild(div2);
}

//oculta boton de cargar
function ocultar(id){
    let elemento = document.getElementById(id);
    elemento.style.display = "none";
}

//muestra boton para guardar la informacion de cuantas personas habra por habitacion
function mostrarBoton(){
    let btn =document.createElement('div')
    btn.innerHTML=`<input type="submit"  class="form-submit" value="Guardar" id = "guardar" onclick="guardarDatos()">`;
    contenedor.appendChild(btn)
}

//guardo los datos y los despliega
function guardarDatos(e){
    e.preventDefault();
    let habitaciones = parseInt(document.getElementById("numero-habitaciones").value);

    for(i = 1; i <= habitaciones; i++){
        adultos= document.getElementById(i+"adulto").value;
        menores= document.getElementById(i+"menor").value;
        let info=document.createElement('div')
        info.innerHTML= `Tu reserva para la habitacion ${i} es de: ${adultos} adultos y ${menores} menores`;
        contenedor.appendChild(info);
   }
}
