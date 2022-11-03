interface objeto {
    usuario : string
    clave : string
    fecha : Date
}

interface objeto {
    estado : boolean
}

const CONSTANTE : objeto = {usuario: "martin.ng",clave:"ABC",fecha:new Date(), estado:true}

const {usuario} = CONSTANTE
const {clave} = CONSTANTE
const {fecha} = CONSTANTE
const {estado} = CONSTANTE
console.log(usuario+" "+clave+" "+fecha+" "+estado)
//Desestructuracion usando type
type objetoType = {
    nombre : string
    precio : number
}

const CONSTANTE_TYPE : objetoType = {nombre:"Pescado",precio:5}
const {nombre,precio} = CONSTANTE_TYPE
console.log("Nombre: "+nombre+", Precio: "+precio)
//Funcion flecha desestructuracion de ultimos 2 elementos
const funcion = ()=>{return ["Jhon","Luis","Mateo","Ana"]}
const [,,Mateo,Ana] = funcion()
console.log("Ultimos dos elementos: "+Mateo+" "+Ana)