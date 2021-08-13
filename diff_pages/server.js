const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.static('routingjs'))

app.get('*', function(req, res) {
    res.sendFile(_dirname + /routingjs/index.html);
});

app.listen(5500, () => {
    console.log('Listening on port 5500');
});