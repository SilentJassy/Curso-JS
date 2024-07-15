// Analisis de transaccion


const transacciones = [
    { id: 1, descripcion: 'Tacos Fogata', amount: -300 },
    { id: 2, descripcion: 'Sushi Avika', amount: -500 },
    { id: 3, descripcion: 'Nomina', amount: 4500 },
    { id: 4, descripcion: 'Platzi', amount: -250 },
    { id: 5, descripcion: 'Pago', amount: 2000 },
]


// 1. Calculo del total de balance

const totalBalance = transacciones.reduce((acc, transaccion) => acc + transaccion.amount, 0)
console.log('Total del balance: ', totalBalance)

// 2. Encuentra la transaccion mas grande (ingreso o egreso)

const mayorTransaccion = transacciones.reduce((maxTransaccion, transaccion) => {
    return Math.abs(transaccion.amount) > Math.abs(maxTransaccion.amount) ? transaccion : maxTransaccion
}, transacciones[0])

console.log('La maxima transaccion: ', mayorTransaccion)



// 3. Filtro por transaccion de gasto

const gastoTransaccion = transacciones.filter(transaccion => transaccion.amount < 0)
console.log(gastoTransaccion)


// 4. Encuentra transaccion por descripcion

const specificTransaccion = transacciones.find(transaccion => transaccion.descripcion === 'Platzi')
console.log('Transaccion especifica de Platzi', specificTransaccion)


// 5. Encuentra el index de la cantidad de la transaccion

const indexTransaccionConCantidad = transacciones.findIndex(transaccion => transaccion.amount === -300)
console.log('Deudas de 300: ', indexTransaccionConCantidad)


// 6 Actualiza descripcion de transacciones

transacciones.forEach(transaccion => {
    if (transaccion.amount < 0) {
        transaccion.descripcion = `Deuda: ${transaccion.descripcion}`
    } else {
        transaccion.descripcion = `Recibo: ${transaccion.descripcion}`
    }
})

console.log('Transacciones actualizadas', transacciones)