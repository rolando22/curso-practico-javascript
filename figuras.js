// Código del cuadrado

console.group("Cuadrados");
function perimetroCuadrado (lado) {
    return lado * 4;
}
function areaCuadrado (lado) {
    return lado * lado;
}
console.groupEnd();

// Código del triángulo

console.group("Triángulos");
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo (lado1, base) {
    var altura = Math.sqrt((base / 2) ^ 2 + lado1 ^ 2);
    return base * altura / 2; 
}
console.groupEnd();

// Código del círculo

console.group("Círculos");
function diametroCirculo (radio) {
    return radio * 2;
}
function perimetroCirculo (radio) {
    return diametroCirculo(radio) * Math.PI;
}
function areaCirculo (radio) {
    return radio * radio * Math.PI;
}
console.groupEnd();