// Código del cuadrado

console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

// Código del triángulo

console.group("Triángulos");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(lado1, base) {
    var altura = Math.sqrt((base / 2) ^ 2 + lado1 ^ 2);
    return base * altura / 2; 
}
console.groupEnd();

// Código del círculo

console.group("Círculos");
function diametroCirculo(radio) {
    return radio * 2;
}
function perimetroCirculo(radio) {
    return diametroCirculo(radio) * Math.PI;
}
function areaCirculo(radio) {
    return radio * radio * Math.PI;
}
console.groupEnd();

// Código de interacción con el HTML

// Código del círculo

function calcularPerimetroCuadrado() {
    alert(`El perímetro del cuadrado es: ${perimetroCuadrado(parseInt(document.getElementById("input-cuadrado").value))}cm`);
}
function calcularAreaCuadrado() {
    alert(`El área del cuadrado es: ${areaCuadrado(parseInt(document.getElementById("input-cuadrado").value))}cm^2`);
}

// Código del triángulo

function calcularPerimetroTriangulo() {
    alert(`El perímetro del triángulo es: ${perimetroTriangulo(
        parseInt(document.getElementById("input-triangulo-lado").value),
        parseInt(document.getElementById("input-triangulo-lado").value),
        parseInt(document.getElementById("input-triangulo-base").value)
    )}cm`);
}
function calcularAreaTriangulo() {
    alert(`El área del triángulo es: ${areaTriangulo(
        parseInt(document.getElementById("input-triangulo-lado").value),
        parseInt(document.getElementById("input-triangulo-base").value)
    )}cm^2`);
}

// Código del círculo

function calcularPerimetroCirculo() {
    alert(`El perímetro del círculo es: ${perimetroCirculo(parseInt(document.getElementById("input-circulo").value))}cm`);
}
function calcularAreaCirculo() {
    alert(`El área del círculo es: ${areaCirculo(parseInt(document.getElementById("input-circulo").value))}cm^2`);
}