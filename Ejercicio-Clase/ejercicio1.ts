/*TRABAJO EN CLASE
- HU: Yo como usuario deseo emitir eventos en cargas de datos con BRASIL
    CA: 
        * Se debe emitir un evento cuando se tenga una respuesta de las api. ej. ('Se cargo la data: <NombrePais>')
        * Se debe emitir eventos de falla cuando no se encuentre el vecino del pais (ocasionar el error en el 2do vecino)
        * */
       import {EventEmitter} from "events";

       const searchByCodeCountry = async (alpha3Code) => {
        try {
          const res = await fetch(
            `https://restcountries.com/v3.1/alpha/${alpha3Code}`
          );
          const data = await res.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      };

const eventoRespuestaApi = (eventEmitter,nombrePais) => {
  eventEmitter.on('respuestaApi',(pais:string)=>console.log(`Se cargo la data: ${pais}`))
  eventEmitter.emit('respuestaApi',nombrePais)
}
const eventoError = (eventEmitter,paisesVecinos/*,paisBuscar*/)=>{
  eventEmitter.on('error',(err)=>{
    const contador = err.length
    //Buscador de vecinos
    /*const encontrado = err.filter(x => x==paisBuscar).length
    console.log(encontrado)*/
    if(contador<2){
      console.log(new Error('No se encontraron vecinos'))
    }
    else{
      console.log(`Vecinos: `+err)
    }
  })
  eventEmitter.emit('error',paisesVecinos)
}
      searchByCodeCountry('br').then(value=>{
        const resultado = value[0];
        const {name,borders} = resultado;
        const eventEmitter = new EventEmitter();
        eventoRespuestaApi(eventEmitter,name.common)
        eventoError(eventEmitter,borders/*,'CHL'*/)
      });

