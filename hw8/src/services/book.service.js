import Book from "../db/book.model.js";

export const getBooks = () => Book.findAll();

export const getBookById = (id) => Book.findByPk(id);

export const addBook = (data) => Book.create(data);

export const updateBook = (id, data) =>
    Book.update(data, { where: { id } });

export const deleteBook = (id) =>
    Book.destroy({ where: { id } });

