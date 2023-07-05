const router = require('express').Router();
const a_controllers = require('../controllers/a_controllers');

router.get('/current-weather/:city', a_controllers.currentWeather);
router.get('/forecast-weather', a_controllers.forecastWeather);

module.exports = router;