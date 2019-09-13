import mongoose from "mongoose";

let Schema = mongoose.Schema;

let BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number, required: true },
  pages: { type: Number, required: true, min: 1 },
},
{
  versionKey:false
}
);

const Book = mongoose.model('Book', BookSchema)
export {Book}