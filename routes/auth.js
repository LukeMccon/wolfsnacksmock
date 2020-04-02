var user = require('../admin.json');
const express = require("express");
const router = express.Router();
const route_prefix = '/auth/';

router.post('/login', (req, res) => {
    let success = {
        'access_token': 'mocktoken',
        'user_id': user['user_id'],
    }
    res.json(success)
});
router.post('/logout', (req, res) => {
    let success = {
        'message': 'User Logged out',
    }
    console.log(route_prefix + 'logout POST request token: ' + req.headers.authorization)
    res.json(success)
});
module.exports = router;
