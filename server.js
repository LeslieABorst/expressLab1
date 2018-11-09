const express = require("express");
const cartItems = require('./cart-routes');
const app = express();
const port = 8888;


app.use(express.json());
app.use('/cart-items', cartItems);


app.listen(port, () => console.log(`listening on port: ${port}`));