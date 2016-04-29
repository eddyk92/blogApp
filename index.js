var express  = require('express');
var fs = require('fs');
var app      = express();
var db       = require('./server/db');

// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/public');
// });

app.use('/public', express.static(__dirname + '/public'));

app.all('*', function(req,res,next){
	fs.readFile('posts.json', function(err, data){
		res.locals.posts = JSON.parse(data);
		next();
	});
});

app.get('/', function(req, res){
	res.render('index.ejs');
});

app.set('view engine', 'ejs');

app.get('/post/:slug', function(req,res,next){
	res.locals.posts.forEach(function(post){
		if(req.params.slug === post.slug){
			res.render('post.ejs', {post:post});
		}
	})
});

// app.use(express.static('public'));

app.get('/api/posts', function(req,res){
	res.json(res.locals.posts);
});

app.listen(4000, function(){
	console.log("Listening on port 4000!");
});