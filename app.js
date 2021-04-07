var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var index = require('./routes/index');
var venmo = require('./routes/venmo');

app.get('/', index.view);
app.get('/venmo', venmo.view);


app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});
  
  
