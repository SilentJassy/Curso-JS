// 1. Pasar funciones como argumentos -> Callback
/*
function a() { }
function b(a) { }
b(a)




// Retornar funciones 

function a() {
    function b() { }
    return b
}


// Asignar funcione a variables -> Expresion de funciones 

const a = function () { }


// Tener propiedades y metodos

function a() { }
const obj = {}
a.call(obj)


// Anidar funciones -> Nested Functions

function a() {
    function b() {
        function c() {

        }
        c()
    }
    b()
}
a()

*/
// Es posible almacenar funciones en objetos?

const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage() {
        console.log('FIUUUUUUM')
    }
}

rocket.launchMessage()