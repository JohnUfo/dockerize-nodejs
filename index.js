const express = require('express');
const basicAuth = require('basic-auth');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// / route
app.get('/', (req, res) => {
    res.send('Hello, Umidjon!');
});

// /secret route with Basic Auth
app.get('/secret', (req, res) => {
    const user = basicAuth(req);
    if (
        user &&
        user.name === process.env.USERNAME &&
        user.pass === process.env.PASSWORD
    ) {
        res.send(process.env.SECRET_MESSAGE);
    } else {
        res.set('WWW-Authenticate', 'Basic realm="example"');
        res.status(401).send('Authentication required.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
