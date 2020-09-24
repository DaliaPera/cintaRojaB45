//REPASO
console.log ('Soy un mensaje');
console.warn ('Soy otro mensaje');

//DECLARAR UNA VARIABLE
//palabra reservada var, let o const  + nombre de la variable

var numero;

//ASIGNAR VALOR a una variable 
numero = 10;

//DECLARAR Y ASIGNAR
var nombre = 'Dalia';
var nombreDelUsuario = 'Diego';
var numeoTelefonico = 3333;

//DIFERENCIA ENTRE VAR, LET Y CONST
//SCOPE = ALCANCE DE LA VARIBALE

// VAR = GLOBAL
//LET = LOCAL
// CONST = LOCAL Y CONSTANTE (NO CAMBIA DE VALOR )

//PUEDO REASIGNAR
var num= 10;
num = 1;
num = 100;

//PUEDO REASIGNAR
let num2 = 100;
num2 = 1;
num = 3;

//NO PUEDO REASIGNAR
const num3= 100;

var num5 = 100;
{
    console.log (num5)

}
let num6 = 2;

{
    console.log (num6)
}
{
    var num7 = 200;
}
console.log (num7)
/* {
    let num8 = 1000;
}
console.log (num8); */


let precio = 30;
if (precio < 100){
    console.log ('Boleto rojo');
}else if (precio < 200) {
    console.log ('Boleto naranja');
}else if (precio < 300){
    console.log ('Boleto morado')
}else{
    console.log ('Boleto negro');
}

//CICLOS = REPETIR MÁS DE UNA VEZ UNA INSTRUCCIÓN
for ( let iterador =1; iterador <= 4; iterador++) {
    console.log (iterador)
}

let nombresAlumnos = ['Diego', 'Julio', 'Roberto', 'Hilda', 'Mónica', 'Luis'];
for (let i = 0; i<nombresAlumnos.length; i++ ){
    console.log(nombresAlumnos[i]);
}

//FUNCIONES

//CREACIÓN DE UNA FUNCIÓN 
function nombresAlumnosSexto () {
    let nombresAlumnosSexto = ['Diego', 'Julio', 'Roberto', 'Hilda', 'Mónica', 'Luis'];
for (let i = 0; i<nombresAlumnosSexto.length; i++ )
    console.log(nombresAlumnosSexto[i]);
}


function obtenerNombreCompleto () {
    let nombre = 'Diego';
    let apellido = 'Hernandez';
    let nombreCompleto = nombre + ' '+ apellido;
    return nombreCompleto;
}
console.log(obtenerNombreCompleto());

function sumar (){
    let a = 1;
    let b = 100;
    let resultado = a + b;
    return resultado;
}
let resultadoDeLaSuma = sumar();
console.log (resultadoDeLaSuma);

function restar (){
    let num1 = 100;
    let num2 = 50;
    let resultado = num1 - num2;
    console.log(resultado);
    
}

let resultadoDeLaResta = restar();
console.log(resultadoDeLaResta)
restar ();

//CREACIÓN DE LA FUNCIÓN
function multiplicar (n1,n2){
    let resultado = n1 * n2;
    console.log (resultado);
}
multiplicar (10, 20);
multiplicar (5,3);
multiplicar (12, 18);

function saludarUsuario (nombre){
    console.log('Bienvenido '+ nombre);
}
saludarUsuario ('Julia');
saludarUsuario ('Luis');
let nombreTest =  'Jhon';
saludarUsuario(nombreTest);


let nombreRecibido = prompt ('Escribe tu nombre');
saludarUsuario (nombreRecibido);


//CREACIÓN DE LA FUNCIÓN 
function crearContrasena(nombre, edad, mesNacimiento){
    let contrasena = nombre + edad + mesNacimiento;
    console.log('Su contraseña es: '+ contrasena);
}

//MANDAMOS LLAMAR A LA FUNCIÓN 
crearContrasena ('diego', 20, 'diciembre');
crearContrasena ('julia', 40, 'enero');

let edad = 30;
let nombreUser = 'Ana';
let mesUser = 'julio';
crearContrasena(nombreUser, edad, mesUser);
