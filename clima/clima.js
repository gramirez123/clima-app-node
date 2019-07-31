const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7bb4b2037c895d83dbc6bed91708ff9c&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}