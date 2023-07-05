const express = require('express');
require('dotenv').config();
const h_routes = require('./routes/h_routes');
const a_routes = require('./routes/a_routes');
const error_handling = require('./middlewares/error_handling');

// Instance
const app = express();
const port = process.env.PORT || 5001;

// Routes
app.use('/h', h_routes);
app.use('/a', a_routes);

// Error Handling
app.use(error_handling.route_not_found);

// Server
app.listen(port, () => {
    console.log(`- Server are listening on port: ${port}`);
});