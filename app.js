var PORT = process.env.PORT || 3000;
var express = require("express"),
	app = express(),
	bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/styles"));


//Routes

app.get("/", function(req, res){
	res.render("front");
});

app.get("/home", function(req,res){
	res.render("index");
});

app.get("/education", function(req,res){
	res.render("education");
});

app.get("/skills", function(req,res){
	res.render("skills");
});

app.get("/aboutme", function(req,res){
	res.render("aboutme");
});

app.get("/blogs", function(req,res){
	res.render("blogs");
});

app.get("/projects", function(req,res){
	res.render("projects");
});



app.listen(PORT, function() {
console.log('Server listening on port 3000  ');
});
