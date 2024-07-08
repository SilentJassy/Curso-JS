/*
switch(expresion) {
    case valor1:
        // Codigo
        break;
    case valor2:
        // Codigo
        break;
    case valor3:
        // Codigo
        break;
    default:
        // Codigo
}

*/

let expresion = "Manzanas"

switch (expresion) {
    case "Naranjas":
        console.log('Las naranjas cuestan $10 el Kilo')
        break;
    case "Manzanas":
        console.log('Las manzanas cuestan $45 el Kilo')
        break;
    case "Toronjas":
        console.log('Las toronjas cuestan $30 el Kilo')
        break;
    default:
        console.log(`Lo sentimos, no contamos con ${expresion}`);
}

console.log('Algo mas que se le ofrece?');
