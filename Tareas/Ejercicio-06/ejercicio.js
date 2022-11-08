//String y number
var variableNumber = 1;
var variableString = "Variable string n\u00FAmero: ".concat(variableNumber);
console.log(variableString);
//Función flecha
var funcionFlecha = function (text, num) { return "".concat(text).concat(num); };
console.log(funcionFlecha("Variable string número: ", 1));
//string y usar boolean para cambiar texto
var funcionFlechaBoolean = function (text, num, flg) { return flg == true ? "".concat(text, " ").concat(num) : "Cambio de texto ".concat(num); };
console.log(funcionFlechaBoolean("Texto inicial", 1, true));
console.log(funcionFlechaBoolean("Texto inicial", 1, false));
