
// INICIO PROGRAMA CACHIPUN.
alert(`Cachipun`)

//Cantidad Jugadas + Variables Resultado General.

var cantidad = parseInt(prompt('Cuantas veces desea Jugar'));
var tie = 0;
var win = 0;
var lose = 0;

for(i=0 ; i < cantidad ; i++){
    alert(`Jugada ${i+1} de ${cantidad}`);

//Validación Jugada Jugador.
do{
    var jugada = parseInt(prompt('Que va a jugar: 0: Piedra; 1: Papel; 2: Tijera'));

  
    if(jugada < 0 || jugada > 2){alert('Jugada no Valida')
    }
  
}while (jugada != 0 && jugada != 1 && jugada != 2 )

//Jugada Computador.
var computador = Math.floor(Math.random()*3);

//Indicador Valor Numérico Computador y Jugador
alert(`Jugador Saca: ${jugada}, Computador ${computador}`)

//Numérico a String Computador
if (computador == 0) {
    computador = "piedra"
} else if (computador == 1) {
    computador = "papel"
} else {
    computador = "tijera"
}

//Numérico a String Jugador
if (jugada == 0) {
    jugada = "piedra"
} else if (jugada == 1) {
    jugada = "papel"
} else {
    jugada = "tijera"
}

//Indicador Valor String Computador y Jugador
alert(`Jugador Saca: ${jugada}, Computador ${computador}`)

//Condicionales Resultado.
if (jugada === computador) {
    alert("EMPATE!")
    tie++;
} else if(jugada === "papel" && computador === "piedra") {
    alert("GANASTE!")
   win++;
} else if (jugada === "tijera" && computador === "papel") {
    alert("GANASTE!")
    win++;
} else if (jugada === "piedra" && computador === "tijeras") {
    alert("GANASTE!")
    win++;
} else {
    alert("PERDISTE!")
    lose++;
}

alert(`Victorias: ${win} - Derrotas: ${lose} - Empates: ${tie}`);


}
    





   
                    
  
        
            
             
               