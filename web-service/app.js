const express = require("express");
const morgan = require('morgan')
const cors = require("cors");
const app = express();
const port = 3100;

app.use(morgan("dev"));

app.use(
  cors({
    origin: `*`,
  })
);

app.use("/", require("./src/routes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
