const express = require('express');
const h_routes = require('./routes/h_routes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

// Routes
app.use('/h', h_routes);

// Server
app.listen(port, () => {
    console.log(`- Server are listening on port: ${port}`);
});