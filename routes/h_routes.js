const router = require('express').Router();
const https = require('https');

router.get('/', (req, res) => {
    https.get('https://reqres.in/api/users?page=1', (response) => {
        let responseData = '';

        response.setEncoding('utf-8');

        response.on('data', (chunk) => {
            responseData += chunk;
        });

        response.on('end', () => {
            response.statusCode = 200;
            const responseObj = JSON.parse(responseData);
            res.send(responseObj.data[0]);
        });
    });
});

module.exports = router;