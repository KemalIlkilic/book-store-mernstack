import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "title must be provided"] },
    author: { type: String, required: [true, "author name must be provided"] },
    publishYear: {
      type: Number,
      required: [true, "publish year must be provided"],
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Book", bookSchema);
