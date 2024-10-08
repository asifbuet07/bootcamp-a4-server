const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const books = require("./data/books-data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(books);
});

app.listen(port, () => {
  console.log(`Successfully running Book Heaven server on ${port}`);
});
