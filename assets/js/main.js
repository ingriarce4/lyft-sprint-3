/* Defino el tablero
var tablero = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]
//Ingreso el auto en la posicion 3,5
tablero[3][5] = "A";

//Obtengo el div en donde se dibujará el tablero
var divTablero = document.getElementById("tablero");

//Variables temporales
var fila, casilla;

//Recorro el arreglo para dibujar el tablero
for(var i = 0; i<tablero.length; i++){
  fila = document.createElement("div");
  fila.classList.add("fila");
  for(var j = 0; j<tablero[i].length; j++){
    casilla = document.createElement("div");
    casilla.innerHTML = tablero[i][j];
    casilla.classList.add("casilla")
    fila.appendChild(casilla);
  }
  divTablero.appendChild(fila);
}  */

/*pasos 
aparecer tablero con onclick
empezar a jugar ... unirlo con css */


/*Validacion de formulario*/

var numero=document.getElementById('botonentrada');
numero.addEventListener('click', function(){
  var num=document.getElementById('entrada').value;
  if(num.length!=9){
    alert("Ingrese un número de 9 dígitos");
  }else{
    var text=document.getElementById('input');
    text.innerHTML = "Bien";
    alert("Registro correcto");
  }
};


/*evento agregar tablero*/

var imagen= document.createElement("img");
imagen.setAttribute("src", "img/car.png");
var bloq=document.getElementById("bloque");
bloq.appendChild(imagen);

var boton = document.getElementById("tablero");
  boton.addEventListener("click",function(){
    alert ("ingrese a tabla")
  }
  

//trae de hacerlo con arreglo, pero quedo en mejorarlo.

  