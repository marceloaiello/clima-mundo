const axios = require('axios');

const getLugarLtLg = async(direccionEntrada) => {
    let encodeUrl = encodeURI(direccionEntrada);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: { 'x-rapidapi-key': '36c7f6006bmshb6e2255f2370f27p1596e0jsn62aaac33caa4' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay datos para la direccion ${ direccionEntrada }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;


    return {
        direccion,
        lat,
        lon
    }

}


module.exports = {
    getLugarLtLg
}