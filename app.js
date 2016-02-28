var express = require('express');
var app = express();
var path = require("path");

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
	 res.send();
});

app.get('/dashboard', function (req, res) {
  res.sendFile(path.join(__dirname+'/src/views/dashboard.html'));
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
