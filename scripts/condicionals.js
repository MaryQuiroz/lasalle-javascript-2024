console.log("%cCondicionales", "font-weight: bold")

text = "Este es un texto predeterminado"

if (text.lenght < 20){
    console.log("Se ha cumplido mi condicion");
}

nom = ""
// nom = prompt("introduce tu nombre")

if(nom == "Omar") console.log("hola Omar");
else console.log("No eres Omar, Hola Desconocido");

animal = "perro"
color = "verde"

if(animal == "perro") {
    console.log("sacalo a pasear");
} else if (animal == "gato") {
    console.log("cambiale el arenero");
} else if(animal == "caballo") {
    console.log("sal a cabalgar");
} else if(animal == "pez") {
    console.log("ponle la comida");
} else {
    console.log("Animal no encontrado");
}

if (animal == "perro" || animal == "gato") console.log("eres una basica");

animals = ["perro", "jerbo", "caballo", "pez"]

if(animals.includes("perro") && color == "verde") console.log("que raro eres");
if(animals.includes("gato")) console.log("limpia el arenero");
if(animals.includes("perro")) console.log("sacalo a pasear");
if(animals.includes("caballo")) console.log("sacalo a cabalgar");

if(animal == "pez") console.log("ponle la comida");
else console.log("Lamentablemente no tienes pez");

personas = 4

switch(personas) {
    case 1:
        console.log("No se aceptan reservas para una sola persona");
    case 2:
        console.log("Buenas Noches a que hora quiere su reserva");
    case 3:
        console.log("Mesa para 3?");
    case 5:
        console.log("Lo siento no tengo mesa para 5");
    default:
        console.log("Eso no es un numero aceptable");
        break
}

// *Operadores booleanos: ==, ===, <, >, <=, >=, !=, ||, &&, !

console.log(1 == "1");
console.log(1 === "1");

user = ""

// user = prompt("Introduce su nombre de unsuario")

if(!user){
    console.log("no estas logeado");
} else {
    console.log("Bienvenido, " + user);
}

// TODO: crea una funcion que este al principio de todo el script y te permita decir cual de los cuatro ejecicios anteriores se ejecuta

function elegirEjercicios() {
 const eligeEjercicio = prompt("escoge que ejercicio quieres hacer: del 1 al 4").toLowerCase()
 if(!["1", "2", "3", "4"].includes(eligeEjercicio)){
    console.log("tienes que escoger un numero del 1 al 4, vuelve a refrescar!")
    elegirEjercicios()
 }
 
if(eligeEjercicio == "1"){
console.log(miAnimal());
} else if (eligeEjercicio == "2"){
    console.log(nombreCompuesto());
} else if(eligeEjercicio == "3"){
    console.log(calculadora())
} else if(eligeEjercicio == "4") {
    console.log(pedido());
} else {
    console.log("no has respondido");
}
}

elegirEjercicios()


// TODO: crea una funcion que al ejecutarla  pida un animal por el prompt y te de las instrucciones para cuidarlo con un emoji con el animal correspondiente
function miAnimal(){
const animal = prompt("escoge un animal").trim().toLowerCase()
if (animal == "gato") {
    console.log("🐱:tienes que cambiarle el agua cada dia y ponerle comida humeda y seca variado.")
} else if (animal == "perro") {
    console.log("🐶: Tienes que sacarle a pasear minimo tres veces la dia");
} else if (animal == "caballo") {
    console.log("🐴: tienes que cabalgarle y peinarle todos los dias");
} else if (animal == "pez"){
    console.log("🐟: tienes que darle de comer pero en media que si no se muere");
} else if( animal == "panda") {
    console.log("🐼:tienes que darle bambu todo el dia");
} else {
    console.log("no tenemos datos sobre este animal, introduce otro")
    miAnimal()
}
}



// TODO: crea una funcion que pida (prompt) tu nombre completoy te digo si tienes un nombre compuesto o no 
function nombreCompuesto() {
const nombreCompleto = prompt("escribe tu nombre completo")
const largoNombreCompleto = nombreCompleto.split(" ").length
if(largoNombreCompleto > 2 ){
console.log("tienes mas de un nombre");
} else {
    console.log("tienes 1 solo nombre");
}
}


//TODO: crea un funcion que pida(prompt) dos numeros y un simbolo y haga la operacion correspondiente (+, -, /, %, )
function calculadora(){
const x =  parseFloat(prompt("escribe un numero"))
if(isNaN(x)){
    alert("El numero introducido no es valido")
    return
}
const y = parseFloat(prompt("escribe otro numero"))
if(isNaN(y)){
    alert("El numero introducido no es valido")
    return
}
const operacion = prompt("escribe en caractes que operacion quieres hacer (+, -, *, /, %)")
if(!("+, -, *, /, %")){
    alert("Lo que acabas de introducir no es un simbolo aceptable")
    return
}

switch(operacion) {
    case "+":
        alert("El resultado es: " + (x + y))
        break
    case "-":
        alert("El resultado es: " + (x - y))
        break
    case "*":
        alert("El resultado es: " + (x * y))
        break
    case "/":
        if(y !== 0 ){
            alert("El resultado es: " + (x / y))
        } else {
            alert("El resultado no se puede dividir por cero")
        }
        break
    case "%":
        if(y !== 0) {
            alert("el resultado es: " + (x % y))
        } else {
            alert("No se puede dividir por cero")
        }
        break
    }
  
}

//TODO: crea una funcion que pida prompt si quieres camiseta, pantalon o gorra de que color y de que talla (S, M, L, XL) y te muestre por cosola un resumen de tu pedido “has pedido una camiseta 🎽 azul 🔵 talla XL“

function pedido(){

const prenda = prompt("escoge una prenda: pantalon, camiseta o gorra").toLowerCase()

    if(!["camiseta", "gorra", "pantalon"].includes(prenda)){
        console.log("prenda incorrecta, elige otra")
        return prenda()
    }
const color = prompt("escoge un color: roja, azul, verde o amarilla").toLowerCase()
    if(!["roja, azul, verde o amarilla"].includes(color)){
        console.log("color no disponible vuelve al incio!")
        return pedido()
    }

talla = prompt("elije una talla S, M, L o XL").toUpperCase()
    if(!["S, M, L, XL"].includes(talla)){
        console.log("talla no disponible, vuelve al inicio!")
        return pedido()
    }
    articulo = ["pantalon", "pantalón"].includes() ? "un" : "una"
}
pedido()
// TODO: crea un funcion que divida dos numeros enteros y te devuelva en un array el resultado y el resto (residuo) [cociente, residuo]

function division(q, p) {
    return [parseInt(q/p), q%p]
}

a = 27
b = 7
console.log(`El cociente de dividir ${a} entre ${b} es ${division(a, b)[0]} y el resto es ${division(27, 7)[1]}`);

a = 2773457
b = 7245
console.log(`El cociente de dividir ${a} entre ${b} es ${division(a, b)[0]} y el resto es ${division(27, 7)[1]}`);