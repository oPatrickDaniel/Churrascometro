"use strict";
// Carne: 400g por pessoa até 6h. A partir de 6h 650g
// cerveja: 1200ml por pessoa até 6h. A partir de 6h 2000ml
// Refrigerante: 1000ml por pessoa até 6h. A partir de 6h 1500ml
// crianças valem 0,5
// inputs html
const adultsInput = document.querySelector("#adults");
const childrenInput = document.querySelector("#children");
const timeInput = document.querySelector("#time");
const resultInput = document.querySelector('#calcButton');
const resultArea = document.querySelector("#resultArea");
function calcAmountMeat(adults, children, time) {
    // calcula a quantidade de carne necessária
    if (time < 6) {
        return (adults * 0.4 + children * 0.2).toFixed(1);
    }
    else {
        return (adults * 0.65 + children * 0.325).toFixed(1);
    }
}
function calcAmountBeer(adults, time) {
    // calcula a quantidade de cerveja necessária (350 = lata 350ml)
    if (time < 6) {
        return Math.ceil(adults * 1200 / 350);
    }
    else {
        return Math.ceil(adults * 2000 / 350);
    }
}
function calcAmountSoda(crianças, tempo) {
    // calcula a quantidade de refrigerante necessária (350 = lata 350ml)
    if (tempo < 6) {
        return Math.ceil(crianças * 500 / 350);
    }
    else {
        return Math.ceil(crianças * 750 / 350);
    }
}
if (resultInput) {
    resultInput.addEventListener('click', returnResults);
}
else {
    console.log('Um input não foi encontrado');
}
function returnResults() {
    if (adultsInput && childrenInput && timeInput && resultArea) {
        let adultsValue = parseInt(adultsInput.value);
        let childrenValue = parseInt(childrenInput.value);
        let timeValue = parseFloat(timeInput.value);
        if (isNaN(adultsValue) || isNaN(childrenValue) || isNaN(timeValue)) {
            resultArea.innerHTML = `
            <p class="colorRed">Preencha todos os formulários acima</p>
            `;
        }
        else {
            resultArea.innerHTML = `
                <h2>Você precisa de:</h2>
                <p><span class='colorRed'> ${calcAmountMeat(adultsValue, childrenValue, timeValue)} kg </span>de carne</p>
                <p><span class='colorRed'>${calcAmountBeer(adultsValue, timeValue)}</span> latas de cerveja</p>
                 <p><span class='colorRed'>${calcAmountSoda(childrenValue, timeValue)}</span> latas de refrigerante</p>
            `;
        }
    }
    else {
        console.log('Não foi possível imprimir o resultado');
    }
}
