
var express = require ("express");
var bodyParser = require("body-parser")
var path = require ("path");


var app = express(); 
var PORT  = process.env.PORT || 8080;

//middleware
app.use(express.urlencoded({extended : true}))
app.use(express.json())


//Server start
app.listen(PORT,function(){
    console.log(PORT)
})

//body parse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//for css static
app.use(express.static(__dirname + "/app/public/assets/style"));

//for html and api
require(path.join(__dirname, './app/routing/apiRoutes'))(app)
require(path.join(__dirname, './app/routing/htmlRoutes'))(app)



// app.get("/",function(req,res){
//     res.sendFile(path.join(__dirname,"index.html"))
// });
// app.get("/survey",function(req,res){
//     res.sendFile(path.join(__dirname,"survey.html"))
// });

// // app.get("/survey",function(req,res){
// //     res.sendFile(path.join(__dirname,"survey.html"))
// // });

// app.get("/api/survey",function(req,res){
//     return res.json(friends)
// });