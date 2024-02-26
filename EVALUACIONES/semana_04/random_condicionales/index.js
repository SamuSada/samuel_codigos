"use strict";
let numeroDado = Math.round(Math.random() * (6 - 1) + 1);

if (numeroDado > 1) {
    console.log(`Avanza ${numeroDado} casillas`);
} else {
    console.log(`Avanza ${numeroDado} casilla`);
}