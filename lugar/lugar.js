const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encoudedUlr = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoudedUlr}`,
        headers: { 'x-rapidapi-key': 'ecc0086b8dmsh1b5db15d0b5cc1fp16b55ejsn108ed791c881' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}