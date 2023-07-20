const axios = require('axios');
require('dotenv').config();

let key = process.env.WEATHER_API_KEY;

exports.currentWeather = (req, res) => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${req.params.city}`)
        .then((value) => {
            const resObj = JSON.stringify(value.data);
            res.send(resObj);
        })
        .catch((error) => {
            res.status(error.response.status).send(error.response.statusText);
        });
};

exports.forecastWeather = (req, res) => {
    const lat = req.params.lat;
    const long = req.params.long;
    const days = req.params.days;

    axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${lat},${long}&days=${days}`)
        .then((value) => {
            const resObj = JSON.stringify(value.data);
            res.send(resObj);
        })
        .catch((error) => {
            res.status(error.response.status).send(error.response.statusText);
        });
};