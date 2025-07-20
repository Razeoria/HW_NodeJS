import { Router } from "express";
import {
    getBookController,
    addBookController,
    updateBookController,
    deleteBookController,
    getBookByIdController
} from "../controllers/books.controller.js";

const bookRouter = Router();

bookRouter.get("/", getBookController);
bookRouter.post("/", addBookController);
bookRouter.put("/:id", updateBookController);
bookRouter.delete("/:id", deleteBookController);
bookRouter.get("/:id", getBookByIdController);

export default bookRouter;
