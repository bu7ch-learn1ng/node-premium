import express from "express"
import {Book} from "../models/book"
const bookRouter = express.Router()


bookRouter.get("/", (req, res) => {
  // res.json({msg: "all books"})
 let query = Book.find({})
 query.exec((err, books) => {
   if (err) res.send(err)
   res.json(books)
 })
})
bookRouter.post("/new", (req, res) => {
const newBook = new Book(req.body)
newBook.save((err, book) => {
  if (err) console.error(err) 
  res.json(book)
  })
})
bookRouter.route("/:id")
  .get((req, res) =>{
    Book.findById(req.params.id, (err, book) => {
      if(err) console.error(err)
      res.json(book)
    })
  })
  .put((req, res) => {
    Book.findById(req.params.id, (err, book) => {
      if(err) console.error(err)
      Object.assign(book, req.body).save((err, bookEdited)=>{
        if(err) console.error(err)
        res.json({msg:"book edited!", bookEdited})
      })
    })
  })
  .delete((req, res) => {
    Book.remove({_id:req.params.id}, (err, bookErased)=> {
      if(err) console.log(err)
      res.json({msg:"book successfully deleted!", bookErased})
    })
  })
export  { bookRouter}