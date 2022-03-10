function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function(valorAcumulado = 0, elemento) {
        return valorAcumulado + elemento;
    });
    const media = sumaLista / lista.length;
    return media;
}
function esPar(numero) {
    return (numero % 2) === 0;
}
function calcularMediana(list) {
    const mediaLista = parseInt(list.length / 2);
    let mediana;
    list.sort(function(a, b) {return a - b;});
    if (esPar(list.length)) {
        mediana = calcularMediaAritmetica([list[mediaLista - 1], list[mediaLista]]);
    } else {
        mediana = list[mediaLista];
    }
    return mediana;
}