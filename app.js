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
var focus = require('./routes/focus');
var classmate = require('./routes/classmate');
var mcdonald = require('./routes/mcdonald');
var about = require('./routes/about');
var doordash = require('./routes/doordash');

app.get('/', index.view);
app.get('/venmo', venmo.view);
app.get('/focus-co', focus.view);
app.get('/classmate', classmate.view);
app.get('/mcdonald', mcdonald.view);
app.get('/about', about.view);
app.get('/doordash', doordash.view);

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});
  
  
