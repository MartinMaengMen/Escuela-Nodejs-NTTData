//String y number
var variableNumber = 1
var variableString = `Variable string número: ${variableNumber}`
console.log(variableString)
//Función flecha
const funcionFlecha = (text,num)=>{return `${text}${num}`}
console.log(funcionFlecha("Variable string número: ",1))
//string y usar boolean para cambiar texto
const funcionFlechaBoolean = (text,num,flg)=>{return flg==true?`${text} ${num}`:`Cambio de texto ${num}`}
console.log(funcionFlechaBoolean("Texto inicial",1,true))
console.log(funcionFlechaBoolean("Texto inicial",1,false))