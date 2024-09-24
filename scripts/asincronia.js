// ejercicios asincronia

//funcion que retorna una promesa que se resuelve a veces

function promise(prob){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() < prob) resolve("Promesa resuelta")
            else reject("Promesa rechazada")
        }, 2000)
    })
}

promise(0.5)
.then(res => {
    console.log("%c" + res, "color: green")
})
.catch(err => {
    console.log("%c" + err, "color: red")
})

//funcion que retorna una promesa que es resol en un temps aleatori

function randomPromise(time) {
    let delay = 1000*time*Math.random()

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Promesa resuelta en " + delay.toFixed(0) + " ms")
        }, delay)
    })
}

randomPromise(2)
.then(res => {
    console.log("%c" + res, "color: green");
})

//funcion asincrona que espera a que es resolgui un promesa

async function gestionarPromise() {
    let res
    console.log("Estoy esperando una promesa")

    try {
        res = await promise(0.5)
        console.log("El estado ha cambiado " + res);
    } catch (error) {
        console.log("La promesa ha fallado " + error);
    }
}
gestionarPromise()

// gestion de errores

try {
    throw new Errror("Ha fallado todo!")
} catch (error) {
    console.log(error.message);
}
console.log("esto no se va a ejecutar");