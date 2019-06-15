var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.connect('3000');//, { 
// 	useNewUrlParser: true,
// 	iseCreateIndex: true
// }).then(()=>{
// 	console.log('Connected to DB!');
// }).catch(err =>{
// 	console.log('ERROR:',err.message);
// });


app.get('/', (req, res)=>{
	res.render('tdList.html');
});






const port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log("Server has started");
});
