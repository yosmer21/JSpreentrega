

alert("Bienvenido a Exchange");
// // funcion para elegir moneda

// funcion para saber que tipo de cliente soy
function rangoCambio(){
    rango = parseFloat( prompt("indique que cantidad suele cambiar con frecuencia para definir el tipo de cliente"));
    while (rango <= 300){
        alert("Ud es un cliente basico")
        break
    }
    while (rango > 300 && rango <= 499){
        alert ("Ud es un cliente Frecuente")
        break
    }
    while (rango >= 500){
        alert("Ud es un cliente Premiun")
        break
    }
}
function despedir(){

    alert("Gracias por usar Exchange");
}


let rango = 0;
let moneda = 0;
let pesodolar = 40;
let pesoeuro = 43;
let pesoreal = 8;

// arreglo con las monedas actuales // apartir de aqui agregue al preentrega anterior
let tiposMonedas = [
    {pais:"Usa", moneda:"dolar",idioma:"Ingles"},
    {pais:"Union Europea", moneda:"euro",idioma:"Variado"},
    {pais:"Gran Bretana", moneda:"libra",idioma:"Ingles"},
    {pais:"Brasil", moneda:"real",idioma:"Portugues"},
    {pais:"Japon", moneda:"yen",idioma:"Japones"},
]
   
class monedasnueva {
    constructor(pais, moneda, idioma){
        this.pais = pais;
        this.moneda = moneda;
        this.idioma = idioma;
    }
}

//funcion para crear moneda y valida solo si la moneda ya existe y regresa al menu
function crearMoneda (){
    let moneda = prompt ("Ingrese la moneda que desea agregar");
        for (let i = 0; i < tiposMonedas.length; i++){
            if (moneda === tiposMonedas[i].moneda){
                alert("Moneda ya existe")
                break
            }
           
    let pais = prompt("Ingrese el pais principal de la moneda");
    let idioma = prompt("Ingrese el idioma principal del pais");
    const agregarMoneda = new monedasnueva(pais,moneda,idioma) // guardo el objeto en una constante para luego con ella agregar en el arreglo
    tiposMonedas.push(agregarMoneda)
    alert("Su moneda ha sido agregada")
    break
    
}
}

function cambiarMoneda(){
    let moneda =prompt("ingrese que moneda desea cambiar");
   tiposMonedas.moneda.forEach((moneda) => moneda.moneda)
  
    if (moneda === moneda.moneda){
        alert("Ud eligio Dolar")
        cambiomoneda = prompt("Introduzca la cantidad a Cambiar");
        cambio = cambiomoneda * pesodolar;
        alert("Su cantidad en pesos es: " + cambio )
    } else if (moneda === "2"){
        alert("Ud eligio Euro")
        cambiomoneda = prompt("Introduzca la cantidad a Cambiar");
        cambio = cambiomoneda * pesoeuro;
        alert("Su cantidad en pesos es: " + cambio )
    } else if (moneda === "3"){
        alert("Ud eligio Reales")
        cambiomoneda = prompt("Introduzca la cantidad a Cambiar");
        cambio = cambiomoneda * pesoreal;
        alert("Su cantidad en pesos es: " + cambio )
    } else{
        alert("Moneda no encontrada")
    }
}

console.log(tiposMonedas) // este console log es para ver a nivel de programador si esta funcionando

// funcion para mostrar las monedas que existe actualmente
function mostrarMoneda (){
     tiposMonedas.forEach((pais)=>{
        alert(`Estas son las monedas que actualmente tenemos: ${pais.moneda} Con su respectivo pais : ${pais.pais} y su Idioma oficial: ${pais.idioma}`)
    })
    
    

}

//menu de opciones en el exchange jjjjj

 let opciones = prompt("Ingrese la opcion de lo que desea hacer: \n 1: Cambiar moneda \n 2: Mostrar Moneda \n 3:Agregar Moneda \n 4: Saber que tipo de cliente soy \n 5: Salir" )

 while (opciones !=="5"){
    if (opciones ==="1"){
        cambiarMoneda();
    }
    if (opciones ==="2"){
        mostrarMoneda();
    }
    if (opciones ==="3"){
        crearMoneda();
    }
    if (opciones ==="4"){
        rangoCambio();
    }
    opciones = prompt("Ingrese la opcion de lo que desea hacer: \n 1: Cambiar moneda \n 2: Mostrar Moneda \n 3:Agregar Moneda \n 4: Saber que tipo de cliente soy \n 5: Salir")
    if (opciones ==="5")
        
        break
 }
 despedir()


   
 



