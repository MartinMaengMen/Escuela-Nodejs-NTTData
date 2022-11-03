function funcionPersona(Nombre, Edad, Peruano, Apellido) {
    if (Peruano === void 0) { Peruano = true; }
    return "Nombre y apellido: " + Nombre + (Apellido == undefined ? " " : " " + Apellido) + " Edad: " + Edad + " Es peruano: " + Peruano;
}
function funcionPersonaJSON(Nombre, Edad, Peruano, Apellido) {
    if (Peruano === void 0) { Peruano = true; }
    return "Nombre y apellido: " + Nombre + (Apellido == undefined ? " " : " " + Apellido) + " Edad: " + Edad + " Es peruano: " + Peruano;
}
//No se le asigna valor al apellido ni a la nacionalidad
var respuesta1 = funcionPersona("Pedro", 20);
console.log(respuesta1);
//Se le asigna valor al apellido y a la nacionalidad
var respuesta2 = funcionPersona("Pedro", 20, false, "Guevara");
console.log(respuesta2);
