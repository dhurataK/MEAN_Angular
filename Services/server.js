const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(express.static(path.resolve('clients')));
app.use(express.static(path.resolve('bower_components')));
app.get('/products', function(req, res) {
  var products =[
    {name:'Keyboard',price:'29.99$'},
    {name:'Mouse',price:'5.99$'},
    {name:'Book',price:'9.99$'}
  ];
  res.json(products);
})
app.listen(port, function() {
  console.log("Running on ",port);
})
