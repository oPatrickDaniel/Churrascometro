// Carne - 400g por pessoa    + de 6 horas - 650
// cerveja    -    1200ml por pessoa   + de 6 horas    -   2000ml
// Refrigerante   -   1000ml por pessoa   + de 6 horas    -   1500ml

// crianças valem 0,5

let a = document.getElementById("adultos");
let c = document.getElementById("criancas");
let t = document.getElementById("tempo");

let resultado = document.getElementById("resultado");


function carne(adultos, crianças, tempo) {

    // let tPessoas = parseFloat(adultos) + parseFloat(crianças / 2);

    // console.log(adultos, crianças, tPessoas)

    if (tempo < 6) {

        let tCarne = (adultos * 400 + crianças * 200) / 1000;
        return tCarne;

    } else {

        let tCarne = (adultos * 650 + crianças * 325) / 1000;
        return tCarne;
    }

}

function cerveja(adultos, tempo) {

    if (tempo < 6) {

        let tCerveja = Math.ceil(adultos * 1200 / 350);
        return tCerveja;

    } else {

        let tCerveja = Math.ceil(adultos * 2000 / 350);
        return tCerveja;
    }
}

function Refrigerante(crianças, tempo) {

    if (tempo < 6) {

        // 500 = 1000ml / 2 (crianças)
        let tRefrigerante = Math.ceil(crianças * 500 / 350);
        return tRefrigerante;

    } else {

        // 750 = 1500ml/2 (crianças)
        let tRefrigerante = Math.ceil(crianças * 750 / 350);
        return tRefrigerante;
    }

}

function calcular() {

    resultado.innerHTML = "<p class='negrito'>Você precisa de:</p>" +
        "<p>" + "<a class='numeros'>" + carne(a.value, c.value, t.value) +
        "kg </a>" + "de carne</p>" +
        "<p>" + "<a class='numeros'>" + cerveja(a.value, t.value) + " </a>" + "latas de cerveja</p>" +
        "<p>" + "<a class='numeros'>" + Refrigerante(c.value, t.value) + " </a>" + "latas de refrigerante</p>"
}

