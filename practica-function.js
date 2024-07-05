function SacandoDescuento(Precio, PorcentajeDescuento) {
    const Descuento = (Precio * PorcentajeDescuento) / 100;
    const PrecioConDescuento = (Precio - Descuento);

    return PrecioConDescuento
}

const PrecioInicial = 100;
const PorcentajeDescuento = 10;

const PrecioFinal = SacandoDescuento(PrecioInicial, PorcentajeDescuento);

console.log('El precio incial es: ' + PrecioInicial);
console.log('Porcentaje de descuento es de: ' + PorcentajeDescuento + '%');
console.log('El precio final seria de: ' + PrecioFinal);
