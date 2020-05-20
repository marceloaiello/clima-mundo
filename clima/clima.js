const axios = require('axios');


const getClima = async(lat, lon) => {

    //const instance = axios.create({
    //    baseURL: `api.openweathermap.org/data/2.5/weather?lat= ${ lat } &lon=${ lon }&appid=903c7b6cc4bedcf4439f6c149c5c005a&units=metric`
    //});
    //console.log(`api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=903c7b6cc4bedcf4439f6c149c5c005a&units=metric`);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=903c7b6cc4bedcf4439f6c149c5c005a&units=metric`);
    //const resp = await instance.get();

    return resp.data.main.temp;

}


module.exports = {
    getClima
}