const express = require('express');
require('dotenv').config();
const h_routes = require('./routes/h_routes');
const a_routes = require('./routes/a_routes');
const error_handling = require('./middlewares/error_handling');

// Instance
const app = express();
const port = process.env.PORT || 5001;

// Routes
app.use('/', (req, res) => {
    res.json({
        endpoints: [
            {
                path: "https://informasi-cuaca.vercel.app/a/current-weather/jakarta",
                description: "Mendapatkan informasi cuaca terkini berdasarkan nama kota"
            },
            {
                path: "https://informasi-cuaca.vercel.app/a/forecast-weather/-6.240168999214124/106.79907426901781/5",
                description: "Mendapatkan informasi lamaran cuaca berdasarkan latitude dan longtitude dan lamaran untuk berapa hari kedepan"
            },
        ],
        maintainer: "Nahdian (nahdian.dev@gmail.com)",
        source: "https://github.com/nahdian-dev/api-integration.git"
    });
});
app.use('/h', h_routes);
app.use('/a', a_routes);

// Error Handling
app.use(error_handling.route_not_found);

// Server
app.listen(port, () => {
    console.log(`- Server are listening on port: ${port}`);
});