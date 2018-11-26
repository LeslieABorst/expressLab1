const express = require("express");
const app = express();
const port = 8888;
const cartItems = require('./cart-routes');

app.use(express.static("./public"));
app.use(express.json());
app.use('/', cartItems);



app.listen(port, () => console.log(`listening on port: ${port}`));