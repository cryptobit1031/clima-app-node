'use strict'

// instalamos npm install axios --save
const axios  = require('axios');

const getLugarLatLng = async(direccion) => {
    
    // almacenomos una direccion url válida en encodedUrl utilizando el metodo encodeURI.
    let encodedUrl = encodeURI(direccion);
    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}`);

    if(respuesta.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultado para la ciudad ${direccion}`); 
    }
         
    let location_ = respuesta.data.results[0];
    let coordenadas = location_.geometry.location;

    
    return {
         
        direccion: location_.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng


    }

}
    
module.exports = {
    getLugarLatLng
}