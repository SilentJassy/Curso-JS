// Create FIFA objects

function FifaPlayer(nombre, numero, nacionalidad, equipo) {
    this.nombre = nombre
    this.numero = numero
    this.nacionalidad = nacionalidad
    this.equipo = equipo
    this.displayInfo = function () {
        console.log(`Player Info:
            Name: ${this.nombre}
            Numero: ${this.numero}
            Nacionalidad: ${this.nacionalidad}
            Equipo: ${this.equipo}
            `)
    }
}

const Messi = new FifaPlayer('Messi', '10', 'Argentina', 'Inter Miami')
const Cristiano = new FifaPlayer('Cristiano', '7', 'Portugal', 'Al-Nassr')
const Simons = new FifaPlayer('Xavi Simons', '20', 'Holanda', 'RB Leipzig')
const Baumgartner = new FifaPlayer('Baumgartner', '14', 'Austria', 'RB Leipzig')
const Nkunku = new FifaPlayer('Nkunku', '18', 'Francia', 'Chelsea')


Messi.displayInfo()
Cristiano.displayInfo()
Simons.displayInfo()
Baumgartner.displayInfo()
Nkunku.displayInfo()
