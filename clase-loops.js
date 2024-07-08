/* 
//          ForEach

array.forEach((item) => {
    codigo a ejecutar
})

*/

let list = ['Eat', 'Sleep', 'Code', 'Repeat'];

list.forEach((item) => {
    console.log(item);
})



/* 
//      For Of

for of arrays, strings [algo]

for (variable of objeto) {
    codigo
}

*/

let semifinalistas = ['España', 'Francia', 'Holanda', 'Inglaterra'];

for (equipo of semifinalistas) {
    console.log(equipo);
}



/*
//      For In

for in ---> objetos

propiedades = valor

array, string

item

for(variable in objeto) {
    codigo
}

*/

const listaCampeonesDelMundo = {
    Brasil: 5,
    Italia: 4,
    Alemania: 4,
    Argentina: 3,
    Francia: 2,
    Uruguay: 2,
}

for (Nacion in listaCampeonesDelMundo) {
    console.log(`${Nacion}: ${listaCampeonesDelMundo[Nacion]}`)
}

/*
for (Nacion of listaCampeonesDelMundo) {
    console.log(Nacion);
}                           --> Error, For In se utiliza para iterar sobre objetos inumerables, no iterables (arrays, strings)

Para objetos iterables, For Of 


*/