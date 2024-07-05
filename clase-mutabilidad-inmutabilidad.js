// Tipo de dato primitivo - Inmutable

let numero = 20
numero = numero + 10
console.log(numero)


let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

// Tipo de dato Complejo - Mutable

let usuario = { nombre: 'Jassiel', edad: 23 }
usuario.edad = 24
console.log(usuario)

let frutas = ['Manzana', 'Jicama']
frutas[1] = 'fresa'
console.log(frutas)


// Extra Extra

function CambiarNombre(objeto) {
    objeto.nombre = 'Nuevo nombre'
}

let persona = { nombre: 'Angel' }
CambiarNombre(persona)

console.log(persona)