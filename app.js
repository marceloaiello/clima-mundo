const colors = require('colors/safe');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            demand: true,
            desc: 'Ciudad Pais de donde se quiere obtener el clima'
        }
    })
    .help()
    .argv;

console.log(argv.direccion);

//lugar.getLugarLtLg(argv.direccion)
//    .then(console.log)
//    .catch(console.log);

//clima.getClima(-32.889999, -68.830002)
//    .then(console.log)
//    .catch(console.log);
//console.log(encodeUrl);

const getinfo = async(direccion) => {
    try {
        let cordenadas = await lugar.getLugarLtLg(direccion);
        let temperatura = await clima.getClima(cordenadas.lat, cordenadas.lon);
        let color = colors.blue;
        if (temperatura <= 18) {
            color = colors.blue
        } else if (temperatura > 18 && temperatura < 28) {
            color = colors.green
        } else {
            color = colors.red
        }

        return mensaje = color(`la temperatura de ${ cordenadas.direccion } es de ${ temperatura } Cº`);

    } catch (error) {
        return ` No se pudo obtener la temperatura de ${direccion} porque hay error ${error}`;
    }


}

getinfo(argv.direccion)
    .then(console.log)
    .catch(console.log);