import express from "express";
import {
  deleteABook,
  getAllBooks,
  getSingleBook,
  postBook,
  updateBook,
} from "./controller.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
const router = express.Router();

// post a book
router.route("/").get(getAllBooks).post(verifyAdmin, postBook);

router.route("/:id").get(getSingleBook).put( updateBook).delete(verifyAdmin, deleteABook);

export default router;
