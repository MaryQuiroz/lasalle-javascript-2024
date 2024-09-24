console.log('Este es el JS de Arrays')
data = ['🐶', '😻', 23, true]

dog = '🐶'
cat = '😻'
panda = '🐼'
koala = '🐨'

animals = [dog, cat, panda, koala, koala, koala]

console.log(data)
console.log(animals)
console.log(animals[1])
console.log('El array data tiene ' + data.length + ' elements.')


alumno = {
    nombre: 'Gonzalo',
    edad: 41,
    hobbie: '🏈',
    animals: [koala , animals[1]]

}

console.log(alumno)

alumno.edad = 46
edatGonzalo = alumno.edad

console.log(`El ${alumno.nombre} ${alumno.edad} años y le gusta ${alumno.hobbie}`)

profe = {}
console.log(profe)

profe.nombre = 'Omar'
profe.edad = 33

console.log(profe)

alumnos = [
    alumno, 
    {
        nombre : 'Pablo',
        apellido: 'Perez',
        edad: '19',
        hobbie: ""
    }
]

console.log(alumnos)


console.log('ejercicios arrays y objectos')
// 1

restaurantes = [
    
    {
        calidad: 'buena',
        precio: 15,
        ubicacion: 'centrica',
        atencion: 'alta'
    },

    
    {
        calidad: 'buena',
        precio: 30,
        ubicacion: 'alejado',
        atencion: 'alta'
    },

    ,
    {
        calidad: 'buena',
        precio: 20,
        ubicacion: 'cerca',
        atencion: 'alta'
    },
   
    {
        calidad: 'buena',
        precio: 25,
        ubicacion: 'centrica',
        atencion: 'alta'
    }


]


//2

precios = [ restaurantes[0].precio, restaurantes[1].precio, restaurantes[2].precio,restaurantes[3].precio,restaurantes[4].precio, ]


// 3

precioTotal = [ restaurantes[0].precio + restaurantes[1].precio + restaurantes[2].precio + restaurantes[3].precio + restaurantes[4].precio, ]
// 4
console.log(`En ${restaurantes[0]} hay buena comida, en ${restaurantes[1]} tiene buena ubicacion, en ${restaurantes[2]} hay buena calidad de comida, pero en ${restaurantes[3]} hay buen precio`)

//5

console.table(restaurantes)