const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use("view engine", "ejs");

app.get("/", function(req, res){
   
    var today = new Date();
    var currentDay = today.getDay();

    if(currentDay === 6 || currentDay === 0){
        res.sendFile(__dirname + "/weekend.html")
    }else {
        res.sendFile(__dirname + "/weekday.html")
    }
});

app.listen(3000, function(){
    console.log("server is running in 3000");
})