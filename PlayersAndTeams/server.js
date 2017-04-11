const express = require('express');
const bp = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(bp.json());
app.use(express.static(path.resolve('client')));
app.use(express.static(path.resolve('bower_components')));


app.listen(port, () => console.log(`running on ${port}`))
