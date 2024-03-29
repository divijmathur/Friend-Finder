var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, './app/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

var PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('server is running')
});


