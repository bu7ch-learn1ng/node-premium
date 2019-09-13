import  express from "express";
import bodyParser from "body-parser"
import volleyball from "volleyball"
import path from "path"
import { bookRouter} from "./routes/books"
import mongoose from "mongoose"

mongoose.connect('mongodb://localhost/book_db');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`[MongoDB is connected!]`);
  
});
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(volleyball)
app.set("view engine", "pug")
app.set("views",path.join(__dirname, "./views"))

app.get('/', (req, res) => {
  res.render('home')
})

app.use("/books", bookRouter)
app.listen(5000, () =>{
  console.log(`[Server running....]`);
  
})