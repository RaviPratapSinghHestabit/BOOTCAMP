const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const configLoader = require("../config");
const dbLoader = require("./db");
const logger = require("../utils/logger");
const routes = require("../routes");

const app = express();

configLoader();           
dbLoader();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
logger.info("✔ Middlewares loaded");

app.use("/api", routes);
logger.info("✔ Routes mounted");

module.exports = { app };
