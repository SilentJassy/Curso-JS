// Paso por valor 

let x = 1
let y = 'Hallo'
let z = null

let a = x
let b = y
let c = z

console.log(x, y, z, a, b, c)


// Paso por referencia

let CandidatosEuro = ['Alemania']
CandidatosEuro.push = ['Francia']
console.log(CandidatosEuro)

let DecepcionesEuro = ['Inglaterra']
let copiaDeDecepcionesEuro = DecepcionesEuro
DecepcionesEuro.push = ['Belgica']

console.log(CandidatosEuro, DecepcionesEuro)

