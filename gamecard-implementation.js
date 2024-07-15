const symbols = ["♠︎", "♣︎", "♥︎", "♦︎"];
const cards = [
    "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",
];
const deck = cards.flatMap((card) => {
    return [
        symbols[0] + card,
        symbols[1] + card,
        symbols[2] + card,
        symbols[3] + card,
    ];
});

// Función para barajar el mazo (Fisher-Yates shuffle)
function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // Mientras haya elementos que mezclar
    while (currentIndex !== 0) {
        // Escoge un elemento restante aleatoriamente
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Intercambia el elemento actual con el aleatorio
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Barajar el mazo
shuffle(deck);

// Tomar una mano de 5 cartas del mazo barajado
const hand = deck.slice(0, 5);

// Mostrar la mano en la consola
console.log("Mano de cartas:", hand);
