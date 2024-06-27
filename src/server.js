const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(routes);


app.listen(3344, () => console.log('Porta 3344 Aberta!'));
 

 