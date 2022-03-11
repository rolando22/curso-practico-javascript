function calcularModa(list) {
    const listCount = {} 
    list.map(function (elemento) {
        if (listCount[elemento]) {
            listCount[elemento] += 1;
        } else {
            listCount[elemento] = 1;
        }
    });
    listCountArray = Object.entries(listCount).sort(function(elemento1, elemento2) {
        return elemento1[1] -  elemento2[1];
    });
    return listCountArray[listCountArray.length - 1];
}