let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio';

function console1(){
    console.log("El botón fue clicado");
    return;
}

let ciudadBrasil = ""
function ciudad(){
    let ciudadBrasil = prompt('Indique el nombre de una ciudad de Brasil:');
    alert(`Estuve en ${ciudadBrasil} y me acorde de tí.`);
    return;
}

function javaScript(){
    alert(`Yo amo JS`);
    return;
}

function suma (){
    let a = parseInt(prompt ('Ingresa el primer número: '));
    let b = parseInt(prompt ('Ingresa el segundo número: '));
    resultado = a + b;
    alert(`La suma de los dos numeros es igual a ${resultado}`);
    return;
}
//Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludame0 (){
    console.log("Hola Mundo!");
    return;
}
saludame0();
//una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludame(saludo, nombre) {
    console.log(`${saludo}, ${nombre}`);
    return;
}

// Llamamos a la función para que muestre el mensaje en la consola
saludame("Hola buenos dias, ", "Victor Hugo");
//una función que reciba un número como parámetro y devuelva el doble de ese número.
function doble(numero){
    console.log(numero*2)
}

doble(8);

//una función que reciba tres números como parámetros y devuelva su promedio.

function prom(n1,n2,n3) {
    console.log((n1+n2+n3)/3);
}
prom(14,17,24);

//una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function encontrarMayor(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1}`);
    } else {
        console.log(`${num2}`);
    }
    return;
}

// Ejemplo de uso:
encontrarMayor(5, 10);

//una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

function cuadrado(numero) {
    console.log(numero*numero);
    return;
}

cuadrado(8);

/*
Crear una función que muestra "¡Hola, mundo!" en la consola.
function mostrarHola() {
  console.log("¡Hola, mundo!");
}

mostrarHola();

Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.
function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

mostrarHolaNombre("Alice");

Crear una función que recibe un número como parámetro y devuelve el doble de ese número.
function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);

Crear una función que recibe tres números como parámetros y devuelve su promedio.
function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);
Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.
function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);

Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);
*/