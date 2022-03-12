// Helpers

function esPar(number) {
    return number % 2 === 0;
}
function mediaAritmetica(list) {
    const sumaList = list.reduce(function(valorAcumulado = 0, elemento) {
        return valorAcumulado + elemento;
    });
    const media = sumaList / list.length;
    return media;
}

// Calculadora de mediana

function medianaSalarios(list) {
    const half = parseInt(list.length / 2);
    let mediana;
    if (esPar(list.length)) {
        mediana = mediaAritmetica([list[half - 1], list[half]]);
    } else {
        mediana = list[half];
    }
    return mediana;
}

// Mediana general

const salariesCol = colombia.map(function(persona) {
    return persona.salary;
});
const salariesColSorted = salariesCol.sort(function(salary1, salary2) {
    return salary1 - salary2;
});
const medianaSalariesColGeneral = medianaSalarios(salariesColSorted);

// Mediana del Top 10%

const spliceStart = salariesColSorted.length * 0.9;
const spliceCount = salariesColSorted.length - spliceStart;
const medianaSalariesColTop10 = medianaSalarios(salariesColSorted.splice(spliceStart, spliceCount));

console.log({
    medianaSalariesColGeneral, 
    medianaSalariesColTop10
});