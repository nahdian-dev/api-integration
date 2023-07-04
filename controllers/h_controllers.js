const https = require('https');

// @desc Get all data di reqres.in
// @route GET - /h/get-all-data
// @access public
exports.getAllData = (req, res) => {
    https.get('https://reqres.in/api/users?page=1', (response) => {
        let responseData = '';

        response.setEncoding('utf-8');

        response.on('data', (chunk) => {
            responseData += chunk;
        });

        response.on('end', () => {
            response.statusCode = 200;
            const responseObj = JSON.parse(responseData);
            res.send(responseObj.data);
        });
    });
};

// @desc Get data by id
// @route GET - /h/get-user/:id
// @access public
exports.getUserById = (req, res) => {
    https.get('https://reqres.in/api/users/' + req.params.id, (response) => {

        const { statusCode } = response;
        let responseData = '';

        if (statusCode !== 200) {
            res.send('Failed to retrive data!');
        }

        response.setEncoding('utf-8');

        response.on('data', (chunk) => {
            responseData += chunk;
        });

        response.on('end', () => {
            const responseObj = JSON.parse(responseData);
            res.send(responseObj.data);
        });
    });
};

// @desc Post data
// @route POST - /h/post-data
// @access public
exports.postData = (req, res) => {
    const postData = JSON.stringify({
        name: 'Kevin',
        job: 'Developer',
    });

    const options = {
        hostname: 'reqres.in',
        path: '/api/users',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData),
        },
    };

    const request = https.request(options, (response) => {
        let responseData = '';

        response.setEncoding('utf-8');

        response.on('error', (e) => {
            console.log(e);
        });

        response.on('data', (c) => {
            responseData += c;
        });

        response.on('end', () => {
            const responseStr = JSON.parse(responseData);
            res.send(responseStr);
        });
    });

    request.write(postData);
    request.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    request.end();

};

// @desc Put data
// @route PUT - /h/put-data/:id
// @access public
exports.putData = (req, res) => {
    const data = JSON.stringify({
        name: "Noul",
        job: "Akuntan"
    });

    const options = {
        hostname: 'reqres.in',
        path: '/api/users/' + req.params.id,
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data),
        }
    };

    const request = https.request(options, (response) => {
        response.on('data', (chunk) => {
            res.send(chunk);
        });
        response.on('error', (e) => {
            res.send(e);
        });
    });

    request.write(data);
    request.on('error', (e) => console.error(e));
    request.end();
};

// @desc Delete data
// @route PUT - /h/delete-data/:id
// @access public
exports.deleteData = (req, res) => {
    const options = {
        hostname: 'reqres.in',
        path: '/api/users/' + req.params.id,
        method: 'DELETE'
    };

    const request = https.request(options, (response) => {
        console.log(response.statusCode);

        response.on('error', (e) => {
            res.send(e);
        });
    });

    request.on('error', (e) => console.error(e));
    request.on('finish', () => res.send('Sukses hapus data'));
    request.end();
};