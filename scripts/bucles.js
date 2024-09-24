console.log("%cBucles", "font-weight:bold")

for(let i = 0; i < 10; i++){ // inicializacion del contador, comprobacion para seguir, incremento
    console.log("hola " + i);
}

console.log("-------------")

for (let i = 9; i >= 10; i--){
    console.log("Hola " + i);
}
console.log("-------------")


alumnos = ["Gonzalo", "Carlos", "Ella", "Arnau", "Mary", "Marc", "Xavi"]

for (let i = 0; i < alumnos.length; i++){
    console.log("Hola " + alumnos[i])
}

console.log("-------------")

for(const alumno of alumnos) { // recorre un array sin indice
    console.log("Hola",  + alumnos)
}

for (let i = 0; i < alumnos.length; i++){ // recorre un array con indice
//const alumno = alumno[i]
//console.log("hola " + "alumno");
alumnos[i] = alumnos[i].toUpperCase() //modifica los elementos del array
}

//escribe un bucle que muestre 10 veces un mensaje por consola con el text en color rojo y azul alternativamente
console.log("Ejercicio Numero 1");

for(let i = 0; i < 10; i++) {
    if(i % 2) {
        console.log("%cMensaje azul", "color: blue");
    } else {
        console.log("%cMensaje rojo", "color: red");
    }
}

//escribre un bucle que muestre los numeros del 1 a 20 y muestre a su lado "Hola" si es multiple de dos "adeu" si es multiple de 3 i "que tal" si es multiple de 5

console.log("Ejercicio numero 2");
for(let i = 1; i <= 20; i++) {
    let mensaje = i
    if(i % 2 === 0) mensaje += " hola"
    if(i % 3 === 0) mensaje += " adeu"
    if(i % 5 === 0) mensaje += " que tal"

    console.log(mensaje);

}

// fes un contador que mostri a la consola els números de l'1 al número que introdueixis com a paràmentre (fins a 1000 com a màxim)

console.log("ejercicio 4");

function contar(numero){
    if(numero > 1000) {
        console.log("el numero tiene que ser mas pequeño que 1000");
        return
    }

    if(numero < 1) {
        console.log("el numero tiene que ser mas grande que 1");
    }

    for(let i = 1; i <= numero; i++) console.log(i);

} 
contar(25)
contar(-26)
contar(25000)
// fes un contador que només mostri els números que tinguin un dígit contingut a la string definida per l'usuari (amb prompt) fins a 100 (p.e. "234" mostra 2, 3, 4, 12, 13, 14, 20, 21, 22, 23, 24... , 47, 48, 49, 52, 53, 54...)
function mostrarDigitos() {
let digitos = prompt("Introduce los digitos que quieres mostrar")

console.log("ejercicio 5");
for(let i = 0; i < 101; i++){
    let string = i.toString()

    for(const char of string){
        if(digitos.includes(char)){
            console.log(i);
            break
        }
    }
}
}

//mostrarDigitos()
//llista de la compra. fes un prompt es repetixi fins que l'usuari introudeixi una paraula clau(useu BREAK); fins llavor, cada paraula introduida sera un item de la llista de la compra que s'escriure despres de que l'usuari l'aturi amb el format:
//                  Llista de la compra:
//                  -pa
//                  -mantega
//                  -aigua

function listaCompra(){
let element = ""
let lista = "Lista de la compra :\n"

while (element !="Stop"){
    element = prompt("Introduzca su lista de la compra, escribe Stop para parar").trim()
    element = element[0].toUpperCase() + element.slice(1).toLowerCase()
    if(element && element != "Stop") lista += "- " + element + "\n"
    if(element == null) break
}
console.log(lista);

}

listaCompra()