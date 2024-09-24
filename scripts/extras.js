// funcion dado (aleatorio entre 1 i N)

function dado(n){
    return parseInt(1 + n * Math.random())
}
tiradas = []

for (let i = 0; i < 10; i++){
    tiradas.push(dau(20))
}

console.log(tiradas);
// funcion que genere un sencer random entre a i b aleatorio (a,b)

function aleatorio(a,b){
    return parseInt(a + (b + 1 - a) * Math.random())
}

console.log(aleatorio(22,24))

aleatoris = []

for (let i = 0; i < 30; i++){
    aleatoris.push(aleatorio(20,40))
}

console.log(aleatoris)


// TODO: hacer estadistica con los numero saleatorios (frequencia, mediana, media, desviasio tipica)

// Fechas

/*
time = new Date("Sat Jul 20 2024 09:30:00 GTM+0200 (hora de verano de Europa Central)")

console.log(time);
console.log(time.getTime());
console.log(time.toLocalString());
console.log(time.toLocalTimeString);
*/

let time = new Date()

console.log(time);

let time2= newDate()

// Errores, try... catch

try {
    if(Math.random() < 0.5) throw new Error("Algo ha fallado")
} catch (error) {
    console.log(`%c Ha habido un error:` + error.message, "color: red" );
}

console.log("Hola");