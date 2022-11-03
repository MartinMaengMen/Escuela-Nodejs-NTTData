//Funcion a convertir en funcion flecha
function caluloSumaCuadrado(x, y) {
    var resultado = (x + y) ^ 2;
    return "El resultado es " + resultado;
}
console.log(caluloSumaCuadrado(2, 2));
//Conversión a función flecha
var funcionFlecha = function (x, y) { var resultado = (x + y) ^ 2; return "El resultado es " + resultado; };
console.log(funcionFlecha(2, 2));
