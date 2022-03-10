function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(function(valorAcumulado = 0, elemento) {
        return valorAcumulado + elemento;
    });
    const media = sumaLista / lista.length;
    return media;
}