const router = require('express').Router();
const https = require('https');
const h_controllers = require('../controllers/h_controllers');

router.get('/get-all-data', h_controllers.getAllData);
router.get('/get-user/:id', h_controllers.getUserById);
router.post('/post-data', h_controllers.postData);

module.exports = router;