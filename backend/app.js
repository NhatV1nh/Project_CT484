require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json())
app.use(cors({ origin: "*" }));

app.use("/api/auth", require("./app/routes/auth.route"));

app.use("/api/books", require("./app/routes/book.route"));

app.use("/api/authors", require("./app/routes/author.route"));

app.use("/api/publishing", require("./app/routes/publishing.route"));

app.use("/api/details", require("./app/routes/detail.route"));

app.use("/api/images", require("./app/routes/image.router"));

module.exports = app;