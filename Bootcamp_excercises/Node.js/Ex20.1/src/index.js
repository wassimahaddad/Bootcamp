const express = require("express");
require("./db/mongoose");

const productsRouter = require("./routers/products");

const app = express();
const port = process.env.PORT || 3000;
app.use(productsRouter);
// -------------------------------------------
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
