var CONSTANTE = { usuario: "martin.ng", clave: "ABC", fecha: new Date(), estado: true };
var usuario = CONSTANTE.usuario;
var clave = CONSTANTE.clave;
var fecha = CONSTANTE.fecha;
var estado = CONSTANTE.estado;
console.log(usuario + " " + clave + " " + fecha + " " + estado);
var CONSTANTE_TYPE = { nombre: "Pescado", precio: 5 };
var nombre = CONSTANTE_TYPE.nombre, precio = CONSTANTE_TYPE.precio;
console.log("Nombre: " + nombre + ", Precio: " + precio);
//Funcion flecha desestructuracion de ultimos 2 elementos
var funcion = function () { return ["Jhon", "Luis", "Mateo", "Ana"]; };
var _a = funcion(), Mateo = _a[2], Ana = _a[3];
console.log("Ultimos dos elementos: " + Mateo + " " + Ana);
