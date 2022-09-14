// Carne - 400g por pessoa    + de 6 horas - 650
// cerveja    -    1200ml por pessoa   + de 6 horas    -   2000ml
// Refrigerante   -   1000ml por pessoa   + de 6 horas    -   1500ml

// crianças valem 0,5

let a = document.getElementById("adultos");
let c = document.getElementById("criancas");
let t = document.getElementById("tempo");

let aValor = a.value;
let cValor = c.value;
let tValor = t.value;

let resultado = document.getElementById("resultado");


function carne(adultos, crianças, tempo) {


    let tPessoas = parseInt(adultos) + (parseFloat(crianças) / 2);
    console.log(parseInt(adultos))

    if (tempo < 6) {

        let tCarne = tPessoas * 400 / 1000;
        return tCarne;

    } else {

        let tCarne = tPessoas * 650 / 1000;
        return tCarne;
    }

}

function cerveja(adultos, tempo) {

    if (tempo < 6) {

        let tCerveja = Math.ceil(adultos * 1200);
        return tCerveja;

    } else {

        let tCerveja = Math.ceil(adultos * 2000);
        return tCerveja + (2000 * adultos);
    }
}

function Refrigerante(crianças, tempo) {

    // 500 = 1000ml / 2 (crianças)



    if (tempo < 6) {

        let tRefrigerante = Math.ceil(crianças * 500);
        return tRefrigerante;

    } else {

        // 750 = 1500ml/2 (crianças)
        let tRefrigerante = Math.ceil(crianças * 750);
        return tRefrigerante;
    }

}

function calcular() {

    let aValor = a.value;
    let cValor = c.value;
    let tValor = t.value;

    resultado.innerHTML = "<p class='negrito'>Você precisa de:</p>" +
        "<p>" + "<a class='numeros'>" + carne(aValor, cValor, tValor) +
        "kg </a>" + "de carne</p>" +
        "<p>" + "<a class='numeros'>" + cerveja(aValor, tValor) + " </a>" + "latas de cerveja</p>" +
        "<p>" + "<a class='numeros'>" + Refrigerante(cValor, tValor) + " </a>" + "latas de refrigerante</p>";
}

