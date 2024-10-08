const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const books = require("./data/books-data.json");
const privateBooks = require("./data/private-books-data.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the server of Book Heaven!");
});

app.get("/api/books", (req, res) => {
  res.send(books);
});

app.get("/api/private-books", (req, res) => {
  res.send(privateBooks);
});

app.get("/api/book/:id", (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const book = books.find((b) => b.bookId === bookId);
  const privateBook = privateBooks.find((b) => b.bookId === bookId);

  if (book) {
    res.send(book);
  } else if (privateBook) {
    res.send(privateBook);
  } else {
    res.status(404).send({ message: "Book not found" });
  }
});

app.listen(port, () => {
  console.log(`Successfully running Book Heaven server on ${port}`);
});
