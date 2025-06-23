import Book from "./models.js";

const postBook = async (req, res) => {
  try {
    const data = req.body;
    const newBook = await Book(data);
    await newBook.save();
    res.status(201).json({
      success: true,
      message: "Save book data successfully",
      book: newBook,
    });
  } catch (error) {
    console.error("Error creating book", error);
    res.status(500).json({
      success: false,
      message: `Failed to create details`,
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "Books details get successfully",
      books: books,
    });
  } catch (error) {
    console.error("Error on fetching books details", error);
    res.status(500).json({
      success: false,
      message: `Failed to fetch books details`,
    });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found!" });
    }
    res.status(200).json({
      success: true,
      message: "book details get successfully",
      book: book,
    });
  } catch (error) {
    console.error("Error on fetching book details", error);
    res.status(500).json({
      success: false,
      message: `Failed to fetch book details`,
    });
  }
};

// edit book data
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    console.log(data)
    const updateBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
    if (!updateBook) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found!" });
    }
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      book: updateBook,
    });
  } catch (error) {
    console.error("Error on updating a book", error);
    res.status(500).json({
      success: false,
      message: `Failed to update a book`,
    });
  }
};

const deleteABook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Book.findByIdAndDelete(id);

    if (!deleteBook) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found!" });
    }
    res.status(200).json({
      success: true,
      message: "Book delete successfully",
      book: deleteBook,
    });
  } catch (error) {
    console.error("Error on deleting a book", error);
    res.status(500).json({
      success: false,
      message: `Failed to deleting a book`,
    });
  }
};

export { postBook, getAllBooks, getSingleBook, updateBook, deleteABook };
