var user = require('../admin.json');
const express = require('express');
const router = express.Router();
const route_prefix = '/clock/';

router.post('/in', (req, res) => {
    console.log(route_prefix + " Post request for clock in");
    let response = {
        'Date': '3/30/2020',
        'time': '8:42 AM',
    }
    res.json(response)
});

router.post('/out', (req, res) => {
    console.log(route_prefix + " Post request for clock out");
    let success = {
        'Date': '3/30/2020',
        'time': '3:12 PM',
    }
    res.json(success)
});

router.get('/status', (req, res) => {
    console.log(route_prefix + " GET request for MY Status");
    
    let success = {
        'status': true
    }
    res.json(success)
});

router.get('/status/:id', (req, res) => {
    console.log(route_prefix + ` GET request for status of user with id ${req.params.id}`);
    
    let success = {
        'status': false
    }
    res.json(success)
});

router.get('/shifts', (req, res) => {
    console.log(route_prefix + " GET request for MY Shifts");
    let success = [
        {
            'row_id': 0,
            'user_id': 3,
            'shift_id': 0,
            'clock_in_time': '3/28/2020 1:12 AM',
            'clock_out_time': '3/28/2020 3:12 AM',
            'comments': 'Comment 0',
        },
        {
            'row_id': 1,
            'user_id': 3,
            'shift_id': 1,
            'clock_in_time': '3/29/2020 3:12 PM',
            'clock_out_time': '3/29/2020 5:12 PM',
            'comments': 'Comment 1',
        }
    ];
    res.json(success)
});

router.get('/shifts/:id', (req, res) => {
    console.log(route_prefix + ` GET request for shifts of user with id ${req.params.id}`);
    let success = [
        {
            'row_id': 0,
            'user_id': 4,
            'shift_id': 0,
            'clock_in_time': '2/22/2020 1:12 PM',
            'clock_out_time': '2/22/2020 6:12 PM',
            'comments': 'Comment 0',
        },
        {
            'row_id': 1,
            'user_id': 4,
            'shift_id': 1,
            'clock_in_time': '3/29/2020 3:12 PM',
            'clock_out_time': '3/29/2020 5:12 PM',
            'comments': 'Comment 1',
        }
    ];
    res.json(success)
});

router.post('/comment', (req, res) => {
    console.log(route_prefix + ` Post request for comment with comment: ${req.body.comment}`);
    let response = 'Comment was edited';
    res.json(response);
});

router.post('/comment/:id', (req, res) => {
    console.log(route_prefix + ` Post request for comment to user: ${req.params.id} with comment: ${req.body.comment}`);
    let response = 'Comment was edited';
    res.json(response);
});
module.exports = router;