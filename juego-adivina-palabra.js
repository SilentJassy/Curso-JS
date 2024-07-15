


let EquipoSecreto = 'RB Leipzig';
let primeraLetraEquipo = EquipoSecreto.charAt(0);

let intentos = 3;

function verificarSuposicion(suposicion, EquipoSecreto) {
    if (suposicion === EquipoSecreto) {
        return true;
    }
    return false;
}

function juegoAdivinaElEquipo() {
    console.log('Tienes 3 intentos para adivinar el equipo.');
    console.log(`-Pista- La primera letra del equipo es: ${primeraLetraEquipo}`);

    while (intentos > 0) {
        const prompt = require("prompt-sync")({ sigint: true });
        let suposicion = prompt('Adivina el Equipo: ');

        if (verificarSuposicion(suposicion, EquipoSecreto)) {
            console.log('Es correcto!! Haz adivinado al equipo');
            break;
        }
        else {
            intentos--;
            if (intentos > 0)
                console.log(`Incorrecto, te quedan ${intentos} intentos restantes.`);
            else {
                console.log(`Has agotado tus intentos, el equipo era ${EquipoSecreto}`);
            }
        }
    }
}
juegoAdivinaElEquipo();


