// Ejercicio para practicar lo aprendido 

// General info

const Name = 'Jassiel';
const UserName = 'SilentJassy';
const Age = '24';

// Address

const Address = {
    City: 'Los Mochis',
    State: 'Sinaloa'
};

// Hobbies

const Hobbies = ['Futbol', 'Videojuegos', 'Aprender cosas nuevas'];



// Generar presentacion 

const presentacion = `Hola, mi nombre es ${Name}, mejor conocido como el ${UserName} y tengo ${Age}. 
Actualmente me encuentro en ${Address.City}, ${Address.State}. 
Mis actividades favoritas son: 
${Hobbies.join("\n")}.
`

console.log(presentacion)