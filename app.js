const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var item ="";

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
   
    var today = new Date();
    // var currentDay = today.getDay();
    // var day = "";
    var options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    var day = today.toLocaleDateString("en-US", options);


    res.render("list", {kindOfDay: day, newListItem: item});
});

app.post("/", function(req, res) {
    var item = req.body.newItem;
    res.redirect("/") 
})

app.listen(3000, function(){
    console.log("server is running in 3000");
});