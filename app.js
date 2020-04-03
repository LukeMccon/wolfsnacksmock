const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const clockRoutes = require('./routes/clock')
app.get('/', (req, res) => {
    res.send('Mock Backend Server for Wolfsnacks');
});
app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/clock', clockRoutes)
app.listen(8000, () => console.log('Mock server listening on port 8000!'));