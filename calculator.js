const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html") //use __dirname + "/index.html" if you are using another computer, cloud, server etc.
});

app.post("/", function(req, res){
  // console.log(req.body);
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send(`The sum is ${result}.`)
})

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});


// adding changes for sample git, not related to code syntax