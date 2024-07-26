let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("numUsuario").value);
  
  console.log(`Intentos: ${intentos}`);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento("p", `Felicidades, acertaste el numero en ${intentos} ${(intentos === 1) ? `intento`: `intentos`}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
    } intentos++;
    limpiarCaja();
  }
  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Si ya sorteamos todos los numeros mostrar un mensaje en pantalla y cerrar juego
  if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
  }else{ //Si el numero generado esta en la lista ejecutamos una operacion
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    }else{
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function limpiarCaja() {
   document.querySelector('#numUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(`Numero secreto: ${numeroSecreto}`);
}

function reiniciarJuego() {
    //Limpiar la caja de texto
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
