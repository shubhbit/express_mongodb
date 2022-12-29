const express = require("express");
const { router } = require("./router/routing");
const morgan = require("morgan");

const app = express();

const port = 3000;

app.use(morgan("combined"));

app.use("/students", router);

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
