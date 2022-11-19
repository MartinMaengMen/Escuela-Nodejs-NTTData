//Declaración de interfaz con sus propiedades
interface casa{
    area : number,
    ambientes: number,
    colorParedes: string
}
//Creación de variable con el tipo de interfaz casa y asignación de valores a la variable de tipo casa
var variableCasa : casa = {area: 10,ambientes: 50,colorParedes: "Verde"}
//Imprimir valores asignados a la variable
console.log(variableCasa)