function ejemploLet(param) {
    //Declaración de let
    var variableLet = param;
    /*Al let se le puede reasignar su valor. El resultado sería: ABC
    variableLet = "ABC"*/
    if (true) {
        //El valor no va a cambiar, ya que el let fue declarado fuera del bloque actual
        var variableLet_1 = "Cambio de valor";
    }
    /*El let no se puede redeclarar. Esto da error
    let variableLet = "ACV"*/
    return variableLet;
}
function ejemploConst(param) {
    //Delaración de const
    var CONSTANTE = param;
    /*No se le puede reasignar el valor a una constante. Esto da error
    CONSTANTE = "ABC"
    */
    /*No se puede redeclarar una constante. Esto da error
    const CONSTANTE = "ABC"
    */
    if (true) {
        /*Se puede crear una nueva constante con el mismo nombre,
        ya que tanto el let como const solo funcionan dentro del bloque en el que se crearon
        */
        var CONSTANTE_1 = "ABC";
    }
    return CONSTANTE;
}
//Ejemplo Let
console.log("Ejemplo let: " + ejemploLet("Valor inicial"));
//Ejemplo Const
console.log("Ejemplo const: " + ejemploConst("Valor inicial"));
