var nombreShow = document.getElementById('nombreShow');
var casillaGenero = document.getElementById('casillaGenero');
var casillaDuracion = document.getElementById('casillaDuracion');
var casillaEstreno = document.getElementById('casillaEstreno');
var botonBuscar = document.getElementById('botonSubmit');
var divCoincidenciaShow = document.getElementById('coincidenciaShow');
var divCoincidenciaGenero = document.getElementById('coincidenciaGenero');
var divCoincidenciaDuracion = document.getElementById('coincidenciaDuracion');
var divCoincidenciaEstreno = document.getElementById('coincidenciaEstreno');


botonBuscar.addEventListener('click', function(evento){
    evento.preventDefault()
    fetch('https://api.tvmaze.com/search/shows?q='+nombreShow.value)
    .then(res=>res.json())

    //buscamos las llaves del objeto JSON
    //.then(resJson=>console.log(resJson))
    //refinamos la busqueda a una llave en particular
   
    .then(resJson=>{
        console.log(resJson[0].show.name)
        divCoincidenciaShow.innerHTML = "Nombre: " + (resJson[0].show.name)  
        
        //muestra el genero de la serie
        if(casillaGenero.checked){
            console.log('casilla marcada')
            divCoincidenciaGenero.innerHTML = "Genero: " + (resJson[0].show.genres[0]) 
        } else {
            console.log('casilla no marcada')
            divCoincidenciaGenero.innerHTML = " "
        }
        //muestra la duracion de la serie
        if(casillaDuracion.checked){
            console.log('casilla marcada')
            divCoincidenciaDuracion.innerHTML = "Duracion Promedio: " + (resJson[0].show.averageRuntime) + " min" 
        } else {
            console.log('casilla no marcada')
            divCoincidenciaDuracion.innerHTML = " "
        }
        //muestra el anio de estreno de la serie
        if(casillaEstreno.checked){
            console.log('casilla marcada')
            divCoincidenciaEstreno.innerHTML = "Estreno: " + (resJson[0].show.premiered) 
        } else {
            console.log('casilla no marcada')
            divCoincidenciaEstreno.innerHTML = " "
        }
    })
   

})