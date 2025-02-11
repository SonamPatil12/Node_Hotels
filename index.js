const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const routerPerson = require("./routers/PersonRouter");

const routerMenuItem = require("./routers/MenuRouter");


app.use('/', routerMenuItem);
app.use('/', routerPerson);




app.listen(4000, () => {
  console.log("Listening on 4000");
});
