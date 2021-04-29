var express = require("express");
var bodyParser = require('body-parser')

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
require('./routes/index')(app);
app.use(express.static('public'));

app.listen(3000, ()=> {
    console.log('server started at 3000');
});
