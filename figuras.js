// Código del cuadrado

console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);
console.log(`El perímetro del cuadrado es: ${ladoCuadrado*4}cm`);
console.log(`El área del cuadrado es: ${ladoCuadrado*ladoCuadrado}cm^2`);
console.groupEnd();

// Código del triángulo

console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = Math.sqrt((baseTriangulo/2)^2+ladoTriangulo1^2);
console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);
console.log(`La altura del triángulo es: ${alturaTriangulo}cm`);
console.log(`El perímetro del triángulo es: ${ladoTriangulo1+ladoTriangulo2+baseTriangulo}cm`);
console.log(`El área del triángulo es: ${baseTriangulo*alturaTriangulo/2}cm^2`)
console.groupEnd();

// Código del círculo

console.group("Círculos");
const radioCirculo = 4;
const diametroCirulo = radioCirculo*2;
console.log(`El radio del círculo es: ${radioCirculo}cm`);
console.log(`El diámetro del círculo es: ${diametroCirulo}cm`);
console.log(`El perímetro del círculo es: ${diametroCirulo*Math.PI}cm`);
console.log(`El área del círculo es: ${radioCirculo*radioCirculo*Math.PI}cm^2`);
console.groupEnd();