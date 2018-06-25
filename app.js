'use strict'

const argv = require('./config/yargs').argv
const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');


let getInfo = async(direccion) => {

    try {
            let coordenadas = await lugar.getLugarLatLng(direccion);
            let temp = await clima.getCLima(coordenadas.lat,coordenadas.lng);
        
            return `El clima en ${coordenadas.direccion} es de ${temp} grados`;

    } catch (error) {

            return `No se puede determinar el clima en ${direccion}`;

    }

    

}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err)); 

