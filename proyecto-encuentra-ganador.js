function ganadorTorneo(competicion, resultados) {
    const puntaje = {}

    let ganador = ""

    for (let i = 0; i < competicion.length; i++) {
        const [home, away] = competicion[i];
        const equipoGanador = resultados[i] === 0 ? away : home;
        puntaje[equipoGanador] = (puntaje[equipoGanador] || 0) + 3;

        if (!ganador || puntaje[equipoGanador] > puntaje[ganador]) {
            ganador = equipoGanador;
        }
    }

    return ganador
}

const competicion = [
    ['España', 'Alemania'],
    ['Holanda', 'Holanda'],
    ['Alemania', 'España'],
]

const resultados = [1, 1, 0]

console.log(ganadorTorneo(competicion, resultados))
