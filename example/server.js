var express = require('express');
var app = express();
var parseRCT = require('../index.js').parseRCT

app.use('/views', express.static('views'))

app.get('/', function(req, res){
 	res.send(parseRCT('/views/element.jsx', {name: 'zoe'}));
});

app.listen(3000, () => {
  console.log('listening on port 3000');
})