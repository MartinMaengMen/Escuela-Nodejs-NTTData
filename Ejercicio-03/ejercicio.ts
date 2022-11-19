//Funcion a convertir en funcion flecha
function caluloSumaCuadrado(x,y){
    const resultado = (x+y)^2
    return "El resultado es " + resultado
}
console.log(caluloSumaCuadrado(2,2))

//Conversión a función flecha
const funcionFlecha = (x,y)=>{const resultado = (x+y)^2; return "El resultado es " + resultado }
console.log(funcionFlecha(2,2))