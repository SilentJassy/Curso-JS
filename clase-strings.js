// Creacion de string

const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas dobles"
const terceraOpcion = `Comillas al reves`

// Concatenacion: Opcion +

const direccion = 'Ejercito Nacional 91'
const ciudad = 'Los Mochis'
const direccionCompleta = 'Mi direccion es ' + direccion + ' ' + ciudad

console.log(direccionCompleta)

// Concatenacion: Template Literals
const pais = 'Alemania'
const equipo = 'Leipzig'
const objetivo = `Hola, quisiera ver un partido del ${equipo}, en ${pais}`

console.log(objetivo)

// Concatenacion: joim()

const primeraParte = 'Me gustan'
const segundaParte = 'mucho los'
const terceraParte = 'Tacos'
const gustos = [primeraParte, segundaParte, terceraParte]
console.log(gustos.join(' '))


// Concatenacion: concat()
const hobbie1 = 'Futbol'
const hobbie2 = 'Videojuegos'
const hobbie3 = 'Estudiar'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ', ', hobbie3, '.')
console.log(hobbies)