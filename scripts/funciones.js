console.log("%cFunciones", "font-weight:bold; color:red" );

function saludar() {
    console.log("hola Alumnos")
}

saludar()

function saludo() {
    return "hola, clase"
}

console.log(saludo());

// funcion con un parametro que muestra una string por la consola

function saludarPersona(nom) {
    console.log(`hola ${nom}`)
}
saludarPersona("Mary")
saludarPersona("Luis")
saludarPersona("Jose")

// funcion con un parametro que devuelve un string 

function saludoPersona(nom){
    return `hola ${nom}`
}

console.log(saludoPersona("lucia"))

// funcion a la que le pases un DNI y nos lo devuelva ofuscado

function dniOfuscado(dni) {
    return dni.slice(4).padStart(9,"X").slice(0,-2).padEnd(9,"x")
}
console.log(dniOfuscado("42386116Z"))

// funcion que ofusca el dni en una variable
dni = "42386116Z"

function ofuscarDni(){
    let ofus 
    ofus = dni.slice(4).padStart(9,"X").slice(0,-2).padEnd(9,"x")
    dni = ofus
}
    ofuscarDni()

    console.log(dni);

/*
function ofuscarDni(){
dni = dniOfuscado(dni)
}
ofuscarDni()
console.log(dni)

function ofuscarDni() {
dni = dni.slice(4).padStart(9,"X").slice(0,-2).padEnd(9,"x")
}
*/

// una funcion a la que le pases una array de dos elementos y te devuelva el array invertido

let aYb = ["a", "b"]


function arrayInvertidoo(array){
    return array.toReversed()
}
console.log(arrayInvertidoo(aYb));
console.log(arrayInvertidoo(["A", "B"]));

/*

function arrayInvertido(){
    return array.reverse()
}

arrayInvertido()
console.log(array)

*/