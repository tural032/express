const express = require('express');
const app = express();
const workers= [
  {id:"1",name:"Shaban",age:"52"},
  {id:"2",name:"Gunel",age:"20"}
]

app.get('/get', function (req, res) {
  res.send(workers);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});