const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(express.static("public"))

var items =["apple", "orange"];
var workItems = [];

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
   
 var day = date();

    res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res) {
    var item = req.body.newItem;

    if(req.body.list === "work"){
        workItems.push(item);
        res.redirect("/work")
    }else{
        items.push(item);
        res.redirect("/") 
    }
    
})

app.get("/work", function(req, res){
    res.render("list", {listTitle: "work List", newListItems: workItems});
});



// app.post("/work", function(req, res){
//     var item = req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// })



app.get("/about", function(req, res){
    res.render("about")
})

app.listen(3000, function(){
    console.log("server is running in 3000");
});



