
import { getLogsTopFive } from "../utils/dataLoader";

var elementos=[];
var repetidos=[];

export async function  loadLogsTopFive(componentId, dates){
    //Obtencion de datos de la API
    const resultado = await getLogsTopFive(componentId,dates);
//Almacenamos en un Array los elementos guardados
    elementos=resultado.data.data;
  /// console.log("imprimiendo datos",elementos.applicationName)
//---------------------------------------------------------------------///
repetidos=objetosDuplicados(elementos);
console.log("Estes el array de repetiods",repetidos)

//----------------------------------------------------------------------///
const newArr = []
//const myObj = {}
const arrName = []
const myObj = {}
//Obtenemos los nombres de la aplicacion
repetidos.forEach(el => {
 newArr.push(el.applicationName);
 newArr.forEach(el => {
    // comprobamos si el valor existe en el objeto
    if (!(el in myObj)) {
      // si no existe creamos ese valor y lo añadimos al array final, y si sí existe no lo añadimos
      myObj[el] = true
      arrName.push(el)
    }
  })

 

})

//_______________________________________________

const num=[]
let totUse;
for(let i = 0;i<arrName.length;i++){
 totUse=0;
    
        
        for(let x=0; x<repetidos.length;x++){
          
            
            if(arrName[i]==repetidos[x].applicationName){
            //    console.log("Probando if",repetidos[x].applicationName)
                totUse=totUse+repetidos[x].duration;
           //    console.log(repetidos[x].duration);

            }
        }
        console.log("total de uso de "+arrName[i]+" uso"+totUse)
        num.push(totUse);
  
}
//----------------------------------------------
//---------------------------------------//


const arrTools=[];

for(let i=0; i < arrName.length;i++){
    var objecto ={};
    objecto.nameTools=arrName[i]
    objecto.duration=num[i]
  console.log("Creando object",objecto)
    arrTools.push(objecto);
}
//------------------------------------//
console.log(newArr)
console.log("Este11111",arrName)
console.log("Total de tiempo",num)
console.log("Herramientas en array",arrTools)

    return repetidos;
}

/*function secondsToString(seconds) {
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    var second = seconds % 60;
    second = (second < 10)? '0' + second : second;
    return hour + ':' + minute + ':' + second;
  }*/

  function objetosDuplicados(array){
  //Buscamos y filtramos los objetos que se repiten
  const busqueda = array.reduce((acc, array) => {
    acc[array.applicationName] = ++acc[array.applicationName] || 0;
    return acc;
  }, {});
  //Filtramos todos los objetos reptidos
  const duplicados = array.filter( (array) => {
      return busqueda[array.applicationName]; 
  }
  );

  return duplicados;
  }