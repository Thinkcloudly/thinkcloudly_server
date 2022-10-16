const express = require("express");
const cors = require('cors');
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

const APP_PORT = process.env.PORT || 4000;

app.listen(APP_PORT, () =>
  console.log(`Application is running on port ${APP_PORT}`)
);
