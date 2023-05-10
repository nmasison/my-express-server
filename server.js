const express = require("express");
const app = express();
const port = 3000;

// the / specifies the route
app.get('/',(request, response) => {
  // console.log(request)
  response.send('<h1>Hello World!</h1>');
})

//another example
app.get("/contact", function(req, res){
  res.send("<h1>Contact me at: nina@gmail.com</h1>");
})

//another example
app.get("/about", function(req, res){
  res.send("This is the about page.");
})

//another example
app.get("/hobbies", function(req, res){
  res.send("<h1><ul><li>Coffee</li><li>Coffee</li><li>Coffee</li></ul></h1>");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});