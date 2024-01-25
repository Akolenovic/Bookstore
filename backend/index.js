import {} from 'dotenv/config'
import express from "express"
//import { PORT, mongoDB_URL } from "./config.js"
import mongoose from 'mongoose'
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json())

// CORS allow default
app.use(cors());
// CORS option 2, custom origins
//app.use(
//    cors({
//        origin: 'https:/localhost:3000',
//        methods: ['GET', 'PUT', 'POST', 'DELETE'],
//        allowedHeaders: ['Content-Type'],
//}));

//app.listen(PORT , () => {
    //console.log(`App is listening to port: ${PORT}`)
//})

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN Fullstack')
});

app.use('/books', booksRoute);

mongoose.connect(process.env.mongoDB_URL).then(() => {
    console.log('Connected to mongo DB')
}).catch((error) => {
    console.log(error)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})