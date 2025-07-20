import * as bookService from "../services/book.service.js";

export const getBookController = async (req, res) => {
  const result = await bookService.getBooks();
  res.json(result);
};

export const addBookController = async (req, res) => {
  const result = await bookService.addBook(req.body);
  res.status(201).json(result);
};

export const updateBookController = async (req, res) => {
  const id = req.params.id;
  const result = await bookService.updateBook(id, req.body);
  res.json({ updated: result[0] > 0 });
};

export const deleteBookController = async (req, res) => {
  const id = req.params.id;
  const result = await bookService.deleteBook(id);
  res.json({ deleted: result > 0 });
};

export const getBookByIdController = async (req, res) => {
  const id = req.params.id;
  const book = await bookService.getBookById(id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
};
