'use strict'

// instalamos npm install axios --save
const axios  = require('axios');


const getCLima = async(lat,lng) =>{

    // almacenomos una direccion url válida en encodedUrl utilizando el metodo encodeURI.
    // let encodedUrl = encodeURI(direccion);

    
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c6e8f749a2fc8119fc844d7df84f52f0`);

    return resp.data.main.temp;  

}

module.exports = {
    getCLima
}